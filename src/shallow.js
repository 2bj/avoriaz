import Vue from 'vue';
import mount from './mount';

const LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
];

function stubLifeCycleEvents(component) {
  LIFECYCLE_HOOKS.forEach((hook) => {
    component[hook] = () => {}; // eslint-disable-line no-param-reassign
  });
}

function replaceComponents(component) {
  Object.keys(component.components).forEach((c) => {
        // Remove cached constructor
    delete component.components[c]._Ctor; // eslint-disable-line no-param-reassign
    component.components[c] = { // eslint-disable-line no-param-reassign
      ...component.components[c],
      render: () => {},
    };
    Vue.config.ignoredElements.push(c);
    stubLifeCycleEvents(component.components[c]);
  });
}

export default function shallow(component, options) {
  if (component.components) {
    replaceComponents(component);
  }

  stubLifeCycleEvents(component);

  return mount(component, options);
}

