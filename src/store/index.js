import Vue from 'vue'
import Vuex from 'vuex'
import { queues } from '../mocks';

Vue.use(Vuex)

const state = { queues };

const mutations = {
    increment (state) {
        state.count++;
    },
    decrement (state) {
        state.count--;
    }
};

const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement')
};

const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
