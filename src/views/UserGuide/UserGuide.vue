<template>
    <div class="user-guide">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>MEWconnect User Guide</h2>
                    <UserGuideItem v-for="(item, index) in items" :item="item" :index="index" :key="index" />

                    <div class="user-guide__help">
                        <p>To download the MEWconnect app, visit <a href="https://mewconnect.myetherwallet.com/">mewconnect.myetherwallet.com</a>.</p>

                        <h3>Questions or Concerns?</h3>
                        <p> Email us at: <a href="mailto:support@myetherwallet.com?subject=MEWconnect Android Beta Request">support@myetherwallet.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import UserGuideItem from './Components/UserGuideItem/UserGuideItem.vue'
export default {
  name: 'user-guide',
  data () {
      return {
        items: [
          {
            name: 'Create a Wallet',
            image: 1,
            list: [
                {
                    text: 'Open your MEWconnect app.',
                    description: ''
                },
                {
                    text: 'Click ‘Create New Wallet’.',
                    description: ''
                },
                {
                    text: 'Pick a strong password.',
                    description: 'This step is very important. Make sure you pick a password that is not easy to guess, but also write it down with pen and paper. If you forget it, we cannot recover it for you. There is only one other way to recover a wallet, and we’ll get to that soon.'
                },
                {
                    text: 'Type it again.',
                    description: ''
                },
                {
                    text: 'Click ‘Start using MEWconnect’.',
                    description: "You’re done! You’ll be taken to a screen that shows your new wallet's address backed by a unique color-code. On this screen you’ll find all your ETH and tokens. There is also a handy ‘Share’ button next to your address, in case you want to send it to someone."
                }
            ]
          },
          {
            name: 'Back it Up',
            image: 2,
            list: [
                {
                    text: 'Click ‘Back Up Now’.',
                    description: ''
                },
                {
                    text: 'Click ‘Create New Wallet’.',
                    description: ''
                },
                {
                    text: 'Get a pen and paper ready. Then press ‘Start’.',
                    description: ''
                },
                {
                    text: 'Enter in your password to verify you’re you.',
                    description: ''
                },
                {
                    text: 'WRITE DOWN YOUR SEED WORDS.',
                    description: 'This is the single most important piece of information about your wallet. These 12 words will decide the future of your funds. Do not lose them, and do not screenshot them. Pass the seed word check test.'
                },
                {
                    text: 'You’re done!',
                    description: 'All backed up and ready to connect to MEW.'
                }
            ]
          },
          {
            name: 'Connect with MEW',
            image: 3,
            list: [
                {
                    text: 'Unlock your wallet on MEWconnect.',
                    description: ''
                },
                {
                    text: 'Find a desktop computer. Head to the <a href="https://mcbeta.myetherwallet.com/">MEW site</a>.',
                    description: 'Check for the SSL certification that states ‘MyEtherWallet Inc [US]’ in the URL. We recommend the Google Chrome browser.'
                },
                {
                    text: 'Choose the ‘Send Ether & Tokens’ tab..',
                    description: ''
                },
                {
                    text: 'Click ‘MEW Connect’ as the method of access.',
                    description: ''
                },
                {
                    text: 'On the app, click ‘Scan to Connect’.',
                    description: ''
                },
                {
                    text: 'Now use MEWconnect to scan the QR code.',
                    description: 'You’re done! You can now use our interface as usual, with the MEWconnect app as your main method of access. Congratulations!'
                }
            ]
          },
          {
            name: 'Send a Transaction',
            image: 4,
            list: [
                {
                    text: 'Unlock your wallet on MEWconnect.',
                    description: ''
                },
                {
                    text: 'Connect to the <a href="https://mcbeta.myetherwallet.com/">MEW site</a>, as shown above.',
                    description: ''
                },
                {
                    text: 'Follow the process of a regular transaction.',
                    description: 'Fill in the ‘To Address’, ‘Amount to Send’, and ‘Gas Limit’ fields. If you have any questions, refer to our article on <a href="https://kb.myetherwallet.com/send/how-to-send-transaction.html">How to Send a Transaction</a>.'
                },
                {
                    text: 'Confirm your transaction on the MEWconnect app.',
                    description: 'You’re done! Your transaction is broadcasting to the network, and you’ll be able to check its status shortly with a provided transaction ID.'
                }
            ]
          },
          {
            name: 'Overview of the Wallet',
            image: 5,
            list: [
                {
                    text: 'Where to see tokens',
                    description: 'These can be found at the bottom of the wallet screen.'
                },
                {
                    text: 'Where to contact us',
                    description: ' There is an information button in the top-left, that offers a contact resource and other links of interest.'
                },
                {
                    text: 'Where to buy ETH',
                    description: 'You can purchase ETH in the MEWconnect app by choosing the top-right button labelled ‘Buy Ether’.'
                },
                {
                    text: 'How to share your address',
                    description: ' You can share your address with anyone you’d like by clicking the arrow button to the right of your address. It will give you different options like text, email, twitter, etc..'
                }
            ]
          }
        ]
    }
},
  components: {
    UserGuideItem
  }
}
</script>

<style lang="scss">
    @import 'UserGuide';
</style>