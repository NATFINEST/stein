<template>
  <div class="staff">
    <div class="container">
      <h1 class="staff__total">Showing {{ numberOfStaff }} colleague(s)</h1>
      <div class="divider"></div>
      <div style="text-align:center;" v-if="loading">
        <i class="fas fa-spinner fa-spin fa-3x"></i>
      </div>
      <div class="staff__list">
        <StaffCard v-for="staff in staffList" :key="staff.id" :staff="staff" />
      </div>
    </div>
  </div>
</template>

<script>
import StaffCard from './StaffCard.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Staff',
  setup() {
    const store = useStore();

    const loading = computed(() => store.getters.loading);

    const staffList = computed(() => store.getters.filteredList);

    const numberOfStaff = computed(() => staffList.value.length);

    store.dispatch('getStaffList');
    return {
      staffList,
      numberOfStaff,
      loading,
    };
  },
  components: {
    StaffCard,
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

  .lists {
    &:nth-child(4n - 4) {
      @include theme-color($purple, #006ca1, 89);
    }
    &:nth-child(4n - 5) {
      @include theme-color($green, #ced836, 89);
    }
    &:nth-child(4n - 6) {
      @include theme-color($orange, #961d66, 89);
    }
    &:nth-child(4n - 7) {
      @include theme-color($blue, #006ca1, 89);
    }
  }
}
</style>
