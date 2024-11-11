<template>
    <div class="header">
      <div class="logos">
        <a href="lyt.html"><img class="logo_ssg" src="../assets/logo-ssg-core-com-fundo.png" alt=""></a>
        <a target="_blank" class="logo" href="https://pe.sesi.org.br"><img class="logo_sesi" src="https://fiergs.org.br/sites/default/files/logos/logos_sesi_branco.png" alt=""></a>
        <a target="_blank" class="logo" href="https://www.pe.senai.br"><img class="logo_senai" src="https://www.senairs.org.br/sites/default/files/styles/scale_sm/public/logos/logos_senai_branco.png?itok=25HaNKVc" alt=""></a>
      </div> 
      <div class="btncadastro"> 
          <a href="login.html">
            <img class="perfil_branco" src="../assets/perfilbranco.png" alt="img/perfilbranco.png" width="40px">
          </a>
          <a class="btn-entre" href="login.html"><p>Entre ou <br>cadastre-se</p></a>
      </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'HeaderSSGCore',
    props: {
      msg: String
    }
  }
  </script>
  
  
  <style scoped>
    .header  {
    height: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: row;
    align-items: center;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #051625;
}

.logos{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.btncadastro{
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  padding-right: 2rem;
}

.btn-entre{
  color: white;
  text-decoration: none;
  margin-bottom: .6rem;
}

.logo{
  height: 40px;
}

.logo_ssg {
    width: 100px;
    margin-left: 20px;
}

.logo_sesi {
  margin-left: 20px;
  height: 40px;
  width: 110px;
}

.logo_senai {
  margin-left: 20px;
  height: 40px; 
  width: 110px;
}

.titulo-centralizado {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  color: #051625;
}

  .menu {
    text-align: center; 
  }
  
  .menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .menu ul li {
    display: inline-block;
    margin: 0 10px; 
  }
  
  .menu ul li a {
    text-decoration: none;
    color: white;
    padding: 10px 20px; 
    border: 1px solid #cccccc; 
    border-radius: 8px;
  }
  
  .menu ul li a:hover {
    color: #051625;
    background-color: #f1f1f1; 
  }
  </style>