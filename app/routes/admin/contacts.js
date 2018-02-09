import Route from '@ember/routing/route';

export default Route.extend({

  model(){
    return this.store.findAll('contact');
  },

  actions: {
    deleteContactMessage(contact){
      let confirmation = confirm("Do you want to delete this Contact Message?");

      if(confirmation){
      contact.destroyRecord();
    }
   }
  }
});
