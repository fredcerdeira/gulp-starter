/*=======================================================
    APP MAIN INIT - MODULE PATTERN 
=======================================================*/

var APP = APP || {};

APP.Main = (function () {

    //RETURN OBJECT LITERAL.
    return {

        //PUBLIC ATTRIBUTES ANYONE MAY READ/WRITE.
        NAME: "APP 2015",
        VERSION: 1.0,

        init: function () {

    		// CALL TO PRIVATE FUNCTIONS / VIEWS
    		APP.MODULES.moduleA();
            APP.MODULES.moduleB();

        },
     
		 
    }



	
}()); // THE PARENS HERE CAUSE THE ANONYMOUS FUNCTION TO EXECUTE AND RETURN.


$(document).ready(function(){
	APP.Main.init();
});

