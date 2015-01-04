/**
 * Language switcher and translater 
 */
var lookup = null;
exports.locale = Ti.App.Properties.getString('SETTING_LANGUAGE');
 
 
/**
 * Private function
 * Loads the language xml file.
 * It has fallback for english if file does not exist.
 */
function loadFile() {
    lookup = {};
     
    // LOAD FILE
    Ti.API.info(Ti.Filesystem.resourcesDirectory + 'i18n/' + exports.locale + '/strings.xml');
    var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'i18n/' + exports.locale + '/strings.xml');
    if (!file.exists()) {
        file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'i18n/en/strings.xml');
        if (!file.exists()) {
            Ti.API.warn("Language file for both '" + exports.locale + "' and 'en' fallback do not exist");
            return;
        }
    }
     
    // PARSE XML
    var xml_string = file.read().text;
    var doc = Ti.XML.parseString(xml_string);
    var strings = doc.getElementsByTagName("string");
    for (var i = 0; i < strings.length; i++) {
        var node = strings.item(i);
        var value = node.textContent;
        if (node.hasAttributes()) {
            for (var att_index = 0; att_index < node.attributes.length; att_index++) {
                var att = node.attributes.item(att_index);
                if (att.nodeName === "name") {
                    lookup[att.nodeValue] = value;
                }
            }
        }
    }
     
}
 
/**
 * Set the current language of the app.
 * @param {String} language
 */
exports.setLanguage = function(language){
    if(language === null){
        return;
    }
    // clean old lookup
    exports.clear();
    
    // save language
    //Ti.App.Properties.setString('SETTING_LANGUAGE', language);
    //language='ar';
    Ti.App.Properties.setString('SETTING_LANGUAGE', language);
    
    
    exports.locale = language;
    
    // parse new lookup
    loadFile();
         
    return lookup;
};

exports.getLanguage = function(){
	return Ti.App.Properties.getString('SETTING_LANGUAGE');
};
/**
 * Clear the parsed xml translations
 */
exports.clear = function() {
    lookup = null;
};
 
/**
 * Lookup function. require this at each controller
 * Example usage:
 * @param {Object} string
 * @param {Object} hint
 */
exports.Translate = function(string, hint) {
    if (lookup === null) {
        loadFile();
    }
    var sd = lookup[string] !== undefined ? lookup[string] : (hint || string);
    return sd;
}; 