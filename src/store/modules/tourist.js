import { addLike, cancelLike } from '@/api/blog'
const state = {
  likeCount: localStorage.getItem('likeCount') ? JSON.parse(localStorage.getItem('likeCount')) : []
}

const mutations = {
  ADD_LIKECOUNT (state, id) {
    if (state.likeCount.includes(id)) {
      return
    }
    console.log('state.likeCount', state.likeCount)
    state.likeCount.push(id)
    localStorage.setItem('likeCount', JSON.stringify(state.likeCount))
  },
  CANEL_LIKECOUNT (state, id) {
    var index = state.likeCount.indexOf(id)
    if (index === -1) {
      return
    }
    console.log('index', index)
    state.likeCount.splice(index, 1)
    localStorage.setItem('likeCount', JSON.stringify(state.likeCount))
  }
}

const actions = {
  async addLikeCount ({ commit }, id) {
    var res = await addLike(id)
    commit('ADD_LIKECOUNT', id)
    return res
  },
  async cancelLike ({ commit }, id) {
    var res = await cancelLike(id)
    commit('CANEL_LIKECOUNT', id)
    return res
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
