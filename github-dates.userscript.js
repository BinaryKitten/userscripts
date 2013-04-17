// ==UserScript==
// @name       date switcher
// @namespace  http://github.com/
// @version    0.1
// @description  Switches Relative Dates around
// @match      https://github.com/*
// @copyright  2013+, BinaryKitten
// ==/UserScript==
Array.prototype.forEach.call(document.getElementsByClassName('js-relative-date'), function(relativeDate) {
    var title = relativeDate.innerText;
    relativeDate.innerText = relativeDate.getAttribute('title');
    relativeDate.setAttribute('title', title);
});


