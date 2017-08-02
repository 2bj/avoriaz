import Vue from "vue";
import Vuex from "vuex";
import { mount } from "../";
import { ClassComponent, functionalOptions } from "./resources";

/**
 * Test for mount options
 */
const localVue = Vue;
localVue.use(Vuex);

const store = new Vuex.Store({});

mount<ClassComponent>(ClassComponent, {
    attachToDocument: true,
    globals: {
        $store: store,
    },
    instance: localVue,
    slots: {
        default: ClassComponent,
        foo: [ClassComponent],
    },
});

mount(functionalOptions, {
    children: ["child", ClassComponent],
    context: {
        props: { foo: "test" },
    },
});

/**
 * MountOptions should receive Vue's component options
 */
mount<ClassComponent>(ClassComponent, {
    propsData: {
        test: "test",
    },
});
