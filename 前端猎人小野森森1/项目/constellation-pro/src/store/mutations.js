export default {
    setConsName(state, newConsName) {
        state.consName = newConsName
    },
    setField(state, newField) {
        state.field = newField
    },
    setErrorCode(state, errorCode) {
        state.errorCode = errorCode
    },
    setData(state, data) {
        state[state.field] = data
    }
}