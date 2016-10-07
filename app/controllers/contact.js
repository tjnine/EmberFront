import Ember from 'ember';

export default Ember.Controller.extend({

	isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isValidMsg: Ember.computed.gte('message.length', 5),
	isValid: Ember.computed.and('isValidEmail', 'isValidMsg'),

	actions: {
		saveMessage() {
		var email = this.get('emailAddress');
		var message = this.get('message');

		alert('Sending your message in progress...');

		let responseMessage = `To: ${this.get('emailAddress')} ,Message: ${this.get('message')}`;
		this.set('responseMessage', responseMessage);
		this.set('emailAddress', '');
		this.set('message', '');
		}
	}


});
