const state = {
    routerName: '/'
};

// mutations
const mutations = {
    updateRouterName(state, routerName) {
        state.routerName = routerName;
    }
};

export default {
    namespaced: true,
    state,
    mutations
};
