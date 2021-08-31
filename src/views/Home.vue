<template>
  <div class="home">
    <button @click="click">to about</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Home",
  setup() {
    const router = useRouter();
    const click = () => {
      router.push("/about");
    };
    return {
      click,
    };
  },
});
</script>
