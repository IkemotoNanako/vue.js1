<template>
<div class="home">
  <header>
    <div class="flex between">
      <h1 class="header-logo">estra inc.</h1>
      <nav class="header-nav">
        <ul>
          <li v-on:click="clickHome"><a href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">service</a></li>
          <li><a href="#">works</a></li>
          <li><a href="#">price</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
    
</div>  
</template>
<script>
export default {
  methods:{
    clickHome() {
      alert('homeページへ行きます')
      this.$router.push('/')
    },
    clickAbout () {
      alert('aboutページへ行きます')
      this.$router.push('/About')
    },
  }
}
</script>

<style scoped>
header {
  height: 70px;
  background: #000;
  display: flex;
}
.header-logo {
  font-size: 20px;
  font-weight: bold;
  margin-left: 35px;
  color: #fff;
  line-height: 70px;
}
.header-nav{
  display: inline-block;
  margin-left: 35px;
  font-size: 16px;
  display: flex;
}
.header-nav a{
  color: red;
  cursor: pointer;
  z-index: 100;
}
@media screen and (max-width: 768px){
  .header-nav {
    display: none;
  }
  #hamburger {
    width: 40px;
    height: 40px;
    position: absolute;
    cursor: pointer;
    z-index: 100;
    top: 15px;
    transition: .4s;
  }
  #hamburger span {
    position: absolute;
    left: 2px;
    display: block;
    width: 35px;
    height: 2px;
    background-color: #fff;
    transition:  .8s;
  }
  #hamburger span:nth-of-type(1) { 
    top: 10px;
  }
  #hamburger span:nth-of-type(2) {
    top: 20px; 
  }
  #hamburger span:nth-of-type(3) { 
    top: 30px; 
  }
}
</style>


