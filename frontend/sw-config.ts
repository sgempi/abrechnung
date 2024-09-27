const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  globDirectory: isProd ? 'dist/' : 'src/',
  globPatterns: ['**/*.{js,css,html,png,jpg}'],
  swSrc: 'sw.ts',
  swDest: isProd ? 'dist/sw.js' : 'src/sw.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
}
