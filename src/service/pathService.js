import axios from 'axios'
export const pathService={
    query,
    addSearch,
    getSearches
}
const SEARCH_KEY='searchDB'
const API_KEY='AIzaSyArZPIrPY3DLGAIipPe8nuE4sCfP-y7Y7c'
async function query(str){
const result= await axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=017576662512468239146:omuauf_lfve&q=${str}`)
return result.data.items[0]
}

function addSearch(searchedWord){
const searchMap= JSON.parse(localStorage.getItem(SEARCH_KEY))||{}
searchMap[searchedWord]= searchMap[searchedWord]? searchMap[searchedWord]+=1:searchMap[searchedWord]=1
localStorage[SEARCH_KEY]=JSON.stringify(searchMap)
}

function getSearches(){
    var val = localStorage.getItem(SEARCH_KEY)
    return (val) ? JSON.parse(val) : null;
}