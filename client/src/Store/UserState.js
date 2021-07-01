import {makeAutoObservable} from "mobx";
import axios from "axios";

class UserState {

    name = ''
    isLogged = false

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
        if (localStorage.getItem('notRemember') === 'yes') {
            axios.get('/user/resetkey').then()
            localStorage.setItem('notRemember', 'no')
        }
    }

    registerChangeName = (value) => this.registerDATA.name = value
    registerChangeEmail = (value) => this.registerDATA.email = value
    registerChangePassword = (value) => this.registerDATA.password = value
    registerChangePasswordAgain = (value) => this.registerDATA.passwordAgain = value
    registerChangeRemember = (value) => this.registerDATA.remember = value

    async register() {
        let data = {}
        await axios.post('/user/register', this.registerDATA).then(response => {
            data = JSON.parse(JSON.stringify(response.data))
        }).catch(e => console.log(e))
        if (data.status === "error") {
            if (data.description === "data error") {
                this.registerERROR = true
            }
            return
        }
        localStorage.setItem('notRemember', 'yes')
    }
}

export default new UserState();