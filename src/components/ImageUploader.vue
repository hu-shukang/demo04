<template>
  <input type="file" accept="image/*" @change="onImageUploaded" />
  <img
    v-if="imgSrc != ''"
    :src="imgSrc"
    alt=""
    @click="preview"
    style="width: 70vw"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType, ref } from "vue";
import { ImagePreview } from "vant";

export default defineComponent({
  name: "ImageUploader",
  props: {
    modelValue: {
      required: false,
      type: Object as PropType<File>,
    },
  },
  setup(props, context) {
    const imgSrc = ref<string>("");
    const reader = new FileReader();
    const onLoad = () => {
      imgSrc.value = reader.result as string;
    };

    const renderImage = (file: File | undefined) => {
      if (!file) {
        imgSrc.value = "";
      } else {
        reader.readAsDataURL(file);
      }
    };

    onMounted(() => {
      const file = props.modelValue;
      reader.addEventListener("load", onLoad);
      renderImage(file);
    });

    onUnmounted(() => {
      reader.removeEventListener("load", onLoad);
    });

    const onImageUploaded = (e: any) => {
      const image = e.target.files[0] as File;
      context.emit("update:modelValue", image);
      renderImage(image);
    };

    const preview = () => {
      ImagePreview({
        images: [imgSrc.value],
        closeable: true,
        showIndex: false,
      });
    };
    return {
      onImageUploaded,
      imgSrc,
      preview,
    };
  },
});
</script>
