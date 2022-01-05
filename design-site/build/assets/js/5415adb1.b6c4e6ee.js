"use strict";(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[5726],{50056:function(e,t,n){n.d(t,{R:function(){return o}});var r=n(44547),o=function(e,t){return void 0===t&&(t=null),function(n){return(0,r.U2)(n.theme,e,t)}}},35344:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return f},toc:function(){return d},default:function(){return y}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=n(97104),a=n(62731),c=n(55182),p=["components"],s={},u="Field",f={unversionedId:"Components/Field",id:"Components/Field",isDocsHomePage:!1,title:"Field",description:"The Field component provides a convenient way to add a label to an Input component.",source:"@site/docs/Components/Field.mdx",sourceDirName:"Components",slug:"/Components/Field",permalink:"/docs/Components/Field",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/Components/Field.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Checkbox",permalink:"/docs/Components/Checkbox"},next:{title:"Flash",permalink:"/docs/Components/Flash"}},d=[{value:"Usage Example",id:"usage-example",children:[{value:"Props",id:"props",children:[],level:3}],level:2}],b={toc:d};function y(e){var t=e.components,n=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"field"},"Field"),(0,i.kt)("p",null,"The Field component provides a convenient way to add a label to an Input component."),(0,i.kt)(l.Z,{label:"Note",mdxType:"Field"},(0,i.kt)(a.Z,{type:"text",required:!0,placeholder:"your note goes here",mdxType:"Input"})),(0,i.kt)("h2",{id:"usage-example"},"Usage Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Field label="Note">\n    <Input type="text" required={true} placeholder="your note goes here" />\n</Field>\n')),(0,i.kt)("h3",{id:"props"},"Props"),(0,i.kt)(c.Z,{mdxType:"Table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Prop"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Default"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"children"),(0,i.kt)("td",null,"element (required)"),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null,"label"),(0,i.kt)("td",null,"string (required)"),(0,i.kt)("td",null),(0,i.kt)("td",null)))),(0,i.kt)("br",null),"Field uses COMMON, LAYOUT, POSITION, FLEXBOX, BORDERS groups of Styled System props.")}y.isMDXComponent=!0},8120:function(e,t,n){n.d(t,{Sn:function(){return b},Rn:function(){return y}});var r=n(67294),o=n(45697),i=n.n(o),l=n(31096),a=n(32016),c=n(89855),p=n(64433);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var u=(0,a.bU)({prop:"size",key:"buttonSizes"}),f=(0,a.oB)({prop:"mainColor",cssProperty:"--main-color",key:"colors"}),d=(0,a.oB)({prop:"contrastColor",cssProperty:"--contrast-color",key:"colors"}),b=(0,l.ZP)(c.D).withConfig({displayName:"BaseButton__StyledButton",componentId:"sc-1hj5v8i-0"})(["&{-webkit-font-smoothing:antialiased;appearance:none;user-select:none;white-space:nowrap;text-decoration:none;text-align:center;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;padding:",";}&:hover{cursor:pointer;}&:disabled{opacity:0.5;pointer-events:none;}> span.button-text{display:inline-flex;}"," > div > svg,> span.button-text{position:relative;z-index:1;user-select:none;pointer-events:none;}> div > svg{display:block;}> div:first-child > svg{margin-left:-0.5rem;margin-right:.5rem;}> div:last-child > svg{margin-left:.5rem;margin-right:-0.5rem;}> div:first-child:last-child > svg{margin:0;}"," "," "," ",""],(function(e){return e.icononly?"0":e.p}),"",f,d,a.jn,u);b.defaultProps={as:"button"};var y=function(e){var t=e.children,n=e.icon,o=e.iconpos;return n?r.createElement(r.Fragment,null,n&&!o&&r.createElement(p.Z,{name:n}),n&&"left"==o&&r.createElement(p.Z,{name:n}),t&&r.createElement("span",{className:"button-text",children:t}),n&&"right"==o&&r.createElement(p.Z,{name:n})):r.createElement("span",{className:"button-text",children:t})},h=r.forwardRef((function(e,t){return r.createElement(b,s({className:"pipeline-btn-base"},e,{ref:t}))}));h.defaultProps={position:"relative",height:"3rem",minWidth:"3rem",px:4,py:0,fontSize:"inherit",fontFamily:"sansSerif",fontWeight:3,lineHeight:1,color:"white",bg:"silver",mainColor:"primary",contrastColor:"white",border:"none"},h.propTypes={theme:i().object,mainColor:i().string,contrastColor:i().string,size:i().oneOf(["small","medium","large"]),icon:i().string,iconpos:i().oneOf(["left","right"]),icononly:i().bool},h.displayName="Button",t.ZP=h},72157:function(e,t,n){n.d(t,{Z:function(){return _}});var r=n(8120),o=n(67294),i=n(31096),l=["children","icon","iconpos"];function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=(0,i.ZP)(r.Sn).withConfig({displayName:"TextButton__StyledTextButton",componentId:"sc-1cs5ytp-0"})(["&{color:var(--main-color);border:none;background:none;box-shadow:none;}&:hover{text-decoration:underline;background:none;box-shadow:none;}&:active{text-decoration:none;}&::before{display:none;}"]),d=o.forwardRef((function(e,t){var n=e.children,i=e.icon,a=e.iconpos,c=u(e,l);return o.createElement(f,s({className:"pipeline-btn-text"},c,{ref:t}),o.createElement(r.Rn,{icon:i,iconpos:a,children:n}))}));d.defaultProps=c(c({},r.ZP.defaultProps),{},{px:2});var b=d,y=["children","icon","iconpos"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=(0,i.ZP)(r.Sn).withConfig({displayName:"SolidButton__StyledSolidButton",componentId:"sc-16jeih0-0"})(["&{color:var(--contrast-color);"," background:#FFF;z-index:0;transition:all 0.15s ease;}&:hover{text-decoration:inherit;box-shadow:0px 2px 4px rgba(0,0,0,0.2);}&:hover::before{opacity:0.9;}&:active{box-shadow:none;background:#000;}&::before{content:'';position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;height:100%;width:100%;background:var(--main-color);pointer-events:none;}"],""),j=o.forwardRef((function(e,t){var n=e.children,i=e.icon,l=e.iconpos,a=O(e,y);return o.createElement(w,v({className:"pipeline-btn-solid"},a,{ref:t}),o.createElement(r.Rn,{icon:i,iconpos:l,children:n}))}));j.defaultProps=m(m({},r.ZP.defaultProps),{},{borderRadius:1,boxShadow:1});var P=j,x=["children","icon","iconpos"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Z=(0,i.ZP)(w).withConfig({displayName:"OutlineButton__StyledOutlineButton",componentId:"sc-1gcz6sz-0"})(["&{color:var(--main-color);background:transparent;}&:hover{border-color:var(--main-color);}&:hover::before{opacity:0;}&:active{background:#fff;}&:active::before{opacity:0.1;}&::before{opacity:0;}"]),I=o.forwardRef((function(e,t){var n=e.children,i=e.icon,l=e.iconpos,a=N(e,x);return o.createElement(Z,C({className:"pipeline-btn-outline"},a,{ref:t}),o.createElement(r.Rn,{icon:i,iconpos:l,children:n}))}));I.defaultProps=S(S({},P.defaultProps),{},{border:1,borderColor:"grey",boxShadow:0});var R,F=I;(R=P).displayName="Button",R.Outline=F,R.Outline.displayName="Button.Outline",R.Text=b,R.Text.displayName="Button.Text",R.Base=r.ZP,R.Base.displayName="Button.Base";var _=R},97104:function(e,t,n){var r=n(67294),o=n(45697),i=n.n(o),l=n(31096),a=n(89855),c=n(80476),p=["label","children"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=(0,l.ZP)(c.Z).withConfig({displayName:"Field__OptionalLabel",componentId:"sc-o4retc-0"})(["&:after{content:' (optional)';font-weight:normal;font-style:italic;}"]),d=r.forwardRef((function(e,t){var n,o=e.label,i=e.children,l=u(e,p);return r.createElement(a.Z,s({as:"label",display:"inline-flex",flexDirection:"column",alignItems:"flex-start",mb:3,ref:t},l),(n=function(e){var t=!1;return r.Children.forEach(e,(function(e){e.props.required&&(t=!0)})),t}(i),n?r.createElement(c.Z,{fontSize:1,fontWeight:3,mb:2},o):r.createElement(f,{fontSize:1,fontWeight:3,mb:2},o)),i)}));d.propTypes={label:i().string.isRequired,children:i().element.isRequired},d.displayName="Field",t.Z=d},64433:function(e,t,n){var r=n(67294),o=n(45697),i=n.n(o),l=n(75044),a=n(89855),c=n(13489),p=["name","size"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=r.forwardRef((function(e,t){var n=e.name,o=e.size,i=u(e,p);return r.createElement(a.Z,s({ref:t},i),r.createElement(l.Z,{className:"pipeline-rmd-icon",name:n,size:o}))}));f.defaultProps={name:"",size:"24px",display:"inline-flex",theme:c.Z},f.propTypes={name:i().string.isRequired,size:i().string,display:i().string,theme:i().object},f.displayName="Icon",t.Z=f},62731:function(e,t,n){n.d(t,{F:function(){return E},Z:function(){return R}});var r=n(67294),o=n(45697),i=n.n(o),l=n(31096),a=n(50056),c=n(88776),p=n(4374),s=n(72157);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var f=["variant"];function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var O=(0,l.ZP)("input").withConfig({displayName:"FileInput__StyledFileInput",componentId:"sc-1i3ij93-0"})(["&{width:0;height:0;opacity:0;position:absolute;overflow:hidden;z-index:-1;}"]),w=(0,l.ZP)("label").withConfig({displayName:"FileInput__StyledFileLabel",componentId:"sc-1i3ij93-1"})(["&{display:inline-block;position:relative;cursor:pointer;}"]),j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(l,e);var t,n,o,i=m(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e)).handleClick=function(e){t.fileInput.current.click()},t.handleChange=function(e){var n=t.fileInput.current.files;t.setState({files:!!n.length}),n&&n.length>1?t.setState({buttonLabel:n.length+" files selected"}):n&&n.length?t.setState({buttonLabel:n[0].name}):t.setState({buttonLabel:"Choose file\u2026"}),t.props.onChange&&t.props.onChange(e)},t.fileInput=r.createRef(),t.state={buttonLabel:"Choose file\u2026",files:!1},t}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.variant,n=b(e,f);return"unstyled"===t?r.createElement("input",d({type:"file"},n)):r.createElement(w,null,r.createElement(O,d({type:"file"},n,{ref:this.fileInput,onChange:this.handleChange})),r.createElement(s.Z,{icon:this.state.files?"CloudDone":"CloudUpload",onClick:this.handleClick},this.state.buttonLabel))}}])&&y(t.prototype,n),o&&y(t,o),l}(r.Component);j.displayName="FileInput";var P=j,x=n(89855);function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}var E=(0,l.ZP)(x.D).attrs((function(e){return{as:"input"}})).withConfig({displayName:"Input__StyledInput",componentId:"sc-1l6guh8-0"})(["&{appearance:none;}&:hover{box-shadow:0px 2px 6px rgba(0,0,0,0.3);}&:focus{outline:none;border-color:",';}&:disabled{opacity:0.4;pointer-events:none;}&[type="color"]{min-width:3rem;padding:0;&::-webkit-color-swatch-wrapper{display:flex;align-items:center;justify-content:center;padding:0;}&::-webkit-color-swatch{flex:0 0 auto;height:2rem;width:2rem;border:none;border-radius:100%;}&::-moz-color-swatch{height:2rem;width:2rem;border:none;border-radius:100%;}}.was-validated &{&:valid{border-color:',";}&:valid ~ svg.icon-valid{visibility:visible;color:",";}&:invalid{border-color:",";}&:invalid ~ svg.icon-invalid{visibility:visible;color:",";}}}"],(0,a.R)("colors.primary","#000"),(0,a.R)("colors.success"),(0,a.R)("colors.success"),(0,a.R)("colors.danger"),(0,a.R)("colors.danger")),C=l.ZP.div.withConfig({displayName:"Input__StyledIconWrapper",componentId:"sc-1l6guh8-1"})(["&{position:relative;display:flex;align-items:center;width:100%;}> ","{padding-right:3rem;text-overflow:ellipsis;white-space:no-wrap;}> svg{position:absolute;right:1rem;visibility:hidden;}"],E),N=r.forwardRef((function(e,t){return r.createElement(C,{className:"pipeline-icon-wrapper"},r.createElement(E,S({className:"pipeline-input"},e,{ref:t})),r.createElement(c.Z,k({className:"pipeline-check-circle"},"className","icon-valid")),r.createElement(p.Z,k({className:"pipeline-invalid"},"className","icon-invalid")))})),Z=r.forwardRef((function(e,t){return"file"===e.type?r.createElement(P,S({className:"pipeline-file-input"},e,{ref:t})):r.createElement(E,S({},e,{ref:t}))})),I={color:"text",bg:"background",fontSize:"1rem",lineHeight:"initial",height:"3rem",p:3,border:1,borderColor:"moon-gray",borderRadius:1,boxShadow:1};Z.WithValidationStyle=N,N.defaultProps=I,E.defaultProps=I,Z.defaultProps=I,Z.propTypes={theme:i().object},Z.displayName="Input";var R=Z},55182:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(67294),o=n(45697),i=n.n(o),l=n(31096),a=n(32016),c=n(50056),p=n(13489),s=n(89855),u=((0,a.qC)(a.$_,a.Dh),(0,a.qC)(a.I8,a.JB,a.Ue,a.Nv,a.yd,a.rX));(0,a.qC)(a.jf,a.dp,a.bf,a.Cb,a.ih,a.jw,a.kk,a.kC,a.tx,a.Lo),(0,a.qC)(a.FK,a.W5,a.we,a.F2,a.I,a.t$),(0,a.qC)(a.Lz,a.tv,a.E0,a.Wn),(0,a.qC)(a.P_,a.Me,a.WO,a.Kv,a.cq,a.Kl,a.eY,a.fU,a.zo,a.uk,a.vm);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}var h=(0,l.ZP)(s.Z).withConfig({displayName:"Table__StyledTable",componentId:"sc-1oazz9h-0"})(["&{border-collapse:collapse;}th,td{border:solid;border-width:1px 0;border-color:inherit;text-align:left;padding:0 2rem;}tbody tr{height:",";}thead tr,tfoot tr{height:",";}thead th{font-weight:",";text-transform:uppercase;}",""],(0,c.R)("height[3]","4rem"),(0,c.R)("height[2]","3rem"),(0,c.R)("fontWeights.3","bold"),u);h.defaultProps={theme:p.Z};var m=r.forwardRef((function(e,t){return r.createElement(h,y({className:"pipeline-table",ref:t},e,{forwardedAs:"table"}))}));m.defaultProps={width:1,border:1,borderColor:"grey",fontSize:1,fontWeight:2,fontFamily:"sansSerif",color:"dark-gray",boxShadow:1},m.propTypes=d(d({},s.Z.propTypes),{},{theme:i().object}),m.displayName="Table";var g=m},80476:function(e,t,n){var r=n(67294),o=n(45697),i=n.n(o),l=n(89855),a=n(13489);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var f=r.forwardRef((function(e,t){return r.createElement(l.Z,u({ref:t},e))}));f.defaultProps={fontSize:2,fontWeight:2,lineHeight:"copy",theme:a.Z},f.propTypes=p(p({},l.Z.propTypes),{},{theme:i().object}),f.displayName="Text",f.span=function(e){return r.createElement(f,e)},f.span.defaultProps=p(p({},f.defaultProps),{},{as:"span"}),f.p=function(e){return r.createElement(f,e)},f.p.defaultProps=p(p({},f.defaultProps),{},{as:"p"}),f.s=function(e){return r.createElement(f,e)},f.s.defaultProps=p(p({},f.defaultProps),{},{as:"s"}),t.Z=f}}]);