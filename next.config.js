/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public', 
    register: true,
    mode: 'production', 
    disabled: false
  },
  reactStrictMode: true,
  images:{
    domains: ['placeimg.com', 'localhost', 'api.lorem.space']
  }
})
