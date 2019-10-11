<template>
  <section class="container">
    <logo class="corner-pad"/>
    <nuxt-link to="/">
      <h1 class="title">
        Hacktoberfest
      </h1>
    </nuxt-link>
    <nuxt-link class="corner-pad link-but" to="/AddDev">Add Dev</nuxt-link>
  </section>
  <!-- <ul>
    <li>total count</li>
    <li>number of devs</li>
    <li>number > 4 PR's</li>
    <li>Top 5</li>
    <li>Those In</li>
    <li>Those Out</li>
  </ul> -->
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.link-but {
  align-items: center;
  background: transparent;
  border: 4px solid #f15523;
  color: white;
  display: flex;
  font-size: 1em;
  font-weight: bold;
  justify-content: center;
  text-decoration: none;
  width: 10em;
}

.link-but:hover {
  border-color: #f15523;
  /* border-color: darkorchid; */
}

.corner-pad {
  margin: 2em;
}

.title {
  color: #06ae6f;
  /* color: #f15523; */
  font-family: 'Sigmar One', cursive;
  font-size: 1.8em;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  text-align: center;
  text-transform: uppercase;
}

@media (min-width: 700px) {
  .title {
    font-size: 2em;
  }
}

@media (min-width: 1000px) {
  .title {
    font-size: 2.5em;
  }
}

@media (min-width: 1100px) {
  .title {
    font-size: 4em;
  }
}
</style>
