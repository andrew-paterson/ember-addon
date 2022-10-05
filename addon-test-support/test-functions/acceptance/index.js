import { visit, currentURL } from '@ember/test-helpers';
import countries from 'ember-addon/test-support/data-stubs/countries';
// import countries from 'npm-module/data-stubs/countries';

export default [{
  title: 'Index',
  testFunction: async function (assert) {
    console.log(countries)
    await visit('/');
    assert.equal(currentURL(), '/', 'Passes');
  }
}];
