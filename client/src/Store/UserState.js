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

    loginDATA = {
        login: "",
        password: "",
        remember: false
    }

    registerERROR = false
    loginERROR = false

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

    loginChangeLogin = (value) => this.loginDATA.login = value
    loginChangePassword = (value) => this.loginDATA.password = value
    loginChangeRemember = (value) => this.loginDATA.remember = value

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
        await this.getUserData().then()
        window.location.href = "/"
    }

    async login() {
        let data = {}
        await axios.post('/api/user/login', this.loginDATA).then(response => {
            data = JSON.parse(JSON.stringify(response.data))
        }).catch(e => console.log(e))
        if (data.status === "error") {
            if (data.description === "data error") {
                this.loginERROR = true
            }
        }
        await this.getUserData().then()
        window.location.href = "/"
    }

    async logout() {
        this.avatar = undefined
        this.name = ''
        this.isLogged = "no"
        await axios.get('/api/user/logout', {
            withCredentials: true,
            credentials: 'same-origin'
        }).then().catch(e => console.log(e))
    }
}

export default new UserState();