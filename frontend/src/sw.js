if (!self.define) {
  let e,
    n = {}
  const o = (o, s) => (
    (o = new URL(o + '.js', s).href),
    n[o] ||
      new Promise((n) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = o), (e.onload = n), document.head.appendChild(e)
        } else (e = o), importScripts(o), n()
      }).then(() => {
        let e = n[o]
        if (!e) throw new Error(`Module ${o} didn’t register its module`)
        return e
      })
  )
  self.define = (s, r) => {
    const t = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (n[t]) return
    let c = {}
    const a = (e) => o(e, t),
      i = { module: { uri: t }, exports: c, require: a }
    n[t] = Promise.all(s.map((e) => i[e] || a(e))).then((e) => (r(...e), c))
  }
}
define(['./workbox-e7b528f5'], function (e) {
  'use strict'
  self.addEventListener('message', (e) => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting()
  }),
    e.precacheAndRoute(
      [
        { url: 'App.vue', revision: '0583a0e45fb83132b9ddbb41d1de1a7e' },
        { url: 'components/elements/CardElement.vue', revision: '0f3c711657fb12c56c7c7e2eabc82ad0' },
        { url: 'components/elements/CountrySelector.vue', revision: 'f22629effb3ccacf6bb424b35b4e55b1' },
        { url: 'components/elements/CurrencySelector.vue', revision: 'f50089d890b1fa596e530af0a42f2d9b' },
        { url: 'components/elements/DateInput.vue', revision: '3141770db8ee5cb395fb73e5b9853361' },
        { url: 'components/elements/ErrorBanner.vue', revision: 'b541ee199d38fb19ecceb0f616460958' },
        { url: 'components/elements/FileUpload.vue', revision: '580dc6c8e5703d042b72ea4143f30466' },
        { url: 'components/elements/FileUploadFileElement.vue', revision: 'd178ff286656e28561e3004ca54f241b' },
        { url: 'components/elements/InfoPoint.vue', revision: 'bda95ec357e1020bb603b73f39b3c0be' },
        { url: 'components/elements/ModalComponent.vue', revision: '2e43efd0c56d0e5e53e4ba9bc0ae7efa' },
        { url: 'components/elements/PaginationList.vue', revision: '4ce9ed821a19d81967c21d59ba9456df' },
        { url: 'components/elements/PlaceElement.vue', revision: 'c54bf1c31685c687942a17d904cc5a99' },
        { url: 'components/elements/PlaceInput.vue', revision: '33f0ea2f5821e714fee1a807c1def06d' },
        { url: 'components/elements/ProgressCircle.vue', revision: '340d3593333d9b94551aa368d49c3118' },
        { url: 'components/elements/ProjectSelector.vue', revision: '010d98f1f128bfa5a8f39b0aefdbc336' },
        { url: 'components/elements/StateBadge.vue', revision: '2c11d2ba754804c271514b289c7e909a' },
        { url: 'components/elements/StatePipeline.vue', revision: 'e530bdf4cc330317b9017663a63b25a1' },
        { url: 'components/elements/UserSelector.vue', revision: '8406668e10a88483d4984ee8d8d85de0' },
        { url: 'components/elements/vueform/CountryElement.vue', revision: '2abf9337f3ea76fba4fff2d95bd12c82' },
        { url: 'components/elements/vueform/CurrencyElement.vue', revision: '0cc8a021200fdc29fbb94497e96facb6' },
        { url: 'components/elements/vueform/DocumentfileElement.vue', revision: '9c063d96acd2bc2aa992a86aef09a66c' },
        { url: 'components/elements/vueform/HealthinsuranceElement.vue', revision: 'c742100ad4b66a5ac63aa30fce1044c8' },
        { url: 'components/elements/vueform/OrganisationElement.vue', revision: '58144805b058469681cda899929c7c79' },
        { url: 'components/elements/vueform/ProjectElement.vue', revision: '19c560c4a5a49706d27efa091f961bb9' },
        { url: 'components/expenseReport/elements/ExpenseReportCard.vue', revision: '927d6abf521b3cd559940b6ee616525a' },
        { url: 'components/expenseReport/elements/ExpenseReportCardList.vue', revision: 'c6c3ed2d60cf0f1025acf66e9e1bfed4' },
        { url: 'components/expenseReport/ExaminePage.vue', revision: '0fd281a5a4b6223ac64e57cf2da04d37' },
        { url: 'components/expenseReport/ExpenseReportPage.vue', revision: 'd659577bfb2cbdf0bfac9fd59e04436b' },
        { url: 'components/expenseReport/forms/ExpenseForm.vue', revision: 'c56a0f17a8c33661b942fdb89e0c0d9f' },
        { url: 'components/expenseReport/forms/ExpenseReportForm.vue', revision: '98149c0528d0ff99d4da2630f6b8648a' },
        { url: 'components/healthCareCost/ConfirmPage.vue', revision: '978d6acd0dacb703ac1cfe460271b072' },
        { url: 'components/healthCareCost/elements/HealthCareCostCard.vue', revision: 'e023bd8e39e38e0c86ad95965c834192' },
        { url: 'components/healthCareCost/elements/HealthCareCostCardList.vue', revision: 'f58b9eb40a9d78ee0c644fa487d15ec2' },
        { url: 'components/healthCareCost/ExaminePage.vue', revision: 'f2222acf2b2484ce842cab99037fbc5e' },
        { url: 'components/healthCareCost/forms/ExpenseForm.vue', revision: 'e3abdcbb63d0e9233ee45892571a9b91' },
        { url: 'components/healthCareCost/forms/HealthCareCostForm.vue', revision: 'b3bf0280a0116ac88afa7111404d9277' },
        { url: 'components/healthCareCost/HealthCareCostPage.vue', revision: '7f31c9f8fdbdc15e151d0d457dcba147' },
        { url: 'components/HomePage.vue', revision: '9abf36e28c6940fbb5f00aaad86159bc' },
        { url: 'components/LoginPage.vue', revision: 'a736d6c2cd38e1d74deaf15d621bdfaf' },
        { url: 'components/settings/elements/CountryList.vue', revision: '13e0474440ef1b298d608a8a6690a5c4' },
        { url: 'components/settings/elements/CSVImport.vue', revision: '0bcc331cd6f7179636ed7c5f482b19a1' },
        { url: 'components/settings/elements/CurrencyList.vue', revision: '974dc29c2715c0cb6ba1c394609c61b0' },
        { url: 'components/settings/elements/HealthInsuranceList.vue', revision: '7f02fce53aeba756b7e590fc841f26d6' },
        { url: 'components/settings/elements/OrganisationList.vue', revision: 'd7e08370f6955ed3ee4e645f1584a3c1' },
        { url: 'components/settings/elements/ProjectList.vue', revision: '5ebbd36d64f6fca190cac501979c5332' },
        { url: 'components/settings/elements/SettingsForm.vue', revision: 'd0ffd9f3772eb9d5cea14003d6cceed4' },
        { url: 'components/settings/elements/UserList.vue', revision: '7c07363e10920db172590ae7771d9def' },
        { url: 'components/settings/elements/UserMerge.vue', revision: '45482d6dec16f758e7c4108ebdf3c3e9' },
        { url: 'components/settings/SettingsPage.vue', revision: 'f7ad993ba3dc4c2c2d71b2f0ad482a32' },
        { url: 'components/travel/ApprovePage.vue', revision: '54e026d4a7e4d8d5e96af71e0758d91b' },
        { url: 'components/travel/elements/TravelApplication.vue', revision: '1c21a435b9b4db4bd20863873489a6bb' },
        { url: 'components/travel/elements/TravelCard.vue', revision: '378b5e812211c15869938509d8e6e655' },
        { url: 'components/travel/elements/TravelCardList.vue', revision: 'b849462c8a093402dc926ff2f59d340d' },
        { url: 'components/travel/ExaminePage.vue', revision: '32d0acc0ede6594174bcb4e37930483a' },
        { url: 'components/travel/forms/ExpenseForm.vue', revision: '6c6139c885ff2933e8a45d8020ad9a9b' },
        { url: 'components/travel/forms/StageForm.vue', revision: '113b5ddabe1efbe114fdea0974d654ac' },
        { url: 'components/travel/forms/TravelApplyForm.vue', revision: '2b57c50db447ff953c9d205ba82bd922' },
        { url: 'components/travel/forms/TravelApproveForm.vue', revision: '7e16db8a20fc88a933e7998c36200c8c' },
        { url: 'components/travel/TravelPage.vue', revision: '9a61cdafeaeb1d71ba52ead478b2bcdd' },
        { url: 'costumModules.d.ts', revision: '3fb6f0096f349ebdb9a17e9e00ae03c5' },
        { url: 'env.d.ts', revision: 'ab4f0a3e8596b789d5515caaf5e2ebd7' },
        { url: 'formatter.ts', revision: '8b3b8868a0529d10be328b7317dc4e02' },
        { url: 'i18n.ts', revision: 'e141d713b25483cea949d461d8454502' },
        { url: 'main.ts', revision: '346f9e75dbdb0dc24a840f274eb61a61' },
        { url: 'router.ts', revision: '8a3239de81c09175efa71c7b44bc9337' },
        { url: 'vue-select.css', revision: '1f4ee9ecd01e049bed41a81218fe7ceb' },
        { url: 'vue-select.ts', revision: '0510dd3da7267f48c7c24e06ee4d0976' },
        { url: 'vue3-easy-data-table.css', revision: '27c6442a33d0ae87c23cfc6c66faeaa8' },
        { url: 'vueform.config.ts', revision: '5ef2a037f2a36915852278f380782f00' },
        { url: 'vueform.css', revision: '9f57a8cd5c7fd4f12a0f3aa91e5bf8c3' }
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    )
})
//# sourceMappingURL=sw.js.map
