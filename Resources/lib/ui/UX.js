/***
 * @author : Salem Khan
 * @date : 8/12/2014
 * @Description : UI lib providing functions for creating different UI elements.
 * A global object UI is available throughout the application.
 *
 */


/**
 * @param {Titanium.UI.View} 
 * 
 * @return Titanium.UI.View
 */
exports.View = function(parameters) {
    return Titanium.UI.createView(parameters);
};

/**
 * @param {Titanium.UI.Label} 
 * @return Titanium.UI.Label
 */
exports.Label = function(parameters) {
    return Titanium.UI.createLabel(parameters);
};

/**
 * @param {Titanium.UI.Image} 
 * @return Titanium.UI.Image
 */
exports.Image = function(parameters) {
    return Titanium.UI.createImageView(parameters);
};

/**
 * @param {Titanium.UI.Window} 
 * @return Titanium.UI.Window
 */
exports.Window = function(parameters) {
    return Titanium.UI.createWindow(parameters);
};

/**
 * @param {Titanium.UI.TextField} 
 * @return Titanium.UI.TextField
 */
exports.TextField = function(parameters) {
  return Titanium.UI.createTextField(parameters);  
};
/**
 * @param {Titanium.UI.Button} 
 * @return Titanium.UI.Button
 */
exports.Button = function(parameters) {
    return Titanium.UI.createButton(parameters);
};
/**
 * @param {Titanium.UI.View}
 * @param {Titanium.UI.Label} 
 * @param {Titanium.UI.Label}
 * 
 * @return Titanium.UI.View
 */
exports.IconButton = function(v, l, ficon){
    v.layout = 'horizontal';
    v.center = "center.y";
    var view = Titanium.UI.createView(v);
    l.touchEnabled = ficon.touchEnabled = false;
    var label = Titanium.UI.createLabel(l);
    var icon = Titanium.UI.createLabel(ficon);
    if(LAYOUT == undefined){
       var LAYOUT = require ("lib/layout");
    }
    
    LAYOUT.ApplyHorizontalLayout(view, [icon, label], 4, 5, v.direction);
    
    return view;
};

/**
 * @param {Titanium.UI.Picker} 
 * @param {Array} options An array of
 * 
 * @return Titanium.UI.Picker
 */
exports.Picker = function(parameters, options) {
    
    var picker = Titanium.UI.createPicker(parameters);
    pickerOptions = [];
    for(var i=0, j=options.length; i<j; i++){
        pickerOptions[i] = Titanium.UI.createPickerRow({
            title: options[i].text,
            id: options[i].value
        });             
    }
    picker.add(pickerOptions);
    picker.setSelectedRow(0, 0, false); 
    
    return picker; 
};

/**
 * @param Titanium.UI.Picker parameters
 * 
 * @return Titanium.UI.Picker
 */
exports.DatePicker = function(parameters) {
	
    var lable = Titanium.UI.createLabel({
       height : Titanium.UI.SIZE,
       top : args.top,
       width :args.width,
       editable : false,
       hintText : args.hintText
    });
    
    var picker = Titanium.UI.createPicker({
       type:Titanium.UI.PICKER_TYPE_DATE,
       minDate:new Date(1960,0,1),
       maxDate:new Date(),
       value:new Date(),
    });
     
    textField.addEventListener('click', function(e){
       if(Titanium.Platform.ostype == 'Android'){
	        picker.showDatePickerDialog({
	            value: new Date(1999,1,1),
	            callback: function(e) {
	            if (e.cancel) {
	                Titanium.API.info('User canceled dialog');
	              } else {
	                Titanium.API.info('User selected date: ' + e.value.getDay() + ' ' + e.value.getMonth() + ' ' + e.value.getFullYear());
	                textField.value =  e.value.getDay() + ' / ' + e.value.getMonth() + ' / ' + e.value.getFullYear();
	              }
	             }
	        });
        }
        
    });
    
    return  textField;
};

/**Option Menu*/
exports.OptionsMenu = function(args, onClick) {
    var optionMenu = Titanium.UI.createOptionDialog(args);
    optionMenu.addEventListener('click', onClick);
    return optionMenu;
};

exports.AlertDialog = function(args, onClick) {
    var alertDialog = Titanium.UI.createAlertDialog(args);
    alertDialog.addEventListener('click', onClick);
    return alertDialog;
};

exports.ActivityIndicatorDialog = function(args)
{
     var alertDialog = Titanium.UI.createAlertDialog({
         title:L('LoadingPleaseWait','Loading, please wait...'),
     });
     activitiIndicator = Titanium.UI.createActivityIndicator(args);
     if(Titanium.Platform.name === 'android'){
     	alertDialog.add(activitiIndicator);
     	return alertDialog;
     }
     return activitiIndicator;
};

