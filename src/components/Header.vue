<template>
  <header class="header" ref="header">
    <div class="overlay has-fade" :ref="setHideFadeRef"></div>
    <nav class="container">
      <a href="#" class="header__toggle hide-for-desktop" @click="toggleMenu">
        <!-- <img src="@/assets/images/menu-lines.svg" alt="toggle menu" /> -->
        <span></span>
        <span></span>
        <span></span>
      </a>
      <div class="header__links hide-for-mobile">
        <a href="#" class="links">Dashboard</a>
        <a href="#" class="links">Our Agency</a>
        <a href="#" class="links active">Our Staff</a>
        <a href="#" class="links">Location</a>
        <a href="#" class="links">Latest</a>
        <a href="#" class="links">Upcoming</a>
        <a href="#" class="links">Resources</a>
        <a href="#" class="links">Your Stein IAS</a>
      </div>
      <div class="header__menu hide-for-desktop has-fade" :ref="setHideFadeRef">
        <a href="#" class="links">Dashboard</a>
        <a href="#" class="links">Our Agency</a>
        <a href="#" class="links">Our Staff</a>
        <a href="#" class="links">Location</a>
        <a href="#" class="links">Latest</a>
        <a href="#" class="links">Upcoming</a>
        <a href="#" class="links">Resources</a>
        <a href="#" class="links">Your Stein IAS</a>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Header',

  setup() {
    const header = ref(null);
    // const hasFade = ref([]);

    let hideFadeRefs = [];
    const setHideFadeRef = (el) => {
      if (el) {
        hideFadeRefs.push(el);
      }
    };

    const toggleMenu = () => {
      if (header.value.classList.contains('open')) {
        header.value.classList.remove('open');
        hideFadeRefs.forEach((item) => item.classList.remove('fade-in'));
      } else {
        header.value.classList.add('open');
        hideFadeRefs.forEach((item) => item.classList.add('fade-in'));
        document.body.classList.add('noscroll');
      }
    };

    return {
      toggleMenu,
      header,
      setHideFadeRef,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  &.open {
    .header__toggle {
      > span:first-child {
        transform: rotate(45deg);
      }

      > span:nth-child(2) {
        opacity: 0;
      }

      > span:last-child {
        transform: rotate(-45deg);
      }
    }
  }

  background-color: $black;
  height: 5.25rem;
  display: flex;
  align-items: center;

  @include breakpoint-up(medium) {
    height: 3.875rem;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    z-index: 3;
    margin-right: 1.1875rem;

    @include breakpoint-up(large) {
      justify-content: center;
      margin-right: auto;
    }
  }

  @include breakpoint-up(large) {
    box-shadow: 0 0.5rem 0 $pink;
  }

  &__toggle {
    // Mobile Menu
    > span {
      display: block;
      width: 1.625rem;
      height: 0.125rem;
      background-color: $white;
      transition: all 0.3s ease-in-out;
      transform: translate(-0.8125rem, -0.4375rem);

      &:first-child {
        transform-origin: 0.4375rem -0.875rem;
      }

      &:last-child {
        transform-origin: -0.625rem 0.625rem;
      }

      &:not(:last-child) {
        margin-bottom: 0.3125rem;
      }
    }

    background-color: $pink;
    width: 2.3618rem;
    height: 2.3618rem;
    padding: 1.25rem;
    border-radius: 50%;
  }

  &__menu {
    background-color: $light;
    padding: 1.625rem;
    border-radius: 0.3125rem;
    position: absolute;
    width: calc(100% - 3rem);
    left: 50%;
    transform: translateX(-50%);
    margin-top: 4.5rem;
    z-index: 2;

    a {
      display: block;
      text-align: center;
      margin-bottom: 1rem;
      text-transform: uppercase;
      color: $black;
    }
  }

  &__links {
    a {
      color: $white;
      padding: 1.3rem 1rem;
      font-size: $font-14;
      background-color: $black;
      transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

      @include breakpoint-up(large) {
        font-size: $font-17;
      }

      &:hover,
      &.active {
        background-color: $pink;
        font-weight: bold;
      }
    }
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient($black, transparent);
  z-index: 2;
}
</style>
