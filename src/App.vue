<template>
  <div id="app">
    <Header />
    <Intro />
    <About />
    <WhatIDo />
    <Skills/>
    <Projects/>
  </div>
</template>

<script>
import Intro from "./components/sections/Intro.vue";
import Header from "./components/Header.vue";
import About from "./components/sections/About.vue";
import WhatIDo from "./components/sections/WhatIDo";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects"

export default {
  name: "App",
  components: { Intro, Header, About, WhatIDo, Skills, Projects }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap");
* {
  box-sizing: border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #11001a;
  z-index: 1;
}

html,
body {
  overflow-x: hidden;
}

.title {
  @include menu-title;
  @include d(m){
    font-size: 24px;
  }
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: "Poppins", sans-serif;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

html {
  scroll-behavior: smooth;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote {
  &:before,
  &:after {
    content: "";
    content: none;
  }
}

q {
  &:before,
  &:after {
    content: "";
    content: none;
  }
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
