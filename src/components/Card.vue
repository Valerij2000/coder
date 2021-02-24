<template>
  <div>
    <section class="card-section">
      <div class="container">
        <div class="row block-card">
          <div v-for="(item, index) in notes" :key="index" class="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">

            <div v-bind:class="{ importentClass: item.checked }" class="card" style="width: 18rem">
              <span @click="removePost(index)">X</span>
              <img src="" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">
                  {{item.des}}
                </p>

                <div v-if="item.checked">
                  <button type="button" class="btn btn-light">Go somewhere</button>
                </div>
                <div v-else>
                  <button type="button" class="btn btn-dark">Go somewhere</button>
                </div>
               
                
              </div>
            </div>


         </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },




  data() {
    return {
      
    }
  },


  methods: {
    removePost (index) {
      this.notes.splice(index, 1);
    },
  },

};
</script>


<style lang="scss">

.card-section {
    background-color: #1e2225;
    

    .block-card {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .card {
         
        margin-bottom: 50px;
        
    }

    .btn-light {
      border-color: black;
    }

    span {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-content: flex-start;
      margin-right: 6px;
      width: 20px;
      cursor: pointer;
      font-size: 18px;

      &:hover {
        color: red;
        font-weight: 1000;
      }

    }


    .importentClass {
      background-color:tomato;
    }


    }
    
}
    
</style>