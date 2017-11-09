<template>
  <div class="Home">
  <Navbar></Navbar>
  <Form></Form></br>
  <Articles v-for="article in tmpArticles" :article="article" :key="article.id"></Articles>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Form from '@/components/Form'
import Articles from '@/components/Articles'
export default {
  props: ['tmpArticles'],
  name: 'Home',
  components: {
    Navbar,
    Form,
    Articles
  }
}
</script>
