<template>
  <v-row class="text-center uryca">
    <v-col class="mb-4">
      <!-- Uryca "logo" -->
      <h1 class="display-4 font-weight-regular mb-3">
        <span style="color: #ff0000">U</span>
        <span style="color: #00ffff">r</span>
        <span style="color: #800080">y</span>
        <span style="color: #00ff00">c</span>
        <span style="color: #ff0000">a</span>
      </h1>
      <!-- Search box -->
      <v-text-field
        ref="textField"
        class="search"
        v-model="partName"
        v-on:input="inputPartName"
        label="You'll find out soon!"
        solo
        clearable
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
  export default{
    name: 'Search',
    data(){
      return {
        // set search box value as last url part
        partName: document.location.href.split('/').pop()
      };
    },
    methods: {
      /** check path */
      allowed(path){
        // if dark mode - 'Already is dark', if light mode - 'Already is light'
        if(document.querySelector('#app').classList.contains(path)){
          const content = document.querySelector('.content');
          content && (content.innerHTML = `<h2>It is already ${path}</h2>`);
          return false;
        }
        // check if new path different from last past path
        return this.$router.currentRoute.path !== `/${path}`;
      },
      /** pass to accordance search box value page */
      inputPartName(){
        // get search box value
        const part = this.partName?.trim().toLowerCase();
        // if value is undefined - pass to home page
        if(typeof part === 'undefined') return this.$router.push('/').catch(err => console.error(err));
        // if path is allowed - go to accordance page
        this.allowed(part) && this.$router.push(`/${part}`).catch(err => console.error(err));
      },
    },
    // beautifully hook, for use in accordance case later
    /*watch: {
      '$route.params.search': {
        handler: function(){
          if(this.$router.currentRoute.path === '/dark'){
            // do something...
          }
        },
        deep: true,
        immediate: true
      }
    },*/
    mounted(){
      // set focus on search box, immediately when page opened
      this.$refs.textField.focus();
    }
  }
</script>

<!-- Add "scoped" attribute to limit style to this component only -->
<style lang="scss" scoped>
  .uryca{
    margin-top: 7rem;
  }

  .search{
    width: 561px;
    margin: 42px auto 0!important;
    border-radius: 26px!important;

    &.v-input__slot{
      padding: 0 31px!important;
    }
  }
</style>