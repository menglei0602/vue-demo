
const uiRouter = [
    {
        path: '/ant-design/form/rules',
        component: () => import(/* webpackChunkName: "ui" */ '@/ui/ant-design/form/MultiRules.vue')
    },
    
    {
        path: '/ant-design/form/rules-item',
        component: () => import(/* webpackChunkName: "ui" */ '@/ui/ant-design/form/MultiRulesItem.vue')
    }
]

export {
    uiRouter
}