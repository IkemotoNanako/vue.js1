<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    
    <Footer></Footer>
  </div>
</template>
<script>
import Header from
'./components/Header.vue'
import Footer from
"./components/Footer.vue"
export default{
  components: {
    Header,
    Footer
  }
}</script>
<style>
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video { margin:0; padding:0; border:0; outline:0; font-size:100%; vertical-align:baseline; background: transparent;}
.section-title {
    font-size: 30px;
    font-weight: bold;
    margin: 30px 0;
    text-align: center;
}
img {
    display: block;
    width: 100%;
}
.wrap {
    width: 80%;
    margin: 0 auto 50px;
}
.flex {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.between {
    justify-content: space-between;
}
.around {
    justify-content: space-around;
}
</style>