<template>
  <div>
    <div class="container p-3">
        Adversity causes some men to break; others to break records.
    </div>
    <TopStories/>
  </div>
</template>

<script>
import TopStories from '../components/TopStories.vue'
export default {
    name:'Home',
    components:{
        TopStories,
        }
}
</script>

<style>

</style>