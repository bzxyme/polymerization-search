<!-- 组件说明 -->
<template>
  <v-app>
    <v-app-bar app height="36" class="white"> </v-app-bar>

    <v-main>
      <v-container fill-height>
        <v-row justify="center">
          <v-col cols="10" class="mt-n16 pb-016">
            <div align="center" class="mb-6">
              <v-img
                max-height="120"
                max-width="270"
                src="https://www.baidu.com/img/540x258_2179d1243e6c5320a8dcbecd834a025d.png"
              ></v-img>
            </div>
            <v-text-field
              solo
              label="请输入要搜索的内容"
              class="rounded-pill"
              prepend-inner-icon="mdi-google"
              append-icon="mdi-magnify"
              v-model="searchKey"
              @keyup.enter="baiduSearch"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app padless height="64" class="white">
      <v-col class="text-center grey--text" cols="12">
        ©&nbsp;{{ new Date().getFullYear() }}&nbsp;&nbsp;.&nbsp;by&nbsp;
        <strong>Noca</strong>
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
    };
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
      window.location.href = `http://www.baidu.com/s?wd=${this.searchKey}`;
    },
  },
};
</script>

<style scoped>
/*@import url('')*/
</style>
