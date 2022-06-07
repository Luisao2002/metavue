<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/events">Events</router-link>
    </nav>
    <router-view/>
    <!--<ShareFacebook url="http://recruit.istyle.co.jp/career/"/>
    <ShareTwitter url="http://recruit.istyle.co.jp/career/"/>
    <ShareGooglePlus url="http://recruit.istyle.co.jp/career/"/>-->
    <facebook :url="url" scale="3"></facebook>
    <twitter :url="url" title="Check me on Github" scale="3"></twitter>
    <linkedin :url="url" scale="3"></linkedin>
    <telegram :url="url" scale="3"></telegram>
    <whats-app :url="url" title="Hello" scale="3"></whats-app>
    <pinterest :url="url" scale="3"></pinterest>
    <reddit :url="url" scale="3" title="My Github"></reddit>
    <google :url="url" scale="3"></google>
    <email :url="url" subject="Hello" scale="3"></email>
  </div>
</template>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/pt_PT/sdk.js#xfbml=1&version=v13.0" nonce="c2NF4RYI"></script>
<script>
import {
  Facebook,
  Twitter,
  Linkedin,
  Pinterest,
  Reddit,
  Telegram,
  WhatsApp,
  Email,
  Google
} from "vue-socialmedia-share";
export default {
  name: 'App',
  metaInfo: {
    //title: 'MetaSite',
    //titleTemplate: '%s | vue-meta Example App',
meta: [
      { charset: 'utf-8' },
      {name: 'description', content: 'An example Vue application with vue-meta.'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {property: 'og:title', content: 'IrRADIARE', template: chunk => `${chunk} - My page`, vmid: 'og:title'},
      {property: 'og:image', content:'https://www.irradiare.com/com.irradiare.www/images/logo_irradiare_2020.png', template: chunk => `${chunk} - My page`, vmid: 'og:image'},
      {property: 'og:description', content:'We are IrRADIARE Science for Evolution! We are a multidisciplinary, multicultural, team, dealing with urban, local and regional governance and public policies.', template: chunk => `${chunk} - My page`, vmid: 'og:description'},
      {property: 'twitter:title', content: 'IrRADIARE', template: chunk => `${chunk} - My page`, vmid: 'twitter:title'},
      {property: 'twitter:description', content:'We are IrRADIARE Science for Evolution! We are a multidisciplinary, multicultural, team, dealing with urban, local and regional governance and public policies.', vmid: 'twitter:description'},
      {property: 'twitter:image', content:'https://www.irradiare.com/com.irradiare.www/images/logo_irradiare_2020.png', template: chunk => `${chunk} - My page`, vmid: 'twitter:images'}
  ]
  },
  components: {
    Facebook,
    Twitter,
    Linkedin,
    Pinterest,
    Reddit,
    Telegram,
    WhatsApp,
    Email,
    Google
  },
  data() {
    return {
      url: "https://www.irradiare.com/"
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ec8236;
}
</style>
