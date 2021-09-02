<template>
  <div>
    <h2>index.vue</h2>
    <ImageUploader v-model="file" />

    <hr />
    <!-- <div v-if="file">{{ file.name }}</div> -->
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

<style>
.preview-cover {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
}
</style>
