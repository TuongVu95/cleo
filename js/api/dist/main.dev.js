"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var baseUrl = 'https://admin.cleospa.vn/api/v1/cleospa/posts';
fetch(baseUrl).then(function _callee(response) {
  var result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(response.json());

        case 2:
          result = _context.sent;
          return _context.abrupt("return", result.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}).then(function (data) {
  var TopPost = [];
  var BottomPost = [];
  data.map(function (element, index) {
    if (index >= 4) {
      BottomPost = [].concat(_toConsumableArray(BottomPost), [element]);
    } else {
      TopPost = [].concat(_toConsumableArray(TopPost), [element]);
    }
  });

  function showData() {
    for (var i = 0; i <= TopPost; i++) {
      console.log(i);
      var div = "\n                        <div class=\"news__main-img\">\n                            <img src=\"././images/news/desktop/main-news.png\" alt=\"\">\n                        </div>\n                        <div class=\"news--subtitle f-w-700 f-s-p-20px p-t-12\">\n                            ".concat(item.title, "\n                        </div>\n                        <div class=\"news--text f-w-400 f-s-p-16px p-t-4\">\n                            C\xF3 m\u1ED9t s\u1ED1 \u0111i\u1EC3m l\u01B0u \xFD khi \u0111i l\xE0m nail m\xE0 b\u1EA1n c\u1EA7n ph\u1EA3i n\u1EAFm v\u1EEFng \u0111\u1EC3 tr\xE1nh g\u1EB7p r\u1EAFc r\u1ED1i cho\n                            b\u1EA3n\n                            th\xE2n sau n\xE0y.\n                        </div>\n                        <div class=\"text--time p-t-4\">\n                            1 gi\u1EDD tr\u01B0\u1EDBc\n                        </div>\n                    ");
      $('.main-post').append(div);
    }
  }

  showData();
})["catch"](function (error) {
  throw new Error(console.error('Error:', error));
});