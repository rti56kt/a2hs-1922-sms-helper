module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/a2hs-1922-sms-helper/' : '/',
  pluginOptions: {
    i18n: {
      locale: undefined,
      fallbackLocale: undefined,
      localeDir: undefined,
      enableLegacy: undefined,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
}
