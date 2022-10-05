'use strict';

module.exports = {
  extends: 'recommended',
  ignore: [
    'ember-addon/addon/templates/components/ember-addon/svg/**',
    'addon/templates/components/ember-addon/svg/**',
  ],
  rules: {
    'attribute-indentation': false,
    'no-inline-styles': {
      'allowDynamicStyles': true
    },
    'no-curly-component-invocation': {
      allow: ['ember-skeleton/custom-inflector'] 
    }
  }
};
