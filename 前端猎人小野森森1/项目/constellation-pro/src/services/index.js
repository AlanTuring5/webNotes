import { getData } from "./request"

export default async (store) => {
    const consName = store.state.consName,
        field = store.state.field,
        data = await getData(consName, field);
    // console.log(data)
    if (data.error_code) {
        store.commit('setErrorCode', data.error_code);
        return;
    }

    store.commit('setData', data);
    console.log(store.state)
}
