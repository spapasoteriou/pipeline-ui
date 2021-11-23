"use strict";(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[2828],{50056:function(e,t,n){n.d(t,{R:function(){return o}});var a=n(44547),o=function(e,t){return void 0===t&&(t=null),function(n){return(0,a.U2)(n.theme,e,t)}}},13511:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(87462),o=n(63366),l=(n(67294),n(3905)),r=n(96086),i=["components"],d={},u="Form",s={unversionedId:"Components/Form",id:"Components/Form",isDocsHomePage:!1,title:"Form",description:"The Form component provides a wrapped version of the HTML form element.",source:"@site/docs/Components/Form.mdx",sourceDirName:"Components",slug:"/Components/Form",permalink:"/docs/Components/Form",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/Components/Form.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flex",permalink:"/docs/Components/Flex"},next:{title:"Heading",permalink:"/docs/Components/Heading"}},p=[{value:"Usage Example",id:"usage-example",children:[{value:"Props",id:"props",children:[]}]}],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"form"},"Form"),(0,l.kt)("p",null,"The Form component provides a wrapped version of the HTML form element.\nNative HTML5 form validation"),(0,l.kt)("p",null,"For native HTML form validation\u2013available in all our supported browsers, the :valid and :invalid pseudo selectors are used to apply validation styles as well as display feedback messages."),(0,l.kt)("p",null,"pipeline scopes the :valid and :invalid styles to parent .was-validated class, usually applied to the Form (you can use the validated prop as a shortcut). Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted)."),(0,l.kt)("h2",{id:"usage-example"},"Usage Example"),(0,l.kt)("p",null,"(to view component preview, scroll to bottom of page)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import {\n  Box,\n  Form,\n  Input,\n  Select,\n  Field,\n  Button,\n  Text,\n  Checkbox,\n  Radio\n} from "pipeline-ui";\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'\nfunction CustomForm() {\n  const [formValidated, setFormValidated] = useState(false);\n  const [validated, setValidated] = useState(false);\n  const [inputValue, setInputValue] = useState("");\n  const [formInputValue, setFormInputValue] = useState("");\n  const [selectValue, setSelectValue] = useState("");\n  const [checkboxValue, setCheckboxValue] = useState(false);\n  const [radioValue, setRadioValue] = useState("");\n\n  const handleInput = e => {\n    setInputValue(e.target.value);\n    validateInput(e);\n  };\n\n  const handleFormInput = e => {\n    setFormInputValue(e.target.value);\n    validateInput(e);\n  };\n\n  const handleSelect = e => {\n    setSelectValue(e.value);\n    validateInput(e);\n  };\n\n  const handleCheckbox = e => {\n    setCheckboxValue(!checkboxValue);\n    validateInput(e);\n  };\n\n  const handleRadio = e => {\n    setRadioValue(e.target.value);\n    validateInput(e);\n  };\n\n  const validateInput = e => {\n    e.target.parentNode.classList.add("was-validated");\n  };\n\n  const validateForm = () => {\n    // Perform advanced validation here\n    if (\n      inputValue.length > 0 &&\n      selectValue.length > 0 &&\n      checkboxValue === true &&\n      radioValue.length > 0\n    ) {\n      setValidated(true);\n    } else {\n      setValidated(false);\n    }\n  };\n\n  useEffect(() => {\n    validateForm();\n  });\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    console.log("Submitted valid form");\n  };\n\n  return (\n    <Box p={4}>\n      <Box>\n        <Form onSubmit={handleSubmit} validated={formValidated}>\n          <Flex mx={-3} flexWrap={"wrap"}>\n            <Box width={[1, 1, 1/2]} px={3}>\n              <Field label="Plain Input" validated={validated} width={1}>\n                <Input\n                  type="text"\n                  required // set required attribute to use brower\'s HTML5 input validation\n                  onChange={handleInput}\n                  value={inputValue}\n                  width={1}\n                />\n              </Field>\n            </Box>\n            <Box width={[1, 1, 1/2]} px={3}>\n              <Field label="Form Email Input" validated={validated} width={1}>\n                <Form.Input\n                  type="email"\n                  required // set required attribute to use brower\'s HTML5 input validation\n                  onChange={handleFormInput}\n                  value={formInputValue}\n                  width={1}\n                />\n              </Field>\n            </Box>\n          </Flex>\n          <Flex mx={-3} flexWrap={"wrap"}>\n            <Box width={[1, 1, 1/2]} px={3}>\n              <Field label="Select Input"  width={10}></Field>\n                <Select\n                  options={[\n                    { value: "", label: ""},\n                    { value: "eth", label: "Ethereum" },\n                    { value: "btc", label: "Bitcoin" },\n                    { value: "gno", label: "Gnosis" },\n                    { value: "gnt", label: "Golem" },\n                    { value: "rep", label: "Augur" }\n                  ]}\n                  defaultValue={selectValue}\n                  onChange={handleSelect}\n                  width={1}\n                />\n            </Box>\n          </Flex>\n          \n          \n          <Box>\n            <Field label="Checkbox Input" validated={validated}>\n              <Form.Check\n                value={checkboxValue}\n                onChange={handleCheckbox}\n                required // set required attribute to use brower\'s HTML5 input validation\n              />\n            </Field>\n          </Box>\n          <Box>\n            <Field label="Radio Input" validated={validated}>\n              <Radio\n                label="Radio 1"\n                my={2}\n                value={"radio1"}\n                checked={radioValue === "radio1"}\n                onChange={handleRadio}\n                required\n              />\n              <Radio\n                label="Radio 2"\n                my={2}\n                value={"radio2"}\n                checked={radioValue === "radio2"}\n                onChange={handleRadio}\n              />\n              <Radio\n                label="Radio 3"\n                my={2}\n                value={"radio3"}\n                checked={radioValue === "radio3"}\n                onChange={handleRadio}\n              />\n            </Field>\n          </Box>\n          <Box>\n            {/* Use the validated state to update UI */}\n            <Button type="submit" disabled={!validated}>\n              Submit Form\n            </Button>\n          </Box>\n        </Form>\n      </Box>\n      <Card my={4}>\n        <Heading as={"h4"}>Form values</Heading>\n        <Text>Valid form: {validated.toString()}</Text>\n        <Text>Email value: {inputValue}</Text>\n        <Text>Select value: {selectValue}</Text>\n        <Text>Checkbox value: {checkboxValue.toString()}</Text>\n        <Text>Radio value: {radioValue}</Text>\n        <Checkbox\n          label="Toggle Form Validation"\n          value={formValidated}\n          onChange={e => setFormValidated(!formValidated)}\n        />\n        <Text>Form validated: {formValidated.toString()}</Text>\n      </Card>\n    </Box>\n  );\n}\n')),(0,l.kt)("h3",{id:"props"},"Props"),(0,l.kt)(r.Z,{mdxType:"Table"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Prop"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Default"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"validated"),(0,l.kt)("td",null,"bool (optional)"),(0,l.kt)("td",null,"false"),(0,l.kt)("td",null,"Shows the input validation styles when true by adding the `.was-validated` class to the form element.")))),(0,l.kt)("br",null),"Form uses COMMON, LAYOUT, POSITION, FLEXBOX, BORDERS groups of Styled System props.")}m.isMDXComponent=!0},96086:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(67294),o=n(45697),l=n.n(o),r=n(91288),i=n(18836),d=n(50056),u=n(77582),s=n(78735),p=((0,i.qC)(i.$_,i.Dh),(0,i.qC)(i.I8,i.JB,i.Ue,i.Nv,i.yd,i.rX));(0,i.qC)(i.jf,i.dp,i.bf,i.Cb,i.ih,i.jw,i.kk,i.kC,i.tx,i.Lo),(0,i.qC)(i.FK,i.W5,i.we,i.F2,i.I,i.t$),(0,i.qC)(i.Lz,i.tv,i.E0,i.Wn),(0,i.qC)(i.P_,i.Me,i.WO,i.Kv,i.cq,i.Kl,i.eY,i.fU,i.zo,i.uk,i.vm);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}var b=(0,r.ZP)(s.Z).withConfig({displayName:"Table__StyledTable",componentId:"sc-1oazz9h-0"})(["&{border-collapse:collapse;}th,td{border:solid;border-width:1px 0;border-color:inherit;text-align:left;padding:0 2rem;}tbody tr{height:",";}thead tr,tfoot tr{height:",";}thead th{font-weight:",";text-transform:uppercase;}",""],(0,d.R)("height[3]","4rem"),(0,d.R)("height[2]","3rem"),(0,d.R)("fontWeights.3","bold"),p);b.defaultProps={theme:u.Z};var f=a.forwardRef((function(e,t){return a.createElement(b,v({className:"pipeline-table",ref:t},e,{forwardedAs:"table"}))}));f.defaultProps={width:1,border:1,borderColor:"grey",fontSize:1,fontWeight:2,fontFamily:"sansSerif",color:"dark-gray",boxShadow:1},f.propTypes=m(m({},s.Z.propTypes),{},{theme:l().object}),f.displayName="Table";var x=f}}]);