"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8875],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){return function(t){var n=p(t.components);return r.createElement(e,a({},t,{components:n}))}},p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},48010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"root",title:"root"},i=void 0,c={unversionedId:"users/commands/root",id:"users/commands/root",title:"root",description:"These are the flags/commands under buck2 root and their --help output:",source:"@site/../docs/users/commands/root.generated.md",sourceDirName:"users/commands",slug:"/users/commands/root",permalink:"/docs/users/commands/root",draft:!1,tags:[],version:"current",frontMatter:{id:"root",title:"root"},sidebar:"manualSidebar",previous:{title:"query",permalink:"/docs/users/commands/query"},next:{title:"run",permalink:"/docs/users/commands/run"}},s={},l=[{value:"buck root",id:"buck-root",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"These are the flags/commands under ",(0,o.mdx)("inlineCode",{parentName:"p"},"buck2 root")," and their ",(0,o.mdx)("inlineCode",{parentName:"p"},"--help")," output:"),(0,o.mdx)("h2",{id:"buck-root"},"buck root"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},'buck2-release-root \nFind buck cell, project or package root\n\nUSAGE:\n    buck2-release root [OPTIONS]\n\nOPTIONS:\n        --client-metadata <CLIENT_METADATA>\n            Metadata key-value pairs to inject into Buck2\'s logging. Client metadata must be of the\n            form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n            datasets\n\n        --dir <PATH>\n            determine the root for a specific directory (if not provided, finds the root for the\n            current directory)\n\n    -h, --help\n            Print help information\n\n    -k, --kind <KIND>\n            which root to print\n            \n            [default: cell]\n            [possible values: package, cell, project, daemon]\n\n        --oncall <ONCALL>\n            The oncall executing this command\n\n    -v, --verbose <VERBOSITY>\n            How verbose buck should be while logging.\n            \n            Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3\n            = more info about everything; 4 = more info about everything + stderr;\n            \n            It can be combined with specific log items (stderr, full_failed_command, commands,\n            actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n            "-v=1,stderr"\n            \n            [default: 1]\n\n')))}p.isMDXComponent=!0}}]);