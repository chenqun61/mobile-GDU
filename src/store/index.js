import Vue from 'vue'
import Vuex from 'vuex'
import { aboutUsCN, aboutUsEN } from './language'
Vue.use(Vuex)
// root state object.
// each Vuex instance is just a single state tree.
const state = {
    isCHinese: true,
    showBar: false,
    lang: aboutUsCN
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    showNav(state) {
        state.showBar = !state.showBar;
    },
    changeLang(state) {
        //切换到中文
        if (!state.isCHinese) {
            state.lang = aboutUsCN;
        } else {
            state.lang = aboutUsEN;
        }
        state.isCHinese = !state.isCHinese;
        state.showBar = !state.showBar;
    },

}

// actions are functions that causes side effects and can involve 
// asynchronous operations.你不能直接调用一个 mutation handler。这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，调用此函数。”要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法：
const actions = {
    changeLang: ({ commit }) => commit('changeLang'),
    showNav: ({ commit }) => commit('showNav')
}

// getters are functions
const getters = {
    whichLang: state => state.isCHinese ? 'English' : '简体中文'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
