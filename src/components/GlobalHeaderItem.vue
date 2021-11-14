<template>
  <div>
    <b-nav-item>
      <router-link :to="`/${path}`">
        <img
          :src="require(`@/assets/Material/images/${url}.gif`)"
          class="rounded float"
          :alt="alt"
        />
      </router-link>
    </b-nav-item>
  </div>
</template>

<script>
export default {
  props: ["url", "path", "alt"],
};
</script>

<style>
</style>