import Ember from 'ember';

export default Ember.Service.extend({
  url: 'https://js.instant2fa.com/hosted.js',
  hasLoadedScript: false,
  load() {
    if (this.get('hasLoadedScript')) {
      return Ember.RSVP.resolve();
    } else {
      return new Ember.RSVP.Promise((resolve, reject) => {
        Ember.$.getScript(this.get('url')).done(resolve).fail(reject);
      }).then(() => this.set('hasLoadedScript', true));
    }
  }
});
