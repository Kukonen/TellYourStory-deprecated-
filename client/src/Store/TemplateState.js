import {makeAutoObservable} from "mobx";
import axios from "axios";


class TemplateState {

    title = ""
    story = []
    chapter = []
    counter = []

    constructor() {
        makeAutoObservable(this)
    }

    async openOrCreate() {
        axios.get('/api/template/openorcreate').then(response => {
            if (response.status === 201) {

            }
            else if (response.status === 200) {
                this.title = response.data.title
                this.story = response.data.story
                this.chapter = response.data.chapter
                this.counter = response.data.counter
            }
        })
    }

    async createCounter(name, count) {
        axios.post('/api/template/createcounter', {name, count}).then(response =>{
            if (response.status === 200) {
                this.counter = response.data.counters
                console.log(this.counter)
            }
        })
    }

    async changeCounter(name, count, id) {
        console.log(name, count, id)
        axios.post('/api/template/changecounter', {name, count, id}).then(response => {
            if (response.status === 200) {
                this.counter = response.data.counters

            }
        })
    }
}

export default new TemplateState();