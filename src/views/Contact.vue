<template>
  <v-container>
    <Search />
    <ContactUs />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search';
import ContactUs from "@/components/ContactUs";

export default {
  name: 'Home',
  components: {
    Search,
    ContactUs
  }
}
</script>
