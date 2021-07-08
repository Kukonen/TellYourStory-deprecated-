import {makeAutoObservable} from "mobx";
import axios from "axios";
import user from './UserState'

class ProfileState {

    barMode = "content"
    changeNameERROR = false
    changePasswordERROR = false
    changeNameSuccess = false
    changePasswordSuccess = false

    constructor() {
        makeAutoObservable(this)
    }

    changeBarMode(mode) {
        if (mode === "content")
            this.barMode = "content"
        if (mode === "settings")
            this.barMode = "settings"
    }

    async changeName(name) {
        if(name === '')
        {
            this.changeNameERROR = true
            return
        }

        let data = {}
        await axios.post('/api/profile/changename', {
            "name": name
        }).then(response => {
            data = JSON.parse(JSON.stringify(response.data))
        }).catch(e => console.log(e))
        if(data.status === "error") {
            this.changeNameERROR = true
        }
        if(data.status === "ok") {
            this.changeNameSuccess = true
            user.getUserData().then()
        }

    }

    async changePassword(newPassword, lastPassword) {
        if(newPassword === '' || lastPassword === '')
        {
            this.changePasswordERROR = true
            return
        }

        let data = {}
        await axios.post('/api/profile/changepassword', {
            "newPassword": newPassword,
            "lastPassword": lastPassword
        }).then(response => {
            data = JSON.parse(JSON.stringify(response.data))
        }).catch(e => console.log(e))
        if(data.status === "error") {
            this.changePasswordERROR = true
        }
        if(data.status === "ok") {
            this.changePasswordSuccess = true
        }
    }
}

export default new ProfileState();