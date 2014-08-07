var queue = {
        data : [],
        push : function (elem) {
            this.data.push(elem);
        },
        pop : function () {
            return this.data.pop();
        },
        isEmpty : function() {
            return this.data.length === 0;
        }
    };


var eventQueue = (function() {
        var _private =  {},
            _public = {
                on : function(eventName, callback) {
                    if(!(eventName in _private)) {
                        _private[eventName] = [];
                    }

                    _private[eventName].push(callback);
                },
                remove : function(eventName) {
                    delete _private[eventName];
                },
                trigger : function(eventName) {
                    _private[eventName].forEach(function(val) {
                        val();
                    });
                }
            };

        return _public;
    } ());
