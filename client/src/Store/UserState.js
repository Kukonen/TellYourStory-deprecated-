import {makeAutoObservable} from "mobx";
import axios from "axios";

class UserState {

    name = ''
    avatar = ''
    isLogged = undefined

    registerDATA = {
        name: "",
        email: "",
        password: "",
        passwordAgain: "",
        remember: false
    }

    registerERROR = false

    constructor() {
        makeAutoObservable(this)
        // if (localStorage.getItem('notRemember') === 'yes') {
        //     axios.get('/user/resetkey').then()
        //     localStorage.setItem('notRemember', 'no')
        // }
    }

    async getUserData() {

        axios.get('/api/user/getuserdata').then(response => {
            const data = JSON.parse(JSON.stringify(response))
            if (data.data.status === "ok") {
                this.name = data.data.data.name
                this.avatar = data.data.data.avatar
                this.isLogged = "yes"
            }
            else {
                this.isLogged = "no"
            }
        })
    }

    registerChangeName = (value) => this.registerDATA.name = value
    registerChangeEmail = (value) => this.registerDATA.email = value
    registerChangePassword = (value) => this.registerDATA.password = value
    registerChangePasswordAgain = (value) => this.registerDATA.passwordAgain = value
    registerChangeRemember = (value) => this.registerDATA.remember = value

    async register() {
        let data = {}
        await axios.post('/api/user/register', this.registerDATA).then(response => {
            data = JSON.parse(JSON.stringify(response.data))
        }).catch(e => console.log(e))
        if (data.status === "error") {
            if (data.description === "data error") {
                this.registerERROR = true
            }
            return
        }
        localStorage.setItem('notRemember', 'yes')
        window.location.href = "/"
    }

    async logout() {
        await axios.get('/api/user/logout').then()
            .catch(e => console.log(e))
        this.avatar = undefined
        this.name = ''
        this.isLogged = "no"
    }
}

export default new UserState();