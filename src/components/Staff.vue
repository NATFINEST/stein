<template>
  <div class="staff">
    <div class="container">
      <h1 class="staff__total">Showing 94 colleague(s)</h1>
      <div class="divider"></div>
      <div class="staff__list">
        <SingleStaff />
        <SingleStaff />
        <SingleStaff />
        <SingleStaff />
      </div>
    </div>
  </div>
</template>

<script>
import SingleStaff from './StaffCard.vue';
export default {
  name: 'Staff',
  components: {
    SingleStaff,
  },
};
</script>

<style lang="scss" scoped>
.staff {
  &__total {
    font-size: $font-18;
    font-weight: $font-regular;
    margin-top: 1.0625rem;
    margin-bottom: 0.75rem;

    @include breakpoint-up(large) {
      margin-top: 4rem;
      margin-bottom: 1.3125rem;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr;
    @include breakpoint-up(medium) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include breakpoint-up(large) {
      grid-template-columns: repeat(4, 1fr);
      gap: 1.625rem;
    }
  }
  .divider {
    border: 2px solid $pink;
    margin-bottom: 2.375rem;
    @include breakpoint-up(large) {
      grid-template-columns: repeat(4, 1fr);
      margin-bottom: 1.875rem;
    }
  }
}
</style>
