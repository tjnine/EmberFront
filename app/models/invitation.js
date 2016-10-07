import DS from 'ember-data';

export default DS.Model.extend({
    fname: DS.attr('string'),
    lname: DS.attr('string'),
    fullName: DS.attr('string'),
    zip: DS.attr('number'),
    email: DS.attr('string')
});
