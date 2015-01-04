
var PickerDialog = function(/**Array**/options){
	var selfWindow = Ti.UI.createWindow({
		width:Ti.UI.FILL,
		height:Ti.UI.SIZE,
		bottom:0
	});
	
	var pickerView = Ti.UI.createView({
		height:Ti.UI.SIZE,
		width:Ti.UI.FILL,
		layout:"vertical"
	});
	var bar = Ti.UI.createView({
		width:Ti.UI.FILL,
		height:"40dp",
		backgroundColor:"#eeeeee",
		top:"0dp"
	});
	
	var done = Ti.UI.createButton({
		height:"35dp",
		width:"70dp",
		title:L("Done", "Done"),
		left:"5dp",
		borderWidth:1,
		borderRadius:5,
		backgroundColor:"#9A1402",
		color:"white"
	});
	var cancel = Ti.UI.createButton({
		height:"35dp",
		width:"70dp",
		title:L("Cancel", "Cancel"),
		right:"5dp",
		borderWidth:1,
		borderRadius:5,
		backgroundColor:"#9A1402",
		color:"white"
	});
	done.addEventListener("click", function(e){
		selfWindow.fireEvent("done", {name:picker.getSelectedRow(0).id,value:picker.getSelectedRow(0).title});
		selfWindow.close();
	});
	cancel.addEventListener("click", function(e){
		selfWindow.close();
	});
	bar.add(done);
	bar.add(cancel);
	pickerView.add(bar);
	var picker = Ti.UI.createPicker({
		selectionIndicator:true
	});
	
	var pickerOptions = [];
	Ti.API.info(typeof options);
	if(options != null && (typeof options === "object")){
		for(var i=0, j=options.length; i<j; i++){
			var pickerRow = Ti.UI.createPickerRow({
				id:options[i].name,
				title: options[i].value
			});
			pickerOptions.push(pickerRow);
		}
		
		picker.add(pickerOptions);
	}
	
	pickerView.add(picker);
	selfWindow.add(pickerView);
	return selfWindow;
	
};

module.exports = PickerDialog;
