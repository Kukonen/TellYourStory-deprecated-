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

    constructor() {
        makeAutoObservable(this)
    }

    registerChangeName = (value) => this.registerDATA.name = value
    registerChangeEmail = (value) => this.registerDATA.email = value
    registerChangePassword = (value) => this.registerDATA.password = value
    registerChangePasswordAgain = (value) => this.registerDATA.passwordAgain = value
    registerChangeRemember = (value) => this.registerDATA.remember = value

    register() {
        axios.post('/api/register', this.registerDATA)
    }
}

export default new UserState();