(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // hello.js
  var require_hello = __commonJS({
    "hello.js"(exports, module) {
      var hello2 = "Hello, bundle";
      console.log(hello2);
      module.exports = hello2;
    }
  });

  // index.js
  var hello = require_hello();
  aaa;
})();
