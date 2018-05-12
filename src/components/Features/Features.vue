<template>
  <div class="features">
    <div class="wrap">

      <div class="rotate-patent">
        <div class="rotate-child">

          <div class="page-container">
            <h2 class="large-title">Features</h2>
            <div class="middle-bar"></div>

            <div class="feature-content-container">
              <div class="feature-block">
                <img src="~@/assets/imgs/Features/client-side.svg" alt="">
                <h6 class="feature-name">Client-side Encryption</h6>
                <p class="article">
                  An encrypted version of your private key will be stored
                  in isolation on your device and MEWconnect will never
                  expose your private key to any browser!
                </p>
              </div>
              <div class="feature-block">
                <img src="~@/assets/imgs/Features/verification.svg" alt="">
                <h6 class="feature-name">2-way Transaction Verification</h6>
                <p class="article">
                  With MEWconnect you will always be able to verify the amount you are sending and to whom before signing the transaction and broadcasting it to the blockchain.
                </p>
              </div>
              <div class="feature-block">
                <img src="~@/assets/imgs/Features/backup.svg" alt="">
                <h6 class="feature-name">Back Up Your Account</h6>
                <p class="article">
                  You will never lose access to your Accounts and Funds. If you get a new phone, you can always  retrieve your backup with your 24-word Mnemonic phrase
                </p>
              </div>
              <div class="feature-block">
                <img src="~@/assets/imgs/Features/safeguard.svg" alt="">
                <h6 class="feature-name">Safeguard from Phishing and Malware</h6>
                <p class="article">
                  Onboarding, restoration, connection and transaction signing are exclusive to the phone environment. No phishers or malware will be able to obtain your private key!
                </p>
              </div>
              <div class="feature-block">
                <img src="~@/assets/imgs/Features/open-source.svg" alt="">
                <h6 class="feature-name">Free and Open Source</h6>
                <p class="article">
                  This phone app will be free to use and open source. You will always be able see and audit all of the code that runs MEWconnect and MyEtherWallet.
                </p>
              </div>
              <div class="feature-block">
                <img src="~@/assets/imgs/Features/p2p.svg" alt="">
                <h6 class="feature-name">P2P Communication - NO Data Collection</h6>
                <p class="article">
                  Your phone will establish an encrypted channel with the browser. With no need for a database, only you will have have access to your personal data!
                </p>
              </div>
            </div>
          </div> <!-- .page-container -->

        </div> <!-- .rotate-child -->
      </div> <!-- .rotate-patent -->

    </div> <!-- .wrap -->
  </div>
</template>

<script>
export default {
  name: 'Features',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'Features';
</style>
