import {makeAutoObservable} from "mobx";
import axios from "axios";

class UserState {
    name = null
    avatar = undefined
    isLogged = "no"

    constructor() {
        makeAutoObservable(this)
    }

    async getInformation() {
        let status = {}
        let data = {}
        await axios.get('/api/user/getinformation').then(response => {
            status = JSON.parse(JSON.stringify(response.status))
            data = JSON.parse(JSON.stringify(response.data))
        }).catch(e => {
            console.log(e)
        })
        if (status === 200) {
            this.name = data.name
            this.avatar = data.avatar
            this.isLogged = "yes"
        }
    }

    async logout() {

    }
}

export default new UserState();