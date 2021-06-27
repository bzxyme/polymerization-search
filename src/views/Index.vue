<!-- 组件说明 -->
<template>
  <v-app>
    <v-app-bar app height="36" class="white"> </v-app-bar>

    <v-main>
      <v-container fill-height>
        <v-row justify="center">
          <v-col cols="10" class="pb-16 mb-16">
            <div>
              <v-img
                max-height="120"
                max-width="270"
                src="https://www.baidu.com/img/540x258_2179d1243e6c5320a8dcbecd834a025d.png"
              ></v-img>
              <h1>32423423</h1>
            </div>
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
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
/*@import url('')*/
</style>
