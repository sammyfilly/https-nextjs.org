(function(){var e={845:function(e,t,i){var o=typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||window;var n=Function.prototype.apply;t.setTimeout=function(){return new Timeout(n.call(setTimeout,o,arguments),clearTimeout)};t.setInterval=function(){return new Timeout(n.call(setInterval,o,arguments),clearInterval)};t.clearTimeout=t.clearInterval=function(e){if(e){e.close()}};function Timeout(e,t){this._id=e;this._clearFn=t}Timeout.prototype.unref=Timeout.prototype.ref=function(){};Timeout.prototype.close=function(){this._clearFn.call(o,this._id)};t.enroll=function(e,t){clearTimeout(e._idleTimeoutId);e._idleTimeout=t};t.unenroll=function(e){clearTimeout(e._idleTimeoutId);e._idleTimeout=-1};t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;if(t>=0){e._idleTimeoutId=setTimeout((function onTimeout(){if(e._onTimeout)e._onTimeout()}),t)}};i(505);t.setImmediate=typeof self!=="undefined"&&self.setImmediate||typeof global!=="undefined"&&global.setImmediate||this&&this.setImmediate;t.clearImmediate=typeof self!=="undefined"&&self.clearImmediate||typeof global!=="undefined"&&global.clearImmediate||this&&this.clearImmediate},505:function(e){"use strict";e.exports=require("next/dist/compiled/setimmediate")}};var t={};function __nccwpck_require__(i){var o=t[i];if(o!==undefined){return o.exports}var n=t[i]={exports:{}};var r=true;try{e[i].call(n.exports,n,n.exports,__nccwpck_require__);r=false}finally{if(r)delete t[i]}return n.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var i=__nccwpck_require__(845);module.exports=i})();