<template>
<section class="prismic-slice-wrapper">
    <div v-for="(slice,index) in slices" class="prismic-slice" :id="`prismic-slice-${index}`" :key="index" >
        <component :is="mapSliceIdToComponent(slice)" :primary="slice.primary" ></component>
    </div>
</section>
</template>

<script>
import Hero from './Slices/Hero.vue'
import SplitContent from './Slices/SplitContent.vue'
import FullWidthBanner from './Slices/FullWidthBanner'


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
                case 'split_content':
                    return SplitContent
                case 'full_width_banner':
                    return FullWidthBanner
                default: 
                    break;
            }
        }
    },
}
</script>

<style lang="scss">
    .prismic-slice{
        margin: 3em auto;
        &:first-child{
            margin-top: 0;
        }
        &:last-child{
            margin-bottom: 1px;
        }
    }
</style>