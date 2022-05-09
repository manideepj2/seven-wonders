<template>
 <v-container class="body">
   <div class="border">
   <v-col v-for="eachwonder in wonders" :key="eachwonder.id">
   <WonderCard :wonders="eachwonder"/>
   </v-col>
   </div>
 </v-container>
</template>

<script>
import WonderCard from './WonderCard.vue'

export default {
  name: 'MyBody',
  components:{
    WonderCard
  },
  props:{
    wonders:Array
  }
}
</script>

<style>
.body{
display:flex;
background-color: white;
align-items: center;
flex-direction: column;
background-color: rgb(239, 234, 234);
}
.border{
  background-color: white;
}
</style>
