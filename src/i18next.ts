import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

i18n.use(Backend).use(initReactI18next).init({
    lng: 'en',
    backend: {
      /* tralation file path */
      loadPath: '/assets/locales/{{lng}}.json'
    },
    fallbackLng: 'en',
    debug: true,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    /* react: {
      wait: true
    } */
})

export default i18n