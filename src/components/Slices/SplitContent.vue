<template>
    <div :class="['split-content__container',`split-content--align-${primary.image_side}`]">
        <div class="left">
        <prismic-rich-text :field="primary.subheading" ></prismic-rich-text>
        <prismic-rich-text :field="primary.heading" ></prismic-rich-text>
        <prismic-rich-text :field="primary.content" ></prismic-rich-text>
        </div>
        <div class="right">
            <div class="image-wrapper">
                <prismic-image :field="primary.image" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['primary']
}
</script>
<style lang="scss" scoped>
    .split-content__container{
        max-width: 1040px;
        padding: 2em;
        margin: auto;
        display: grid;
        grid-gap: 2em;
        @media screen and (min-width: 800px){
            grid-template-columns: 1fr 1fr;
        }

    }
    .image-wrapper{
        width: 100%;
        img{
            width: 100%;
            height: auto;
            max-width: 800px;
        }
    }
    .split-content--align-left{
        .right{
            order: -1;
        }
    }
</style>