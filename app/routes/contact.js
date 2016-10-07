import Ember from 'ember';

export default Ember.Route.extend({
willRender() {
    $.getJSON('http://php7dev/api.php').then(data=> {
        this.get('contacts', data);
    })
}

    // model() {
    //      return this.get('store').findAll('contact');      
    // }
});
