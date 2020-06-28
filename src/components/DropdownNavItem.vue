<template>
    <li class="dropdown-item">
        <prismic-link class="dropdown-link" v-if="isLink && !isDropdown" :field="item.primary.link" >
            <prismic-rich-text :field="item.primary.label" />
        </prismic-link>
        <button class="button-wrapper" v-else @click="toggle" @focus.native="open" @blur.native="close" :aria-haspopup="isDropdown ? 'true' : 'false'" :aria-expanded="isOpen ? 'true' : 'false'">
            <prismic-rich-text class="dropdown-text" :field="item.primary.label"  />
        </button>
        <ul class="dropdown-subnav" v-if="item.fields && isOpen">
            <li class="dropdown-item dropdown-sub-item" v-for="(childItem,x) in item.fields" :key="x">
                <prismic-link class="dropdown-link dropdown-sub-link" v-if="childItem.sub_nav_link" :field="childItem.sub_nav_link" >
                    <prismic-rich-text :field="childItem.sub_nav_link_label" />
                </prismic-link>
                <prismic-rich-text class="dropdown-text dropdown-sub-text dropdown-no-link" v-else :field="childItem.sub_nav_link_label" />
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    props: ['item','isOpen'],
    computed: {
        isDropdown: function(){ return this.item.fields.length > 0 ? true : false  },
        isLink: function() { return this.item.primary.link ? true : false }
    },
    methods: {
        open(){
            this.$emit('open-dropdown')
        },
        close(){
            this.$emit('close-dropdown')
        },
        toggle(){
            if(this.isOpen){
                this.close()
            }else{
                this.open()
            }
        }
    }
}
</script>

<style lang="scss">
.dropdown-item{
    position: relative;
    list-style-type: none;
    margin-left: 10px;
    margin-right: 10px;
}
.dropdown-subnav{
    padding: 0;
    position: absolute;
    left: 0;
    top: 100%;
    background: white;
    z-index: 9;
}
.dropdown-sub-item{

}
.dropdown-link {
    text-decoration: none;
    padding: 1em;
    display: block;
    p{
        margin: 0;
    }
}
.dropdown-sub-link{

}
.dropdown-text {

}
.dropdown-sub-text{

}
.button-wrapper{
    background: none;
    border: none;
    padding: 0;
}
.dropdown-no-link{
    text-decoration: none;
    padding: 1em;
    display: block;
    p{
        margin: 0;
    }
}
</style>