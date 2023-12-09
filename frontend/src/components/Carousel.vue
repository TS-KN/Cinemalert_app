<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from 'axios';

interface Item {
  title: string;
  description: string;
  image_url: string;
}

const items = ref<Item[]>([]);
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

// APIからデータを取得
const fetchData =async () => {
  try {
    const response = await axios.get<Item[]>(BACKEND_URL + '/items');
    console.log("レスポンスデータ:" + response.data)
    console.log("スライス後:" + response.data.slice(0,3))
    items.value = response.data.slice(0,3);
  } catch (error) {
    console.error('URL:',BACKEND_URL)
    console.error('データ取得でエラーが出ました。エラー内容:',error)
  }
};

// コンポーネントがマウントされたときにデータを取得
onMounted(() => {
  fetchData();
});
</script>

<template>
  <div>
    <h1>Items</h1>
    <v-carousel>
      <v-carousel-item v-for="item in items"
        :key="item.title"
        :src="item.image_url"
        cover>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>