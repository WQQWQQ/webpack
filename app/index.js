/**
 * Created by Quincy on 2017/1/18.
 */
// var sub = require("./sub");
// var $ = require("jquery");
// require("./main.scss");
// var app = document.createElement("div");
// app.innerHTML = '<h1>Hello World</h1>';
// app.appendChild(sub());
// document.body.appendChild(app);
// $("body").append('<p>adasdsdasadasd</p>');

import './main.scss';
import generateText from './sub';
import './plugin.js';
// import "imports?jQuery=jquery!./plugin.js";
// import $ from 'jquery';

let app = document.createElement("div");
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
	$('hl').append('<p>' + number + '</p>');
	$("p").greenify();
	console.log(global);
});
app.innerHTML = '<h1>saddsadsadasd</h1>';
document.body.appendChild(app);
app.appendChild(generateText());