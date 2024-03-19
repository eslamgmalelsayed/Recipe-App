<script setup>
import Favorites from './Favorites.vue'
import useFetch from '@/composables/useFetch'
import { ref } from 'vue'
const { data, loading, error, fetchData } = useFetch()
let Api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=5277`
// dialogue
let dialog = ref(false)
// handleAddFavorite
let favoriteItem = ref([])
let like = ref(false)
let handleAddFavorite = (item) => {
  like.value = !like.value
  like.value == true ? favoriteItem.value.push(item) : favoriteItem.value.pop(item)
}
</script>

<template>
  <div>
    <!-- get data -->
    <div>
      <v-btn
         block
        v-if="!data"
        @click="fetchData(Api)"
        :loading="loading"
        :disabled="loading"
        variant="tonal"
      >
        Fetch Random Meals
      </v-btn>
    </div>
    <!-- show data -->
    <div v-if="data">
        <div v-if="error">Error: {{ error }}</div>
        <v-row justify="center" v-for="item in data.meals" :key="item.id">
          <!-- show errors -->
            <v-col cols="12" md="auto">
              <v-img
                v-if="data"
                :width="300"
                aspect-ratio="1/1"
                cover
                :src="item.strMealThumb"
              ></v-img>
            </v-col>
            <v-col cols="12" md="6">
                <div>
                  <div>
                    <h2>
                      {{ item.strMeal }}
                    </h2>
                    <v-chip class="my-5"> {{ item.strTags }} </v-chip>

                    <div class="my-5">
                      <v-icon
                        @click="handleAddFavorite(item)"
                        class="cursor-pointer"
                        icon="mdi-heart"
                        :color="like ? 'red' : ''"
                      ></v-icon>
                      <v-icon
                        @click="fetchData(Api)"
                        title="Get Random Data"
                        icon="mdi-reload"
                        class="cursor-pointer mx-5"
                      ></v-icon>
                    </div>
                  </div>
                  <!--  favorites comp-->
                  <Favorites :favorite-item="favoriteItem" />
                </div>
            </v-col>
        </v-row>

    </div>
  </div>
</template>

<style scoped></style>
