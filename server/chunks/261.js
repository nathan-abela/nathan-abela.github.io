"use strict";
exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 5261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* reexport */ SeoHead)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/atoms/SeoHead/SeoHead.tsx




const SeoHead = ({
  title,
  description,
  author = 'Nathan Abela',
  keywords,
  image = 'https://i.imgur.com/RBCwr3v.png',
  meta
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "author",
      content: author
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "og:title",
      content: title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "og:description",
      content: description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "og:type",
      content: "website"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "og:url",
      content: "https://nathan-abela.github.io/"
    }), meta && meta.length > 0 && meta.map(({
      name,
      content
    }) => /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: name,
      content: content
    }, name)), image && /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "og:image",
      content: image
    }), keywords && /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "keywords",
      content: keywords
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      type: "application/ld+json",
      dangerouslySetInnerHTML: {
        __html: `{"@context":"http://schema.org","@type":"WebSite","name":"nathan-abela.github.io","alternateName":"Nathan Abela","url":"https://nathan-abela.github.io/","description":"Frontend Engineer with focus on Angular and Stencil.js.","image":"${image}"}`
      }
    })]
  });
};


;// CONCATENATED MODULE: ./src/components/atoms/SeoHead/index.ts


/***/ })

};
;