import Ember from 'ember';

export default Ember.Route.extend({
// model() {
//     return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
//   }
    model() {
        return this.get('store').findAll('article');
    }
});
