<template>
  <div class="home">
    <div id="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div id="top-btn">↑</div>
  <div id="eyecatch">
      <p>eatra inc</p>
  </div>
  <nav class="menu-content">
  <p class="menu-title">estra inc.</p>
  <ul class="menu-content_inner">
    <li><a href="#">home</a></li>
    <li><a href="#">about</a></li>
    <li><a href="#">service</a></li>
    <li><a href="#">works</a></li>
    <li><a href="#">price</a></li>
    <li><a href="#">contact</a></li>
  </ul>
  </nav>
  <div id="about" class="wrap">
      <h2 class="section-title">about</h2>
      <div class="flex around">
            <div class="about-left">
              <img src="img/billy-huynh-W8KTS-mhFUE-unsplash.jpg" alt="">
            </div>
            <div class="about-right">
              <h3>eatra inc.</h3>
              <p>
                私たちestra incは、お客様の満足度を徹底的に追及する ことで、お客様・市場・時代のニーズを的確に捉え、事業の拡大と周辺ビジネスによる差別化、業界における圧倒的な地位の確立を図るべく積極的な事業活動を行っています。 
              </p>
              <ol>
                <li>コーチング事業</li>
                <li>プログラミング事業</li>
                <li>SaaS事業</li>
              </ol>
            </div>
      </div>
  </div>

  <div id="business">
    <h2 class="section-title">sevice</h2>
    <div class="flex around busuness-wrap">
      <div class="business-cat">
        <img src="img/billy-huynh-W8KTS-mhFUE-unsplash.jpg" alt="">
        <h3>ビジネスA</h3>
        <p>ビジネスの説明が入ります。ビジネスの説明が入りま す。ビジネスの説明が入ります。ビジネスの説明が入ります</p>
      </div>
      <div class="business-cat">
        <img src="img/billy-huynh-W8KTS-mhFUE-unsplash.jpg" alt="">
        <h3>ビジネスB</h3>
        <p>ビジネスの説明が入ります。ビジネスの説明が入りま す。ビジネスの説明が入ります。ビジネスの説明が入ります</p>
      </div>
      <div class="business-cat">
        <img src="img/billy-huynh-W8KTS-mhFUE-unsplash.jpg" alt="">
        <h3>ビジネスC</h3>
        <p>>ビジネスの説明が入ります。ビジネスの説明が入りま す。ビジネスの説明が入ります。ビジネスの説明が入ります。 </p>
      </div>
    </div>
  </div>

  <div id="company" class="mgb-50">
    <h2 class="section-title">company</h2>
    <table class="contain">
      <tr>
        <th>会社名</th>
        <td>株式会社estra</td>
      </tr>
      <tr>
        <th>代表者名</th>
        <td>福場林太郎</td>
      </tr>
      <tr>
        <th>本社所在地</th>
        <td>東京都渋谷区1-1</td>
      </tr>
      <tr>
        <th>従業員数</th>
        <td>100名</td>
      </tr>
      <tr>
        <th>電話番号</th>
        <td>0120-000-0000</td>
      </tr>
      <tr>
        <th>FAX</th>
        <td>0120-000-0000</td>
      </tr>
      <tr>
        <th>メールアドレス</th>
        <td>rintaro@estra.inc</td>
      </tr>
      <tr>
        <th>資本金</th>
        <td>1000万円</td>
      </tr>
      <tr>
        <th>事業内容</th>
        <td>コーチング</td>
      </tr>
    </table>
  </div>

  <div class="contact">
    <h2 class="section-title">contact</h2>
    <form class="form" method="POST">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="user_name">
      </div>
      <div>
        <label for="mail">E-mail:</label>
        <input type="email" id="mail" name="user_mail">
      </div>
      <div>
        <label for="tell">Tell:</label>
        <input type="tell" id="tell" name="user_name">
      </div>
      <div>
        <label for="mag">Massage:</label>
        <textarea type="mag" id="user_massage"></textarea>
      </div>
      <div class="button-submit">
        <button class="button" type="submit">Button</button>
        
      </div>
    </form>
  </div>
  </div>
</template>

<script>
</script>
<style scoped>
  #top-btn {
    background: #000;
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    position: fixed;
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;
}
#menu {
    font-size: 0;
    background: #000;
    text-align: center;
}
#menu li {
    color: #fff;
    background: #000;
    box-sizing: border-box;
    cursor: pointer;
    padding:0 20px;
    text-align: center;
    font-size: 16px;
}
#menu li a {
    text-decoration: none;
}
#menu > li {
    display: inline-block;
    position: relative;
}
.child {
    position: absolute;
    width: 100%;
    z-index: 999;
    left: 0;
}
#eyecatch {
    height: 600px;
    background: url("../img/billy-huynh-W8KTS-mhFUE-unsplash.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
}
#eyecatch p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 100px;
    font-size: 100px;
    font-style: italic;
    font-weight: bold;
    color: #cccccc;
    line-height: 1;
}


.about-right h3,.about-right p {
    margin-bottom: 15px;
}
.about-left,.about-right {
    width: 45%;
}
.about-right ol {
    list-style-position: inside;
}

#business {
    background: url(../img/billy-huynh-W8KTS-mhFUE-unsplash.jpg)no-repeat;
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


#company {
    padding: 40px 0 70px 0;
}
#company .contain {
    border-collapse: collapse;
    width: 70%;
    margin: 0 auto;
}
#company table tr {
    border-bottom: 1px solid #333333;
}
#company th,#company td {
    text-align: left;
}
#company th {
    padding: 10px 0;
}



.contact {
    background: rgb(241, 241, 241);
}
.contact .section-title {
    padding: 40px 0;
    margin: 0;
}
.form {
    width: 70%;
    margin: 0 auto;
}
.form > div input {
    margin-bottom: 20px;
    padding: 7px;
}
label {
    display: inline-block;
    width: 30%;
}
input,textarea {
    box-sizing: border-box;
    border: 1px solid #999999;
    width: 65%;
}
textarea {
    vertical-align: top;
    height: 15em;
}
.button-submit {
    text-align: center;
}
.button {
    padding: 10px 30px;
    background-color: #000;
    color: #ffffff;
    margin: 30px 0;
}

#footer {
    height: 80px;
    text-align: center;
    line-height: 80px;
}

@media screen and (max-width:768px) {
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
        background-color: #ffffff;
        transition: .8s;
    }
    #hamburger span:nth-of-type(1) {
        top:10px;
    }
    #hamburger span:nth-of-type(2) {
        top: 20px;
    }
    #hamburger span:nth-of-type(3) {
        top: 30px;
    }
    .header-nav {
        display: none;
    }
    .about-left,
    .about-right {
        width: 80%;
    }
    .business-cat {
        width: 80%;
    }
    label {
        display: block;
    }
    .form > div {
        margin: 0 auto;
    }
    input,textarea {
        width: 100%;
    }
}
.menu-content {
    display: none;
}
#hamburger.active span:nth-of-type(1) {
    top: 20px;
    transform: rotate(45deg);
}
#hamburger.active span:nth-of-type(2) {
    opacity: 0;
}
#hamburger.active span:nth-of-type(3) {
    top: 20px;
    transform: rotate(-45deg);
}
@media screen and (max-width: 768px) {
    .menu-content {
        display: block;
    }
    .menu-content .menu-title {
        margin: 40px 20px;
        font-size: 2.2rem;
        color: #333333;
        text-align: left;
        font-weight: bold;
    }
    
}
.menu-content {
    width: calc(100% - 80px);
    height: 100%;
    text-align: center;
    transition: .2s;
    position: fixed;
    top: 0;
    left: calc(-100% - 80px);
    background: #fff;
    color: #333333;
    box-shadow: 80px 0 rgba(38,98,213,0.3);
}
.menu-content li a{
    color: #333333;
    margin: 15px;
    padding: 5px;
    border-bottom: 0.5px solid #2662d5;
    display: block;
}
.memu-content li {
    width: 100%;
    text-align: left;
}
.menu-content.open {
    left:  0;
}
</style>


