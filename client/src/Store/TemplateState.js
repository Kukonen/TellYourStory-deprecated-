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

    async createStoryLevel() {
        axios.get('/api/template/createstorylevel').then(response => {
            if (response.status === 200) {
                this.story = response.data.story
            }
        })
    }

    async deleteLevel(id) {
        axios.post('/api/template/deletelevel', {id}).then(response => {
            if (response.status === 200) {
                this.story = response.data.story
            }
        })
    }

    async addChapterToStoryLevel(levelId, chapterId) {
        axios.post('/api/template/addchaptertostorylevel', {levelId, chapterId}).then(response => {
            if (response.status === 200) {
                this.story = response.data.story
            }
        })
    }

    async deleteChapterInStoryLevel(levelId, chapterId) {
        axios.post('/api/template/deletechapterinstorylevel', {levelId, chapterId}).then(response => {
            if (response.status === 200) {
                this.story = response.data.story
            }
        })
    }

    async createChapter(title) {
        axios.post('/api/template/createchapter', {title}).then(response =>{
            if (response.status === 200) {
                this.chapter = response.data.chapters
            }
        })
    }

    async changeChapter(id, title, text, decision) {
        axios.post('/api/template/changechapter', {id, title, text, decision}).then(response => {
            if (response.status === 200) {
                this.chapter = response.data.chapters
            }
        })
    }

    async deleteChapter(id) {
        axios.post('/api/template/deletechapter', {id}).then(response => {
            if (response.status === 200) {
                this.chapter = response.data.chapters
            }
        })
    }

    async createDecision(chapterId, decisionId, title) {
        axios.post('/api/template/createdecision', {chapterId, decisionId, title}).then(response => {
            if (response.status === 200) {
                this.chapter = response.data.chapters
            }
        })
    }

    async refreshDecision() {
        axios.get('/api/template/refreshdevision').then(response => {
            if (response.status === 200) {
                this.chapter = response.data.chapters
            }
        })
    }

    async changeDecision(id, title, counters) {
        axios.post('/api/template/changedecision', {id, title, counters}).then(response => {
            if (response.status === 200) {
                this.chapter = response.data.chapters
            }
        })
    }

    async deleteDecision(id) {
        axios.post('/api/template/deletedecision', {id}).then(response => {
            if (response.status === 200) {
                this.chapter = response.data.chapters
            }
        })
    }

    async createCounter(name, count) {
        axios.post('/api/template/createcounter', {name, count}).then(response =>{
            if (response.status === 200) {
                this.counter = response.data.counters
                this.refreshDecision()
            }
        })
    }

    async changeCounter(name, count, id) {
        axios.post('/api/template/changecounter', {name, count, id}).then(response => {
            if (response.status === 200) {
                this.counter = response.data.counters

            }
        })
    }

    async deleteCounter(id) {
        axios.post('/api/template/deletecounter', {id}).then(response => {
            if (response.status === 200) {
                this.counter = []
                this.counter = response.data.counters
            }
        })
    }
}

export default new TemplateState();