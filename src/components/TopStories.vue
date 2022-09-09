<template>
  <div>
    <!-- topStories Starts -->
    <div
      class="top-stories-header"
      style="background: rgb(33, 37, 41); color: white"
    >
      <h2 class="py-2">Top Stories</h2>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
          v-for="data in topStories"
          :key="data.id"
        >
          <a :href="'https://livescore.com' + data.url" target="_blank">
            <figure class="img-data">
              <img
                :src="data.mainMedia.thumbnail.url"
                alt=""
                class="img-fluid"
              />
            </figure>
            <div class="ts-content">
              <!-- <h3>{{data.categoryLabel}}</h3> -->
              <p>{{ data.title.slice(0, 80) }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- topStories Ends -->

    <!-- featured Starts -->

    <div
      class="top-stories-header"
      style="background: rgb(33, 37, 41); color: white"
    >
      <h2 class="py-2">Featured</h2>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-sm-12 col-md-6 col-lg-4 col-xl-3"
          v-for="item in featured"
          :key="item.id"
        >
          <a :href="'https://livescore.com' + item.url" target="_blank">
            <figure class="img-data">
              <img
                :src="item.mainMedia.thumbnail.url"
                alt=""
                class="img-fluid"
              />
            </figure>
            <div class="ts-content">
              <!-- <h3>{{item.categoryLabel}}</h3> -->
              <p>{{ item.title.slice(0, 80) }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- featured Ends -->

    <!-- Categories Starts -->

    <div
      class="top-stories-header"
      style="background: rgb(33, 37, 41); color: white"
    >
      <h2 class="py-2">Categories</h2>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-sm-12 col-md-6 col-lg-4 col-xl-3"
          v-for="fdata in categories"
          :key="fdata.id"
        >
          <a :href="'https://livescore.com' + fdata.url" target="_blank">
            <figure class="img-data">
              <!-- <img
                :src="fdata.mainMedia.thumbnail.url"
                alt=""
                class="img-fluid"
              /> -->
            </figure>
            <div class="ts-content">
              <!-- <h3>{{fdata.categoryLabel}}</h3> -->
              <!-- <p>{{fdata.title.slice(0,80)}}</p> -->
              <p>{{ fdata.initialTitle }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Categories Ends -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TopStories",
  data() {
    return {
      topStories: "",
      featured: "",
      categories: "",
    };
  },

  async mounted() {
    const result = await axios.get(
      "https://livescore6.p.rapidapi.com/news/v2/list",
      {
        headers: {
          "X-RapidAPI-Key":
            "b037c8061fmshacce55bc97bbf90p150beejsn8e4d15d67e86",
          "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
        },
      }
    );
    console.log(result.data);

    this.topStories = result.data.topStories;
    console.log("asdfsadf", this.topStories);

    this.featured = result.data.featuredArticles;
    console.log("featured", this.featured);

    this.categories = result.data.categories;
    console.log("categories", this.categories);
  },
};
</script>

<style>
</style>