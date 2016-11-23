# ember-cli-instant2fa

This README outlines the details of collaborating on this Ember addon.

## Installation

```bash
ember install ember-cli-instant2fa
```

## Settings page

Use the `instant2fa-page` component in your template to register the hosted settings page.

```
# instant2fa-settings.hbs

{{instant2fa-page uri=uri}}
```

## Verification page

Use the `instant2fa-page` component in your template to register the hosted verification page.

```
# instant2fa-verification.hbs

{{instant2fa-page uri=uri onEvent=(action "onEvent")}}
```

Handle the event with the `onEvent` handler to process successful verfications.

```
# instant2fa-verification.js

import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onEvent(e) {
      if (e.type === 'verificationSuccess') {
        var token = event.payload.token;
        console.log("Verification token is: " + token);

        $.ajax({
            method: 'POST',
            url: '/two-factor-verification',
            data: {
                instant2faToken: event.payload.token
            }
        });
      }
    }
  }
});
```
