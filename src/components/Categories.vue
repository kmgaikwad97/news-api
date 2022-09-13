<template>
<div>
    <div class="cat-head">
        <h2>Category: {{this.title}}</h2>
    </div>
    <div class="container-fluid">

        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="item of data" :key="item.id">
                <div class="main-data">
                    <a :href="'https://www.livescore.com/en/native/news/' +  item.seo.slug + '-' + item.id">
                        <img class="img-fluid" style="height:100px !important" :src="item.image.data.urls.uploaded.thumbnail" alt="">
                        <div class="mx-auto">{{item.title}}</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Categories",
    data() {
        return {
            title: '',
            data: [],
            base_url: 'https://www.livescore.com/en/native/news/',
            id: '',
        }
    },

    async mounted() {
        const result = await axios.get(
            "https://livescore6.p.rapidapi.com/news/v2/list-by-sport", {
                headers: {
                    "X-RapidAPI-Key": "b037c8061fmshacce55bc97bbf90p150beejsn8e4d15d67e86",
                    "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
                },
                params: {
                    category: '2021020913321150030',
                    page: '1'
                },
            }
        );
        console.log(result.data.data[0].seo.slug);

        this.data = result.data.data
        console.log("categories", this.data);
        this.title = result.data.data[0].category.title;
    },
};
</script>

<style>
</style>
