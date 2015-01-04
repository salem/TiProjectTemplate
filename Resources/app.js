//import library
/**
 * @class
 * global object
 */
var Global = {};

Global.Language = "en";
Global.TextAlign = Titanium.UI.TEXT_ALIGNMENT_LEFT;
Global.Direction = "ltr";

Titanium.include("lib/Fonts.js");
Titanium.include("lib/AppIcons.js");
Titanium.include("lib/AbstractWindow.js");
var Translator = require('lib/Translator');
var LAYOUT = require('lib/layout');
var UI = require("lib/ui/UX");

var win = UI.Window({
    fullscreen:false,
    title:"This is a window",
 
    backgroundColor:"red",
    barColor:"green",
    height:Titanium.UI.FILL,
    navBarHidden:false
    
});

var L = Translator.Translate;

win.open();
