<template>
  <div class="container">
    <div class="panel panel-primary">
      <div class="panel-heading">{{ article.title }}</div>
      <div class="panel-body">{{ article.category }}</div>
      <div class="panel-body">{{ article.content }}</div>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
      data () {
      return {
        formArticles: {
          title: '',
          category: '',
          content: ''
        }
      }
    },
    props: ['article'],
    methods: {
      ...mapActions([
        'submitArticles','getArticles'
      ]),
      getAllArticles(ArticlesId) {
        this.getArticles(ArticlesId)
      }
    },
    computed: {
    ...mapState([
      'tmpArticles'
    ])
    },
    created () {
      this.getAllArticles(articles._id)
    }
  }
</script>

<style lang="css">
</style>
