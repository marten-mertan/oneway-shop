window.API = {

    onAdd: function(params, callbackSuccess, callbackFailed){
        console.groupCollapsed('onAdd');
        console.log(params);
        console.groupEnd();

        setTimeout( function() {
            var serverResponseSuccess = true;

            if (serverResponseSuccess) {
                callbackSuccess();
            } else {
                callbackFailed();
            }
        }, 500);
    },

    onBuy: function(params, callbackSuccess, callbackFailed){
        console.groupCollapsed('onBuy');
        console.log(params);
        console.groupEnd();

        setTimeout( function() {
            var serverResponseSuccess = true;
            var link = "checkout-success.html";
            if (serverResponseSuccess) {
                callbackSuccess(link);
            } else {
                callbackFailed();
            }
        }, 500);
    }

}