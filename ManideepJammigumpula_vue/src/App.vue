<template>
  <MyHeader/>
  <TitleImage/>
  <div class="about-div">
    <p class="about">In 2000 a Swiss foundation launched a campaign to determine the New Seven Wonders of the World.
       Given that the original Seven Wonders list was compiled in the 2nd century BCE—and that only one entrant is still standing
        (the Pyramids of Giza)—it seemed time for an update. And people around the world apparently agreed, as more than 100 million
         votes were cast on the Internet or by
       text messaging. The final results, which were announced in 2007, were met with cheers as well as some
        jeers—a number of prominent contenders, such as Athens’s Acropolis, failed to make the cut. Do you agree with the new list?
</p>
  </div>
  <MyBody :wonders="wonders.wonders"/>
  <MyFooter/>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import TitleImage from './components/TitleImage.vue'
import MyBody from './components/MyBody.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    MyBody,
    TitleImage
  },

  data() {
    return {
      wonders: []
    }
  },

  methods: {
    async fetch() {
      const response = await fetch("https://manideep-jammigumpula.herokuapp.com/api");
      const data = await response.json();
      console.log(data);
      return data
    }
  },

  async created() {
    this.wonders = await this.fetch()
    console.log("fetch successful",this.wonders)
    //this.eachwonder=this.eachwonder.wonders
  }
}
</script>

<style>
body{
  margin:0;
  padding:0;
  display:block;
  box-sizing:border-box;
}

.about-div{
  display:flex;
  justify-content: center;
  height:35rem;
  align-items: center;
  background-color: rgba(157, 155, 155);
}

.about{
  width:50rem;
  line-height: 1.5;
  font-size:30px;
  text-align: justify;
  color:white;
}
</style>
