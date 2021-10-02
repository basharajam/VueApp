<template>
        <div class="Treelist">
            <div class="item"
                v-for="(child, index) in item"
                :key="index"
                
            >
            <div v-if="isFolder(child)" >
                <span @click="toggle(child)">[{{ isOpen ? '-' : '+' }}]</span>
                <a :href="'https://alyaman.com/product-category/'+child.slug">
                  {{ child.name }}
                </a>
            </div>
            <div v-if="isFolder(child) && isOpen" class="TreeSub">
                <a class="item"
                    v-for="(childItem, index) in child.sub"
                    :key="index"
                    :href="'https://alyaman.com/product-category/'+childItem.slug"
                    
                >
                {{ childItem.name }}
                </a>
            </div>

            <div v-if="!isFolder(child)">
                <span>[-]</span>
                <a :href="'https://alyaman.com/product-category/'+child.slug">
                  {{ child.name }}            
                </a>
            </div>
                
                
            </div>
        </div>
</template>

<script>

export default {
        props: {
        
          item: Array
        },
        data: function() {
          return {
            isOpen: false
          };
        },
        computed: {

        },
        methods: {
          toggle: function(child) {
            if (this.isFolder(child)) {
              this.isOpen = !this.isOpen;
            }
          },
          makeFolder: function() {
            if (!this.isFolder) {
              this.$emit("make-folder", this.item);
              this.isOpen = true;
            }
          },
          isFolder: function(child) {
            return child.sub && child.sub.length;
          }
        }
}
</script>

<style scoped>
  .Treelist, .TreeSub{
    list-style: none;
    text-align: right;
    margin: 0 18px;
  }
</style>
