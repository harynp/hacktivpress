<template>
  <div class="hello">
    <!-- <Login></login> -->
  </div>
</template>

<script>
import Login from '@/components/Login'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Login
  }
}
</script>

<script>
// import Navbar from '@/components/Navbar'
// import Question from '@/components/Question'
// import Form from '@/components/Form'
// import Answer from '@/components/Answer'
// import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    Navbar,
    Form,
    Question,
    Answer
  },
  // computed: {
  //   ...mapState([
  //     'tmpQuestion','tmpAnswer'
  //   ])
  // },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapActions([
      'getQuestions', 'getAnswer'
    ]),
    getData() {
      console.log('masuk sini', localStorage.getItem('Token'));
      if (localStorage.getItem('Token')) {
        this.$http.get('/users', {
            headers: {
              'Token': localStorage.getItem('Token')
            }
          })
          .then(data => {
            console.log('dapet user');
            console.log(data)
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.$router.push('/')
      }
    },
    logout() {
      // localStorage.clear()
      window.localStorage.clear();
      this.$router.push('/')
    }
  },
  created () {
    this.getQuestions()
    // this.getAnswer()
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
