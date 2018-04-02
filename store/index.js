import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
        employee: {}
    },
    mutations: {
      setEmployee (state, data) {
        state.employee = data
      }
    }

    
  })
}

export default createStore