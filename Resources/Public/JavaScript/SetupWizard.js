define(["TYPO3/CMS/Backend/Modal","TYPO3/CMS/Backend/Severity","jquery"],(function(t,e,n){return function(){"use strict";var r={580:function(e){e.exports=t},339:function(t){t.exports=e},404:function(t){t.exports=n}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var n=o[t]={exports:{}};return r[t](n,n.exports,i),n.exports}i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};return function(){i.r(a);var t=i(404),e=i.n(t),n=i(580),r=i.n(n),o=i(339),l=i.n(o),u={triggerSelector:".t3js-setup-wizard-trigger",modalContentSelector:".t3js-setup-wizard-step1 .step-content",initialize:function(){e()(document).on("click",u.triggerSelector,(function(t){t.preventDefault();var n=e()(this),o=e()(u.modalContentSelector).clone(),i=[{text:n.data("button-close-text")||"Close",active:!0,btnClass:"btn-default",trigger:function(){r().currentModal.trigger("modal-dismiss")}},{text:n.data("button-ok-text")||"OK",btnClass:"btn-primary",trigger:function(t){self.location.href=n.attr("href").replace("%40title",r().currentModal.find('input[name="title"]').val()).replace("%40template",r().currentModal.find('input[name="template"]:checked').length).replace("%40install",r().currentModal.find('input[name="install"]:checked').length),r().currentModal.trigger("modal-dismiss")}}];r().show("Blog Setup Wizard",o,l().notice,i)}))}};u.initialize()}(),a}()}));