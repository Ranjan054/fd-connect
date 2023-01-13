export const status = (params) => {
    let obj = {
        0: "Rejected",
        1: "Approved",
        2: "Pending"
    }
    return obj[params];
}