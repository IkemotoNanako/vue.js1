<template>
<div class="home">
  <header>
    <div class="flex between">
      <h1 class="header-logo">estra inc.</h1>
      <nav class="header-nav">
        <ul>
          <li v-on:click="clickHome()"><a href="#">home</a></li>
          <li @click="clickAbout()"><a href="#">about</a></li>
          <li @click="clickService()"><a href="#">service</a></li>
          <li @click="clickWork()">><a href="#">works</a></li>
          <li @click="clickPrice()"><a href="#">price</a></li>
          <li @click="clickContact()"><a href="#">contact</a></li>
        </ul>
      </nav>
    </div>
    <div id="hamburger">
      <span></span>
      <span></span>
      <span></span>
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
    clickService() {
      alert('service')
      this.$router.push('/Service')
    },
    clickWork() {
      alert('work')
    },
    clickPrice() {
      alert('price')
    },
    clickContact() {
      alert('contact')
      this.$router.push('/Contact')
    }

  }
}
</script>

<style scoped>
header {
  height: 70px;
  background: #000;
}
.header-logo {
  font-size: 20px;
  font-weight: bold;
  margin-left: 35px;
  color: #f2f2f2;
  line-height: 70px;
}
.header-nav li{
  display: inline-block;
  margin-left: 35px;
  font-size: 16px;
}
.header-nav a{
  color: #f2f2f2;
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
    right: 20px;
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


