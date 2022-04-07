<template>
  <v-container>
    <Search />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search';

export default {
  name: 'Home',
  components: {
    Search
  }
}
</script>
