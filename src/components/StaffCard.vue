<template>
  <div class="staff">
    <div class="container">
      <div class="staff__card">
        <div class="staff__avatar">
          <figcaption class="staff__location">
            SAN
          </figcaption>
        </div>
        <div class="divider"></div>
        <div class="staff__info">
          <h2 class="staff__name">
            {{ staff.name }}
          </h2>
          <h3 class="staff__job">
            {{ staff.jobTitle }}
          </h3>
        </div>
        <button class="staff__profile">
          <i class="fas fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleStaff',
  props: ['staff'],
};
</script>
<style lang="scss" scoped>
.staff {
  span {
    box-shadow: 0 0.1875rem 0.375rem #00000029;
  }
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
  &__card {
    background-color: $white;
    box-shadow: 0 0.1875rem 0.625rem #0000001a;
    display: flex;
    position: relative;
    margin-bottom: 1.1875rem;
    @include breakpoint-up(large) {
      flex-direction: column;
    }
  }

  &__avatar {
    position: relative;
    height: 5rem;
    width: 5rem;
    background-image: url('~@/assets/images/profile@2x.png');
    background-size: cover;

    @include breakpoint-up(large) {
      background-image: url('~@/assets/images/profile@2x.png');
      height: 15.4375rem;
      width: auto;
    }
  }

  &__location {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: $font-11;
    font-weight: $font-medium;
    text-transform: uppercase;
    color: $white;
    padding: 0.25rem 0.625rem;

    @include breakpoint-up(large) {
      bottom: auto;
      top: 0;
      padding: 0.5625rem 1.125rem;
      font-size: $font-14;
    }
  }

  &__info {
    padding: 0.75rem 0 0.75rem 1.25rem;

    @include breakpoint-up(large) {
      padding: 1.1875rem 0 0.75rem 1.375rem;
    }

    h2 {
      font-size: $font-17;
      font-weight: $font-medium;
      line-height: 1.4;

      @include breakpoint-up(large) {
        font-size: $font-21;
      }
    }

    h3 {
      font-size: $font-13;
      font-weight: $font-light;
      text-transform: uppercase;
      width: 160px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;

      @include breakpoint-up(large) {
        font-size: $font-15;
      }
    }
  }

  &__profile {
    position: absolute;
    right: 0.5625rem;
    bottom: 0.5625rem;
    background: $white 0% 0% no-repeat padding-box;
    box-shadow: 0 0.1875rem 0.375rem #00000029;
    width: 1.75rem;
    height: 1.75rem;
    border: 0;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;

    @include breakpoint-up(large) {
      bottom: 5.6785rem;
    }

    &:hover {
      transform: scale(1.1);
      background-color: $light;
    }
  }
}
</style>
