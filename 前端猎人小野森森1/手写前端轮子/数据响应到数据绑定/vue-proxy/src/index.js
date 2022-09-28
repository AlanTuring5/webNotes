import { reactive } from './vue/reactivity/index'

const state = reactive({
    job: 'web',
    student: [{
        id: 1,
        name: 'John'
    }, {
        id: 2,
        name: 'Joey'
    }]
})

// state.student.push({
//     id: 3,
//     name: 'Recheal'
// })

console.log(state.job)
state.job = 'change'