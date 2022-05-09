<template>
    <div class="image-box">
        <label> The New Seven Wonders<br> of the World</label>
        <img src="https://www.holidify.com/images/cmsuploads/compressed/BeFunky-collage6_20201209124319.jpg" class="image" alt="collage image">
    </div>
</template>

<script>

export default {
    name:'TitleImage'
}
</script>

<style scoped>

.image-box{
    background-color: rgb(39, 39, 39);
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-top:6rem;
}
.image{
    height:466px;
    width:1102px;
}
.image-box label{
    color:white;
    display:flex;
    font-size: 3rem;
    padding-left:2rem;
    width:400px;

}
</style>