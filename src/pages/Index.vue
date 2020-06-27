<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>
    <!-- <section class="slices-wrapper">
      <component :is="mapSliceIdToComponent(slice,)"></component>
    </section> -->
    <slices-section :slices="slices" prefix="prismic_PageBody"></slices-section>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<page-query>
query{
	prismic{
    allPages{
      edges{
        node{
          body{
            __typename
            ...on prismic_PageBodyHero{
              type
              primary{
                heading
                subheading
                image
                cta_text
                cta_link{
                  _linkType
                  __typename
                }
              }
            }
            ...on prismic_PageBodySplit_content{
              type
              primary{
                heading
                subheading
                image
                cta_text
                cta_link{
                  _linkType
                  __typename
                }
              }
            }
            ...on prismic_PageBodyFull_width_banner{
              type
              primary{
                heading
                subheading
                image
                cta_text
                cta_link{
                  _linkType
                  __typename
                }
                background_color
              }
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import SlicesSection from '../components/SlicesSection'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    SlicesSection
  },
  computed: {
    slices: function(){ return this.$page.prismic.allPages.edges[0].node.body }
  },


}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
