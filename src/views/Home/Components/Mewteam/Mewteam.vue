<template>
  <div class="team">
    <img src="~@/assets/images/team.jpg" alt="" />

    <div class="team__text">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Built and maintained<br />by the MyEtherWallet team</h2>
            <p>The team that brought you the Ethereum’s original and most trusted wallet interface.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'mewteam',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/global-styles.scss';
@import 'Mewteam.scss';
</style>
