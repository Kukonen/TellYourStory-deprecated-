import {makeAutoObservable} from "mobx";
import jsonText from '../Localization/index'
import Cookies from "js-cookie";

class LocalizationState {
    constructor() {
        makeAutoObservable(this)
    }

    language = Cookies.get('language') === "en" ? "en" :
        Cookies.get('language') === "ru" ? "ru" :
            "en"
    text = this.language === "en" ? {
        ...jsonText.en
    } : this.language === "ru" ? {
        ...jsonText.ru
    } : null

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

export default new LocalizationState();