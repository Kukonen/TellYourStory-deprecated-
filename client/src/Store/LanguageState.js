import {makeAutoObservable} from "mobx";

class LanguageState {
    language = "en"

    constructor() {
        makeAutoObservable(this)
        localStorage.getItem('language') !== null ?
            this.language = localStorage.getItem('language') :
            localStorage.setItem('language', 'en')
    }

    changeLanguage(language) {
        if (language === 'ru') {
            this.language = "ru"
            localStorage.setItem('language', 'ru')
        }
        if (language === 'en') {
            this.language = "en"
            localStorage.setItem('language', 'en')
        }
    }
}

export default new LanguageState();