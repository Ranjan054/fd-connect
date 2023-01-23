export const status = (params) => {
    let obj = {
        0: "Pending",
        1: "Approved",
        2: "Rejected"
    }
    return obj[params];
}

export const classStatus = (params) => {
    let obj = {
        501: "Waiting-confirmation",
        502: "Approved",
        503: "Rejected",
        504: "Cancelled",
        505: "Completed",
        506: "Started",
        507: "Ended"
    }
    return obj[params];
}

export const userType = (params) => {
    let obj = {
        1: "Student",
        2: "Doctor",
        3: "Mentor Student"
    }
    return obj[params];
}

