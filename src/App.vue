<template>
  <div id="app">

    <AppHeader @select-championship="changeChampionship"/>

    <AppSection :championship="championship" />
    
    <AppFooter />
    
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppSection from './components/AppSection.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppSection
  },
  data() {
    return {
      championship: 'Brazilian championship'
    }
  },
  methods: {
    changeChampionship(value) {
      this.championship = value;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>
