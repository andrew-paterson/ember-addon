import { visit, currentURL } from '@ember/test-helpers';
import countries from 'npm-package/data-stubs/countries';

export default [{
  title: 'Index',
  testFunction: async function (assert) {
    console.log(countries)
    await visit('/');
    assert.equal(currentURL(), '/', 'Passes');
  }
}];
