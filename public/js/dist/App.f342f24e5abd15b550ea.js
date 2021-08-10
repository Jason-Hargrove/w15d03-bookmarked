/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/AddBookmark.js":
/*!***************************************!*\
  !*** ./src/components/AddBookmark.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nconst AddBookmark = _ref => {\n  let {\n    onAdd\n  } = _ref;\n  const [title, setTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const [url, setUrl] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const onSubmit = e => {\n    e.preventDefault();\n\n    if (!title) {\n      alert('Please add a bookmark');\n      return;\n    }\n\n    onAdd({\n      title,\n      url\n    });\n    setTitle('');\n    setUrl('');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: onSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"form-label\"\n  }, \"Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"form-control\",\n    type: \"text\",\n    placeholder: \"Add Bookmark\",\n    value: title,\n    onChange: e => setTitle(e.target.value)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-text\"\n  }, \"We'll always share your email with everyone.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"form-label\"\n  }, \"url\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"form-control\",\n    type: \"text\",\n    placeholder: \"Add url\",\n    value: url,\n    onChange: e => setUrl(e.target.value)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Save Task\",\n    className: \"btn btn-primary mb-3\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AddBookmark);\n\n//# sourceURL=webpack:///./src/components/AddBookmark.js?");

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Button = _ref => {\n  let {\n    color,\n    text,\n    onClick\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: onClick,\n    style: {\n      backgroundColor: color\n    },\n    className: \"btn mb-3 add-btn\"\n  }, text);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Button);\n\n//# sourceURL=webpack:///./src/components/Button.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.js\");\n\n\n\nconst Header = _ref => {\n  let {\n    title,\n    onAdd,\n    showAdd\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"mt-4 mb-4\"\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    color: showAdd ? 'red' : 'green',\n    text: showAdd ? 'Close' : 'Add a Bookmark',\n    onClick: onAdd\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nconst NavBar = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"navbar navbar-dark bg-dark\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"nav\"\n  }, props.routes.map(_ref => {\n    let {\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      className: \"nav-link active\",\n      key: key,\n      to: path\n    }, key);\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (NavBar);\n\n//# sourceURL=webpack:///./src/components/NavBar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction About(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container mt-3\"\n  }, \"This is the \", props.page, \" page. Click on a title to edit or delete.\");\n}\n\n//# sourceURL=webpack:///./src/pages/About.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./src/components/Button.js\");\n/* harmony import */ var _components_AddBookmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddBookmark */ \"./src/components/AddBookmark.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nfunction Home(props) {\n  const [bookmarks, setBookmarks] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]); // <----- Bookmarks State\n  // ↓↓↓↓↓↓ For showing and hiding the create form via a btn. ↓↓↓↓↓\n\n  const [showAddBookmark, setShowAddBookmark] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false); // ↓↓↓↓↓↓ After the component mounts ↓↓↓↓↓\n  // Fetch all blog posts with the nasty looking string. Turns it into an object we can do something with.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch('/api/bookmarks');\n        const data = yield response.json();\n        setBookmarks(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []); // ===== Add Bookmark =====\n\n  const addBookmark = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator(function* (e) {\n      try {\n        const response = yield fetch('/api/bookmarks/', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(e)\n        });\n        const data = yield response.json();\n        setBookmarks([...bookmarks, data]);\n      } catch (error) {\n        res.status(404).json({\n          message: error.message\n        });\n      }\n    });\n\n    return function addBookmark(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container mt-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    title: \"It's the bookmark page\",\n    onAdd: () => setShowAddBookmark(!showAddBookmark),\n    showAdd: showAddBookmark\n  }), showAddBookmark && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddBookmark__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    onAdd: addBookmark\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"list-group\"\n  }, bookmarks.map(bookmark => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: bookmark._id,\n      className: \"list-group-item\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      to: \"/\".concat(bookmark._id)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, bookmark.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: bookmark.url\n    }, bookmark.url));\n  })));\n}\n\n//# sourceURL=webpack:///./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/Post.js":
/*!***************************!*\
  !*** ./src/pages/Post.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Show; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nfunction Show(props) {\n  const [bookmark, setBookmark] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const titleInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null); // It's like doc.querySelector('input#title').\n\n  const urlInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null); // doc.querySelector('input#url').\n\n  const handleUpdate = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (e) {\n      e.preventDefault();\n\n      try {\n        const response = yield fetch(\"/api/bookmarks/\".concat(props.match.params.id), {\n          method: 'PUT',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify({\n            title: titleInput.current.value,\n            // <----- Current has all the dom elements you love.\n            url: urlInput.current.value\n          })\n        });\n        const data = yield response.json();\n        setBookmark(data);\n      } catch (error) {\n        console.error(error);\n      } finally {\n        window.location.assign('/'); // Send us back to '/Home' / reload everyting. Had to change it to '/'\n      }\n    });\n\n    return function handleUpdate(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"/api/bookmarks/\".concat(props.match.params.id));\n        const data = yield response.json();\n        setBookmark(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []);\n\n  const handleDelete = /*#__PURE__*/function () {\n    var _ref3 = _asyncToGenerator(function* (e) {\n      try {\n        const response = yield fetch(\"/api/bookmarks/\".concat(props.match.params.id), {\n          method: 'DELETE',\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        });\n        const deletedBookmark = yield response.json(); // Saved deleted blog if we want to use it.\n      } catch (error) {\n        console.error(error);\n      } finally {\n        window.location.assign('/'); // Send us back to '/Home' / reload everyting. Had to change it to '/'\n      }\n    });\n\n    return function handleDelete(_x2) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, Object.keys(bookmark).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, bookmark.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: bookmark.url\n  }, bookmark.url)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Loading...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleUpdate\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"form-label\"\n  }, \"Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    ref: titleInput,\n    defaultValue: bookmark.title\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"form-label\"\n  }, \"Url\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    ref: urlInput,\n    defaultValue: bookmark.url\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-text\"\n  }, \"Whatever you put in here with be a link.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"d-inline\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"btn btn-primary\",\n    type: \"submit\",\n    value: \"Update Bookmark\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"d-inline p-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn btn-danger\",\n    onClick: handleDelete,\n    type: \"button\"\n  }, \"DELETE ME\"))));\n}\n\n//# sourceURL=webpack:///./src/pages/Post.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _pages_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Post */ \"./src/pages/Post.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\n\n\n\n\n\n\nconst AppRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    routes: _routes__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Switch */ \"c\"], null, _routes__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"].map(_ref => {\n    let {\n      Component,\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      key: key,\n      path: path,\n      exact: true,\n      component: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {\n        page: key\n      })\n    });\n  }), \"// \\u2193\\u2193\\u2193\\u2193\\u2193 Added my own route \\u2193\\u2193\\u2193\\u2193\\u2193\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n    path: '/:id' // Gets put in props.params.id.\n    ,\n    render: routerProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Post__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], routerProps) // Individual Post.\n\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppRouter);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/About */ \"./src/pages/About.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n\n\n\nconst routes = [{\n  Component: _pages_Home__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"],\n  key: 'Home',\n  path: '/'\n}, {\n  Component: _pages_About__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'About',\n  path: '/about'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ })

/******/ });