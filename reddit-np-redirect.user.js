// ==UserScript==
// @name       Reddit np Redirect
// @author     Michael Norris
// @namespace  http://norrism.com
// @version    1.0.0
// @description  Redirects Reddit No Participation (np) Links to Regular Site
// @match      http://np.reddit.com/*
// @match      https://np.reddit.com/*
// @downloadURL    https://github.com/norrism/reddit-sidebar-toggler/raw/master/reddit-np-redirect.user.js
// @run-at    document-start
// ==/UserScript==

var np_url = window.location.href;
var url = np_url.replace("np.", "");

window.location = url;
