import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.store.createRecord('library', {
            name: this.get('name'),
            address: this.get('address'),
            phone: this.get('phone')
        });
    },


 actions: {
    saveLibrary(item) {
        //You dont need to pass. you need to update model properties. and then call save method.
       item.save().then(() => this.transitionToRoute('libraries.index'));
    }
}

});
