<template>
  <div class="masuk">
  <Navbar></Navbar>
  <Form></Form>
  <button type="button" name="button" @click='logout'>LOGOUT</button>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Form from '@/components/Form'
export default {
  name: 'Home',
  components: {
    Navbar,
    Form
  }
}
</script>
