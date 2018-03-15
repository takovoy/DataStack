function DataStack (options) {
    options = options || {};
    this.stack = {};
    this.debug = options.debug || false;
}

DataStack.prototype.get = function (module, property) {
    if(!this.stack[module]){
        this.error('Unexpected module: ' + module);
        return false;
    }
    return this.stack[module][property];
};

DataStack.prototype.set = function (module, property, value) {
    if(!this.stack[module]){
        this.stack[module] = {};
        if(this.debug){
            this.log('Resolved data space for module: ' + module);
        }
    }
    this.stack[module][property] = value;
    return value;
};

DataStack.prototype.error = function (error) {
    console.error('DataStack error:\n',error);
};

DataStack.prototype.log = function (message) {
    console.log('DataStack log message:\n',message);
};
