<template id="Business">
    <div id="business">
    <h2 class="section-title">sevice</h2>
    <div class="flex around busuness-wrap">
      <div class="business-cat">
        <img src="../assets/billy-huynh-W8KTS-mhFUE-unsplash.jpg" alt="">
        <h3>ビジネスA</h3>
        <p>ビジネスの説明が入ります。ビジネスの説明が入りま す。ビジネスの説明が入ります。ビジネスの説明が入ります</p>
      </div>
      <div class="business-cat">
        <img src="../assets/billy-huynh-W8KTS-mhFUE-unsplash.jpg" alt="">
        <h3>ビジネスB</h3>
        <p>ビジネスの説明が入ります。ビジネスの説明が入りま す。ビジネスの説明が入ります。ビジネスの説明が入ります</p>
      </div>
      <div class="business-cat">
        <img src="../assets/billy-huynh-W8KTS-mhFUE-unsplash.jpg" alt="">
        <h3>ビジネスC</h3>
        <p>>ビジネスの説明が入ります。ビジネスの説明が入りま す。ビジネスの説明が入ります。ビジネスの説明が入ります。 </p>
      </div>
    </div>
     <div class="business-cat" v-for="service in services" :key="service.id"> 
        <img src="img/business-icon.png" alt="">
        <h3>{{service.bis}}</h3>
        <p>{{service.content}}</p>
    </div>
 
  </div>
</template>
<script>
data(){
    return{
        services: [
           {bis: 'ビジネスA', content: 'ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。 ビジネスの説明が入ります。'}, 
           {bis: 'ビジネスB', content: 'ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。 ビジネスの説明が入ります。'}, 
            {bis: 'ビジネスC', content: 'ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。 ビジネスの説明が入ります。'}
        ]
    }
}
</script>
<style>
#business {
    background: url(../assets/billy-huynh-W8KTS-mhFUE-unsplash.jpg)no-repeat;
    background-size: cover;
}
#business .section-title {
    color: #ffffff;
    padding: 40px 0;
    margin: 0;
}
.business-wrap {
    text-align: center;
}
.business-cat {
    width: 28%;
    background-color: rgba(51, 51, 51 ,0.5);
    box-sizing: border-box;
    margin-bottom: 50px;
}
.business-cat h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ffffff;
}
.business-cat p {
    color: #ffffff;
}
.business-cat img {
    width: 100px;
    height: auto;
    margin: 0 auto 10px;
}
@media screen and (max-width:768px) {
.business-cat {
        width: 80%;
    }
}
</style>



