// const { i18n } = require('./next-i18next.config')

module.exports = {
  target: "serverless",
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeDetection: false,
  },
}
