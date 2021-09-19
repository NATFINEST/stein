<template>
  <div class="profile" ref="profile">
    <div class="container">
      <div class="profile__card">
        <div class="profile__avatar ">
          <figcaption class="profile__location">
            SAN
          </figcaption>
        </div>
        <div class="profile__info">
          <h2 class="profile__name">
            Freddy Patterson
          </h2>
          <h3 class="profile__job">
            ACCOUNT MANAGER
          </h3>
          <h4 class="profile__joined joined">
            Joined 1 year 2 months ago
          </h4>
          <div class="profile__birthday hide-for-mobile">
            <span>Birthday: </span>
            <img src="@/assets/images/cake.svg" alt="Birthday Cake" />
            <h5 class="age">Turning 23 on APRIL 03</h5>
          </div>
          <div class="divider--v2"></div>
          <div class="profile__contact">
            <div class="email">
              <i class="fa fa-envelope"></i>
              <span>mail@mail.com</span>
            </div>
            <div class="phone">
              <i class="fa fa-phone"></i>
              <span>0000008977</span>
            </div>
          </div>
          <div class="divider--v2"></div>
          <p class="profile__bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar sic
            tempor. Sociis natoque penatibus et magnis.
          </p>
        </div>
        <button class="profile__close">
          <i class="fa fa-times cta"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Staff Profile',
  props: ['staff'],
};
</script>

<style lang="scss" scoped>
/* .v-hidden {
} */
.profile {
  @include theme-color($orange, #961d66, 89);

  &__card {
    background-color: #ffffff;
    box-shadow: 0 0.1875rem 0.625rem #00000029;
    display: flex;
    position: relative;
    margin-bottom: 1.1875rem;
    flex-direction: column;

    @include breakpoint-up(medium) {
      flex-direction: row;
    }
  }

  &__avatar {
    position: relative;
    width: 100%;
    background-image: url('~@/assets/images/profile@2x.png');
    background-size: cover;
    aspect-ratio: 5 / 3;
  }

  &__location {
    position: absolute;
    top: 0;
    left: 0;
    font-size: $font-14;
    font-weight: $font-medium;
    text-transform: uppercase;
    color: $white;
    padding: 0.4375rem 1.0625rem;

    @include breakpoint-up(large) {
      bottom: auto;
      top: 0;
      padding: 0.5625rem 1.125rem;
      font-size: $font-14;
    }
  }

  &__info {
    padding: 0.75rem 0 0.75rem 0.875rem;
    font-weight: $font-light;

    @include breakpoint-up(large) {
      padding: 2.0625rem 3.75rem;
    }

    h2 {
      font-size: $font-23;
      font-weight: $font-medium;
      line-height: 1.4;

      @include breakpoint-up(large) {
        font-size: $font-31;
      }
    }

    h3 {
      font-size: $font-17;
      font-weight: $font-light;
      text-transform: uppercase;
      margin-bottom: 0.625rem;
      @include breakpoint-up(large) {
        font-size: $font-21;
      }
    }

    h4 {
      font-size: $font-15;
      font-weight: $font-light;
      margin-bottom: 0.625rem;
      @include breakpoint-up(large) {
        font-size: $font-16;
      }
    }
  }

  &__birthday {
    display: flex;
    align-items: flex-end;
    margin-bottom: 1.4375rem;
    line-height: 1;

    span {
      margin-right: 0.5rem;
    }
    img {
      width: 1.125rem;
      height: 1.4375rem;
      margin-right: 0.375rem;
    }
    h5 {
      font-weight: $font-bold;
    }
  }

  &__contact {
    padding: 1.25rem 0;
    font-size: $font-15;
    font-weight: $font-xlight;

    @include breakpoint-up(medium) {
      font-size: $font-18;
    }

    div:not(:last-child) {
      margin-bottom: 0.625rem;
    }

    i {
      margin-right: 0.625rem;
    }
  }

  &__bio {
    font-size: $font-15;
    line-height: 1.4;
  }

  &__close {
    position: absolute;
    top: 0.75rem;
    right: 0.875rem;
    background: transparent;
    width: 0.875rem;
    height: 0.875rem;
    border: 0;

    @include breakpoint-up(large) {
      right: 1.125rem;
    }

    > i {
      font-size: $font-19;
      width: 0.875rem;
      height: 0.875rem;
      transition: all 0.3s ease-in-out;

      /* &:hover {
        color: darken()
      } */
    }
  }

  .px-60 {
    padding: 0 3.75rem;
  }
}
</style>
