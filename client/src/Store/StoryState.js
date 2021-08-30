import {makeAutoObservable} from "mobx";
import axios from "axios";

class StoryState {
    struct = {}
    rating = null
    notFoundError = false
    counters = []

    constructor() {
        makeAutoObservable(this)
    }

    async getStory(id) {
        await axios.post('/api/story/getstory', {id: id}).then(response => {
            if (response.status === 200) {
                this.struct = response.data.struct
                this.rating = response.data.rating
                this.counters = response.data.struct.counter
                this.struct.chapter.forEach(chapter => {
                    chapter.need = chapter.need.reduce((allValues, currentValue) => {
                        allValues = Number(allValues.count)
                        currentValue = Number(currentValue.count)
                        return allValues + currentValue
                    })
                })
            } else {
                this.notFoundError = true
            }
        }).catch(e => {
            this.notFoundError = true
        })
    }
}

export default new StoryState();