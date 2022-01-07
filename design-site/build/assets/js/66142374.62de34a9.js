"use strict";(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[1166],{50056:function(e,t,n){n.d(t,{R:function(){return s}});var o=n(44547),s=function(e,t){return void 0===t&&(t=null),function(n){return(0,o.U2)(n.theme,e,t)}}},51011:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var o=n(87462),s=n(63366),r=(n(67294),n(3905)),l=n(55182),a=["components"],c={},i="CSS Class Names and Usage",u={unversionedId:"CSS/cssclasses",id:"CSS/cssclasses",isDocsHomePage:!1,title:"CSS Class Names and Usage",description:"Set a Component's class Name",source:"@site/docs/CSS/cssclasses.mdx",sourceDirName:"CSS",slug:"/CSS/cssclasses",permalink:"/docs/CSS/cssclasses",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/CSS/cssclasses.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CSS & Style Guide",permalink:"/docs/CSS/css"},next:{title:"Pipeline Connect",permalink:"/docs/Demos/connect"}},d=[{value:"Set a Component&#39;s class Name",id:"set-a-components-class-name",children:[],level:2},{value:"Stylesheet Examples",id:"stylesheet-examples",children:[{value:"Select style on hover",id:"select-style-on-hover",children:[],level:3},{value:"button element style with class SolidButton and exclude Algo Buttons",id:"button-element-style-with-class-solidbutton-and-exclude-algo-buttons",children:[],level:3}],level:2},{value:"className Reference",id:"classname-reference",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,s.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"css-class-names-and-usage"},"CSS Class Names and Usage"),(0,r.kt)("h2",{id:"set-a-components-class-name"},"Set a Component's class Name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button className="myNewButton">Click Me!</Button>\n')),(0,r.kt)("h2",{id:"stylesheet-examples"},"Stylesheet Examples"),(0,r.kt)("p",null,"Due to the nested complex nature of many React components, we recommend using CSS selector ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," and child combinator ",(0,r.kt)("inlineCode",{parentName:"p"},">"),"."),(0,r.kt)("h3",{id:"select-style-on-hover"},"Select style on hover"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"div[class*=pipeline-select] > div:hover{\n  background-color: rgba(0, 255, 21, 0.514)!important;\n  border-color: #ff0800!important;\n}\n")),(0,r.kt)("h3",{id:"button-element-style-with-class-solidbutton-and-exclude-algo-buttons"},"button element style with class SolidButton and exclude Algo Buttons"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"button:not([class*=algo-btn-solid]):not([class*=AlgoSendButton]), button [class*=SolidButton] {\n  background-color: #1c1ce1!important;\n  color: #fff!important;\n  white-space: pre-wrap;\n  text-decoration: none;\n  margin-top: .5rem!important\n}\n")),(0,r.kt)("h2",{id:"classname-reference"},"className Reference"),(0,r.kt)("p",null,"We have also attached classes to each Pipeline-UI component for user convenience, and will be providing the reference sheet soon."),(0,r.kt)("p",null,"(coming soon)"),(0,r.kt)(l.Z,{mdxType:"Table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Component"),(0,r.kt)("th",null,"CSS Class"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Component1"),(0,r.kt)("td",null,"component-class")))))}m.isMDXComponent=!0},55182:function(e,t,n){n.d(t,{Z:function(){return S}});var o=n(67294),s=n(45697),r=n.n(s),l=n(31096),a=n(32016),c=n(50056),i=n(13489),u=n(89855),d=((0,a.qC)(a.$_,a.Dh),(0,a.qC)(a.I8,a.JB,a.Ue,a.Nv,a.yd,a.rX));(0,a.qC)(a.jf,a.dp,a.bf,a.Cb,a.ih,a.jw,a.kk,a.kC,a.tx,a.Lo),(0,a.qC)(a.FK,a.W5,a.we,a.F2,a.I,a.t$),(0,a.qC)(a.Lz,a.tv,a.E0,a.Wn),(0,a.qC)(a.P_,a.Me,a.WO,a.Kv,a.cq,a.Kl,a.eY,a.fU,a.zo,a.uk,a.vm);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f.apply(this,arguments)}var b=(0,l.ZP)(u.Z).withConfig({displayName:"Table__StyledTable",componentId:"sc-1oazz9h-0"})(["&{border-collapse:collapse;}th,td{border:solid;border-width:1px 0;border-color:inherit;text-align:left;padding:0 2rem;}tbody tr{height:",";}thead tr,tfoot tr{height:",";}thead th{font-weight:",";text-transform:uppercase;}",""],(0,c.R)("height[3]","4rem"),(0,c.R)("height[2]","3rem"),(0,c.R)("fontWeights.3","bold"),d);b.defaultProps={theme:i.Z};var g=o.forwardRef((function(e,t){return o.createElement(b,f({className:"pipeline-table",ref:t},e,{forwardedAs:"table"}))}));g.defaultProps={width:1,border:1,borderColor:"grey",fontSize:1,fontWeight:2,fontFamily:"sansSerif",color:"dark-gray",boxShadow:1},g.propTypes=m(m({},u.Z.propTypes),{},{theme:r().object}),g.displayName="Table";var S=g}}]);