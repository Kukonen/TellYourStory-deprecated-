import {makeAutoObservable} from "mobx";
import axios from "axios";
import jsonText from '../Localization/index'
import Cookies from 'js-cookie'

class UserState {
    name = null
    avatar = undefined
    isLogged = "no"
    language = Cookies.get('language') === "en" ? "en" :
        Cookies.get('language') === "ru" ? "ru" :
            "en"
    text = this.language === "en" ? {
        ...jsonText.en
    } : this.language === "ru" ? {
        ...jsonText.ru
    } : null


    problemError = false

    constructor() {
        makeAutoObservable(this)
    }

    async getInformation() {
        let status = {}
        let data = {}
        await axios.get('/api/user/getinformation').then(response => {
            status = JSON.parse(JSON.stringify(response.status))
            data = JSON.parse(JSON.stringify(response.data))
        }).catch(e => {
            console.log(e)
        })
        if (status === 200) {
            this.name = data.name
            this.avatar = data.avatar
            this.isLogged = "yes"
        }
    }

    async logout() {
        await axios.get('/api/user/logout')
            .then(() => {
                this.name = ''
                this.avatar = undefined
                this.isLogged = "no"
            })
            .catch(e => console.log(e))
    }

    async sendProblem(title, text) {
        await axios.post('/api/user/sendproblem', {
            title: title,
            text: text
        })
            .then(response => {

            })
            .catch(e => {
                console.log(e)
                this.problemError = true
            })
    }

    changeLanguage(lang) {
        if (lang === "en") {
            this.language = "en"
            this.text = {
                ...jsonText.en
            }
            Cookies.set('language', 'en')
        }
        else if (lang === "ru") {
            this.language = "ru"
            this.text = {
                ...jsonText.ru
            }
            Cookies.set('language', 'ru')
        }
    }
}

export default new UserState();