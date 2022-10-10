import { getData } from "./request"

export default async (store) => {
    const consName = store.state.consName,
        field = store.state.field,
        data = await getData(consName, field);
    console.log(data)
}