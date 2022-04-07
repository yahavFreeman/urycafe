<template>
<div>
  <div class="content" v-html="info"></div>
  <v-data-table v-if="stats"
    :headers="headers"
    :items="searches"
    :items-per-page="5"
  ></v-data-table>
</div>
</template>

<script>
import { pathService } from '../service/pathService';
  export default {
    name: 'Info',
    props: {
      info: String
    },
    data(){
      return {
        stats:null,
        headers:[
          {
            text: 'Search Words',
                      align: 'start',
                      sortable: false,
                      value: 'name',
          },
          {
            text:'Number Of Searches Done',
            value:'number'
          }
        ],
        searches:[]
      }
    },
    created(){//doing statistics in created to avoid an endless loop in updated
      if (this.$router.currentRoute.path.replace('/','')==='statistics'){
          this.stats=pathService.getSearches()
          this.searches=Object.keys(this.stats).map((key)=>{
            return {
              name:key,
              number:this.stats[key]
            }
          })
      }
    },
    updated(){
      let mode;
      // check current route

      switch(this.$router.currentRoute.path.replace('/','')){
        // if dark - set to app element class dark and remove class light
        case 'dark':
          mode = document.querySelector('.content .darkMode div:nth-of-type(2)');
          mode && (mode.onclick = () => {
            document.querySelector('#app').classList.remove('light');
            document.querySelector('#app').classList.add('dark');
            this.$router.push('/').catch(err => console.error(err));
          });
          break;
        // if light - set to app element class light and remove class dark
        case 'light':
          mode = document.querySelector('.content .lightMode div:nth-of-type(2)');
          mode && (mode.onclick = () => {
            document.querySelector('#app').classList.remove('dark');
            document.querySelector('#app').classList.add('light');
            this.$router.push('/').catch(err => console.error(err));
          });
          break;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .content{
    display: block;
    width: 561px;
    margin: 0 auto;
    font-size: large;
    line-height: 2;
    color: rgb(67, 67, 97);
    text-align: left;
  }
</style>