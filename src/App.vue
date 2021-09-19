<template>
  <Header />
  <PageTitle />
  <Filter />
  <Staff />
  <StaffProfile />
</template>

<script>
import Header from './components/Header.vue';
import PageTitle from './components/PageTitle.vue';
import Filter from './components/Filter.vue';
import Staff from './components/Staff.vue';
import StaffProfile from './components/StaffProfile.vue';
export default {
  name: 'App',
  components: {
    Header,
    PageTitle,
    Filter,
    Staff,
    StaffProfile,
  },
};
</script>

<style lang="scss">
html {
  font-size: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0 !important;
  padding: 0;
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: $black;
  background-color: $light;

  @include breakpoint-up(large) {
    background-image: url(~@/assets/images/background.svg);
    background-size: cover;
  }
}
</style>
