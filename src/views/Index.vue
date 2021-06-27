<!-- 组件说明 -->
<template>
  <v-app>
    <v-app-bar flat app height="36" class="white"> </v-app-bar>

    <v-main>
      <v-container fill-height>
        <v-row justify="center">
          <v-col cols="10" class="mt-n16 pb-016">
            <div align="center" class="mb-6">
              <v-img
                max-height="180"
                max-width="340"
                src="https://cdn.jsdelivr.net/gh/Nocae/polymerization-search@master/src/assets/img/jvhe.png"
              ></v-img>
            </div>
            <div>
              <div class="float-left pt-1" @click="logoShow = !logoShow">
                <v-img
                  src="https://cdn.jsdelivr.net/gh/Nocae/polymerization-search@master/src/assets/img/baidu.png"
                  max-height="40"
                  max-width="40"
                  v-if="logoShow"
                ></v-img>
                <v-img
                  src="https://cdn.jsdelivr.net/gh/Nocae/polymerization-search@master/src/assets/img/google.png"
                  max-height="40"
                  max-width="40"
                  v-else
                ></v-img>
              </div>
              <v-text-field
                solo
                label="请输入在百度要搜索的内容"
                class="rounded-pill pl-3"
                append-icon="mdi-magnify"
                v-model="searchKey"
                @keyup.enter="baiduSearch"
                v-if="logoShow"
              ></v-text-field>
              <v-text-field
                solo
                label="请输入在谷歌要搜索的内容"
                class="rounded-pill pl-3"
                append-icon="mdi-magnify"
                v-model="searchKey"
                @keyup.enter="baiduSearch"
                v-else
              ></v-text-field>
            </div>

            <!-- <v-text-field
              solo
              label="请输入要搜索的内容"
              class="rounded-pill"
              prepend-inner-icon="mdi-baidu"
              append-icon="mdi-magnify"
              v-model="searchKey"
              @keyup.enter="baiduSearch"
            ></v-text-field> -->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app padless height="64" class="white  text-body-2">
      <v-col class="text-center grey--text" cols="12">
        ©&nbsp;{{ new Date().getFullYear() }}&nbsp;&nbsp;.&nbsp;by&nbsp;
        <a href="http://noca.top" target="_blank" rel="noopener noreferrer">
          <strong>Noca</strong>
        </a>
        . All rights reserved.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
//import x from ''
export default {
  name: "Index",
  components: {},
  data() {
    return {
      searchKey: "",
      logoShow: true,
    };
  },
  created() {
    document.documentElement.style.overflowY = "hidden";
  },
  computed: {},
  methods: {
    baiduSearch() {
      // const axios = require("axios");
      // axios
      //   .get(`/api/s?wd=${this.searchKey}`)
      //   .then((result) => {
      //     console.log(result);
      //   })
      //   .catch((err) => {});
      // console.log("11111");
      // this.$router.push(`/api/s?wd=${this.searchKey}`);
      if (!this.searchKey) return;
      if (this.logoShow) {
        window.location.href = `http://www.baidu.com/s?ie=utf-8&wd=${this.searchKey}`;
      } else {
        window.location.href = `https://www.google.com/search?q=${this.searchKey}&hl=zh-CN`;
      }
    },
  },
};
</script>

<style scoped>
/*@import url('')*/
a {
  text-decoration: none !important;
}
</style>
