<template>
  <b-container fluid>
    <b-row>
      <b-col class="header">
        <b-nav class="justify-content-center">
          <header-item
            v-for="item in headerItems"
            :key="item.path"
            :url="item.url"
            :path="item.path"
            :alt="item.alt"
          /> 
        </b-nav>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-view/>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="bottom">
        <router-link to="/">
          <img
            src="@/assets/Material/images/Food1_116.gif"
            class="rounded float"
            alt="聖代"
          />
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import HeaderItem from "./components/GlobalHeaderItem.vue";
export default {
  components: {
    HeaderItem,
  },
  data() {
    return {
      headerItems: [
        { url: "Food1_47", alt: "抹茶刨冰", path: "what" },
        { url: "Food1_77", alt: "草莓刨冰", path: "how" },
        { url: "Food1_78", alt: "芒果刨冰", path: "example" },
        { url: "Food1_79", alt: "奶茶刨冰", path: "source" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/style/style.scss";
</style>
