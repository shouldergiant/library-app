import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
export default Controller.extend({

  headerMessage: "Coming soon!",
  responseMessage: '',
  emailAddress: '',
  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValidEmail'),


  actions:{
      saveInvitation(){
        let email = this.get('emailAddress');
        let newInvitation = this.store.createRecord('invitation', { email: email });
        newInvitation.save().then(response => {
          this.set('responseMessage', `Thanks! we've just saved your email address with the following id: ${response.get('id')}`);
          this.set('emailAddress', '');
        });
      }
    }

});
