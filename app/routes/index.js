import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      blogposts: this.store.findAll('blogpost'),
      comments: this.store.findAll('comment')
    });
  }
});
