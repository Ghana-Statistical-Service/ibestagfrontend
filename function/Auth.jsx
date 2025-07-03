export const SaveToken = (user , token) => {
    return new Promise((resolve, reject) => {
        sessionStorage.setItem("tk" , JSON.stringify(token))
        sessionStorage.setItem("me" , JSON.stringify(user))
        window.location.assign('/upload')
    })
}

export const GetToken = () => {
    return new Promise((resolve, reject) => {
        if(sessionStorage.getItem("tk")){
            const tk = JSON.parse(sessionStorage.getItem("tk"))
            const user = JSON.parse(sessionStorage.getItem("me"))
            resolve(
                {
                    user: user ,
                    token: tk
                }
            )
        }else{
            window.location.assign("/")
        }
    })
}


export const SignOut = () => {
    new Promise((resolve, reject) => {
        GetToken()
        .then(() => {
            sessionStorage.removeItem("tk")
            sessionStorage.removeItem("user")
            resolve()
        })
    })
    .then(() => window.location.assign("/"))
}
