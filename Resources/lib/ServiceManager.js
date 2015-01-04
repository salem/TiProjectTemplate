
function ServiceManager() {
    var requestHeaders = new Array();
    /**
     * @param {name} string
     * @param {value} string
     */
    this.setRequestHeader = function(name, value){
        if(name == undefined || name=="" || value == undefined || value == ""){
            var exception = {message:L('InvalidRequestHeader', 'Invalid Request Header'), source:this};
            throw exception;
            return;
        }
        //if a header all ready exist override its value
        for(var i=0, j=requestHeaders.length; i<j; i++){
            if(requestHeaders[i].name == name){
                requestHeaders[i].value = value;
                return;
            }
        }
        this.requsetHeaders.push({name:name, value:value});
    };
    function ActivityIndicatorDialog() {
        var alertDialog = Titanium.UI.createAlertDialog({
            title : L('PleaseWaitLoading', 'Please waite Loading...'),
        });
        activitiIndicator = Ti.UI.createActivityIndicator({
            color : 'black',
            message : L('PleaseWaitLoading', 'Please waite Loading...'),
            style : (Ti.Platform.name === 'iPhone OS') ? Ti.UI.iPhone.ActivityIndicatorStyle.PLAIN : Ti.UI.ActivityIndicatorStyle.BIG,
            height : Ti.UI.FILL,
        });
        if (Ti.Platform.name === 'android') {
            alertDialog.add(activitiIndicator);
            return alertDialog;
        }
        return activitiIndicator;
    };
    /**
     * Manage HttpService
     * @param {data} JsonString
     * @param {callBack} call back function to which API returned json data is passed for processing in controller.
     *                   We use call back function because by default createHTTPClient uses asynchrounus call.
     */
    this.send = function(data, callBack, context) {
        //check network
        Ti.API.info('Network Type name ---- ' + Ti.Network.getNetworkTypeName());
        Ti.API.info('NoNetWork ---- ' + Ti.Network.NETWORK_NONE);
        if (Ti.Network.getNetworkTypeName() === Ti.Network.NETWORK_NONE) {
            AutoHideAlert(L('NoNetwork', 'Please connect to the internet an then try'));
            return;
        }
        if(ServiceManager.URL == "") {
            var exception = {message:L('PleaseSetServiceURL', 'Please set the Service URL Before Calling the send method'), source:this};
            throw exception;
            return;
        };
        
        var activitiIndicator = ActivityIndicatorDialog();        

        context.add(activitiIndicator);
        activitiIndicator.show();

        var client = Ti.Network.createHTTPClient({
            onload : function(e) {
                Ti.API.info("Received JSON Text: " + this.responseText);
                var json = JSON.parse(this.responseText);
                callBack(json);
                activitiIndicator.hide();
                context.remove(activitiIndicator);

            },
            onerror : function(e) {
                activitiIndicator.hide();
                context.remove(activitiIndicator);
                CM.ErrorDialog(L("Error", 'Error'), e.error);
                Ti.API.info('Calling Rest Service: ' + data);
            }
        });

        //return;
        client.open("POST", ServiceManager.URL);
        //client.open("POST", "http://www.othaimmarkets.com/services/index.php/service");
        if(requestHeaders.length>0){
            for(var i=0, j=requestHeaders.length; i<j; i++){
                client.setRequestHeader(requestHeaders[i].name, requestHeaders[i].value);
            }
        }
        
        Ti.API.info('Calling Rest Service: ' + data);
        client.send(data);
    };   
};
ServiceManager.URL = "";
exports.ServiceManager = ServiceManager;

