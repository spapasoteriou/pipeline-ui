(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[4781],{87756:function(e,t,n){"use strict";n.d(t,{dK:function(){return a},_k:function(){return r},vc:function(){return i},rx:function(){return s},qo:function(){return o},Hk:function(){return l},Iz:function(){return c}});n(31336);var a=["en"],r=!1,i=null,s=null,o=8,l=50,c={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},17144:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var a=n(39976),r=n(76445),i=n(60272),s=n(35245),o=n(86010),l="checkboxContainer_r4Y0",c=["className","name","label","onChange","checked"];var u=function(e){e.className;var t=e.name,n=e.label,r=e.onChange,u=e.checked,g=(0,s.Z)(e,c),d="showcase_checkbox_id_"+t+";";return a.createElement("div",(0,i.Z)({className:(0,o.Z)(g.className,l)},g),a.createElement("input",{type:"checkbox",id:d,name:t,onChange:r,checked:u}),a.createElement("label",{htmlFor:d},n))},g="selectContainer_zqr2";var d=function(e){var t=e.tag,n=e.label,r=e.onChange,i=e.value,s=e.children,o="showcase_select_id_"+t+";";return a.createElement("div",{className:g},a.createElement("label",{htmlFor:o},n),a.createElement("select",{id:o,name:t,onChange:r,value:i},s))},m="showcaseCard_iyEs",p="showcaseCardImage_8shn",h="titleIconsRow_LpsL",A="titleIconsRowTitle_UBOS",f="titleIconsRowIcons_0KNV",b="tagIcon_9x8c",w=n(40390);function v(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return e.filter((function(e){return!t.includes(e)}))}))}function E(e,t){var n=[].concat(e);return n.sort(function(e){return function(t,n){return e(t)>e(n)?1:e(n)>e(t)?-1:0}}(t)),n}var S={algorand:{label:"Favorite",description:"Our favorite sites that you must absolutely check-out!",icon:a.createElement(a.Fragment,null,"\u2764\ufe0f")},opensource:{label:"Open-Source",description:"Open-Source sites can be useful for inspiration!",icon:a.createElement(a.Fragment,null,"\ud83d\udc68\u200d\ud83d\udcbb")},product:{label:"Product",description:"Sites associated to a commercial product!",icon:a.createElement(a.Fragment,null,"\ud83d\udcb5")},design:{label:"Design",description:"Beautiful sites, polished and standing out from the initial template!",icon:a.createElement(a.Fragment,null,"\ud83d\udc85")},i18n:{label:"I18n",description:"Translated sites using the internationalization support with more than 1 locale.",icon:a.createElement(a.Fragment,null,"\ud83c\udff3\ufe0f")},versioning:{label:"Versioning",description:"Sites using the versioning feature of the docs plugin to manage multiple versions.",icon:a.createElement(a.Fragment,null,"\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66")},multiInstance:{label:"Multi-Instance",description:"Sites using multiple instances of the same plugin on the same site.",icon:a.createElement(a.Fragment,null,"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66")},large:{label:"Large site",description:"Very large sites, including much more pages than the average!",icon:a.createElement(a.Fragment,null,"\ud83d\udcaa")},facebook:{label:"Facebook sites",description:"Sites that include Facebook projects",icon:a.createElement(a.Fragment,null,"\ud83d\udc65")},personal:{label:"Personal sites",description:"Personal websites, blogs and digital gardens.",icon:a.createElement(a.Fragment,null,"\ud83d\ude4b")},rtl:{label:"RTL Direction",description:"Sites using the right-to-left reading direction support.",icon:a.createElement(a.Fragment,null,"\u21aa\ufe0f")}},N=[{title:"Algorand Foundation",description:"Dedicated to fulfilling the global promise of blockchain technology by leveraging the Algorand protocol and open source software",preview:n(59469),website:"https://algorand.foundation/",source:"https://github.com/algorand/",tags:["opensource","algorand"]},{title:"Yieldly",description:"The worlds first and only DeFi suite on Algorand. No-loss prize games Multi-asset staking.Cross-chain swapping.",preview:n(68778),website:"https://yieldly.finance/",source:"https://yieldly.finance/",tags:["opensource","algorand"]},{title:"Algo Explorer",description:"from Rand Labs: a blockchain development lab specialized in Algorand technology",preview:n(6034),website:"https://algoexplorer.io/",source:"https://algoexplorer.io/",tags:["opensource","algorand"]},{title:"NFT JAM",description:"Algorand NFT Marketplace for Resellers. Buy and Sell NFTS in ALGO and ASAs. Forwards/reverse and token auctions. Offers.",preview:n(83548),website:"https://app.nftjam.net/",source:"https://app.nftjam.net/",tags:["opensource","algorand","NFT"]}],k=Object.keys(S);var y,_=(y=E(y=N,(function(e){return e.title.toLowerCase()})),y=E(y,(function(e){return!e.tags.includes("favorite")})));function F(e){var t=e.label,n=e.description,r=e.icon;return a.createElement("span",{className:b,title:t+": "+n},r)}function I(e){return E(e.tags.map((function(e){return Object.assign({tag:e},S[e])})).filter((function(e){return!!e.icon})),(function(e){return k.indexOf(e.tag)})).map((function(e,t){return a.createElement(F,(0,i.Z)({key:t},e))}))}N.forEach((function(e){try{!function(){var t=v(Object.keys(e),["title","description","preview","website","source","tags"]);if(t.length>0)throw new Error("Site contains unknown attribute names=["+t.join(",")+"]")}(),function(){if(!e.title)throw new Error("Site title is missing")}(),function(){if(!e.description)throw new Error("Site description is missing")}(),function(){if(!e.website)throw new Error("Site website is missing");if(!e.website.startsWith("http://")&&!e.website.startsWith("https://"))throw new Error("Site website does not look like a valid url: "+e.website)}(),function(){if(!e.preview||e.preview instanceof String&&(e.preview.startsWith("http")||e.preview.startsWith("//")))throw new Error("Site has bad image preview=["+e.preview+"].\nThe image should be hosted on site, and not use remote HTTP or HTTPS URLs")}(),function(){if(!e.tags||!(e.tags instanceof Array)||e.tags.includes(""))throw new Error("Bad showcase tags=["+JSON.stringify(e.tags)+"]");var t=v(e.tags,k);if(t.length>0)throw new Error("Unknown tags=["+t.join(",")+"\nThe available tags are "+k.join(","))}(),function(){if(void 0===e.source)throw new Error("The source attribute is required.\nIf your site is not open-source, please make it explicit with 'source: null'");var t=e.tags.includes("opensource");if(null===e.source&&t)throw new Error("You can't add the opensource tag to a site that does not have a link to source code.");if(e.source&&!t)throw new Error("For open-source sites, please add the 'opensource' tag")}()}catch(t){throw new Error("Showcase site with title="+e.title+" contains errors:\n"+t.message)}}));var T=(0,a.memo)((function(e){var t=e.user;return a.createElement("div",{key:t.title,className:"col col--4 margin-bottom--lg"},a.createElement("div",{className:(0,o.Z)("card",m)},a.createElement("div",{className:(0,o.Z)("card__image",p)},a.createElement(w.Z,{img:t.preview,alt:t.title})),a.createElement("div",{className:"card__body"},a.createElement("div",{className:"avatar"},a.createElement("div",{className:"avatar__intro margin-left--none"},a.createElement("div",{className:h},a.createElement("div",{className:A},a.createElement("div",{className:"avatar__name"},t.title)),a.createElement("div",{className:f},a.createElement(I,{tags:t.tags}))),a.createElement("small",{className:"avatar__subtitle"},t.description)))),(t.website||t.source)&&a.createElement("div",{className:"card__footer"},a.createElement("div",{className:"button-group button-group--block"},t.website&&a.createElement("a",{className:"button button--small button--secondary button--block",href:t.website,target:"_blank",rel:"noreferrer noopener"},"Website"),t.source&&a.createElement("a",{className:"button button--small button--secondary button--block",href:t.source,target:"_blank",rel:"noreferrer noopener"},"Source")))))})),O=n(76775),C="Algorand Bridge",R="Algorand Ecosystem";var j="tags";function B(e){return new URLSearchParams(e).getAll(j)}function L(){var e=(0,O.TH)(),t=(0,O.k6)().push,n=(0,a.useState)([]),r=n[0],i=n[1];return(0,a.useEffect)((function(){var t=B(e.search);i(t)}),[e,i]),{selectedTags:r,toggleTag:(0,a.useCallback)((function(n){var a=function(e,t){var n=e.indexOf(t);if(-1===n)return e.concat(t);var a=[].concat(e);return a.splice(n,1),a}(B(e.search),n),r=function(e,t){var n=new URLSearchParams(e);return n.delete(j),t.forEach((function(e){return n.append(j,e)})),n.toString()}(e.search,a);t(Object.assign({},e,{search:r}))}),[e,t])}}function z(){return a.createElement("div",{className:"text--center"},a.createElement("h1",null,C),a.createElement("p",null,R),a.createElement("p",null,a.createElement("a",{className:"button button--primary",href:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/src/data/users/users.js",target:"_blank"},"\ud83d\ude4f Add Site")))}function U(e){var t=e.selectedTags,n=e.toggleTag,r=e.operator,i=e.setOperator;return a.createElement("div",{className:"margin-top--l margin-bottom--md container"},a.createElement("div",{className:"row"},k.map((function(e){var r=S[e],i=r.label,s=r.description,o=r.icon;return a.createElement("div",{key:e,className:"col col--2"},a.createElement(u,{title:i+": "+s,name:e,label:o?a.createElement(a.Fragment,null,o," ",i):i,onChange:function(){return n(e)},checked:t.includes(e)}))})),a.createElement("div",{className:"col col--2"},a.createElement(d,{name:"operator",label:"Filter: ",value:r,onChange:function(e){return i(e.target.value)}},a.createElement("option",{value:"OR"},"OR"),a.createElement("option",{value:"AND"},"AND")))))}function D(e){var t=e.filteredUsers;return a.createElement("section",{className:"container margin-top--lg"},a.createElement("h2",null,t.length," site",t.length>1?"s":""),a.createElement("div",{className:"margin-top--lg"},t.length>0?a.createElement("div",{className:"row"},t.map((function(e){return a.createElement(T,{key:e.title,user:e})}))):a.createElement("div",{className:(0,o.Z)("padding-vert--md text--center")},a.createElement("h3",null,"No result"))))}var Q=function(){var e=L(),t=e.selectedTags,n=e.toggleTag,i=(0,a.useState)("OR"),s=i[0],o=i[1],l=function(e,t,n){return(0,a.useMemo)((function(){return function(e,t,n){return 0===t.length?e:e.filter((function(e){return 0!==e.tags.length&&("AND"===n?t.every((function(t){return e.tags.includes(t)})):t.some((function(t){return e.tags.includes(t)})))}))}(e,t,n)}),[e,t,n])}(_,t,s);return a.createElement(r.Z,{title:C,description:R},a.createElement("main",{className:"container margin-vert--lg"},a.createElement(z,null),a.createElement(U,{selectedTags:t,toggleTag:n,operator:s,setOperator:o}),a.createElement(D,{filteredUsers:l})))}},59469:function(e,t,n){e.exports={src:{srcSet:n.p+"assets/ideal-img/algorand.29225f3.1920.png 1920w",images:[{path:n.p+"assets/ideal-img/algorand.29225f3.1920.png",width:1920,height:920}],src:n.p+"assets/ideal-img/algorand.29225f3.1920.png",toString:function(){return n.p+"assets/ideal-img/algorand.29225f3.1920.png"},placeholder:void 0,width:1920,height:920},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAIAAADzBuo/AAAACXBIWXMAABJ0AAASdAHeZh94AAAAl0lEQVQImRXJwQqCMBgA4L3/cwSdik5J0LFLQkESJWmolbO1MUW3ubn+/dF3/Ugp+Eupz2QbO1CjWqWV1qPRrQvGeXKb7MHpheDLTA6Ayem4idasoR2g8UDyyV60npXt/FC0sjtXPNqncS6udQ8AxCEUb7/K6LYqEtZLIe/l81E3lPF/I+IIODg2+v6LiOkO8xgRMYQA8ANXgIk99Nkt9AAAAABJRU5ErkJggg==",palette:null}},83548:function(e,t,n){e.exports={src:{srcSet:n.p+"assets/ideal-img/nftjam.c782ea7.1920.png 1920w",images:[{path:n.p+"assets/ideal-img/nftjam.c782ea7.1920.png",width:1920,height:924}],src:n.p+"assets/ideal-img/nftjam.c782ea7.1920.png",toString:function(){return n.p+"assets/ideal-img/nftjam.c782ea7.1920.png"},placeholder:void 0,width:1920,height:924},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAIAAADzBuo/AAAACXBIWXMAABYlAAAWJQFJUiTwAAAApklEQVQImQGbAGT/ALm26re65MW94LSz4aSc47ya6sht5M1H0upwuPKyvADF0uzE0uzL0OXU0+HDyuG9v+rFrezCbeHaX8bthawAw9juztzv2N/v38/k2LTj06rFzMPjy6Lo0m7S53auANTf8s/f89Xk9ePf7+nS5+LP38/T6NHD7dGN3eSEvADZ4OzX3+zV4e7a4+7j3uXg2+TT1uPLy+jQrODipMqeb3hapncwbAAAAABJRU5ErkJggg==",palette:null}},6034:function(e,t,n){e.exports={src:{srcSet:n.p+"assets/ideal-img/randlabs.8f52d05.1920.png 1920w",images:[{path:n.p+"assets/ideal-img/randlabs.8f52d05.1920.png",width:1920,height:922}],src:n.p+"assets/ideal-img/randlabs.8f52d05.1920.png",toString:function(){return n.p+"assets/ideal-img/randlabs.8f52d05.1920.png"},placeholder:void 0,width:1920,height:922},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAABJ0AAASdAHeZh94AAAAh0lEQVQImSWMyw7DIAwE+f+PzKWXqFIggIEYO5kq9LDSavYRvsfJ9tmp0iilItIQEVofbPGiq5FLIahO3JRpRjozfQyOdBLzO6qLHTERsgz2o1CHrhdpfYVnkaWYhZgyobZOvyZmvl5f3/qfqd+oOW8nXGrY/aBz8jwP5s7QiQxFxsTdKbXyAwtxwVumVtr6AAAAAElFTkSuQmCC",palette:null}},68778:function(e,t,n){e.exports={src:{srcSet:n.p+"assets/ideal-img/yieldly.95111e8.1920.png 1920w",images:[{path:n.p+"assets/ideal-img/yieldly.95111e8.1920.png",width:1920,height:921}],src:n.p+"assets/ideal-img/yieldly.95111e8.1920.png",toString:function(){return n.p+"assets/ideal-img/yieldly.95111e8.1920.png"},placeholder:void 0,width:1920,height:921},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAIAAADzBuo/AAAACXBIWXMAABJ0AAASdAHeZh94AAAAeUlEQVQImWNgZGRkgAEwG0RAxNjZ2Rk4hUVFNHWFNXT45ZXBKph9bI3VZKWgqoV1DDVj0yQNTTl4+RgYGAIM1Z7vXDSpOgEkzcTMIC0iYa1nISIszMrKwsDAICXInRjq5uWsC9bNxKDFLRYjZSgsIMjOwQF3BMwpTAC+MA1Q/SIzWgAAAABJRU5ErkJggg==",palette:null}}}]);