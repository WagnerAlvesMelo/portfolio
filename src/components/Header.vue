<template>
  <header>
    <nav class="menu">
      <p class="menu__logo">Meu Portfólio</p>
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
  box-sizing: border-box;
  position: fixed;
  top: 35px;
  width: 100vw;
  padding: 0 140px;
  @include d(t){
    padding: 0 70px !important;
  }
  @include d(m){
    padding: 0 !important;
  }
  @include d(l){
    padding: 0 100px !important;
  }
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__logo {
    font-size: 24px;
    color: white;
    @include d(l){
      font-size: 21px;
    }
  }

  &__list {
    display: flex;

    &__item {
      @include font-corpo;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-align: left;
      @include d(l){
        font-size: 16px;
      }
      & + & {
        margin-left: 30px;
      }

      & a {
        cursor: pointer;
      }
    }
  }
}
</style>
