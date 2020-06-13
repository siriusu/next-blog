module.exports = {
  plugins:
    process.env.CSS_ENV === 'build'
      ? [
          require('tailwindcss'),
          require('autoprefixer')
      ]
      : [
        'tailwindcss',
        'autoprefixer'
      ]
}
