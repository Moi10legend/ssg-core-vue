<template lang="">
    <div>
        <footer>
      <div class="footer-content"></div>
      <ul class="contact">
        <h2>Contato</h2>
        <li>suporte@ssgcore.br</li>
        <li>marketing@ssgcore.br</li>
        <li>parcerias@ssgcore.br</li>
        <li>Fone: 0800 3004 7890</li>
      </ul>

      <div class="location">
        <div class="title-location">
          <img class="pin" src="../assets/location pin.png" alt="">
          <h2>Localização</h2>
        </div>
        
        <p class="adress">Av. Recife 654, Refice-PE</p>
      </div>
      

      <div class="social">
        <h2>Nos siga nas redes sociais</h2>
        <div class="social-logos">
          <a href=""><img src="../assets/logo facebook.png" alt=""></a>
          <a href=""><img src="../assets/logo instagram.avif" alt=""></a>
          <a href=""><img src="../assets/logo youtube.png" alt=""></a>
        </div>
      </div>
    </footer>
    </div>
</template>
<script>
export default {
    //eslint-disable-next-line vue/multi-word-component-names
    name: "Footer"
}
</script>
<style lang="css">
    footer{
    height: auto;
    /* background-color: #78F8FE; */
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 2em;
    padding-bottom: 1em;
  }

.footer-content{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.contact{
  margin-left: 50px;
}

.location{
    margin-bottom: 30px;
    margin-left: 100px;
    width: 400px;
}

.adress{
  font-weight: 600;
}

.title-location{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.location img{
    width: 30px;
    height: 30px;
}

.social{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  margin-right: 30px;
}

.social-logos{
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
}

.social-logos img{
  width: 50px;
  height: 40px;
  margin-right: 10px;
}
</style>