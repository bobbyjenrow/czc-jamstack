<template>
    <div class="hero__container">
        <div class="content">
        <prismic-rich-text :field="primary.subheading" ></prismic-rich-text>
        <prismic-rich-text :field="primary.heading" ></prismic-rich-text>
        <prismic-rich-text :field="primary.content" ></prismic-rich-text>
        </div>
        <div class="image">
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
.hero__container{
    position: relative;
}
.image{
    width: 100%;
    height: auto;
    max-height: 80vh;
    img{
        width: 100%;
        height: auto;
        max-height: 80vh;
        object-fit: cover;
    }
}
.content{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
}
</style>