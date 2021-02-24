<template>
  <div id="app">
  <div class="wrapper"> 
    
    <Header />

    <Search :value="search" placeholder="Find you are post" @search="search = $event"/>

    <Main />



    <Form :note='note' :notes='notes'/>



    <Card :notes='notesFilter'/>

   

  </div>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Form from '@/components/Form.vue'
import Card from '@/components/Card.vue'
import Search from '@/components/Search.vue'

export default {
  name: "App",
  
  data () {
        return {
          search: '',
          note: {
            title: '',
            des: ''
          },
            notes: [
                {title: 'Java', des: 'Some quick example text to build on the card title and make up the bulk of the card'},

                {title: 'Python', des: 'Some quick example text to build on the card title and make up the bulk of the card'},

                {title: 'Java Script', des: 'Some quick example text to build on the card title and make up the bulk of the card'},

                {title: 'PHP', des: 'Some quick example text to build on the card title and make up the bulk of the card'},

                {title: 'Ruby', des: 'Some quick example text to build on the card title and make up the bulk of the card'},

                {title: 'C++', des: 'Some quick example text to build on the card title and make up the bulk of the card'},
            ],
        }
    },


    computed: {
	  notesFilter () {
		  let arr = this.notes,
		  	search = this.search
				if (!search) return arr;
				// Small
			search = search.trim().toLowerCase();
			// Filter
			arr = arr.filter(function (item) {
				if (item.title.toLowerCase().indexOf(search) !== -1) {
					return item;
				}
			})
			// Error
			return arr;
	  },
  },
  
  
  components: {
    Header, Main, Form, Card, Search
  },
  



};
</script>


<style lang="scss">

</style>