module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/post/[postId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/post/[postId].js":
/*!********************************!*\
  !*** ./pages/post/[postId].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Volumes/OldSSD/VsCode/ReactCourseUpSkilling/Next0(Part1)/01-starting-project 4/pages/post/[postId].js\";\n\n\n\nfunction DetailsPage(props) {\n  const {\n    0: post,\n    1: setPost\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const postId = router.query.postId;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const singlePost = props.post.filter(ele => ele.id == postId)[0];\n    console.log(singlePost);\n    setPost(singlePost);\n  }, [postId]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"app\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"DetailsPage \", postId]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this), post && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: post.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 18\n      }, this), post && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: post.body\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 18\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: router.back,\n        children: \"go back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, this)\n  }, void 0, false);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0L1twb3N0SWRdLmpzPzAwZjUiXSwibmFtZXMiOlsiRGV0YWlsc1BhZ2UiLCJwcm9wcyIsInBvc3QiLCJzZXRQb3N0IiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0SWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsInNpbmdsZVBvc3QiLCJmaWx0ZXIiLCJlbGUiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImJvZHkiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUMxQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhRCxNQUE1QjtBQUVBRSx5REFBUyxDQUFDLE1BQUk7QUFDWixVQUFNQyxVQUFVLEdBQUdULEtBQUssQ0FBQ0MsSUFBTixDQUFXUyxNQUFYLENBQWtCQyxHQUFHLElBQUVBLEdBQUcsQ0FBQ0MsRUFBSixJQUFVTixNQUFqQyxFQUF5QyxDQUF6QyxDQUFuQjtBQUNBTyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsVUFBWjtBQUNBUCxXQUFPLENBQUNPLFVBQUQsQ0FBUDtBQUNELEdBSlEsRUFJUCxDQUFDSCxNQUFELENBSk8sQ0FBVDtBQU1BLHNCQUNFO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNJO0FBQUEsbUNBQWlCQSxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVLTCxJQUFJLGlCQUFJO0FBQUEsa0JBQUtBLElBQUksQ0FBQ2M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRmIsRUFHS2QsSUFBSSxpQkFBSTtBQUFBLGtCQUFJQSxJQUFJLENBQUNlO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhiLGVBSUk7QUFBUSxlQUFPLEVBQUVaLE1BQU0sQ0FBQ2EsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFERjtBQVdEOztBQUVjbEIsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1twb3N0SWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmZ1bmN0aW9uIERldGFpbHNQYWdlKHByb3BzKSB7XG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwb3N0SWQgPSByb3V0ZXIucXVlcnkucG9zdElkXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc3Qgc2luZ2xlUG9zdCA9IHByb3BzLnBvc3QuZmlsdGVyKGVsZT0+ZWxlLmlkID09IHBvc3RJZClbMF1cbiAgICBjb25zb2xlLmxvZyhzaW5nbGVQb3N0KVxuICAgIHNldFBvc3Qoc2luZ2xlUG9zdClcbiAgfSxbcG9zdElkXSlcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nYXBwJz5cbiAgICAgICAgPGgxPkRldGFpbHNQYWdlIHtwb3N0SWR9PC9oMT5cbiAgICAgICAge3Bvc3QgJiYgPGgyPntwb3N0LnRpdGxlfTwvaDI+fVxuICAgICAgICB7cG9zdCAmJiA8cD57cG9zdC5ib2R5fTwvcD59XG4gICAgICAgIDxidXR0b24gb25DbGljaz17cm91dGVyLmJhY2t9PmdvIGJhY2s8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8Lz5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHNQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[postId].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });