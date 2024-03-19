<script setup>
import { ref } from 'vue'
defineProps({
  favoriteItem: Array
})
// dialogue
let dialog = ref(false)
</script>

<template>
  <div class="my-5">
    <v-btn
      v-if="favoriteItem.length"
      @click="dialog = true"
      variant="tonal"
      append-icon="mdi-heart"
    >
      <template v-slot:append>
        <v-icon color="red"></v-icon>
      </template>
      Favorite List
    </v-btn>
  </div>
  <v-dialog v-model="dialog" width="auto" transition="dialog-top-transition">
    <v-card max-width="400" prepend-icon="mdi-heart" title="Favorites List">
      <template v-slot:prepend>
        <v-icon color="red"></v-icon>
      </template>
      <v-card-text>
        <div v-if="favoriteItem.length">
          <v-row v-for="item in favoriteItem" align="center" dense>
            <v-col cols="auto">
              <v-img :width="50" aspect-ratio="1/1" cover :src="item.strMealThumb"></v-img>
            </v-col>
            <v-col>
              <p>{{ item.strMeal }}</p>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
      <template v-slot:actions>
        <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
