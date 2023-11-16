<script setup lang="ts">
import { ref } from 'vue';
const imageUrl = ref("src/assets/logo_transparent.png")

const handleImageClick = () => {
  console.log("画像がクリックされました！");
}
</script>

<template>
  <v-app>
    <v-app-bar elevation="1">
      <template v-slot:prepend>
        <div class="ml-16">
          <v-img  width="130"
                  aspect-ratio="16/9"
                  cover
                  :src= imageUrl
                  @click="handleImageClick"
                  class="clickable-image"
          ></v-img>
        </div>
      </template>
      <template v-slot:append>
        <v-container class="mr-16">
          <v-row justify="center">
            <v-col cols="auto">
              <v-btn  variant="flat">上映中の映画</v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn  variant="flat">公開予定の映画</v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn  variant="flat"
                      color="#272F38"
              >ログイン</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-app-bar>
  </v-app>
</template>

<style scoped>
.clickable-image {
  cursor: pointer;
}
</style>