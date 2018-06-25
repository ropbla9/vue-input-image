import index from './index.vue'

const install = (Vue) => {
    Vue.mixin({
        components: {
            vueInputImage: index
        }
    })
}

export default { install }