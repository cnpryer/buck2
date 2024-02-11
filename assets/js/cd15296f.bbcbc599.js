"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6862],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){return function(t){var r=c(t.components);return n.createElement(e,o({},t,{components:r}))}},c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,g=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(g,u(u({ref:t},l),{},{components:r})):n.createElement(g,u({ref:t},l))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[g]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45960:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"target_universe"},i="target_universe type",u={unversionedId:"api/bxl/target_universe",id:"api/bxl/target_universe",title:"target_universe type",description:"Target universe in BXL. Used for looking up valid configured targets to use in cquery. This is not needed for uquery.",source:"@site/../docs/api/bxl/target_universe.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/target_universe",permalink:"/docs/api/bxl/target_universe",draft:!1,tags:[],version:"current",frontMatter:{id:"target_universe"},sidebar:"manualSidebar",previous:{title:"target_node type",permalink:"/docs/api/bxl/target_node"},next:{title:"unconfigured_target_node type",permalink:"/docs/api/bxl/unconfigured_target_node"}},s={},l=[{value:"target_universe.lookup",id:"target_universelookup",level:2},{value:"target_universe.target_set",id:"target_universetarget_set",level:2}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"target_universe-type"},(0,a.mdx)("inlineCode",{parentName:"h1"},"target_universe")," type"),(0,a.mdx)("p",null,"Target universe in BXL. Used for looking up valid configured targets to use in cquery. This is not needed for uquery."),(0,a.mdx)("h2",{id:"target_universelookup"},"target","_","universe.lookup"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def target_universe.lookup(\n    targets: str | target_label | target_set | unconfigured_target_node | list[str | target_label | unconfigured_target_node]\n) -> target_set\n")),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"target_universetarget_set"},"target","_","universe.target","_","set"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def target_universe.target_set() -> target_set\n")))}c.isMDXComponent=!0}}]);