import {makeAutoObservable} from "mobx";
import axios from "axios";

class SettingsState {
    constructor() {
        makeAutoObservable(this)
    }

    async changeName(name) {
        await axios.post('/api/settings/changename', {
            "name": name
        }).then(response => {

        })
    }

    async changePassword(oldPassword, newPassword) {
        await axios.post('/api/settings/changepassword', {
            oldPassword,
            newPassword
        }).then(response => {

        })
    }
}

export default new SettingsState();