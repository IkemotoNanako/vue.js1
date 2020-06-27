<template>
    <div class="side_menu">
        <h2>テキスト変更</h2>
        <input type="text" v-model="childText">
        <button @click="sendParent">このデータを親に送る</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            childText: ""
        }
    },
    methods: {
        sendParent () {
            this.$emit("getChildText",this.childtext)
            this.childtext = ''
        }
    }
}
</script>

