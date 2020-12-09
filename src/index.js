import Vue from 'vue'
import Loading from './loading.vue'

function create(props) {
    const vm = new Vue({
        render (h) {
            return h(Loading, { props })
        }
    }).$mount()

    document.body.appendChild(vm.$el)

    const comp = vm.$children[0]
    comp.remove = () => {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }

    return comp
}

export default create;