<template>
<div>
    <!-- loader starts -->
    <div> 
        <div class="lds-ripple" v-if="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <!-- loader ends -->

    <!-- error section starts -->
    <h2 v-if="error">Error 404 ,PAGE NOT FOUND<br />{{ this.errorMsg }}</h2>
    <!-- error section ends -->

    <section v-if="!loading">
        <!-- topStories Starts -->
        <div class="top-stories-header" style="background: rgb(33, 37, 41); color: white">
            <h2 class="py-2">Top Stories</h2>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="data in topStories" :key="data.id">
                    <a :href="'https://livescore.com' + data.url" target="_blank">
                        <figure class="img-data">
                            <img :src="data.mainMedia.thumbnail.url" alt="" class="img-fluid" />
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

        <div class="top-stories-header" style="background: rgb(33, 37, 41); color: white">
            <h2 class="py-2">Featured</h2>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3" v-for="item in featured" :key="item.id">
                    <a :href="'https://livescore.com' + item.url" target="_blank">
                        <figure class="img-data">
                            <img :src="item.mainMedia.thumbnail.url" alt="" class="img-fluid" />
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

        <div class="top-stories-header" style="background: rgb(33, 37, 41); color: white">
            <h2 class="py-2">Categories</h2>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="fdata in categories" :key="fdata.id">
                    <div class="main-content">
                        <!-- <router-link :href="'https://livescore.com' + fdata.url" target="_blank"> -->
                        <router-link :to="`/categories/` + fdata.id + '/' + '1'" target="_blank">
                            <img class="img-fluid" src="../assets/dummy.jpg" alt="" />
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
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Categories Ends -->
    </section>
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
            errorMsg: "",
            loading: false,
            error: false,
        };
    },

    async mounted() {
        this.loading = true;
        this.error = false;
        try {
            const result = await axios.get(
                "https://livescore6.p.rapidapi.com/news/v2/list", {
                    headers: {
                        "X-RapidAPI-Key": "b037c8061fmshacce55bc97bbf90p150beejsn8e4d15d67e86",
                        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
                    },
                }
            );

            this.loading = false

            console.log(result.data);

            this.topStories = result.data.topStories;
            // console.log("asdfsadf", this.topStories);

            this.featured = result.data.featuredArticles;
            // console.log("featured", this.featured);

            this.categories = result.data.categories;
            // console.log("categories", this.categories);

        } catch {
            console.log(error);
            this.error = true;
            this.errorMsg = error.message;
        }
    },
};
</script>

<style scoped>
.lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.lds-ripple div {
    position: absolute;
    border: 4px solid #3a3a3a;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
}

@keyframes lds-ripple {
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }

    4.9% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }

    5% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }

    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
}
</style>
