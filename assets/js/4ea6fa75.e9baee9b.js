"use strict";(self.webpackChunkwbfe_blog=self.webpackChunkwbfe_blog||[]).push([[1705],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),f=l,k=m["".concat(o,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9561:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],p={slug:"css-flex-grid",title:"CSS Flex & Grid",authors:["stefan"],tags:["css","flex","grid"]},o="Flex & Grid",u={permalink:"/wbfe-blog/blog/css-flex-grid",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-24-css-flex-grid.md",source:"@site/blog/2022-05-24-css-flex-grid.md",title:"CSS Flex & Grid",description:"Flex",date:"2022-05-24T00:00:00.000Z",formattedDate:"May 24, 2022",tags:[{label:"css",permalink:"/wbfe-blog/blog/tags/css"},{label:"flex",permalink:"/wbfe-blog/blog/tags/flex"},{label:"grid",permalink:"/wbfe-blog/blog/tags/grid"}],readingTime:1.455,truncated:!1,authors:[{name:"Stefan You",title:"Front End Developer",url:"https://github.com/eotkd4791",imageURL:"https://avatars.githubusercontent.com/u/46208349?v=4",key:"stefan"}],frontMatter:{slug:"css-flex-grid",title:"CSS Flex & Grid",authors:["stefan"],tags:["css","flex","grid"]},nextItem:{title:"\uc640\uc774\uc5b4 \ubc14\uc54c\ub9ac \ud504\ub860\ud2b8\uc5d4\ub4dc\ud300\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.",permalink:"/wbfe-blog/blog/introduce"}},c={authorsImageUrls:[void 0]},s=[{value:"Flex",id:"flex",level:3},{value:"Grid",id:"grid",level:3}],m={toc:s};function f(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"flex"},"Flex"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ucee8\ud150\uce20\uc758 \ub192\uc774 \ub9cc\ud07c\ub9cc height\ub97c \uc124\uc815\ud558\ub294 float\uc640 \ub2e4\ub974\uac8c flex\ub294 flex items\ub4e4 \ub07c\ub9ac \uac19\uc740 \ub192\uc774\ub97c \uc720\uc9c0\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"flex vs inline-flex"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"flex container\uac00 block\uc778\uc9c0 inine\uc778\uc9c0 \uc124\uc815")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".flex-container {\n  display: flex;\n  /* display: inline-flex; */\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"flex-wrap"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ucee8\ud14c\uc774\ud130\ubcf4\ub2e4 \uc544\uc774\ud15c\ub4e4\uc758 \uba54\uc778\ucd95 \ubc29\ud5a5\uc758 \ud06c\uae30\uac00 \ucee4\uc84c\uc744 \uacbd\uc6b0\uc5d0 \uc904\ubc14\uafc8 \uc5ec\ubd80 \uc124\uc815"),(0,a.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: nowrap - \uc904\ubc14\uafc8 \ud558\uc9c0 \uc54a\uc74c"),(0,a.kt)("li",{parentName:"ul"},"wrap: \uc904\ubc14\uafc8")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".flex-container {\n  display: flex;\n  flex-wrap: wrap;\n  /* flex-wrap: nowrap; */\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"flex-flow",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"flex-direction + flex-wrap"),(0,a.kt)("li",{parentName:"ul"},"\uc608\uc2dc) ",(0,a.kt)("inlineCode",{parentName:"li"},"flex-flow: row wrap;"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".flex-container {\n  flex-flow: row wrap;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"flex-direction"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"row | column")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\uba54\uc778\ucd95(main axis)"),"\uc758 \ubc29\ud5a5 \uc815\uc758"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"justify\uac00")," \ub4e4\uc5b4\uac04 \uc18d\uc131\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uba54\uc778\ucd95(main axis)"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"align"),"\uc774 \ub4e4\uc5b4\uac04 \uc18d\uc131\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc218\uc9c1\ucd95(cross axis)"),"\uc5d0 \ub300\ud55c \uc815\ub82c\uc744 \uc758\ubbf8\ud568")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"justify-content (\uba54\uc778\ucd95 \ubc29\ud5a5 \uc815\ub82c)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"flex-start (default)"),(0,a.kt)("li",{parentName:"ul"},"flex-end"),(0,a.kt)("li",{parentName:"ul"},"center"),(0,a.kt)("li",{parentName:"ul"},"space-between"),(0,a.kt)("li",{parentName:"ul"},"space-around"),(0,a.kt)("li",{parentName:"ul"},"space-evenly (IE, Edge x)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"align-items (\uc218\uc9c1\ucd95 \ubc29\ud5a5 \uc815\ub82c)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"stretch (default)"),(0,a.kt)("li",{parentName:"ul"},"flex-start"),(0,a.kt)("li",{parentName:"ul"},"flex-end"),(0,a.kt)("li",{parentName:"ul"},"center"),(0,a.kt)("li",{parentName:"ul"},"baseline (text-baseline)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"align-content (\uc5ec\ub7ec \ud589 \uc815\ub82c)"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\uc904\ubc14\ub01c\uc774 \uc77c\uc5b4\ub09c \uc0c1\ud669\uc5d0\uc11c \uc0ac\uc6a9 (flex-wrap: wrap)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"stretch (default)"),(0,a.kt)("li",{parentName:"ul"},"flex-start"),(0,a.kt)("li",{parentName:"ul"},"flex-end"),(0,a.kt)("li",{parentName:"ul"},"center"),(0,a.kt)("li",{parentName:"ul"},"space-between"),(0,a.kt)("li",{parentName:"ul"},"space-around"),(0,a.kt)("li",{parentName:"ul"},"space-evenly")),(0,a.kt)("h3",{id:"grid"},"Grid"),(0,a.kt)("p",null,"... \uc791\uc131\uc911 ..."))}f.isMDXComponent=!0}}]);