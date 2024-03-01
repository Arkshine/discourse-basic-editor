import discourseComputed from "discourse-common/utils/decorators";
import Component from "@ember/component";

export default Component.extend({

   init() {
    this._super(...arguments);
    if(this.field.default !== 'undefined'){
      var v = this.field.options[this.field.default]
      this.set('valuename', v.name)
      this.set('value', v)
    }
  },
  actions:{
    enumChanged(name, selectedObject){
      this.set('valuename', name)
      this.set('value', selectedObject)

    }
  }
});
