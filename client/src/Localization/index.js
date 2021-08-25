// Pages and component that have been localized
import contactUs from './json/contact-us.json'
import header from './json/header.json'
import mainPage from './json/main-page.json'
import auth from './json/auth.json'
import questions from './json/questions.json'
import footer from './json/footer.json'
import create from './json/create.json'
import profile from './json/profile.json'
import settings from './json/settings.json'

let text = {}




text = {
    ...text,
    en: {
        header: header.en,
        contactUs: contactUs.eu,
        mainPage: mainPage.en,
        auth: auth.en,
        questions: questions.en,
        footer: footer.en,
        create: create.en,
        profile: profile.en,
        settings: settings.en
    }

}

text = {
    ...text,
    ru: {
        header: header.ru,
        contactUs: contactUs.ru,
        mainPage: mainPage.ru,
        auth: auth.ru,
        questions: questions.ru,
        footer: footer.ru,
        create: create.ru,
        profile: profile.ru,
        settings: settings.ru
    }
}

export default text;