import Route from '@ember/routing/route';

export default Route.extend({

  model(){
    return this.store.findAll('invitation');
  },

  actions: {
    deleteInvitation(invitation){
      let confirmation = confirm("Delete this invitation?");
      if(confirmation){
        invitation.destroyRecord();
      }
    }

  }

});
