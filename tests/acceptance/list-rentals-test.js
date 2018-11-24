import { module, test } from 'qunit';
import { 
  visit,
  currentURL,
  click
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('should show rentals as home page', async function(assert) {
    await visit('/');

    assert.equal(
      currentURL(),
      '/rentals',
      'should redirect automatically'
    )
  });

  test('should link to information about the company', async function(assert) {
    await visit('/');
    await click('.menu-about');

    assert.equal(
      currentURL(),
      '/about',
      'should navigate to about'
    )
  });

  test('should link to contact information', async function(assert) {
    await visit('/');
    await click('.menu-contact');

    assert.equal(
      currentURL(),
      '/contact',
      'should navigate to contact'
    )
  });

  test('should list available rentals', async function(assert) {
  });

  test('should filter the list of rentals by city', async function(assert) {
  });

  test('shoul show details for a selected rental', async function(assert) {
  });
});