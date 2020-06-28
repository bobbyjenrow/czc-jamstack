<template>
    <nav class="main-nav" >
        <ul class="main-nav__list" v-click-outside="closeDropdown">
            <DropdownNavItem 
            v-for="(item,i) in nav" 
            v-on:open-dropdown="()=>{openDropdown(i)}"
            v-on:close-dropdown="()=>{closeDropdown()}"
            :is-open="(currentActive == i)"
            :key="i" 
            :item="item"
            ></DropdownNavItem>
        </ul>
    </nav>
</template>

<static-query>
query{
	prismic{
    navigation(uid:"main-nav", lang: "en-us"){
			nav{
        ...on prismic_NavigationNavNav_item{
          primary{
            link{
              ... on prismic__ExternalLink{
                url
              }
              ... on prismic__FileLink{
                name
                url
                size
              }
            }
            label
          }
          fields{
            sub_nav_link_label
            sub_nav_link{
              ... on prismic__ExternalLink{
                url
              }
              ... on prismic__FileLink{
                name
                url
                size
              }
            }
          }
        }
      }
    }
  }
}
</static-query>

<script>
import DropdownNavItem from './DropdownNavItem'
import vClickOutside from 'v-click-outside' 

export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  components: {
    DropdownNavItem
  },
  data: function(){
    return{
      currentActive: null
    }
  },
  computed: {
      nav: function(){ return this.$static.prismic.navigation.nav }
  },
  methods: {
    openDropdown: function(i){
      console.log(i)
      this.currentActive = i
    },
    closeDropdown: function(){
      this.currentActive = null
    }
  }
}
</script>

<style lang="scss">
.main-nav{
  padding: 1em;
}
.main-nav__list{
  display: flex;
  justify-content: center;

}
</style>

