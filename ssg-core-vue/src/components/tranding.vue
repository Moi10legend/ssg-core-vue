<template lang="">
    <div class="tranding">
      <h1>Em alta</h1>
      <ul class="games_list">
        <li class="games">
         <img src="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2023/09/eyJrZXkiOiJwaGFzZS0yL2dhbWVzL2VhLXNwb3J0cy1mYy9mYy0yNC9fbmV4dC9zdGF0aWMvbWVkaWEvcHJlLW9yZGVyLWRlc2t0b3AuMzNkY2Q2YTIuanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo5MCwiZWZmb3J0Ijo1fX19-e1695235821706.webp" alt="">
         <p>EA FC 24</p>
        </li>
        <li class="games">
          <img src="https://files.tecnoblog.net/wp-content/uploads/2021/05/Assassins-Creed-a-ordem-cronologica-da-serie-completa.jpg" alt="">
          <p>Assassin's Creed</p>
        </li>
        <li class="games">
          <img src="https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2022/09/reproducao-gta-v-divulgacao-scaled-1280x720.jpg" alt="">
          <p>GTA V</p>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
    //eslint-disable-next-line vue/multi-word-component-names
    name: "Tranding"
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage()
}, 5000)

function nextImage(){
    count++;

    if(count > 4){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}
</script>
<style lang="css">
.tranding {
  background-color: #051625;
  margin-top: 6rem;
}

.tranding > h1 {
  color: white;
  text-align: center;
  margin: 0;
  margin-bottom: 1em;
}

.games_list {
  list-style-type: none;

  display: flex;
  flex-direction: row;
  justify-content: center;
}

.games {
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.games > img {
  height: 224px;
  width: 400px;
}

.games > p{
  text-align: center;
  color: white;
  font-weight: 700;
  border: solid 2px white; 
  border-radius: .8em;
  padding: .5em;
}
</style>
