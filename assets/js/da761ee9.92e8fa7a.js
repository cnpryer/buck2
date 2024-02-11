"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4101],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){return function(t){var n=m(t.components);return r.createElement(e,o({},t,{components:n}))}},m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(n),p=a,c=d["".concat(i,".").concat(p)]||d[p]||x[p]||o;return n?r.createElement(c,s(s({ref:t},u),{},{components:n})):r.createElement(c,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},20722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"test_execution",title:"Test Execution"},i=void 0,s={unversionedId:"rule_authors/test_execution",id:"rule_authors/test_execution",title:"Test Execution",description:"Test execution in Buck2 is a collaboration with a separate test runner process.",source:"@site/../docs/rule_authors/test_execution.md",sourceDirName:"rule_authors",slug:"/rule_authors/test_execution",permalink:"/docs/rule_authors/test_execution",draft:!1,tags:[],version:"current",frontMatter:{id:"test_execution",title:"Test Execution"},sidebar:"manualSidebar",previous:{title:"Anonymous Targets",permalink:"/docs/rule_authors/anon_targets"},next:{title:"Optimization",permalink:"/docs/rule_authors/optimization"}},l={},u=[{value:"Anatomy of a test run",id:"anatomy-of-a-test-run",level:2},{value:"Information available on <code>ExternalRunnerTestInfo</code>",id:"information-available-on-externalrunnertestinfo",level:2},{value:"Fields exposed to the test runner",id:"fields-exposed-to-the-test-runner",level:3},{value:"Fields pertinent for Remote Execution",id:"fields-pertinent-for-remote-execution",level:3},{value:"Verbatim arguments and handles",id:"verbatim-arguments-and-handles",level:2},{value:"Execution Configurations",id:"execution-configurations",level:2},{value:"Working Directory",id:"working-directory",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",t)},m=d("OssOnly"),p=d("FbInternalOnly"),c={toc:u};function x(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Test execution in Buck2 is a collaboration with a separate test runner process."),(0,a.mdx)(m,{mdxType:"OssOnly"},(0,a.mdx)("p",null,"In its open-source build, Buck2 ships with a built-in simplistic test runner."),(0,a.mdx)("p",null,"This test runner receives the commands defined by ",(0,a.mdx)("inlineCode",{parentName:"p"},"ExternalRunnerTestInfo")," and\nsimply executes them. Exit code zero means the test passed, and one means it\nfailed."),(0,a.mdx)("p",null,"Users can of course develop their own test runners. Look at\n",(0,a.mdx)("inlineCode",{parentName:"p"},"fbcode/buck2/app/buck2_test_runner")," as a sample. For comparison, here's how\nit's used at Meta:")),(0,a.mdx)("p",null,"At Meta, this test runner is ",(0,a.mdx)(m,{mdxType:"OssOnly"},"Tpx")),(0,a.mdx)(p,{mdxType:"FbInternalOnly"},"[Tpx](https://www.internalfb.com/intern/wiki/TAE/tpx/)"),".",(0,a.mdx)("p",null,"Tpx has a large number of responsibilities when used with Buck2, which can be\ngrouped as follows:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Translation"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Understands the output formats of various supported test frameworks. This is\nused to identify test cases and collect test results."),(0,a.mdx)("li",{parentName:"ul"},"Understands, to an extent, the input formats. For example, given a test\ncase, Tpx can identify what command needs to run to execute just that test."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Orchestration"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Interacts with Test Infra to discover what tests should run, under a number\nof configurations."),(0,a.mdx)("li",{parentName:"ul"},"Separates listing of tests (identifying what tests exists in a test target)\nand execution (running specific tests within that target)."),(0,a.mdx)("li",{parentName:"ul"},"Coordinates the execution of tests. For example, it may request retries, or\nchoose to bundle multiple tests in a single execution (or not)."),(0,a.mdx)("li",{parentName:"ul"},"Reports test results to Test Infra as well.")))),(0,a.mdx)("p",null,"In Buck2, rules interact with the test runner via a provider called\n",(0,a.mdx)("inlineCode",{parentName:"p"},"ExternalRunnerTestInfo"),"."),(0,a.mdx)("h2",{id:"anatomy-of-a-test-run"},"Anatomy of a test run"),(0,a.mdx)("p",null,"When a user runs ",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 test $targets"),":"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Buck2 identifies all matching targets that have an ",(0,a.mdx)("inlineCode",{parentName:"li"},"ExternalRunnerTestInfo"),"."),(0,a.mdx)("li",{parentName:"ul"},"Buck2 builds all the artifacts referenced by those targets (this will likely\nchange eventually to build them only if they are used)."),(0,a.mdx)("li",{parentName:"ul"},"Buck2 then notifies the test runner that those tests exist. Currently, the\ntest runner receives a subset of ",(0,a.mdx)("inlineCode",{parentName:"li"},"ExternalRunnerTestInfo"),"."),(0,a.mdx)("li",{parentName:"ul"},"The test runner can request command execution from Buck2 to list and execute\ntests."),(0,a.mdx)("li",{parentName:"ul"},"When it receives command results from Buck2, the test runner may fire off\nevents that the end-user will see (such as test results), upload logs\nexternally, request further executions, and so on.")),(0,a.mdx)("admonition",{type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"If more than one target is being built, test building and execution will proceed concurrently.")),(0,a.mdx)("h2",{id:"information-available-on-externalrunnertestinfo"},"Information available on ",(0,a.mdx)("inlineCode",{parentName:"h2"},"ExternalRunnerTestInfo")),(0,a.mdx)("p",null,"As noted, rules communicate their testing capabilities via\n",(0,a.mdx)("inlineCode",{parentName:"p"},"ExternalRunnerTestInfo"),". There are a number of fields available on\n",(0,a.mdx)("inlineCode",{parentName:"p"},"ExternalRunnerTestInfo")," to control how a given target is tested, as detailed in\nthe following sub-sections."),(0,a.mdx)("h3",{id:"fields-exposed-to-the-test-runner"},"Fields exposed to the test runner"),(0,a.mdx)("p",null,"The following list shows what is available in ",(0,a.mdx)("inlineCode",{parentName:"p"},"ExternalRunnerTestInfo"),", with\nwhich the test runner can interact:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"type")," - a string key that defines the type of test this is. ",(0,a.mdx)(p,{mdxType:"FbInternalOnly"},"\nTpx uses this internally to choose a translator. Examples include ",(0,a.mdx)("inlineCode",{parentName:"li"},"gtest"),",\n",(0,a.mdx)("inlineCode",{parentName:"li"},"apple_test"),", ",(0,a.mdx)("inlineCode",{parentName:"li"},"custom"),". Note that Tpx also allows labels to influence the\norchestrator selection. ")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"command")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"env")," - respectively, a list and a key-value mapping of\narguments. ",(0,a.mdx)(p,{mdxType:"FbInternalOnly"},"These are the inputs to translation in\nTpx.")," They are not always visible to the test runner (for more\ndetails, see\n",(0,a.mdx)("a",{parentName:"li",href:"#verbatim-arguments-and-handles"},"Verbatim arguments and handles"),", below)."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"labels")," - a set of string labels to pass to the test runner. ",(0,a.mdx)(p,{mdxType:"FbInternalOnly"},"\nThey have no meaning to Buck2, but some labels have impact on translation in\nTpx. ")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"contacts")," - a list of contacts for the tests; usually oncalls."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"executor_overrides")," - a key-value mapping of executor configurations that the\ntest runner can use when requesting execution from Buck2."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"local_resources")," - a key-value mapping from resource type to optional\n",(0,a.mdx)("inlineCode",{parentName:"li"},"LocalResourceInfo")," provider. Provider is used for initialization of that\nresource type. If the value is ",(0,a.mdx)("inlineCode",{parentName:"li"},"None")," resource type is ignored even though\ntest runner required it. For context see\n",(0,a.mdx)("a",{parentName:"li",href:"/docs/rule_authors/local_resources"},"Local Resources For Tests Execution"),".")),(0,a.mdx)("h3",{id:"fields-pertinent-for-remote-execution"},"Fields pertinent for Remote Execution"),(0,a.mdx)("p",null,"For compatibility with Remote Execution (RE), there are two fields that rules\nshould set in their ",(0,a.mdx)("inlineCode",{parentName:"p"},"ExternalRunnerTestInfo")," if they should be run on RE:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"use_project_relative_paths")," - if ",(0,a.mdx)("inlineCode",{parentName:"li"},"true")," (the default is",(0,a.mdx)(p,{mdxType:"FbInternalOnly"},"`false`")," ",(0,a.mdx)(m,{mdxType:"OssOnly"},"`true`"),"), Buck2 will produce relative paths. If not, it'll produce absolute paths."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"run_from_project_root")," - if ",(0,a.mdx)("inlineCode",{parentName:"li"},"true")," (the default is",(0,a.mdx)(p,{mdxType:"FbInternalOnly"},"`false`")," ",(0,a.mdx)(m,{mdxType:"OssOnly"},"`true`"),"), tests will run from the project root (their `cwd` will be the project root, which is the same as all build commands). If `false`, it'll be the cell root.")),(0,a.mdx)("p",null,"Note that passing ",(0,a.mdx)("inlineCode",{parentName:"p"},"--unstable-allow-all-tests-on-re")," to ",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 test")," will\noverride those fields and set them to ",(0,a.mdx)("inlineCode",{parentName:"p"},"true"),", since they are a pre-requisite to\nrun on RE. In contrast, passing ",(0,a.mdx)("inlineCode",{parentName:"p"},"--unstable-allow-compatible-tests-on-re")," will\nonly allow tests that already set both those fields to ",(0,a.mdx)("inlineCode",{parentName:"p"},"true")," to execute on RE."),(0,a.mdx)("p",null,"Also note that when ",(0,a.mdx)("inlineCode",{parentName:"p"},"executor_overrides")," are set, if an executor override is\nused and results in execution on RE, it'll happen on RE unconditionally.\nTherefore, it's a good idea to set those fields if RE-only executor overrides\nare provided."),(0,a.mdx)("h2",{id:"verbatim-arguments-and-handles"},"Verbatim arguments and handles"),(0,a.mdx)("p",null,"As noted above, the test runner only interacts with a subset of arguments\nprovided by rules in ",(0,a.mdx)("inlineCode",{parentName:"p"},"ExternalRunnerTestInfo"),". The reason for this is that the\ntest runner doesn't get to access, for example, artifacts, that Buck2 knows\nabout."),(0,a.mdx)("p",null,"Consider the following example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'binary = ctx.attrs.dep[RunInfo]\ntest_info = ExternalRunnerTestInfo(command = [binary, "run-tests"], ...)\n')),(0,a.mdx)("p",null,"When Buck2 actually runs this command, ",(0,a.mdx)("inlineCode",{parentName:"p"},"binary")," is expanded to a path (and\npossibly to more args). Buck2 would also account for any hidden arguments and\nmake those available where the command is executed. It is important for Buck2 to\nretain this capability when running with the test runner."),(0,a.mdx)("p",null,"To that end, all non-trivial arguments present in ",(0,a.mdx)("inlineCode",{parentName:"p"},"command")," (and in the values\nof ",(0,a.mdx)("inlineCode",{parentName:"p"},"env"),"), such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"cmd_args")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"RunInfo"),", are exposed to the test runner as\nopaque handles, and simple string arguments are passed as-is to the test runner."),(0,a.mdx)("p",null,"This means that the test runner would see the command described above as:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'[ArgHandle(index = 0), Verbatim("foobar")]\n')),(0,a.mdx)("p",null,"When requesting execution from Buck2, the test runner can use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"ArgHandle"),"\nand Buck2 will swap it back for the underlying value that was set on the\nprovider."),(0,a.mdx)("p",null,"This allows the test runner to introspect and modify parts of the command lines\nit receives, as long as it doesn't need to access the actual text value of\nnon-verbatim arguments. Usually, this works out to be sufficient (or can be made\nsufficient with a bit of refactoring in the test runner)."),(0,a.mdx)("h2",{id:"execution-configurations"},"Execution Configurations"),(0,a.mdx)("p",null,"By default, tests execute using the execution configuration of the associated\ntarget. This is the execution configuration that would be used for run actions\n(",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.actions.run"),") declared in the same target. This is a default that actually\nmakes little sense but works out as long as cross-compiling is not the norm."),(0,a.mdx)(p,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"That said, it's easy to see where this breaks down."),(0,a.mdx)("p",null,"For example:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"For iOS tests, the execution platform for builds needs to be XCode (local or\nRE Mac)."),(0,a.mdx)("li",{parentName:"ul"},"For test listing, XCode is not needed (it's preferable to do it on RE Linux\nwhere capacity is cheaper)."),(0,a.mdx)("li",{parentName:"ul"},"To run the tests, a simulator is required."))),(0,a.mdx)("p",null,"To support this, ",(0,a.mdx)("inlineCode",{parentName:"p"},"ExternalRunnerTestInfo")," allows specifying override platforms,\nwhich are given a name. The test runner can request execution on them by passing\ntheir name when it sends execution requests to Buck2, as shown in the following\ncode:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'ExternalRunnerTestInfo(\n  executor_overrides = {\n      "ios-simulator": CommandExecutorConfig(\n          local_enabled = False,\n          remote_enabled = True,\n          remote_execution_properties = {\n              "platform": "ios-simulator-pure-re",\n              "subplatform": "iPhone 8.iOS 15.0",\n              "xcode-version": "xcodestable",\n          },\n          remote_execution_use_case = "tpx-default",\n      ),\n      "static-listing": CommandExecutorConfig(local_enabled = True, remote_enabled = False),\n  },\n  ...\n)\n')),(0,a.mdx)("p",null,"The default execution platform can also be overridden:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'ExternalRunnerTestInfo(\n  default_executor = CommandExecutorConfig(\n    local_enabled = False,\n    remote_enabled = True,\n    remote_execution_properties = {\n        "platform": "ios-simulator-pure-re",\n        "subplatform": "iPhone 8.iOS 15.0",\n        "xcode-version": "xcodestable",\n    },\n    remote_execution_use_case = "tpx-default",\n  ),\n  ...\n)\n')),(0,a.mdx)("h2",{id:"working-directory"},"Working Directory"),(0,a.mdx)(m,{mdxType:"OssOnly"},"Tests can be run from the cell root by setting `run_from_project_root = False`."),(0,a.mdx)(p,{mdxType:"FbInternalOnly"},"As noted above, tests run from the cell root unless `run_from_project_root` is set."),(0,a.mdx)("p",null,"To produce paths relative to the cell root for use by tests, use\n",(0,a.mdx)("inlineCode",{parentName:"p"},"relative_to(ctx.label.cell_root)")," on ",(0,a.mdx)("inlineCode",{parentName:"p"},"cmd_args"),"."))}x.isMDXComponent=!0}}]);