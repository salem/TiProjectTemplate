/**
 * @method
 * @param {Titanium.UI.Window}
 * @param {Object} titleAttribute
 * @param {Object} messageAttribute
 * 
 * @return Ti.UI.Window
 */
exports.info = function(winAttribute, titleAttribute, messageAttribute) {
    /*@inner */
    var win = Ti.UI.createWindow({
       fullscreen:true,
       layout:"vertical",
       center:"center.y"
    });
    
    var wraper = Ti.UI.createView({
        left:10,
        right:10,
        height:Ti.UI.SIZE,
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:"#888888"
    });
    
    var title_bar = Ti.UI.createView(titleAttribute);
    
    
    var inner_bar = Ti.UI.createView({
        left:5,
        right:5,
        height:title_bar.height,
        layout:"horizontal"
    });
    
    var title_text = Ti.UI.createLabel({
       text:titleAttribute.text,
       textAlign:titleAttribute.textAlign,
       width:Ti.UI.SIZE,
       height:Ti.UI.SIZE,
       color:titleAttribute.color 
    });
    
    var title_icon = Ti.UI.createImageView({
       width:Ti.UI.SIZE,
       height:Ti.UI.SIZE,
       image:titleAttribute.icon 
    });
    
    if(titleAttribute.direction == undefined || titleAttribute.direction == "ltr"){
        title_icon.setLeft(5);
        title_text.setLeft(5);
        
        inner_bar.add(title_icon);
        inner_bar.add(title_text);
    }
    else{
        title_icon.setRight(5);
        title_text.setRight(5);
        
        inner_bar.add(title_icon);
        inner_bar.add(title_text);
    }
    
    title_bar.add(inner_bar);
    
    wraper.add(title_bar);
    
    var message_label = Ti.UI.createLabel({
       left:5,
       right:5,
       height:Ti.UI.SIZE,
       text:messageAttribute.text,
       color:messageAttribute.color == undefined?"#000000":messageAttribute.color,
       top:15,
       wordWrap:true,
        
    });
    
    wraper.add(message_label);
    
    var ok_button = Ti.UI.createButton({
       width:Ti.UI.SIZE,
       height:Ti.UI.SIZE,
       title:L("OK", "OK"),
       top: 15
        
    });

   function okClik(event){win.close();}
    ok_button.addEventListener('click', okClik);
    wraper.add(ok_button);
    
    win.add(wraper);
    win.open();
    return win;
    
};

