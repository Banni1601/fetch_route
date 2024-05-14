import {
  __commonJS,
  require_react
} from "./chunk-QI53LHDY.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-loader-spinner/dist/loader/Circles.js
var require_Circles = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/Circles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Circles = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var Circles = function Circles2(props) {
      return _react["default"].createElement("svg", {
        width: props.width,
        height: props.height,
        viewBox: "0 0 135 135",
        xmlns: "http://www.w3.org/2000/svg",
        fill: props.color,
        "aria-label": props.label
      }, _react["default"].createElement("path", {
        d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z"
      }, _react["default"].createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 67 67",
        to: "-360 67 67",
        dur: "2.5s",
        repeatCount: "indefinite"
      })), _react["default"].createElement("path", {
        d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z"
      }, _react["default"].createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 67 67",
        to: "360 67 67",
        dur: "8s",
        repeatCount: "indefinite"
      })));
    };
    exports.Circles = Circles;
    Circles.propTypes = {
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      color: _propTypes["default"].string,
      label: _propTypes["default"].string
    };
    Circles.defaultProps = {
      height: 80,
      width: 80,
      color: "green",
      label: "audio-loading"
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/Watch.js
var require_Watch = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/Watch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Watch = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var Watch = function Watch2(props) {
      return _react["default"].createElement("svg", {
        width: props.width,
        height: props.height,
        version: "1.1",
        id: "L2",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 100",
        enableBackground: "new 0 0 100 100",
        xmlSpace: "preserve",
        "aria-label": props.label
      }, _react["default"].createElement("circle", {
        fill: "none",
        stroke: props.color,
        strokeWidth: "4",
        strokeMiterlimit: "10",
        cx: "50",
        cy: "50",
        r: props.radius
      }), _react["default"].createElement("line", {
        fill: "none",
        strokeLinecap: "round",
        stroke: props.color,
        strokeWidth: "4",
        strokeMiterlimit: "10",
        x1: "50",
        y1: "50",
        x2: "85",
        y2: "50.5"
      }, _react["default"].createElement("animateTransform", {
        attributeName: "transform",
        dur: "2s",
        type: "rotate",
        from: "0 50 50",
        to: "360 50 50",
        repeatCount: "indefinite"
      })), _react["default"].createElement("line", {
        fill: "none",
        strokeLinecap: "round",
        stroke: props.color,
        strokeWidth: "4",
        strokeMiterlimit: "10",
        x1: "50",
        y1: "50",
        x2: "49.5",
        y2: "74"
      }, _react["default"].createElement("animateTransform", {
        attributeName: "transform",
        dur: "15s",
        type: "rotate",
        from: "0 50 50",
        to: "360 50 50",
        repeatCount: "indefinite"
      })));
    };
    exports.Watch = Watch;
    Watch.propTypes = {
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      color: _propTypes["default"].string,
      label: _propTypes["default"].string,
      radius: _propTypes["default"].number
    };
    Watch.defaultProps = {
      height: 80,
      width: 80,
      color: "green",
      label: "audio-loading",
      radius: 48
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/Audio.js
var require_Audio = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/Audio.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Audio = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var Audio = function Audio2(props) {
      return _react["default"].createElement("svg", {
        height: props.height,
        width: props.width,
        fill: props.color,
        viewBox: "0 0 55 80",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": props.label
      }, _react["default"].createElement("g", {
        transform: "matrix(1 0 0 -1 0 80)"
      }, _react["default"].createElement("rect", {
        width: "10",
        height: "20",
        rx: "3"
      }, _react["default"].createElement("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "4.3s",
        values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("rect", {
        x: "15",
        width: "10",
        height: "80",
        rx: "3"
      }, _react["default"].createElement("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "2s",
        values: "80;55;33;5;75;23;73;33;12;14;60;80",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("rect", {
        x: "30",
        width: "10",
        height: "50",
        rx: "3"
      }, _react["default"].createElement("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "1.4s",
        values: "50;34;78;23;56;23;34;76;80;54;21;50",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("rect", {
        x: "45",
        width: "10",
        height: "30",
        rx: "3"
      }, _react["default"].createElement("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "2s",
        values: "30;45;13;80;56;72;45;76;34;23;67;30",
        calcMode: "linear",
        repeatCount: "indefinite"
      }))));
    };
    exports.Audio = Audio;
    Audio.propTypes = {
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      color: _propTypes["default"].string,
      label: _propTypes["default"].string
    };
    Audio.defaultProps = {
      height: 80,
      width: 80,
      color: "green",
      label: "audio-loading"
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/BallTriangle.js
var require_BallTriangle = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/BallTriangle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BallTriangle = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var BallTriangle = function BallTriangle2(props) {
      return _react["default"].createElement("svg", {
        height: props.height,
        width: props.width,
        stroke: props.color,
        viewBox: "0 0 57 57",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": props.label
      }, _react["default"].createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        transform: "translate(1 1)",
        strokeWidth: "2"
      }, _react["default"].createElement("circle", {
        cx: "5",
        cy: "50",
        r: props.radius
      }, _react["default"].createElement("animate", {
        attributeName: "cy",
        begin: "0s",
        dur: "2.2s",
        values: "50;5;50;50",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "cx",
        begin: "0s",
        dur: "2.2s",
        values: "5;27;49;5",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        cx: "27",
        cy: "5",
        r: props.radius
      }, _react["default"].createElement("animate", {
        attributeName: "cy",
        begin: "0s",
        dur: "2.2s",
        from: "5",
        to: "5",
        values: "5;50;50;5",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "cx",
        begin: "0s",
        dur: "2.2s",
        from: "27",
        to: "27",
        values: "27;49;5;27",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        cx: "49",
        cy: "50",
        r: props.radius
      }, _react["default"].createElement("animate", {
        attributeName: "cy",
        begin: "0s",
        dur: "2.2s",
        values: "50;50;5;50",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "cx",
        from: "49",
        to: "49",
        begin: "0s",
        dur: "2.2s",
        values: "49;5;27;49",
        calcMode: "linear",
        repeatCount: "indefinite"
      })))));
    };
    exports.BallTriangle = BallTriangle;
    BallTriangle.propTypes = {
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      color: _propTypes["default"].string,
      label: _propTypes["default"].string,
      radius: _propTypes["default"].number
    };
    BallTriangle.defaultProps = {
      height: 80,
      width: 80,
      color: "green",
      radius: 5,
      label: "audio-loading"
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/Bars.js
var require_Bars = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/Bars.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Bars = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var Bars = function Bars2(props) {
      return _react["default"].createElement("svg", {
        width: props.width,
        height: props.height,
        fill: props.color,
        viewBox: "0 0 135 140",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": props.label
      }, _react["default"].createElement("rect", {
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
      }, _react["default"].createElement("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("rect", {
        x: "30",
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
      }, _react["default"].createElement("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("rect", {
        x: "60",
        width: "15",
        height: "140",
        rx: "6"
      }, _react["default"].createElement("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "y",
        begin: "0s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("rect", {
        x: "90",
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
      }, _react["default"].createElement("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("rect", {
        x: "120",
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
      }, _react["default"].createElement("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
      })));
    };
    exports.Bars = Bars;
    Bars.propTypes = {
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      color: _propTypes["default"].string,
      label: _propTypes["default"].string
    };
    Bars.defaultProps = {
      height: 80,
      width: 80,
      color: "green",
      label: "audio-loading"
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/CradleLoader.js
var require_CradleLoader = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/CradleLoader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CradleLoader = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var CradleLoader = function CradleLoader2(props) {
      return _react["default"].createElement("div", {
        "aria-label": props.label,
        role: "presentation",
        className: "container"
      }, _react["default"].createElement("div", {
        className: "react-spinner-loader-swing"
      }, _react["default"].createElement("div", {
        className: "react-spinner-loader-swing-l"
      }), _react["default"].createElement("div", null), _react["default"].createElement("div", null), _react["default"].createElement("div", null), _react["default"].createElement("div", null), _react["default"].createElement("div", null), _react["default"].createElement("div", {
        className: "react-spinner-loader-swing-r"
      })), _react["default"].createElement("div", {
        className: "react-spinner-loader-shadow"
      }, _react["default"].createElement("div", {
        className: "react-spinner-loader-shadow-l"
      }), _react["default"].createElement("div", null), _react["default"].createElement("div", null), _react["default"].createElement("div", null), _react["default"].createElement("div", null), _react["default"].createElement("div", null), _react["default"].createElement("div", {
        className: "react-spinner-loader-shadow-r"
      })));
    };
    exports.CradleLoader = CradleLoader;
    CradleLoader.propTypes = {
      label: _propTypes["default"].string
    };
    CradleLoader.defaultProps = {
      label: "audio-loading"
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/Grid.js
var require_Grid = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/Grid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Grid = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var Grid = function Grid2(props) {
      return _react["default"].createElement("svg", {
        width: props.width,
        height: props.height,
        viewBox: "0 0 105 105",
        fill: props.color,
        "aria-label": props.label
      }, _react["default"].createElement("circle", {
        cx: "12.5",
        cy: "12.5",
        r: props.radius
      }, _react["default"].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "0s",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        cx: "12.5",
        cy: "52.5",
        r: props.radius
      }, _react["default"].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "100ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        cx: "52.5",
        cy: "12.5",
        r: props.radius
      }, _react["default"].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "300ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        cx: "52.5",
        cy: "52.5",
        r: props.radius
      }, _react["default"].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "600ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        cx: "92.5",
        cy: "12.5",
        r: props.radius
      }, _react["default"].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "800ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        cx: "92.5",
        cy: "52.5",
        r: props.radius
      }, _react["default"].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "400ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        cx: "12.5",
        cy: "92.5",
        r: props.radius
      }, _react["default"].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "700ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        cx: "52.5",
        cy: "92.5",
        r: props.radius
      }, _react["default"].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "500ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        cx: "92.5",
        cy: "92.5",
        r: props.radius
      }, _react["default"].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "200ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })));
    };
    exports.Grid = Grid;
    Grid.propTypes = {
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      color: _propTypes["default"].string,
      label: _propTypes["default"].string,
      radius: _propTypes["default"].number
    };
    Grid.defaultProps = {
      height: 80,
      width: 80,
      color: "green",
      radius: 12.5,
      label: "audio-loading"
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/Hearts.js
var require_Hearts = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/Hearts.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Hearts = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var Hearts = function Hearts2(props) {
      return _react["default"].createElement("svg", {
        width: props.width,
        height: props.height,
        viewBox: "0 0 140 64",
        xmlns: "http://www.w3.org/2000/svg",
        fill: props.color,
        "aria-label": props.label
      }, _react["default"].createElement("path", {
        d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
        attributeName: "fill-opacity",
        from: "0",
        to: ".5"
      }, _react["default"].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "0s",
        dur: "1.4s",
        values: "0.5;1;0.5",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("path", {
        d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
        attributeName: "fill-opacity",
        from: "0",
        to: ".5"
      }, _react["default"].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "0.7s",
        dur: "1.4s",
        values: "0.5;1;0.5",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("path", {
        d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"
      }));
    };
    exports.Hearts = Hearts;
    Hearts.propTypes = {
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      color: _propTypes["default"].string,
      label: _propTypes["default"].string
    };
    Hearts.defaultProps = {
      height: 80,
      width: 80,
      color: "green",
      label: "audio-loading"
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/MutatingDots.js
var require_MutatingDots = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/MutatingDots.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MutatingDots = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var MutatingDots = function MutatingDots2(props) {
      return _react["default"].createElement("svg", {
        id: "goo-loader",
        width: props.width,
        height: props.height,
        "aria-label": props.label
      }, _react["default"].createElement("filter", {
        id: "fancy-goo"
      }, _react["default"].createElement("feGaussianBlur", {
        "in": "SourceGraphic",
        stdDeviation: "6",
        result: "blur"
      }), _react["default"].createElement("feColorMatrix", {
        "in": "blur",
        mode: "matrix",
        values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
        result: "goo"
      }), _react["default"].createElement("feComposite", {
        "in": "SourceGraphic",
        in2: "goo",
        operator: "atop"
      })), _react["default"].createElement("g", {
        filter: "url(#fancy-goo)"
      }, _react["default"].createElement("animateTransform", {
        id: "mainAnim",
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        from: "0 50 50",
        to: "359 50 50",
        dur: "1.2s",
        repeatCount: "indefinite"
      }), _react["default"].createElement("circle", {
        cx: "50%",
        cy: "40",
        r: props.radius,
        fill: props.color
      }, _react["default"].createElement("animate", {
        id: "cAnim1",
        attributeType: "XML",
        attributeName: "cy",
        dur: "0.6s",
        begin: "0;cAnim1.end+0.2s",
        calcMode: "spline",
        values: "40;20;40",
        keyTimes: "0;0.3;1",
        keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
      })), _react["default"].createElement("circle", {
        cx: "50%",
        cy: "60",
        r: props.radius,
        fill: props.secondaryColor
      }, _react["default"].createElement("animate", {
        id: "cAnim2",
        attributeType: "XML",
        attributeName: "cy",
        dur: "0.6s",
        begin: "0.4s;cAnim2.end+0.2s",
        calcMode: "spline",
        values: "60;80;60",
        keyTimes: "0;0.3;1",
        keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
      }))));
    };
    exports.MutatingDots = MutatingDots;
    MutatingDots.propTypes = {
      width: _propTypes["default"].number,
      secondaryColor: _propTypes["default"].string,
      height: _propTypes["default"].number,
      color: _propTypes["default"].string,
      radius: _propTypes["default"].number,
      label: _propTypes["default"].string
    };
    MutatingDots.defaultProps = {
      width: 80,
      height: 90,
      color: "green",
      radius: 11,
      secondaryColor: "green",
      label: "audio-loading"
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/Oval.js
var require_Oval = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/Oval.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Oval = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var Oval = function Oval2(props) {
      return _react["default"].createElement("svg", {
        width: props.width,
        height: props.height,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: props.color,
        "aria-label": props.label
      }, _react["default"].createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        transform: "translate(1 1)",
        strokeWidth: "2"
      }, _react["default"].createElement("circle", {
        strokeOpacity: ".5",
        cx: "18",
        cy: "18",
        r: props.radius
      }), _react["default"].createElement("path", {
        d: "M36 18c0-9.94-8.06-18-18-18"
      }, _react["default"].createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "1s",
        repeatCount: "indefinite"
      })))));
    };
    exports.Oval = Oval;
    Oval.propTypes = {
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      color: _propTypes["default"].string,
      label: _propTypes["default"].string,
      radius: _propTypes["default"].number
    };
    Oval.defaultProps = {
      height: 80,
      width: 80,
      color: "green",
      label: "audio-loading",
      radius: 18
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/Plane.js
var require_Plane = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/Plane.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Plane = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var Plane = function Plane2(props) {
      return _react["default"].createElement("svg", {
        className: "react-spinner-loader-svg-calLoader",
        xmlns: "http://www.w3.org/2000/svg",
        width: "230",
        height: "230",
        "aria-label": props.label
      }, _react["default"].createElement("desc", null, "Plane animation. Loading "), _react["default"].createElement("path", {
        className: "react-spinner-loader-cal-loader__path",
        style: {
          stroke: props.secondaryColor
        },
        d: "M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z",
        fill: "none",
        stroke: "#0099cc",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "10 10 10 10 10 10 10 432",
        strokeDashoffset: "77"
      }), _react["default"].createElement("path", {
        className: "cal-loader__plane",
        style: {
          fill: props.color
        },
        d: "M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z",
        fill: "#000033"
      }));
    };
    exports.Plane = Plane;
    Plane.propTypes = {
      secondaryColor: _propTypes["default"].string,
      color: _propTypes["default"].string,
      label: _propTypes["default"].string
    };
    Plane.defaultProps = {
      secondaryColor: "grey",
      color: "#FFA500",
      label: "async-loading"
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/Puff.js
var require_Puff = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/Puff.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Puff = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var Puff = function Puff2(props) {
      return _react["default"].createElement("svg", {
        width: props.width,
        height: props.height,
        viewBox: "0 0 44 44",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: props.color,
        "aria-label": props.label
      }, _react["default"].createElement("g", {
        fill: "none",
        fillRule: "evenodd",
        strokeWidth: "2"
      }, _react["default"].createElement("circle", {
        cx: "22",
        cy: "22",
        r: props.radius
      }, _react["default"].createElement("animate", {
        attributeName: "r",
        begin: "0s",
        dur: "1.8s",
        values: "1; 20",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.165, 0.84, 0.44, 1",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "strokeOpacity",
        begin: "0s",
        dur: "1.8s",
        values: "1; 0",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.3, 0.61, 0.355, 1",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        cx: "22",
        cy: "22",
        r: props.radius
      }, _react["default"].createElement("animate", {
        attributeName: "r",
        begin: "-0.9s",
        dur: "1.8s",
        values: "1; 20",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.165, 0.84, 0.44, 1",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "strokeOpacity",
        begin: "-0.9s",
        dur: "1.8s",
        values: "1; 0",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.3, 0.61, 0.355, 1",
        repeatCount: "indefinite"
      }))));
    };
    exports.Puff = Puff;
    Puff.propTypes = {
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      color: _propTypes["default"].string,
      label: _propTypes["default"].string,
      radius: _propTypes["default"].number
    };
    Puff.defaultProps = {
      height: 80,
      width: 80,
      color: "green",
      label: "audio-loading",
      radius: 1
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/RevolvingDot.js
var require_RevolvingDot = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/RevolvingDot.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RevolvingDot = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var RevolvingDot = function RevolvingDot2(props) {
      return _react["default"].createElement("svg", {
        version: "1.1",
        width: props.width,
        height: props.height,
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        "aria-label": props.label
      }, _react["default"].createElement("circle", {
        fill: "none",
        stroke: props.color,
        strokeWidth: "4",
        cx: "50",
        cy: "50",
        r: props.radius + 38,
        style: {
          opacity: 0.5
        }
      }), _react["default"].createElement("circle", {
        fill: props.color,
        stroke: props.color,
        strokeWidth: "3",
        cx: "8",
        cy: "54",
        r: props.radius
      }, _react["default"].createElement("animateTransform", {
        attributeName: "transform",
        dur: "2s",
        type: "rotate",
        from: "0 50 48",
        to: "360 50 52",
        repeatCount: "indefinite"
      })));
    };
    exports.RevolvingDot = RevolvingDot;
    RevolvingDot.propTypes = {
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      color: _propTypes["default"].string,
      label: _propTypes["default"].string,
      radius: _propTypes["default"].number
    };
    RevolvingDot.defaultProps = {
      height: 80,
      width: 80,
      color: "green",
      label: "audio-loading",
      radius: 6
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/Rings.js
var require_Rings = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/Rings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Rings = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var Rings = function Rings2(props) {
      return _react["default"].createElement("svg", {
        width: props.width,
        height: props.height,
        viewBox: "0 0 45 45",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: props.color,
        "aria-label": props.label
      }, _react["default"].createElement("g", {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1)",
        strokeWidth: "2"
      }, _react["default"].createElement("circle", {
        cx: "22",
        cy: "22",
        r: props.radius,
        strokeOpacity: "0"
      }, _react["default"].createElement("animate", {
        attributeName: "r",
        begin: "1.5s",
        dur: "3s",
        values: "6;22",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "stroke-opacity",
        begin: "1.5s",
        dur: "3s",
        values: "1;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "stroke-width",
        begin: "1.5s",
        dur: "3s",
        values: "2;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        cx: "22",
        cy: "22",
        r: props.radius,
        strokeOpacity: "0"
      }, _react["default"].createElement("animate", {
        attributeName: "r",
        begin: "3s",
        dur: "3s",
        values: "6;22",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "strokeOpacity",
        begin: "3s",
        dur: "3s",
        values: "1;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "strokeWidth",
        begin: "3s",
        dur: "3s",
        values: "2;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        cx: "22",
        cy: "22",
        r: props.radius + 2
      }, _react["default"].createElement("animate", {
        attributeName: "r",
        begin: "0s",
        dur: "1.5s",
        values: "6;1;2;3;4;5;6",
        calcMode: "linear",
        repeatCount: "indefinite"
      }))));
    };
    exports.Rings = Rings;
    Rings.propTypes = {
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      color: _propTypes["default"].string,
      label: _propTypes["default"].string,
      radius: _propTypes["default"].number
    };
    Rings.defaultProps = {
      height: 80,
      width: 80,
      color: "green",
      radius: 6,
      label: "audio-loading"
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/TailSpin.js
var require_TailSpin = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/TailSpin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TailSpin = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var TailSpin = function TailSpin2(props) {
      return _react["default"].createElement("svg", {
        width: props.width,
        height: props.height,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": props.label
      }, _react["default"].createElement("defs", null, _react["default"].createElement("linearGradient", {
        x1: "8.042%",
        y1: "0%",
        x2: "65.682%",
        y2: "23.865%",
        id: "a"
      }, _react["default"].createElement("stop", {
        stopColor: props.color,
        stopOpacity: "0",
        offset: "0%"
      }), _react["default"].createElement("stop", {
        stopColor: props.color,
        stopOpacity: ".631",
        offset: "63.146%"
      }), _react["default"].createElement("stop", {
        stopColor: props.color,
        offset: "100%"
      }))), _react["default"].createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        transform: "translate(1 1)"
      }, _react["default"].createElement("path", {
        d: "M36 18c0-9.94-8.06-18-18-18",
        id: "Oval-2",
        stroke: props.color,
        strokeWidth: "2"
      }, _react["default"].createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "0.9s",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        fill: "#fff",
        cx: "36",
        cy: "18",
        r: props.radius
      }, _react["default"].createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "0.9s",
        repeatCount: "indefinite"
      })))));
    };
    exports.TailSpin = TailSpin;
    TailSpin.propTypes = {
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      color: _propTypes["default"].string,
      label: _propTypes["default"].string,
      radius: _propTypes["default"].number
    };
    TailSpin.defaultProps = {
      height: 80,
      width: 80,
      color: "green",
      radius: 1,
      label: "audio-loading"
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/ThreeDots.js
var require_ThreeDots = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/ThreeDots.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ThreeDots = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var ThreeDots = function ThreeDots2(props) {
      return _react["default"].createElement("svg", {
        width: props.width,
        height: props.height,
        viewBox: "0 0 120 30",
        xmlns: "http://www.w3.org/2000/svg",
        fill: props.color,
        "aria-label": props.label
      }, _react["default"].createElement("circle", {
        cx: "15",
        cy: "15",
        r: props.radius + 6
      }, _react["default"].createElement("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "fillOpacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        cx: "60",
        cy: "15",
        r: props.radius,
        attributeName: "fillOpacity",
        from: "1",
        to: "0.3"
      }, _react["default"].createElement("animate", {
        attributeName: "r",
        from: "9",
        to: "9",
        begin: "0s",
        dur: "0.8s",
        values: "9;15;9",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "fillOpacity",
        from: "0.5",
        to: "0.5",
        begin: "0s",
        dur: "0.8s",
        values: ".5;1;.5",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), _react["default"].createElement("circle", {
        cx: "105",
        cy: "15",
        r: props.radius + 6
      }, _react["default"].createElement("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), _react["default"].createElement("animate", {
        attributeName: "fillOpacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })));
    };
    exports.ThreeDots = ThreeDots;
    ThreeDots.propTypes = {
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      color: _propTypes["default"].string,
      label: _propTypes["default"].string,
      radius: _propTypes["default"].number
    };
    ThreeDots.defaultProps = {
      height: 80,
      width: 80,
      color: "green",
      label: "audio-loading",
      radius: 9
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/Triangle.js
var require_Triangle = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/Triangle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Triangle = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var Triangle = function Triangle2(props) {
      return _react["default"].createElement("div", {
        className: "react-spinner-loader-svg"
      }, _react["default"].createElement("svg", {
        id: "triangle",
        width: props.width,
        height: props.height,
        viewBox: "-3 -4 39 39",
        "aria-label": props.label
      }, _react["default"].createElement("polygon", {
        fill: "transparent",
        stroke: props.color,
        strokeWidth: "1",
        points: "16,0 32,32 0,32"
      })));
    };
    exports.Triangle = Triangle;
    Triangle.propTypes = {
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      color: _propTypes["default"].string,
      label: _propTypes["default"].string
    };
    Triangle.defaultProps = {
      height: 80,
      width: 80,
      color: "green",
      label: "audio-loading"
    };
  }
});

// node_modules/react-loader-spinner/dist/loader/index.js
var require_loader = __commonJS({
  "node_modules/react-loader-spinner/dist/loader/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Spinner = void 0;
    var _Circles = require_Circles();
    var _Watch = require_Watch();
    var _Audio = require_Audio();
    var _BallTriangle = require_BallTriangle();
    var _Bars = require_Bars();
    var _CradleLoader = require_CradleLoader();
    var _Grid = require_Grid();
    var _Hearts = require_Hearts();
    var _MutatingDots = require_MutatingDots();
    var _Oval = require_Oval();
    var _Plane = require_Plane();
    var _Puff = require_Puff();
    var _RevolvingDot = require_RevolvingDot();
    var _Rings = require_Rings();
    var _TailSpin = require_TailSpin();
    var _ThreeDots = require_ThreeDots();
    var _Triangle = require_Triangle();
    var Spinner = {
      Circles: _Circles.Circles,
      Audio: _Audio.Audio,
      BallTriangle: _BallTriangle.BallTriangle,
      Bars: _Bars.Bars,
      CradleLoader: _CradleLoader.CradleLoader,
      Grid: _Grid.Grid,
      Hearts: _Hearts.Hearts,
      MutatingDots: _MutatingDots.MutatingDots,
      Oval: _Oval.Oval,
      Plane: _Plane.Plane,
      Puff: _Puff.Puff,
      RevolvingDot: _RevolvingDot.RevolvingDot,
      Rings: _Rings.Rings,
      TailSpin: _TailSpin.TailSpin,
      ThreeDots: _ThreeDots.ThreeDots,
      Triangle: _Triangle.Triangle,
      Watch: _Watch.Watch
    };
    exports.Spinner = Spinner;
  }
});

// node_modules/react-loader-spinner/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-loader-spinner/dist/index.js"(exports) {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = Loader;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _loader = require_loader();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    var componentNames = ["Audio", "BallTriangle", "Bars", "Circles", "Grid", "Hearts", "Oval", "Puff", "Rings", "TailSpin", "ThreeDots", "Watch", "RevolvingDot", "Triangle", "Plane", "MutatingDots", "CradleLoader"];
    function componentName(type) {
      if (componentNames.includes(type)) {
        return _loader.Spinner[type];
      }
      return _loader.Spinner.Audio;
    }
    function Loader(props) {
      var _useState = (0, _react.useState)(true), _useState2 = _slicedToArray(_useState, 2), display = _useState2[0], setDisplay = _useState2[1];
      (0, _react.useEffect)(function() {
        var timer;
        if (props.timeout && props.timeout > 0) {
          timer = setTimeout(function() {
            setDisplay(false);
          }, props.timeout);
        }
        return function() {
          if (timer)
            clearTimeout(timer);
        };
      });
      if (!props.visible || props.visible === "false") {
        return null;
      }
      return display ? _react["default"].createElement("div", {
        "aria-busy": "true",
        className: props.className,
        style: props.style
      }, _react["default"].createElement(componentName(props.type), _objectSpread({}, props))) : null;
    }
    Loader.propTypes = {
      type: _propTypes["default"].oneOf([].concat(componentNames)),
      style: _propTypes["default"].objectOf(_propTypes["default"].string),
      className: _propTypes["default"].string,
      visible: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
      timeout: _propTypes["default"].number
    };
    Loader.defaultProps = {
      type: "Audio",
      style: {},
      className: "",
      visible: true,
      timeout: 0
    };
  }
});
export default require_dist();
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-loader-spinner.js.map
