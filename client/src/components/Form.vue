<template>
<div class="">
  <div class="container">
  <form @submit.prevent="submitArticles(formArticles)">
    <div class="row">
      <div class="col-25">
        <label>Title</label>
      </div>
      <div class="col-75">
        <input v-model="formArticles.title" type="text" name="title" placeholder="Title">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label>Category</label>
      </div>
      <div class="col-75">
        <input v-model="formArticles.category" type="text" name="category" placeholder="Category">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label>Content</label>
      </div>
      <div class="col-75">
        <textarea v-model="formArticles.content" name="content" placeholder="Content" style="height:200px"></textarea>
      </div>
    </div>
    <div class="row">
      <button class="btn btn-primary" type="submit" name="button">Submit</button>
    </div>
  </form>
</div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
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
  methods: {
    ...mapActions([
      'submitArticles'
    ])
  }
}

</script>

<style lang="css">
* {
  box-sizing: border-box;
}

input[type=text], select, textarea{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
      width: 100%;
      margin-top: 0;
  }
}
</style>
