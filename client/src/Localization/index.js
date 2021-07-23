// Pages and component that have been localized
import contactUs from './json/contact-us.json'
import header from './json/header.json'

let text = {}




text = {
    ...text,
    en: {
        header: header.en,
        contactUs: contactUs.eu
    }

}

text = {
    ...text,
    ru: {
        header: header.ru,
        contactUs: contactUs.ru
    }
}

export default text;