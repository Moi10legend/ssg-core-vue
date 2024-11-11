<template lang="">
<div>
    <section class="whoAreWe" id="whoAreWe">
        <h1>Quem somos nós</h1>
        <div class="whoAreWeContent">
            <img src="https://www.neit.edu/wp-content/uploads/2022/10/video-game-developer-team-brainstorming-1-1024x683.jpeg" alt="">
            <div class="whoAreWeText">
        <div class="textArea">
          A SSG CORE é uma empresa que busca <strong>propulsar</strong> a carreira de jovens games developers das redes SESI e SENAI, incentivando o vinculo da nova geração com o mundo digital. 
          Nós investimos nesses jovens para que o país tenha uma rede tecnologica cada vez mais avançada, além disso, procuramos cooperar com o desenvolvimento, nos mais diversos aspectos.
        </div>
      </div>
    </div>
      
    </section>
</div>
</template>
<script>
export default {
    //eslint-disable-next-line vue/multi-word-component-names
    name: "WhoAreWe"
}
</script>
<style lang="css">
    .whoAreWe{
  height: 500px;
}

.whoAreWe > h1{
  color: white;
  margin-left: 2em;
  margin-bottom: 1em;
}

.whoAreWeContent{
  display: flex;
  flex-direction: row;
  margin-left: 4em;
}

.whoAreWeContent > img{
  width: 600px;
}

.whoAreWeText{
  border:solid white 2px;
  color: white;
  border-radius: 10px;
  height: 25em;
  width: 35em;
  margin-left: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.textArea{
  width: 80%;
  text-align: center;
  font-size: 25px;
  font-weight: 450;
} 
</style>