<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from "vue";
import { AxiosInstance } from "axios";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const test = () => {
      return "hello world";
    }
    const axios = inject<any>("axios");
    const data = ref({});

    onMounted(async () => {
      const resp = await axios?.get("/allow-email");
      data.value = resp;
    });
    return {
      test: test,
      data: data,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
