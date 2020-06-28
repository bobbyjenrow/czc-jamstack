<template>
  <Layout>

    <slices-section :slices="slices" prefix="prismic_PageBody"></slices-section>


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
                content
                image
                image_side
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
                content
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
    SlicesSection,
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
