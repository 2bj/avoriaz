import Vue from 'vue';
import VueWrapper from './VueWrapper';

export default function mount(component, options) {
  const Constructor = Vue.extend(component);
  const vm = new Constructor(options);
  vm.$mount();
  return new VueWrapper(vm, options);
}
