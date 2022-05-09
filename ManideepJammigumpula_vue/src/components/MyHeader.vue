<template>
   <div class= "nav">
       <a href="./"><label>7Wonders</label></a>
   </div>

</template>

<script>

export default {
 name : 'MyHeader',
}
</script>


<style scoped>
.nav{
    display:flex;
    background-color: black;
    position: fixed;
    top:0;
    left:0;
    right:0;
    height:6rem;
    padding-top:0rem;
    margin:0rem;
    align-items: center;
}

 .nav label {
        display: flex;
        margin-left: 2rem;
        font-size: 3rem;
        float:inline-start;
        font-weight: Bolder;
    }
.nav a{
    text-decoration: none;
    color:gold;
}
</style>