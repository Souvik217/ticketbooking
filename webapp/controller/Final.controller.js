sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.ticketbooking.controller.Final", {
            onInit: function () {

            },
            onTapLogout:function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("RouteLoginPage", {} );
            }
            
        });
    });
