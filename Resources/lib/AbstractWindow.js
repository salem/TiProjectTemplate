/**
 * AbstarctWindow implementation, used for automatic reloading of window when language change
 * 
 * @param {string}
 * @param {Titanium.UI.Window}
 */
function AbstractWindow(TiWindow, winParameters) {

    if (winParameters !== undefined) {
        this.parameters = winParameters;
    }

    if (!(this instanceof AbstractWindow)) {
        if (winParameters !== undefined){
            return new AbstractWindow(TiWindow, winParameters);
        }
        else{
            return new AbstractWindow(TiWindow);
        }
    }
    this.events = [];
    this.name = TiWindow.replace(/\//g, "_");
    if (AbstractWindow.instances.hasOwnProperty(this.name)) {
        return AbstractWindow.instances[this.name];
    }
    this.isUiDirty = true;
    AbstractWindow.count++;

    this.WindowClass = require(TiWindow);

    AbstractWindow.instances[this.name] = this;
    AbstractWindow.count++;
    this.loadWindow();
};
AbstractWindow.prototype.loadWindow = function() {
    if (this.parameters !== undefined) {
        this.window = new this.WindowClass(this.parameters);
    } 
    else {
        this.window = new this.WindowClass();
    }

    this.window.AbstractWindow = this;
    this.window.addEventListener("focus", this.focus);
    this.window.addEventListener("close", this.close);

};

AbstractWindow.prototype.open = function() {
    this.window.open();
};

AbstractWindow.prototype.close = function() {
    var abwindow = this.AbstractWindow;
    //var temp = abwindow.name;
    abwindow.deleteInstance(abwindow.name);
};
AbstractWindow.prototype.focus = function() {
    //var abwindow = this.AbstractWindow;
    //Ti.API.info("salem " + abwindow.isUiDirty);
    var w = AbstractWindow.instances[this.AbstractWindow.name];
    if (w.isUiDirty) {
        w.isUiDirty = false;
        Ti.API.info(w.isUiDirty.toString());
        w.window.load();
    }

    AbstractWindow.currentWindow = w;
};

AbstractWindow.prototype.focus1 = function() {
    //var abwindow = this.AbstractWindow;
    //Ti.API.info("salem " + abwindow.isUiDirty);
    if (this.AbstractWindow.isUiDirty) {
        this.AbstractWindow.isUiDirty = false;
        Ti.API.info(this.AbstractWindow.isUiDirty.toString());
        this.AbstractWindow.window.load();
    }

    AbstractWindow.currentWindow = this.AbstractWindow;
};
AbstractWindow.prototype.deleteInstance = function(name) {
    delete AbstractWindow.instances[name];
    AbstractWindow.count--;
};

AbstractWindow.prototype.fireEvent = function(event) {
    if (event === "uiDirty") {
        
        for (var abwindow in AbstractWindow.instances) {
            AbstractWindow.instances[abwindow].isUiDirty = true;
        }
        if (AbstractWindow.currentWindow != null && AbstractWindow.currentWindow.hasOwnProperty("window")) {
            AbstractWindow.currentWindow.window.isUidirty = false;
            AbstractWindow.currentWindow.window.load();
        }
    }
};

