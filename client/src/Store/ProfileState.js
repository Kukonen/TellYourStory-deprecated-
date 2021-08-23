import {makeAutoObservable} from "mobx";
import axios from 'axios'

class ProfileState {
    ownStories = []

    constructor() {
        makeAutoObservable(this)
    }

    async getOwnStories() {
        await axios.get('/api/profile/getownstories', response => {
            
        })
    }
}

export default new ProfileState();