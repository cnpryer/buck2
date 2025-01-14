/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::cell::OnceCell;

use allocative::Allocative;
use starlark::any::ProvidesStaticType;
use starlark::environment::FrozenModule;
use starlark::environment::Module;
use starlark::values::starlark_value;
use starlark::values::Freeze;
use starlark::values::Freezer;
use starlark::values::NoSerialize;
use starlark::values::OwnedFrozenValueTyped;
use starlark::values::StarlarkValue;
use starlark::values::Trace;
use starlark::values::ValueLike;

use crate::interpreter::package_file_extra::FrozenPackageFileExtra;
use crate::interpreter::package_file_extra::PackageFileExtra;

#[derive(buck2_error::Error, Debug)]
enum ExtraValueError {
    #[error("Extra value is missing (internal error)")]
    Missing,
    #[error("Extra value had wrong type (internal error)")]
    WrongType,
}

/// `Module.extra_value` when evaluating build, bzl, package, and bxl files.
#[derive(
    Default,
    Debug,
    NoSerialize,
    derive_more::Display,
    ProvidesStaticType,
    Allocative,
    Trace
)]
#[display(fmt = "{:?}", "self")]
pub(crate) struct ExtraValue<'v> {
    /// Set when evaluating `PACKAGE` files.
    pub(crate) package_extra: OnceCell<PackageFileExtra<'v>>,
}

#[derive(
    Debug,
    NoSerialize,
    derive_more::Display,
    ProvidesStaticType,
    Allocative
)]
#[display(fmt = "{:?}", "self")]
pub(crate) struct FrozenExtraValue {
    pub(crate) package_extra: Option<FrozenPackageFileExtra>,
}

// TODO(nga): this does not need to be fully starlark_value,
// but we don't have lighter machinery for that.
#[starlark_value(type = "ExtraValue")]
impl<'v> StarlarkValue<'v> for ExtraValue<'v> {}

#[starlark_value(type = "ExtraValue")]
impl<'v> StarlarkValue<'v> for FrozenExtraValue {
    type Canonical = FrozenExtraValue;
}

impl<'v> Freeze for ExtraValue<'v> {
    type Frozen = FrozenExtraValue;

    fn freeze(self, freezer: &Freezer) -> anyhow::Result<Self::Frozen> {
        Ok(FrozenExtraValue {
            package_extra: self
                .package_extra
                .into_inner()
                .map(|p| p.freeze(freezer))
                .transpose()?,
        })
    }
}

impl<'v> ExtraValue<'v> {
    pub(crate) fn get(module: &'v Module) -> anyhow::Result<&'v ExtraValue<'v>> {
        Ok(module
            .extra_value()
            .ok_or(ExtraValueError::Missing)?
            .downcast_ref()
            .ok_or(ExtraValueError::WrongType)?)
    }
}

impl FrozenExtraValue {
    pub(crate) fn get(
        module: &FrozenModule,
    ) -> anyhow::Result<OwnedFrozenValueTyped<FrozenExtraValue>> {
        Ok(module
            .owned_extra_value()
            .ok_or(ExtraValueError::Missing)?
            .downcast()
            .map_err(|_| ExtraValueError::WrongType)?)
    }
}
