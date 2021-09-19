<template>
  <div class="filter">
    <div class="container">
      <h1 class="filter__title">Filter colleagues</h1>
      <div class="filter__input">
        <i class="fas fa-search" />
        <input type="text" placeholder="Search" @input="great" />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  name: 'Filter',
  setup() {
    const store = useStore();

    const great = (e) => {
      store.dispatch('setFilterParam', e.target.value);
    };

    return {
      great,
    };
  },
};
</script>

<style lang="scss" scoped>
.filter {
  padding: 1.875rem 0;
  background-color: $white;
  box-shadow: 0 0 0.375rem #00000029;

  @include breakpoint-up(large) {
    padding: 2.75rem 0 2.9375rem 0;
  }

  &__title {
    font-size: $font-21;
    line-height: 1.3;
    font-weight: $font-regular;
    margin-bottom: 0.625rem;
  }
  &__input {
    position: relative;

    > i {
      position: absolute;
      left: 16.874rem;
      top: 1.125rem;
      color: $green;
      height: 1.3125rem;
      width: 1.3125rem;
    }
    > input {
      width: 18.625rem;
      height: 3.25rem;
      border: 1px solid $green;
      border-radius: 0.3125rem;
      color: $green;
      padding: 0.8125rem;
      font-size: $font-17;
      font-family: 'Nunito', sans-serif;
      outline: none;

      &::placeholder {
        color: $green;

        @include breakpoint-up(large) {
          color: #707070;
        }
      }
    }
  }
}
</style>
