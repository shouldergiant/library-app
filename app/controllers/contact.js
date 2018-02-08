import Controller from '@ember/controller';
import{ empty, not } from '@ember/object/computed';
import{ gte } from '@ember/object/computed';
import{ and } from '@ember/object/computed';
import{ match } from '@ember/object/computed';

export default Controller.extend({

  headerMessage: "Contact Us",
  message: '',
  emailAddress: '',
  responseMessage: '',
  isDisabled: empty("message"),
  validLength: gte("message.length", 5),
  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isValid: and('isValidEmail', 'validLength'),
  isInvalid: not('isValid'),

  actions:{
    saveMessage(){
      let email = this.get('emailAddress');
      let message = this.store.createRecord('messages', {email: email, message: message});
      message.save().then(response => {
        this.set('responseMessage', "Thanks for the email, we'll respond asap!")
        this.set('message', '')
        this.set('emailAddress', '')
      });
    }
  }

});
