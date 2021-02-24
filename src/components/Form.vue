<template>
  <div>
    <section class="form-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <form action="">
              <label for="error" style="color: red;">{{error}}</label>
              <div class="mb-3">
                
                <label  class="form-label"
                  >Title</label
                >
                <input
                  v-model="note.title"
                  class="form-control"
                  
                  placeholder="title"
                />
              </div>
              <div class="mb-3">
                <label  class="form-label"
                  >Description</label
                >
                <textarea
                  v-model="note.des"
                  class="form-control"
                    placeholder="description"
                  rows="3"
                ></textarea>
              </div>

  <!-- Check Box -->

  <div class="form-check mb-4">
  <input class="form-check-input" type="checkbox" v-model="checked" value="" >
  <label class="form-check-label">
    Important note 
  </label>
 
</div>

                <div class="block">
                  <button type="button" @click="addPost()" class="btn btn-lg fw-bold border-white bg-white">Add Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
    props: {
      note: {
        type: Object,
        required: true,
      },
      notes: {
        type: Array,
        required: true,
      },

    },

    data() {
      return {
        error: '',
        checked: null,
      }
    },

    methods: {
      addPost () {
        if (this.note.title === '' || this.note.des === '') {
          this.error = 'Not blank!';
          return false;
        }


          this.notes.unshift(
          {
            title: this.note.title,
            des: this.note.des,
            checked: this.checked
          }
        )

        this.note.title = '';
        this.note.des = '';
        this.error = '';
        this.checked = null;

  

      },
    },
}
</script>

<style lang="scss">
    .form-section {
        background-color: #1e2225;
        min-height: 260px;

        button {
        color: black;
        margin-bottom: 25px;
    }



    }

  label {
    color: wheat;
  }



</style>