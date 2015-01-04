/**
 * @author Salem Khan
 *
 * All setting related task will be add here 
 */

if(!Ti.App.Properties.hasProperty('SETTING_NOTIFICATIONS')){
    //var settings = {PUSH_NOTIFICATION:false, SMS: false, EMAIL:false, BRANCH:false};
    var settings = {PUSH_NOTIFICATION:{value:false, data:""}, SMS:{value:false,data:""}, EMAIL:{value:false,data:""}};
    Ti.App.Properties.setObject("SETTING_NOTIFICATIONS", settings);
}
if(!Ti.App.Properties.hasProperty("SETTING_PAGE_PRODUCT_LIST_TYPE")){
    Ti.App.Properties.setString("SETTING_PAGE_PRODUCT_LIST_TYPE", "list");
}
if (Ti.App.Properties.getString('SETTING_LANGUAGE', '') === '') {
       Ti.App.Properties.setString('SETTING_LANGUAGE','ar');
}
