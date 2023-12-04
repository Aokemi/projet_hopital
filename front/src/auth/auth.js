export const auth = () =>{

    const user = JSON.parse(localStorage.getItem("User"))

    if(user && user.token){
        return {
            Authorization: "Bearer " + user.token
        }
    } else {
        return {}
    }
}