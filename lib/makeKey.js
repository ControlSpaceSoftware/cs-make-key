'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeKey;

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeKey(obj) {
  return (0, _md2.default)(Object.keys(obj).sort().map(function (key) {
    return key + String(obj[key]);
  }).join('|'));
} /**
   * Created by onvelocity on 8/8/17.
   */

;