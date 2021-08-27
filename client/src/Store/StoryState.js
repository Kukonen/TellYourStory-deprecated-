import {makeAutoObservable} from "mobx";
import axios from "axios";

class StoryState {
    struct = {}
    rating = null

    constructor() {
        makeAutoObservable(this)
    }

    async getStory(id) {
        await axios.post('/api/story/getstory', {id: id}).then(response => {
            if (response.status === 200) {
                this.struct = response.data.struct
                this.rating = response.data.rating
            }
        })
    }
}

export default new StoryState();