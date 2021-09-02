<template>
  <div>
    <h2>index.vue</h2>
    <ImageUploader v-model="file" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ImageUploader from "@/components/ImageUploader.vue";

export default defineComponent({
  name: "Index",
  components: {
    ImageUploader,
  },
  setup() {
    const file = ref<File>();
    return {
      file,
    };
  },
});
</script>
