(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // get_post_contents.js
  var require_get_post_contents = __commonJS({
    "get_post_contents.js"(exports, module) {
      var getPostContents2 = () => {
        const post1 = document.querySelector("#post-1");
        const post2 = document.querySelector("#post-2");
        const post3 = document.querySelector("#post-3");
        return [post1, post2, post3];
      };
      console.log(getPostContents2());
      module.exports = getPostContents2;
    }
  });

  // add_new_post.js
  var require_add_new_post = __commonJS({
    "add_new_post.js"(exports, module) {
      var addNewPost2 = (title) => {
        const newPostEl = document.createElement("div");
        const newId = document.querySelectorAll(".post").length + 1;
        newPostEl.innerText = title;
        newPostEl.className = "post";
        newPostEl.id = "post-" + newId;
        document.body.appendChild(newPostEl);
      };
      addNewPost2("Hello world");
      module.exports = addNewPost2;
    }
  });

  // index.js
  var getPostContents = require_get_post_contents();
  var addNewPost = require_add_new_post();
})();
