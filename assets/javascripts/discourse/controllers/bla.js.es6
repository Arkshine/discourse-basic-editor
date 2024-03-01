import Controller from "@ember/controller";
import loadScript from "discourse/lib/load-script";
import { later } from "@ember/runloop";

export default Controller.extend({
  init: function () {
    this._super();

  loadScript("/plugins/DiscourseBasicEditor/ckeditor.js").then(() => {

    later(this, (function() {
      ClassicEditor.create( document.querySelector( '#editor' ) )
          .then( editor => {
              console.log( editor );
              editor.setData("smndfnksdf _test_")
              editor.model.document.on( 'change:data', () => {
                  console.log(editor.getData());
              } );



          } )
          .catch( error => {
              console.error( error );
          } );
    }), 50);

    });




  },
  actions: {
  }
});
