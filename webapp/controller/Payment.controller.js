sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.ticketbooking.controller.Payment", {
            onInit: function () {

            },
            onTapPay: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("Final", {} );
            }
            
        });
    });
