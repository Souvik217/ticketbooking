sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("ns.ticketbooking.controller.controller.App", {
        onInit() {
        },
        onLoginPress: function () {
          
          var uname = this.getView().byId('uname');
          var password = this.getView().byId('pswd');

          var name = "abcd";
          var pass = "1234";
          if(uname.getValue()===''){
            MessageToast.show("Please Enter Username!");
          }
          else if(password.getValue()===''){
            MessageToast.show("Please Enter Password!");
          }
          else{
            if(uname.getValue()===name && password.getValue()===pass){
              var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			        oRouter.navTo("Booking", {} );
              
            }
            else{
              MessageToast.show("Invalid Username or Password!");
            }
          }
          
        }
      });
    }
  );
  