<template>
<div class="card-border">
    <div class="card">
        <div class="heading">
            <h1>{{wonders.id}}.</h1>
            <h1>{{wonders.title}}</h1>
        </div>
        <a :href="wonders.location" target="blank"><h3>{{wonders.place}}</h3></a>
        <img :src="wonders.img" alt="wonder image" class="image">
        <p>{{wonders.desc}}<br><br><a style="font-size:18px" :href="wonders.url" target="blank">Click here to visit official website...</a></p>
    </div>
</div>
</template>

<script>

export default {
    name:'WonderCard',
    props:{
        wonders: Array
    }
}
</script>

<style scoped>
.card{
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width:900px;
    padding:1rem;
    margin-top:3rem;
    background-color: white;
}
.image{
    width:800px;
    display: flex;
}
.card h3{
    margin-top:0;
    padding:0;
    /* margin-left: 1.8rem; */
    font-style: italic;
}
.card h1{
    margin:0;
    margin-top:20px;
}

.card p{
    font-size:1.5rem;
    text-align: justify;
    line-height: 1.5;
    border-bottom:groove;
    padding-bottom:2rem;
    margin-bottom:0;
    width:800px;
}

.heading{
    display:flex;
}

</style>