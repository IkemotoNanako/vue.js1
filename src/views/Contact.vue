<template>
<div>
    <div class="contact">
    <h2 class="section-title">contact</h2>
    <form class="form" method="POST">
      <div>
        <label for="name">Name:</label>
        <input v-model="text" type="text" id="name" name="user_name">
      </div>
      <div>
        <label for="mail">E-mail:</label>
        <input v-model="email" type="email" id="mail" name="user_mail">
      </div>
      <div>
        <label for="tell">Tell:</label>
        <input v-model="tell" type="tell" id="tell" name="user_name">
      </div>
      <div>
        <label for="mag">Massage:</label>
        <textarea v-model="msg" type="mag" id="user_massage"></textarea>
      </div>
      <div class="button-submit">
        <button class="button" type="submit">Button</button>
      </div>
    </form>
  </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            text:'',
            email: '',
            tell: '', 
            msg: '', 
        }
    },
    methods: {
        sendContact() {
            if (this.text == '' || this.msg == '') {
                alert('入力されていない項目があります')
            }
            else {
                this.text = ''
                this.email = ''
                this.tell = ''
                this.msg = ''
                alert('送信しました') 
            }
        }
    }
}
</script>

<style scoped>
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
@media screen and (max-width:768px) {
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
</style>

