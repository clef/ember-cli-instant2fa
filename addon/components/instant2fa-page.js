import Ember from 'ember';
import { PropTypes } from 'ember-prop-types';
import layout from '../templates/components/instant2fa-page';

export default Ember.Component.extend({
  layout,
  propTypes: {
    uri: PropTypes.string.isRequired,
    onEvent: PropTypes.func,
    onError: PropTypes.func
  },
  instant2fa: Ember.inject.service('instant2fa'),
  init() {
    this._super();
    this.set('scriptLoaded', this.get('instant2fa').load());
  },
  didInsertElement() {
    this.get('scriptLoaded').then(() => {
      new window.Instant2FAPage({
        element: this.$('div.x-instant2fa-page').get(0),
        uri: this.get('uri')
      }, this.get('onEvent'));
    }).catch(this.get('onError'));
  }
});
