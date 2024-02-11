"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1920],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>h,mdx:()=>b,useMDXComponents:()=>c,withMDXComponents:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),d=function(e){return function(t){var n=c(t.components);return r.createElement(e,i({},t,{components:n}))}},c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,p=d["".concat(a,".").concat(h)]||d[h]||f[h]||i;return n?r.createElement(p,s(s({ref:t},u),{},{components:n})):r.createElement(p,s({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={id:"build_report",title:"Build Report"},a=void 0,s={unversionedId:"users/build_observability/build_report",id:"users/build_observability/build_report",title:"Build Report",description:"The build report is a JSON file that you can ask buck to output which contains",source:"@site/../docs/users/build_observability/build_report.md",sourceDirName:"users/build_observability",slug:"/users/build_observability/build_report",permalink:"/docs/users/build_observability/build_report",draft:!1,tags:[],version:"current",frontMatter:{id:"build_report",title:"Build Report"},sidebar:"manualSidebar",previous:{title:"Logging",permalink:"/docs/users/build_observability/logging"},next:{title:"Remote Execution",permalink:"/docs/users/remote_execution"}},l={},u=[{value:"Schema",id:"schema",level:2},{value:"On Compatibility",id:"on-compatibility",level:3},{value:"Limitations",id:"limitations",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The build report is a JSON file that you can ask buck to output which contains\nstructured information about the result of your build. It is particularly\nvaluable for its reporting of ",(0,o.mdx)("em",{parentName:"p"},"unsuccessful")," outcomes in addition to\n",(0,o.mdx)("em",{parentName:"p"},"successful")," ones; usually, most use cases that only need to care about\nsuccessful outcomes are well served by direct usage of the CLI."),(0,o.mdx)("p",null,"To request a build report, pass ",(0,o.mdx)("inlineCode",{parentName:"p"},"--build-report <path>")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"buck build")," on the\nCLI."),(0,o.mdx)("p",null,"At a high level, the build report outputs information for each of the targets\nthat you requested to have built on the CLI. As a result, it may report\ninformation for more than one configuration or subtarget of a target. For\nexample, this can happen if you passed ",(0,o.mdx)("inlineCode",{parentName:"p"},"--target-platforms")," or built ",(0,o.mdx)("inlineCode",{parentName:"p"},":target"),"\nand ",(0,o.mdx)("inlineCode",{parentName:"p"},":target[sub]"),"."),(0,o.mdx)("h2",{id:"schema"},"Schema"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'BuildReport {\n    # A unique ID identifying this buck invocation. Currently a UUID, however\n    # that may change in the future.\n    trace_id: str,\n\n    # True if all requested targets built successfully\n    success: bool,\n\n    # The absolute path to the project root\n    project_root: Path,\n\n    # The results of the build, categorized by unconfigured target\n    results: dict[TargetLabel, BuildReportEntry],\n\n    # A cache for error message lookup. This is meant for deduplicating strings\n    # that might otherwise appear many times in the build report and cause an\n    # unnecessary size increase. They keys are used in other fields in the build\n    # report in reference to these strings.\n    strings: dict[str, str],\n\n    # BUCK1 BACKCOMPAT ONLY!\n    #\n    # Currently always empty. Will be filled in if a flag is passed in the future.\n    #\n    # A map from targets that failed to build to error messages describing the\n    # failure.\n    failures: dict[TargetLabel, str],\n}\n\nBuildReportEntry {\n    # The results of building the target in the given configurations\n    configured: dict[Configuration, ConfiguredBuildReportEntry],\n\n    # Errors encountered while building this target.\n    #\n    # Note that this does not include the errors that are found within the\n    # `ConfiguredBuildReportEntry`s. Instead, it includes additional errors\n    # which could not be associated with a specific configuration of the\n    # target, typically because they occurred before the target could be\n    # configured.\n    errors: list[Error],\n\n    # BUCK1 BACKCOMPAT ONLY!\n    #\n    # The two fields below are included for buck1 backwards compatibility only.\n    # They are both computed by aggregating across all the configured targets in\n    # the way you might expect.\n    success: "FAIL" | "SUCCESS,\n    outputs: dict[str, list[Path]],\n}\n\nConfiguredBuildReportEntry {\n    # Did this target build successfully or not?\n    success: "FAIL" | "SUCCESS,\n\n    # A map of subtargets that were built to a list of the successfully built\n    # outputs for that subtarget.\n    #\n    # The keys are generated by joining the subtargets with a `|`. For example,\n    # if you request to have `:target` and `:target[foo][bar]` built on the CLI,\n    # this list will contain one entry for `""` and one for `"foo|bar"`.\n    outputs: dict[str, list[Path]],\n\n    # The number of targets in the configured dependency graph of this target.\n    #\n    # This is only included if `-c buck2.log_configured_graph_size=true` is set.\n    # Otherwise, it is left as None.\n    configured_graph_size: Optional[uint],\n}\n\nError {\n    # The stringified hash of the same stringified error message that is shown to the user on the\n    # console. The hash is stored as the key in the `strings` cache of the `BuildReport`\n    message_content: str,\n\n    # Structured action error. Present only if the error was actually an action error\n    action_error: Optional[ActionError],\n\n    # An index that can be used to detect duplicate errors. Two errors with the\n    # same cause index have the same cause. Note that that does not mean that\n    # they have the same error message.\n    cause_index: uint,\n}\n\nActionError {\n    # The action key\n    key: ActionKey,\n\n    # The action name\n    name: ActionName,\n\n    # Digest of the action\n    digest: str,\n\n    # Stringified hash of the stderr of the action\n    stderr: str,\n\n    # Stringified hash of the stdout of the action\n    stdout: str,\n\n    # Stringified hash of the same stringified error message that is provided by the action\n    error: str,\n\n    # Optional list of error categorizations provided by an error handler which is invoked\n    # in the event of a failed action, or an error message if the error handler failed.\n    error_diagnostics: Optional[ActionErrorDiagnostics],\n}\n\nActionKey {\n    # The configured target, anon target, or bxl function which owns this action\n    owner: str,\n}\n\nActionName {\n    # The category of the action\n    category: str,\n\n    # The optional identifier of the action\n    identifier: Optional[str],\n}\n\nenum ActionErrorDiagnostics {\n    # The list of sub errors if the error handler succeeded\n    sub_errors: list[ActionSubError],\n\n    # The stringified hash of the error message if the error handler failed\n    handler_invocation_error: String,\n}\n\nActionSubError {\n    # Name of the error category. The category should be finer grain error categorizations\n    # provided by the rule authors, and tend to be language specific. These should not be\n    # any kind of shared concepts among all errors for all languages/rules. For example,\n    # timeouts and infra errors should not go here - buck2 tries to categorize these types\n    # of errors automatically. An example of a finer grain error category may be the error\n    # code for rustc outputs.\n    category: str,\n\n    # The stringified hash of the extra message provided for the specific sub-error category.\n    message_content: str,\n\n    # List of error locations, if any\n    locations: Optional[list[ActionErrorLocation]],\n}\n\nActionErrorLocation {\n    # File path where the error appeared, preferrably either project-relative or absolute.\n    file: str,\n\n    # Optional line number\n    line: Optional[u64]\n}\n')),(0,o.mdx)("h3",{id:"on-compatibility"},"On Compatibility"),(0,o.mdx)("p",null,"The format of the build report is generally stable. However, note that new\nfields may be added at any time, and you should ensure this does not cause your\nparsing to fail."),(0,o.mdx)("p",null,"A number of fields above are marked as being for buck1 backwards compatibility\nonly. These fields all have superior alternatives available in the build report\nalready. We would strongly prefer that new code neither use nor parse them, as\nthis increases the likelyhood that they can be removed one day."),(0,o.mdx)("p",null,"The build report additionally outputs a few fields that are intentionally not\ndocumented here. Those fields are even less useful than ones documented as being\nfor backwards compatibility only, and even closer to removal. ",(0,o.mdx)("strong",{parentName:"p"},"Please")," avoid\nusing or parsing these if at all possible."),(0,o.mdx)("h3",{id:"limitations"},"Limitations"),(0,o.mdx)("p",null,"The build report currently has at least the following limitations:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"It includes only one action error per failed target. This is the expected\nbehavior when ",(0,o.mdx)("inlineCode",{parentName:"li"},"--keep-going")," is not passed, but when ",(0,o.mdx)("inlineCode",{parentName:"li"},"--keep-going")," is\npassed, this is a bug."),(0,o.mdx)("li",{parentName:"ol"},"It is currently not generated when a non-existant package is specified on\nthe command line. This is also a bug."),(0,o.mdx)("li",{parentName:"ol"},"It cannot be requested for any buck2 command other than ",(0,o.mdx)("inlineCode",{parentName:"li"},"build")),(0,o.mdx)("li",{parentName:"ol"},"Errors do not contain any additional metadata outside of the error message.\nThis will be made available as such metadata is available in buck2."),(0,o.mdx)("li",{parentName:"ol"},'The "failures" field is always empty. This will be changed under a\nbackcompat opt-in flag in the future.')),(0,o.mdx)("p",null,"Finally, it's worth raising that the concept of error deduplication has some\nfundamental limitations; if two targets both refer to the same non-existant\ndependency, do those errors have the same cause (the dependency doesn't exist)\nor different causes (each target is individually broken)? As a result, the exact\ndetails of when two errors are considered to have the same cause are not\ngenerally stable, and may not always be what you expect."))}c.isMDXComponent=!0}}]);