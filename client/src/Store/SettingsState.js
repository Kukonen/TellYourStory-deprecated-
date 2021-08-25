import {makeAutoObservable} from "mobx";
import axios from "axios";
import UserState from "./UserState";

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

    async changeAvatar(file) {
        let formData = new FormData();
        formData.append("file", file);
        await axios.post('/api/settings/changeavatar', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            if(response.status === 200) {
                UserState.changeAvatar(response.data.avatar)
            }
        })
    }
}

export default new SettingsState();