/**
 * dependence Global Object
 */
var FONT = {};
FONT.getFont = function(f, v){
    Ti.API.info(f.toString());
    
    var font = {};
    if(Global.Language == 'en'){
        font.fontFamily = f.EN[0];
        font.fontSize = f.EN[1] + "sp";
    }
    else
    {
        font.fontFamily = f.AR[0];
        font.fontSize = f.AR[1] + "sp";
    }
    font.fontWeight = (v == undefined)? "Normal":v;
    return font;
};


FONT.GESS_TWO_LIGHT = "GESSTwoLight-Light";
FONT.GESS_TWO_MEDIUM = "GESSTwoMedium-Medium";
FONT.GESS_TWO_BOLD = "GESSTwoBold-Bold";

FONT.AXtShareQ = "AXtShareQ";
FONT.AXtShareQXL = "AXtShareQXL";

FONT.Arial = "Arial";
FONT.Time_New_Roman = "Times New Roman";
FONT.Verdana = "verdana";
