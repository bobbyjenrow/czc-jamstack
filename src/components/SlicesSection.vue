<template>
<section class="prismic-slice-wrapper">
    <div v-for="(slice,index) in slices" class="prismic-slice" :id="`prismic-slice-${index}`" :key="index" >
        <component :is="mapSliceIdToComponent(slice)" :primary="slice.primary" ></component>
    </div>
</section>
</template>

<script>
import Hero from './Hero.vue'

export default {
    props: ['slices','prefix'],
      components: {
        Hero
    },
    methods: {
        mapSliceIdToComponent(slice){
            switch (slice.type){
                case 'hero':
                    return Hero
                default: 
                    break;
            }
        }
    },
}
</script>