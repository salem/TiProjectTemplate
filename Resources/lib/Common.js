/** 
 * @author: salem Khan
 */





function getDialog(title, message, icon, autohide ){
	var alert = Ti.UI.createAlertDialog({
	    
		title: title,
		message: message,
		icon: icon,
		ok: L("OK", "OK")
	});
	
	alert.show();
	if(autohide){
		setTimeout(function(){alert.hide();}, 4000);
	}
}
/**
 * 
 * @param string title
 * @param string message
 * @param boolean auto hide
 */
exports.ErrorDialog = function(title, message, autohide){
	if(autohide === undefined){
		autohide = false;
	}	
	getDialog(title, message, "error.png", autohide);
};

/**
 * 
 * @param string title
 * @param string message
 * @param boolean autohide
 */
exports.WarningDialog = function(title, message, autohide){
	if(autohide === undefined) autohide = false;
	getDialog(title, message, "warning.png", autohide);
};
exports.Alert = function(title, message, autohide){
	if(autohide === undefined) autohide = false;
	getDialog(title, message, "", autohide);
};
/**
 * 
 * @param String title
 * @param String message
 * @param String icon
 * @param String ok
 */
exports.Dialog = function(title, message){
	var alert = Ti.UI.createAlertDialog({
		title: title,
		message: message,
		icon: "/images/appicon.png",
		ok: L("Close", "Close")
	});
	
	alert.show();
};

/**
 * 
 * @param {Object} controls
 * @param {Object} view
 * @param {Object} language
 */
exports.addView = function(controls, view, language){
	if(language == "en"){
		for(var i=0,j=controls.length; i<j; i++){
			view.add(controls[i]);
		}
	}
	else{
		for(var i=controls.length-1; i>=0; i--){
			view.add(controls[i]);
		}
	}
};
function calculateAppWidth(){
	if(Ti.Platform.osname == 'android'){
		return Ti.Platform.displayCaps.platformWidth / Ti.Platform.displayCaps.logicalDensityFactor;
	}
	else{
		return Ti.Platform.displayCaps.platformWidth;
	}
};
function calculateAppHeight(){
	if(Ti.Platform.osname == "android"){
		return Ti.Platform.displayCaps.platformHeight / Ti.Platform.displayCaps.logicalDensityFactor;
	}
	else{
		return Ti.Platform.displayCaps.platformHeight;
	}
}
exports.appWidth = calculateAppWidth(); // Ti.Platform.displayCaps.platformWidth / Ti.Platform.displayCaps.logicalDensityFactor;
exports.appHeight = calculateAppHeight(); // Ti.Platform.displayCaps.platformHeigh / Ti.Platform.displayCaps.logicalDensityFactor;

exports.trace = function(message){Ti.API.info(message);};

exports.destroyView = function(/*Ti.UI.View*/parent, /*Ti.UI.View*/view){
	for(var i=view.children.length-1; i>=0; i--){
		exports.destroyView(view, view.children[i]);
	}
	parent.remove(view);
	view = null;
};

exports.wazard = {navi:null, windowStack:[]};
