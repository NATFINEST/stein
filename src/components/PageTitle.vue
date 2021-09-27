<template>
  <div class="page-title">
    <div class="container">
      <h1 className="page-title__maintitle">Staff Directory</h1>
      <h5 class="page-title__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        bibendum laoreet.
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
};
</script>

<style lang="scss" scoped>
.page-title {
  margin: 1.5rem 0;

  @include breakpoint-up(large) {
    margin-top: 4.5rem;
  }

  line-height: 1.4;
  &__maintitle {
    font-size: $font-29;
    font-weight: $font-medium;
    margin-bottom: 0.8125rem;

    @include breakpoint-up(large) {
      font-size: $font-55;
    }
  }
  &__subtitle {
    font-size: $font-19;
    font-weight: $font-regular;

    @include breakpoint-up(large) {
      max-width: 41.6875rem;
    }
  }
}
</style>
