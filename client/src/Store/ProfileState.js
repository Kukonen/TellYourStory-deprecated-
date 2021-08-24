import {makeAutoObservable} from "mobx";
import axios from 'axios'

class ProfileState {
    ownStories = []

    constructor() {
        makeAutoObservable(this)
    }

    async getOwnStories() {
        await axios.get('/api/profile/getownstories').then(response => {
           if (response.status === 200) {
                 this.ownStories = response.data
            }
        })
    }
}

export default new ProfileState();