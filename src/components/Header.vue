<template>
  <header>
    <nav class="menu">
      <p v-scroll="handleScroll" class="menu__logo">Meu Portfólio</p>
      <ul class="menu__list">
        <li v-scroll="handleScroll" class="menu__list__item">
          <a>Home</a>
        </li>
        <li v-scroll="handleScroll" class="menu__list__item">
          <a>Sobre mim</a>
        </li>
        <li v-scroll="handleScroll" class="menu__list__item">
          <a>O que faço</a>
        </li>
        <li v-scroll="handleScroll" class="menu__list__item">
          <a>Habilidades</a>
        </li>
        <li v-scroll="handleScroll" class="menu__list__item">
          <a>Projetos</a>
        </li>
        <li v-scroll="handleScroll" class="menu__list__item">
          <a>Contato</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    verifyScreenSize(){
      if(window.scrollY > 960)
        return true
      else
        return false
    },
    handleScroll(evt, el) {
      if (this.verifyScreenSize()) {
        el.setAttribute(
        'style',
        'opacity: 0.3;'
      )}
      else{
        el.setAttribute(
        'style',
        'opacity: 1;'
      )}
    }

  },

  directives: {
    scroll: {
      inserted: function (el, binding, vnode) {
        el.addEventListener('mouseover', ()=>{
          if (vnode.context.verifyScreenSize()) {
            el.setAttribute(
            'style',
            'opacity: 1;'
          )}
        })

        el.addEventListener('mouseout', ()=>{
          if (vnode.context.verifyScreenSize()) {
            el.setAttribute(
            'style',
            'opacity: 0.3;'
          )}
        })

        let f = function (evt) {
          if (binding.value(evt, el)) {
            window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
      }
    }
  }
};
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
    transition: 0.6s;
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
      transition: 0.6s;
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
