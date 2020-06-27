<template>
  <div class="box">
    <div id="about" class="wrap">
    <h2 class="section-title">about</h2>
    <div class="flex">
    <div class="about-left">
      <img src="../assets/bg2.jpg" alt="">
    </div>
    <div class="about-right">
      <h3>estra inc.</h3>
      <p>私たちestra incは、お客様の満足度を徹底的に追及するこ とで、お客様・市場・時代のニーズを的確に捉え、事業の拡大と周 辺ビジネスによる差別化、業界における圧倒的な地位の確立を図る べく積極的な事業活動を行っています。</p>
      <ol>
        <li>コーチング事業</li>
        <li>プログラミング事業</li>
        <li>SaaS事業</li>
      </ol>
    </div>
  </div>
</template>
 <style scoped>
 .box{
   height: 100vh;
  }
  #about{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
  .about-left,.about-right{
      width: 45%;
    }
  .about-right h3,.about-right p{
        margin-bottom: 15px;
    }
  .about-right ol{
    list-style-position: inside;
    }
  </style>
