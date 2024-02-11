"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[151],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>s,mdx:()=>b,useMDXComponents:()=>u,withMDXComponents:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){return function(t){var r=u(t.components);return n.createElement(e,o({},t,{components:r}))}},u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),s=a,f=m["".concat(c,".").concat(s)]||m[s]||d[s]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},87143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"StackFrame"},c="StackFrame type",i={unversionedId:"api/bxl/StackFrame",id:"api/bxl/StackFrame",title:"StackFrame type",description:"StackFrame.func\\_name",source:"@site/../docs/api/bxl/StackFrame.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/StackFrame",permalink:"/docs/api/bxl/StackFrame",draft:!1,tags:[],version:"current",frontMatter:{id:"StackFrame"},sidebar:"manualSidebar",previous:{title:"ActionSubError type",permalink:"/docs/api/bxl/ActionSubError"},next:{title:"action type",permalink:"/docs/api/bxl/action"}},l={},p=[{value:"StackFrame.func_name",id:"stackframefunc_name",level:2},{value:"StackFrame.module_path",id:"stackframemodule_path",level:2}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"stackframe-type"},(0,a.mdx)("inlineCode",{parentName:"h1"},"StackFrame")," type"),(0,a.mdx)("h2",{id:"stackframefunc_name"},"StackFrame.func","_","name"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"StackFrame.func_name: str\n")),(0,a.mdx)("p",null,"Returns the name of the entry on the call-stack."),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"stackframemodule_path"},"StackFrame.module","_","path"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"StackFrame.module_path: None | str\n")),(0,a.mdx)("p",null,"Returns a path of the module from which the entry was called, or ","[",(0,a.mdx)("inlineCode",{parentName:"p"},"None"),"]"," for native Rust functions."))}u.isMDXComponent=!0}}]);