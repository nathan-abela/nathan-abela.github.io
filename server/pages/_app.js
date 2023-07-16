"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: ./src/redux/selectors.ts
const getTheme = ({
  theme
}) => theme.currentTheme;
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/globalStyles.ts

const GlobalStyles = (0,external_styled_components_.createGlobalStyle)(["html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:'Basier Circle',sans-serif;}body{margin:0;background:", ";color:", ";transition:all 0.3s ease;}h1,h2,h3,h4,h5,h6{color:", ";}ul{list-style:none;padding:0;}@font-face{font-family:'Basier Circle';src:url('/fonts/basiercircle-regular-webfont.eot');src:url('/fonts/basiercircle-regular-webfont.eot?#iefix') format('embedded-opentype'),url('/fonts/basiercircle-regular-webfont.woff2') format('woff2'),url('/fonts/basiercircle-regular-webfont.woff') format('woff'),url('/fonts/basiercircle-regular-webfont.ttf') format('truetype');font-weight:normal;font-style:normal;}@font-face{font-family:'Basier Circle';src:url('/fonts/basiercircle-regularitalic-webfont.eot');src:url('/fonts/basiercircle-regularitalic-webfont.eot?#iefix') format('embedded-opentype'),url('/fonts/basiercircle-regularitalic-webfont.woff2') format('woff2'),url('/fonts/basiercircle-regularitalic-webfont.woff') format('woff'),url('/fonts/basiercircle-regularitalic-webfont.ttf') format('truetype');font-weight:normal;font-style:italic;}@font-face{font-family:'Basier Circle';src:url('/fonts/basiercircle-bold-webfont.eot');src:url('/fonts/basiercircle-bold-webfont.eot?#iefix') format('embedded-opentype'),url('/fonts/basiercircle-bold-webfont.woff2') format('woff2'),url('/fonts/basiercircle-bold-webfont.woff') format('woff'),url('/fonts/basiercircle-bold-webfont.ttf') format('truetype');font-weight:bold;font-style:normal;}@font-face{font-family:'Basier Circle';src:url('/fonts/basiercircle-bolditalic-webfont.eot');src:url('/fonts/basiercircle-bolditalic-webfont.eot?#iefix') format('embedded-opentype'),url('/fonts/basiercircle-bolditalic-webfont.woff2') format('woff2'),url('/fonts/basiercircle-bolditalic-webfont.woff') format('woff'),url('/fonts/basiercircle-bolditalic-webfont.ttf') format('truetype');font-weight:bold;font-style:italic;}main{display:block;}h1{font-size:32px;margin:22px 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:16px;}a{background-color:transparent;color:", ";&:hover{text-decoration:none;}}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:16px;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-4px;}sup{top:-8px;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;}button::-moz-focus-inner,[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:6px 12px 10px;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type='checkbox'],[type='radio']{box-sizing:border-box;padding:0;}[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button{height:auto;}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}[type='search']::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}blockquote{font-size:16px;font-style:italic;border-left:3px solid ", ";line-height:1.5;margin:0;padding:0 16px;}hr{background:", ";}#nprogress{pointer-events:none;}#nprogress .bar{background:", ";position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px ", ",0 0 5px ", ";opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:", ";border-left-color:", ";border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}.nprogress-custom-parent{overflow:hidden;position:relative;}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@keyframes nprogress-spinner{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"], ({
  theme
}) => theme.body, ({
  theme
}) => theme.text, ({
  theme
}) => theme.headline, ({
  theme
}) => theme.primary, ({
  theme
}) => theme.grey, ({
  theme
}) => theme.grey, ({
  theme
}) => theme.primary, ({
  theme
}) => theme.primary, ({
  theme
}) => theme.primary, ({
  theme
}) => theme.primary, ({
  theme
}) => theme.primary);
;// CONCATENATED MODULE: ./src/components/organisms/Footer/styles.ts

const StyledFooter = external_styled_components_default().footer.withConfig({
  displayName: "styles__StyledFooter",
  componentId: "sc-1pzkd2j-0"
})(["padding:32px 0;"]);
const Flex = external_styled_components_default().div.withConfig({
  displayName: "styles__Flex",
  componentId: "sc-1pzkd2j-1"
})(["display:flex;justify-content:center;align-items:center;flex-direction:column-reverse;@media screen and (min-width:768px){flex-direction:row;justify-content:space-between;}"]);

// EXTERNAL MODULE: ./src/components/atoms/Container/index.ts + 2 modules
var Container = __webpack_require__(2827);
;// CONCATENATED MODULE: ./src/components/molecules/SocialIcons/styles.ts

const StyledSocialIcons = external_styled_components_default().ul.withConfig({
  displayName: "styles__StyledSocialIcons",
  componentId: "sc-1vfff3-0"
})(["display:flex;li{width:24px;margin:0 8px;display:flex;justify-content:center;}a{color:", ";text-decoration:none;transition:0.2s;&:hover{color:", ";}}@media screen and (min-width:768px){li{margin-left:16px;}}"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.headline);

// EXTERNAL MODULE: ./src/components/atoms/Icon/index.ts + 15 modules
var Icon = __webpack_require__(9577);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/molecules/SocialIcons/SocialIcons.tsx





const SocialIcons = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledSocialIcons, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://github.com/nathan-abela",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Github",
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* Icon */.J, {
          icon: "GITHUB"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://www.linkedin.com/in/nathan-abela",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "LinkedIn",
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* Icon */.J, {
          icon: "LINKEDIN"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://www.youtube.com/@nathanabela",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "YouTube",
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* Icon */.J, {
          icon: "YOUTUBE"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "mailto:nathanabela7@gmail.com",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Email",
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* Icon */.J, {
          icon: "EMAIL"
        })
      })
    })]
  });
};


;// CONCATENATED MODULE: ./src/components/molecules/SocialIcons/index.ts

;// CONCATENATED MODULE: ./src/components/organisms/Footer/Footer.tsx






const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(StyledFooter, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Container/* Container */.W, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Flex, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: ["\xA9 ", new Date().getFullYear(), " Nathan Abela"]
        }), /*#__PURE__*/jsx_runtime_.jsx(SocialIcons, {})]
      })
    })
  });
};


;// CONCATENATED MODULE: ./src/components/organisms/Footer/index.ts

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/organisms/Header/styles.ts

const styles_Flex = external_styled_components_default().div.withConfig({
  displayName: "styles__Flex",
  componentId: "sc-1w2me4-0"
})(["display:flex;justify-content:space-between;align-items:center;a{color:", ";text-decoration:none;transition:0.2s;&:hover{color:", ";}}"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.headline);
const Desktop = external_styled_components_default().div.withConfig({
  displayName: "styles__Desktop",
  componentId: "sc-1w2me4-1"
})(["display:none;@media screen and (min-width:768px){display:block;}"]);
const Mobile = external_styled_components_default().div.withConfig({
  displayName: "styles__Mobile",
  componentId: "sc-1w2me4-2"
})(["display:block;@media screen and (min-width:768px){display:none;}"]);

;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/molecules/MobileNavigation/styles.ts

const StyledMobileNavigation = external_styled_components_default().ul.withConfig({
  displayName: "styles__StyledMobileNavigation",
  componentId: "sc-1619527-0"
})(["display:flex;li{width:32px;margin-left:16px;}"]);
const Menu = external_styled_components_default().button.withConfig({
  displayName: "styles__Menu",
  componentId: "sc-1619527-1"
})(["width:32px;height:32px;padding:0;background:transparent;border:0;color:", ";position:absolute;z-index:100;&:hover{color:", ";}"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.headline);
const Overlay = external_styled_components_default().div.withConfig({
  displayName: "styles__Overlay",
  componentId: "sc-1619527-2"
})(["position:absolute;width:100%;height:100%;top:-50%;left:0;background:", ";display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:all 0.5s ease;z-index:10;&.open{opacity:1;pointer-events:auto;top:0;}"], ({
  theme
}) => theme.body);

;// CONCATENATED MODULE: ./src/components/molecules/Navigation/styles.ts

const StyledNavigation = external_styled_components_default().nav.withConfig({
  displayName: "styles__StyledNavigation",
  componentId: "sc-1f4kyre-0"
})([""]);
const List = external_styled_components_default().ul.withConfig({
  displayName: "styles__List",
  componentId: "sc-1f4kyre-1"
})(["display:flex;align-items:center;flex-direction:column;font-size:32px;line-height:2;font-weight:bold;.desktop-only{display:none;padding-left:16px;}& > li a{padding:8px 16px;color:", ";text-decoration:none;transition:0.2s;&:hover{color:", ";}}@media screen and (min-width:768px){flex-direction:row;font-size:16px;font-weight:normal;.desktop-only{display:block;}}"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.headline);

;// CONCATENATED MODULE: ./src/components/atoms/ThemeToggle/styles.ts

const StyledThemeToggle = external_styled_components_default().button.withConfig({
  displayName: "styles__StyledThemeToggle",
  componentId: "sc-1b7mai8-0"
})(["display:flex;align-items:center;justify-content:center;background:transparent;border:1px solid ", ";color:", ";border-radius:16px;width:32px;height:32px;transition:0.2s;cursor:pointer;&:hover{color:", ";}"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.text, ({
  theme
}) => theme.headline);

;// CONCATENATED MODULE: ./src/redux/actionTypes.ts
const SET_THEME = 'SET_THEME';
;// CONCATENATED MODULE: ./src/redux/actions/theme.ts

const setTheme = payload => ({
  type: SET_THEME,
  payload
});
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: ./public/assets/dark.svg
var _path;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgDark(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "dark_svg__feather dark_svg__feather-moon",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
  })));
}
/* harmony default export */ const dark = (SvgDark);
;// CONCATENATED MODULE: ./public/assets/light.svg
var _circle, light_path;
var light_excluded = ["title", "titleId"];
function light_extends() { light_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return light_extends.apply(this, arguments); }
function light_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = light_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function light_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgLight(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = light_objectWithoutProperties(_ref, light_excluded);
  return /*#__PURE__*/external_react_.createElement("svg", light_extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "light_svg__feather light_svg__feather-sun",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_.createElement("title", {
    id: titleId
  }, title) : null, _circle || (_circle = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 5
  })), light_path || (light_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
  })));
}
/* harmony default export */ const light = (SvgLight);
;// CONCATENATED MODULE: ./src/components/atoms/ThemeToggle/ThemeToggle.tsx








const ThemeToggle = () => {
  const theme = (0,external_react_redux_namespaceObject.useSelector)(getTheme);
  const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
  const lightTheme = theme === 'light';

  const handleToggle = () => {
    dispatch(setTheme(lightTheme ? 'dark' : 'light'));
  };

  return /*#__PURE__*/jsx_runtime_.jsx(StyledThemeToggle, {
    onClick: handleToggle,
    title: `Switch to ${lightTheme ? 'dark' : 'light'} theme`,
    children: lightTheme ? /*#__PURE__*/jsx_runtime_.jsx(dark, {}) : /*#__PURE__*/jsx_runtime_.jsx(light, {})
  });
};


;// CONCATENATED MODULE: ./src/components/atoms/ThemeToggle/index.ts

;// CONCATENATED MODULE: ./src/components/molecules/Navigation/Navigation.tsx






const Navigation = ({
  onClick
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(StyledNavigation, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(List, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: onClick,
            children: "Home"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/about",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: onClick,
            children: "About"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/education",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: onClick,
            children: "Education"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/work",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: onClick,
            children: "Work"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/portfolio",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: onClick,
            children: "Portfolio"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "desktop-only",
        children: /*#__PURE__*/jsx_runtime_.jsx(ThemeToggle, {})
      })]
    })
  });
};


;// CONCATENATED MODULE: ./src/components/molecules/Navigation/index.ts

;// CONCATENATED MODULE: ./src/components/molecules/MobileNavigation/MobileNavigation.tsx










const MobileNavigation = () => {
  const {
    0: isOpen,
    1: setOpen
  } = (0,external_react_.useState)(false);

  const toggle = () => setOpen(prev => !prev);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledMobileNavigation, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(ThemeToggle, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(Menu, {
          onClick: toggle,
          children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* Icon */.J, {
            icon: isOpen ? 'CLOSE' : 'MENU'
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Overlay, {
      className: external_classnames_default()({
        open: isOpen
      }),
      children: /*#__PURE__*/jsx_runtime_.jsx(Navigation, {
        onClick: () => setOpen(false)
      })
    })]
  });
};


;// CONCATENATED MODULE: ./src/components/molecules/MobileNavigation/index.ts

;// CONCATENATED MODULE: ./src/components/organisms/Header/Header.tsx








const Header = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    children: /*#__PURE__*/jsx_runtime_.jsx(Container/* Container */.W, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Flex, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Nathan Abela"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Desktop, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Navigation, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(Mobile, {
          children: /*#__PURE__*/jsx_runtime_.jsx(MobileNavigation, {})
        })]
      })
    })
  });
};


;// CONCATENATED MODULE: ./src/components/organisms/Header/index.ts

;// CONCATENATED MODULE: ./src/components/templates/Layout/styles.ts

const StyledLayout = external_styled_components_default().div.withConfig({
  displayName: "styles__StyledLayout",
  componentId: "sc-10u3re6-0"
})(["min-height:100vh;display:flex;flex-direction:column;justify-content:space-between;"]);

;// CONCATENATED MODULE: ./src/components/templates/Layout/Layout.tsx






const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledLayout, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
};


;// CONCATENATED MODULE: ./src/components/templates/Layout/index.ts

;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: ./src/redux/reducers/theme.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  currentTheme: 'light'
};

const theme = (state = initialState, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_namespaceObject.HYDRATE:
      if (action.payload.app === 'init') delete action.payload.app;
      if (action.payload.page === 'init') delete action.payload.page;
      return _objectSpread(_objectSpread({}, state), action.payload);

    case SET_THEME:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentTheme: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ const reducers_theme = (theme);
;// CONCATENATED MODULE: ./src/redux/reducers/index.ts


const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
  theme: reducers_theme
});
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./src/redux/store.ts





const store = ctx => (0,external_redux_namespaceObject.createStore)(rootReducer, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
const storeWrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(store, {
  debug: false
});
;// CONCATENATED MODULE: ./src/styles/themes.ts
const brandColours = {
  white: '#ffffff',
  whiteVariant: '#f9fafc',
  black: '#000000',
  blackVariant: '#000000be',
  grey: '#b2b2b2',
  primary: '#e71837',
  primaryVariant: '#e8213f'
};
const darkTheme = {
  body: brandColours.black,
  text: brandColours.grey,
  grey: brandColours.grey,
  primary: brandColours.primary,
  headline: brandColours.white
};
const lightTheme = {
  body: brandColours.whiteVariant,
  text: brandColours.blackVariant,
  grey: brandColours.grey,
  primary: brandColours.primaryVariant,
  headline: brandColours.black
};
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _app_ownKeys(Object(source), !0).forEach(function (key) { _app_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















router_default().events.on('routeChangeStart', () => external_nprogress_default().start());
router_default().events.on('routeChangeComplete', () => external_nprogress_default().done());
router_default().events.on('routeChangeError', () => external_nprogress_default().done());

function MyApp({
  Component,
  pageProps
}) {
  const theme = (0,external_react_redux_namespaceObject.useSelector)(getTheme);
  const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();

  const handleEventListener = e => e.matches ? dispatch(setTheme('dark')) : dispatch(setTheme('light'));

  (0,external_react_.useEffect)(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dispatch(setTheme('dark'));
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleEventListener);
    return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleEventListener);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
      theme: theme === 'light' ? lightTheme : darkTheme,
      children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyles, {}), /*#__PURE__*/jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
      })]
    })
  });
}

/* harmony default export */ const _app = (storeWrapper.withRedux(MyApp));

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,681], () => (__webpack_exec__(2527)));
module.exports = __webpack_exports__;

})();