import { axiosGet } from "@/libs/https";

function getData(consName, type) {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: `/api/constellation/getAll?consName=${consName}&type=${type}`,
            success(res) {
                resolve(res.data);
            },
            error(err) {
                reject(err);
            }
        })
    })
}

export {
    getData,
}