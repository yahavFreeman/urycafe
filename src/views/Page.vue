<template>
  <v-container>
    <Search />
    <!-- join response to element -->
    <Info :info="response" />
    <!-- <Search -->
  </v-container>
</template>

<script>
import send from '../../public/send';

// @ is an alias to /src
import Search from '@/components/Search';
import Info from '@/components/Info';
import content from "../data/content.json" 
import {pathService} from "../service/pathService"

export default {
  name: 'Page',
  components: {
    Search,
    Info,
  },
  data(){
    return {
      serverUrl: '',
      response: '',
      siteContent:content,
      searchResult:null
    };
  },
  async mounted(){
    // receive server url
    const server =  await send('/env.json','','get');
    this.serverUrl = server && server['SERVER_URL'];
    // receive data from server
    // const response = await send(this.serverUrl,{message: this.$router.currentRoute.path.replace('/','')});
    const path=this.$router.currentRoute.path.replace('/','')
    pathService.addSearch(path) //adding +1 to the search history
    const response=this.siteContent[path]
    this.response = response && response;
    if(path.toLowerCase()==='statistics'){
      this.response=`<h1>Search Statistics:</h1>`
    }else if( !this.response && path.toLowerCase()!='light' && path.toLowerCase()!='dark' ){
      this.searchGoogle(path)
    }
  },
  methods:{
    async searchGoogle(searchStr){
      this.searchResult= await pathService.query(searchStr)
      this.response=`<h1>Sorry, Item Not Found.</h1> <h3>Here Is A Link To The Google Result Of: ${searchStr}</h3> <a v-if=${this.searchResult} href=${this.searchResult.link}>${this.searchResult.title}</a><p>${this.searchResult.snippet}</p>`
    }
  }

}
</script>
