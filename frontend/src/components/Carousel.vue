<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface Item {
  title: string;
  description: string;
  image_url: string;
}

const items = ref<Item[]>([]);
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// APIからデータを取得
const fetchData = async () => {
  try {
    const response = await axios.get<Item[]>(BACKEND_URL + "/items");
    items.value = response.data.slice(0, 3);
  } catch (error) {
    console.error("URL:", BACKEND_URL);
    console.error("データ取得でエラーが出ました。エラー内容:", error);
  }
};

// コンポーネントがマウントされたときにデータを取得
onMounted(() => {
  fetchData();
});
</script>

<template>
  <div>
    <v-carousel v-if="items.length" height="auto" color="black">
      <v-carousel-item
        v-for="item in items"
        :key="item.title"
        :src="item.image_url"
        max-width="1280"
        max-height="720"
        eager
        cover
      >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<style lang="scss" scoped>
.v-carousel-item {
  display: flex;
  justify-content: center;
  background-color: #757575;
}
</style>
