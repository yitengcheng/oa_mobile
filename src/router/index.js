import Vue from 'vue';
import Router from 'vue-router';
import Main from './../views/main';
import Approval from './../views/approval';


Vue.use(Router);

export default new Router({
    // base: 'oa',
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '/',
            component: Main,
            meta: {
                name: '首页'
            }
        },
        {
            path: '/approval',
            name: 'approval',
            component: Approval,
            meta: {
                name: '审批'
            }
        }
    ]
});
