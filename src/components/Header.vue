<template>
  <header>
    <nav class="menu">
      <p class="menu__logo">Meu portfólio</p>
      <ul class="menu__list">
        <li class="menu__list__item">
          <a>Home</a>
        </li>
        <li class="menu__list__item">
          <a>Sobre mim</a>
        </li>
        <li class="menu__list__item">
          <a>O que faço</a>
        </li>
        <li class="menu__list__item">
          <a>Habilidades</a>
        </li>
        <li class="menu__list__item">
          <a>Projetos</a>
        </li>
        <li class="menu__list__item">
          <a>Contato</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  position: fixed;
  top: 35px;
  width: 100%;
  display: block;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 140px;

  &__logo {
    font-size: 24px;
    color: white;
  }

  &__list {
    display: flex;

    &__item {
      @include font-corpo;
      text-transform: uppercase;
      letter-spacing: 2px;
      & + & {
        margin-left: 63px;
      }

      & a {
        cursor: pointer;
      }
    }
  }
}
</style>
