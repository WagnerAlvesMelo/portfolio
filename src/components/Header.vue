<template>
  <header>
    <nav class="menu">
      <p v-scroll="handleScroll" @click="scrollToTop()" class="menu__logo">Meu Portfólio</p>
      <ul class="menu__list">
        <li v-scroll="handleScroll" @click="scrollToTop()" class="menu__list__item">
          <a>Home</a>
        </li>
        <li v-scroll="handleScroll" @click="menuScroll('about__title')" class="menu__list__item">
          <a>Sobre mim</a>
        </li>
        <li v-scroll="handleScroll" @click="menuScroll('whatido__title')" class="menu__list__item">
          <a>O que faço</a>
        </li>
        <li v-scroll="handleScroll" @click="menuScroll('skills__title')" class="menu__list__item">
          <a>Habilidades</a>
        </li>
        <li v-scroll="handleScroll" @click="menuScroll('projects__title')" class="menu__list__item">
          <a>Projetos</a>
        </li>
        <!-- <li v-scroll="handleScroll" @click="menuScroll('about__title')" class="menu__list__item">
          <a>Contato</a>
        </li> -->
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

    changeOpacity(el,mode){
      if(mode=="in"){
        return ()=>{
          el.setAttribute(
            'style',
            'opacity: 1;'
          )
        }
      }else{
        return ()=>{
          el.setAttribute(
            'style',
            'opacity: 0.2;'
          )
        }
      }
    },

    handleScroll(evt, el) {
      if (this.verifyScreenSize())
        this.changeOpacity(el,"out")()
      else
        this.changeOpacity(el,"in")()
    },

    menuScroll(titleClassName, paddingTop=32){
      const elementYPosition = document.querySelector("."+titleClassName).offsetTop
      window.scrollTo(0,elementYPosition-paddingTop)
    },

    scrollToTop(){
      window.scrollTo(0,0)
    }
  },

  directives: {
    scroll: {
      inserted: function (el, binding, vnode) {

         el.addEventListener('mouseout', ()=>{
          if (vnode.context.verifyScreenSize())
            vnode.context.changeOpacity(el,"out")()
        })

        el.addEventListener('mouseover', ()=>{
          if (vnode.context.verifyScreenSize()) 
            vnode.context.changeOpacity(el,"in")()
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
    padding: 0 140px !important;
  }
  @include d(l){
    padding: 0 100px !important;
  }
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include d(m){
    display: none;
  }

  &__logo {
    font-size: 24px;
    color: white;
    transition: 0.2s;
    cursor: pointer;
    @include d(l){
      font-size: 21px;
    }
    @include d(m){
      text-align: center;
    }
  }

  &__list {
    display: flex;
    &__item {
      @include font-corpo;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-align: left;
      transition: 0.2s;
      @include d(l){
        font-size: 16px;
      }
      & + & {
        margin-left: 30px;
      }
      
      & a {
        cursor: pointer;
      }

      &:hover{
        color: white;
        opacity: 1;
      }
    }
  }
}
</style>
