<template>
  <div class="about-text">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>About MEWconnect </h2>

          <div class="about-text__text">
            <p>MEWconnect is a simple, powerful new app for your mobile device that enables a better, more secure way of managing your Ethereum assets and ERC-20 Tokens. It is an official mobile software brought by MyEtherWallet Inc, currently available only on IOS for iPhone 5 and above.</p>
            <p>MEWconnect generates a new wallet then encrypts your private key and stores it in isolation using your device’s built-in security architecture. The app establishes a secure connection while keeping your private key separate from the browser. The software implements two-factor authentication, protecting you from unauthorized transaction broadcasting on the blockchain. Only you will be able to verify and sign the transaction. MyEtherWallet will never collect any of your personal data, all of your information will only be stored on your mobile device. </p>
            <p>With added layers of security, MEWconnect puts you in total control of your crypto assets.</p>
            <p>Please review Terms and Privacy Policy. Use of MEWconnect constitutes acceptance of these provisions.</p>
          </div>

          <div class="about-text__feautures">
            <h3>Feautures:</h3>

              <div class="row">
                  <div class="col-lg-6">
                      <div class="about-text__feautures-item">
                          <h4>Client-side Encryption</h4>
                          <p>An encrypted version of your private key will be stored in isolation on your device. MEWconnect will never expose your private key to any browser!</p>
                      </div>
                  </div>

                  <div class="col-lg-6">
                      <div class="about-text__feautures-item">
                          <h4>2-way Transaction Verification</h4>
                          <p>With MEWconnect you will always be able to verify the amount you are sending, and to whom before signing the transaction and broadcasting it to the blockchain.</p>
                      </div>
                  </div>

                  <div class="col-lg-6">
                      <div class="about-text__feautures-item">
                          <h4>Back Up Your Account</h4>
                          <p>You will never lose access to your Accounts and Funds. If you get a new phone, you can always retrieve your backup with your 24-word Mnemonic phrase.</p>
                      </div>
                  </div>

                  <div class="col-lg-6">
                      <div class="about-text__feautures-item">
                          <h4>Safeguard from Phishing and Malware</h4>
                          <p>Onboarding, restoration, connection and transaction signing are exclusive to the phone environment. No phishers or malware will be able to obtain your private key!</p>                      
                      </div>
                  </div>

                  <div class="col-lg-6">
                      <div class="about-text__feautures-item">
                          <h4>Free and Open Source</h4>
                          <p>This phone app will be free to use and open source. You will always be able see and audit all of the code that runs MEWconnect and MyEtherWallet.</p>
                      </div>
                  </div>

                  <div class="col-lg-6">
                      <div class="about-text__feautures-item">
                          <h4>P2P Communication — no Data Collection </h4>
                          <p>Your phone will establish an encrypted channel with the browser. With no need for a database, only you will have have access to your personal data!</p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="about-text__help">
              To get help, please visit <a href="https://myetherwallet.github.io/knowledge-base/">Knowledge Base</a> or send email to: <a href="mailto:support@myetherwallet.com">support@myetherwallet.com</a> To learn more, please visit our official page: <a href="https://mewconnect.myetherwallet.com/">mewconnect.myetherwallet.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AboutText',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/global-styles.scss';
@import 'AboutText';
</style>
