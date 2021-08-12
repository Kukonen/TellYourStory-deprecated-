import {makeAutoObservable} from "mobx";
import axios from "axios";

class UserState {
    name = null
    avatar = undefined
    isLogged = null



    problemError = false

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
        if (status === 204) {
            this.isLogged = "no"
        }
        if (status === 200) {
            this.name = data.name
            this.avatar = data.avatar
            this.isLogged = "yes"
        }
    }

    async logout() {
        await axios.get('/api/user/logout')
            .then(() => {
                this.name = ''
                this.avatar = undefined
                this.isLogged = "no"
            })
            .catch(e => console.log(e))
    }

    async sendProblem(title, text) {
        await axios.post('/api/user/sendproblem', {
            title: title,
            text: text
        })
            .then(response => {

            })
            .catch(e => {
                console.log(e)
                this.problemError = true
            })
    }
}

export default new UserState();