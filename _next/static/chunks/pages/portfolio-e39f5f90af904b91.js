(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{6635:function(e,n,t){"use strict";t.d(n,{f:function(){return r}});var i=t(9008),o=t(5893),r=function(e){var n=e.title,t=e.description,r=e.author,a=void 0===r?"Nathan Abela":r,c=e.keywords,s=e.image,l=void 0===s?"https://i.imgur.com/RBCwr3v.png":s,d=e.meta;return(0,o.jsxs)(i.default,{children:[(0,o.jsx)("title",{children:n}),(0,o.jsx)("meta",{name:"description",content:t}),(0,o.jsx)("meta",{name:"author",content:a}),(0,o.jsx)("meta",{name:"og:title",content:n}),(0,o.jsx)("meta",{name:"og:description",content:t}),(0,o.jsx)("meta",{name:"og:type",content:"website"}),(0,o.jsx)("meta",{name:"og:url",content:"https://nathan-abela.github.io/"}),d&&d.length>0&&d.map((function(e){var n=e.name,t=e.content;return(0,o.jsx)("meta",{name:n,content:t},n)})),l&&(0,o.jsx)("meta",{name:"og:image",content:l}),c&&(0,o.jsx)("meta",{name:"keywords",content:c}),(0,o.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:'{"@context":"http://schema.org","@type":"WebSite","name":"nathan-abela.github.io","alternateName":"Nathan Abela","url":"https://nathan-abela.github.io/","description":"Software Engineer with focus on Angular and Stencil.js.","image":"'.concat(l,'"}')}})]})}},1290:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return v},default:function(){return j}});var i=t(9521),o=t(7294),r=t(7728),a=i.ZP.button.withConfig({displayName:"styles__StyledFilterButton",componentId:"sc-nr6hfb-0"})(["padding:8px 16px;margin:0 8px 8px 0;border:1px solid ",";border-radius:4px;background-color:",";color:",";cursor:pointer;transition:background-color 0.3s ease,color 0.3s ease;&:hover{background-color:",";color:",";}@media screen and (max-width:425px){font-size:14px;}"],(function(e){var n=e.isActive,t=e.theme;return n?t.primary:t.text}),(function(e){var n=e.isActive,t=e.theme;return n?t.primary:t.body}),(function(e){var n=e.isActive,t=e.theme;return n?t.body:t.text}),(function(e){var n=e.theme;return"".concat(n.primary,"F2")}),(function(e){return e.theme.headline})),c=t(5893),s=function(e){var n=e.onClick,t=e.isActive,i=e.children;return(0,c.jsx)(a,{onClick:n,isActive:t,children:i})},l=t(5675),d=t.n(l),h=t(1664),u=t.n(h),p=t(6724),m=i.ZP.article.withConfig({displayName:"styles__StyledPortfolioCard",componentId:"sc-1xdr3bq-0"})(["margin-bottom:48px;flex-direction:column;a{color:"," !important;text-decoration:none;}span{border-radius:4px;}img{transition:transform 0.3s ease;}img:hover{transform:scale(1.04);}h1{margin:0;}@media screen and (min-width:768px){display:flex;flex-direction:row-reverse;align-items:center;&:nth-of-type(odd){flex-direction:row;.details{padding-left:24px;}}&:nth-of-type(even){.details{padding-right:24px;}}& > *{width:50%;}}"],(function(e){return e.theme.headline})),f=function(e){var n=e.item;return(0,c.jsxs)(m,{children:[(0,c.jsx)(u(),{href:"/portfolio/".concat(n.slug),children:(0,c.jsx)("a",{children:(0,c.jsx)(d(),{src:"/portfolio/".concat(n.slug,".jpg"),width:1920,height:1080,objectFit:"cover",alt:n.title,placeholder:"blur",blurDataURL:(0,p.f)(1920,1080)})})}),(0,c.jsx)("div",{className:"details",children:(0,c.jsx)(u(),{href:"/portfolio/".concat(n.slug),children:(0,c.jsxs)("a",{children:[(0,c.jsx)("h1",{children:n.title}),(0,c.jsx)("p",{children:n.type}),(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"Technologies used:"})," ",(0,c.jsx)("em",{children:n.technologies.join(", ")})]})]})})})]})},x=t(6635);var g=i.ZP.h2.withConfig({displayName:"portfolio__Headline",componentId:"sc-17scf29-0"})(["font-size:40px;margin:32px 0;@media screen and (max-width:768px){font-size:32px;}@media screen and (max-width:425px){font-size:24px;}@media screen and (max-width:320px){font-size:20px;}"]),v=!0,j=function(e){var n=e.portfolioItems,t=(0,o.useState)("all"),i=t[0],a=t[1],l="all"===i?n:n.filter((function(e){return e.type.toLowerCase().includes(i.toLowerCase())}));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(x.f,{title:"Nathan Abela - Portfolio",description:"Software Engineer with focus on Angular and Stencil.js."}),(0,c.jsxs)(r.W,{children:[(0,c.jsx)("h1",{style:{fontSize:"24px"},children:"Portfolio Under Construction \ud83c\udfd7\ufe0f"}),(0,c.jsx)("p",{style:{fontSize:"16px"},children:"There are more projects to list, which will be added soon!"}),(0,c.jsx)("br",{}),(0,c.jsx)("hr",{}),(0,c.jsx)(g,{children:"Portfolio"}),(0,c.jsxs)("div",{style:{paddingBottom:32},children:[(0,c.jsx)(s,{onClick:function(){return a("all")},isActive:"all"===i,children:"All Projects"}),(0,c.jsx)(s,{onClick:function(){return a("Frontend Development")},isActive:"frontend development"===i.toLowerCase(),children:"Frontend Development"}),(0,c.jsx)(s,{onClick:function(){return a("Backend Development")},isActive:"backend development"===i.toLowerCase(),children:"Backend Development"}),(0,c.jsx)(s,{onClick:function(){return a("Machine Learning")},isActive:"machine learning"===i.toLowerCase(),children:"Machine Learning"}),(0,c.jsx)(s,{onClick:function(){return a("Mobile App Development")},isActive:"mobile app development"===i.toLowerCase(),children:"Mobile App Development"}),(0,c.jsx)(s,{onClick:function(){return a("3D Modelling")},isActive:"3d modelling"===i.toLowerCase(),children:"3D Modelling"}),(0,c.jsx)(s,{onClick:function(){return a("Game Development")},isActive:"game development"===i.toLowerCase(),children:"Game Development"}),(0,c.jsx)(s,{onClick:function(){return a("Design and Media")},isActive:"design and media"===i.toLowerCase(),children:"Design and Media"}),(0,c.jsx)(s,{onClick:function(){return a("Other")},isActive:"other"===i.toLowerCase(),children:"Other"})]}),l.map((function(e){return(0,c.jsx)(f,{item:e},e.slug)})),"all"!==i.toLowerCase()&&0===l.length&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{style:{fontSize:"24px"},children:"Category Under Construction \ud83c\udfd7\ufe0f"}),(0,c.jsx)("p",{style:{fontSize:"16px"},children:"Projects under this category will be available soon!"})]})]})]})}},6724:function(e,n,t){"use strict";t.d(n,{f:function(){return i}});var i=function(e,n){return"data:image/svg+xml;base64,".concat((t=function(e,n){return'\n  <svg width="'.concat(e,'" height="').concat(n,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <defs>\n      <linearGradient id="g">\n        <stop stop-color="rgba(100, 100, 100, 0.2)" offset="20%" />\n        <stop stop-color="rgba(100, 100, 100, 0.5)" offset="50%" />\n        <stop stop-color="rgba(100, 100, 100, 0.2)" offset="70%" />\n      </linearGradient>\n    </defs>\n    <rect width="').concat(e,'" height="').concat(n,'" fill="rgba(100, 100, 100, 0.2)" />\n    <rect id="r" width="').concat(e,'" height="').concat(n,'" fill="url(#g)" />\n    <animate xlink:href="#r" attributeName="x" from="-').concat(e,'" to="').concat(e,'" dur="1s" repeatCount="indefinite"  />\n  </svg>')}(e,n),window.btoa(t)));var t}},3295:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return t(1290)}])}},function(e){e.O(0,[959,774,888,179],(function(){return n=3295,e(e.s=n);var n}));var n=e.O();_N_E=n}]);