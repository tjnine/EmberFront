import DS from 'ember-data';


export default DS.RESTAdapter.extend({
    namespace: '/',
    host: 'http://work1.local'
});
