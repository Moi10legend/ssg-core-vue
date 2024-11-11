<template>
    <div id="pagina-inicial" class="pagina-inicial">
      <HeaderSSGCore></HeaderSSGCore> 
      <h1 class="titulo-centralizado">Seja muito BEM-VINDO</h1>
      <Navbar></Navbar>
      <Slider></Slider>
      <Tranding></Tranding>
      <WhoAreWe></WhoAreWe>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import HeaderSSGCore from './header.vue';
  import Navbar from './navBar.vue';
  import Slider from './slider.vue';
  import Tranding from './tranding.vue';
  import WhoAreWe from './whoAreWe.vue';
  import Footer from './footer.vue';

  export default {
    name: 'paginaInicial',
    components: {
      HeaderSSGCore,
      Navbar,
      Slider, 
      Tranding,
      WhoAreWe,
      Footer
    }
  }
  </script>
  
  <style>
  *{
    font-family: 'Roboto', sans-serif;
  }

   .pagina-inicial{
    background-color: #051625;
   }

   .titulo-centralizado {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  color: white;
}
  </style>