;(function() {

	/**
	 * View: MainScreen
	 *
	 */
    (function ($) {
        brite.registerView("MainScreen",  {}, {
            create:function (data, config) {
                var $html = app.render("tmpl-MainScreen");
                var $e = $($html);
                return $e;
            },
            init:function(){
              require(["dojo/ready", "dijit/Dialog","dojo/dom"], function(ready, Dialog,dom){
                myDialog = new Dialog({
                  title : "My Dialog",
                  content : "Test content.",
                  style : "width: 300px"
                }); 
                myDialog.placeAt(dom.byId("bodyPage"));
                myDialog.startup();
                myDialog.show();

              });
            },
            postDisplay:function (data, config) {
                var view = this;
                var $e = view.$el;
                
            },
            events:{
            },

            docEvents:{
            },

            daoEvents:{
            }
            
        });
    })(jQuery);


})();
