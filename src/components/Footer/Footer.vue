<template>
  <div class="footer" :class="{ 'open': openMenu }">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <a href="https://www.myetherwallet.com" class="footer__logo"></a>
        </div>

        <div class="col-lg-3">
          <router-link to="/about" class="footer__link">About</router-link>
          <router-link to="/user-guide" class="footer__link">User Guide</router-link>
          <a href="https://kb.myetherwallet.com" class="footer__link">Knowledge Base</a>
        </div>

        <div class="col-lg-3">
          <a href="https://www.myetherwallet.com/" class="footer__link">MyEtherWallet.com</a>
          <a href="https://team.myetherwallet.com/" class="footer__link">Team</a>
        </div>

        <div class="col-lg-3">
          <a
            href="mailto:support@myetherwallet.com?subject=MEWconnect website support request"
            class="footer__link"
          >Support</a>
          <a
            href="https://www.myetherwallet.com/privacy-policy.html"
            class="footer__link"
          >Privacy policy</a>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="footer__copy">© 2020 MyEtherWallet, Inc</div>
        </div>
        <div class="col-lg-6">
          <div class="footer__social">
              <a
                v-for="link in links"
                :key="link.class"
                :href="link.to"
                :aria-label="link.to"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i :class="'fa ' + link.class" />
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["openMenu"],
  data() {
    return {
      links: [
        {
          to: 'https://www.facebook.com/myetherwallet',
          class: 'fa-facebook'
        },
        {
          to: 'https://www.twitter.com/@myetherwallet',
          class: 'fa-twitter'
        },
        {
          to: 'https://www.instagram.com/myetherwallet',
          class: 'fa-instagram'
        },
        {
          to: 'https://www.linkedin.com/company/myetherwallet',
          class: 'fa-linkedin'
        },
        {
          to: 'https://www.github.com/myetherwallet',
          class: 'fa-github'
        },
        {
          to: 'https://www.reddit.com/r/myetherwallet',
          class: 'fa-reddit-alien'
        },
        {
          to: 'https://www.medium.com/@myetherwallet',
          class: 'fa-medium'
        },
        {
          to: 'https://vk.com/public190491855',
          class: 'fa-vk'
        },
        {
          to: 'https://t.me/myetherwalletofficial',
          class: 'fa-telegram'
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "Footer.scss";
</style>
