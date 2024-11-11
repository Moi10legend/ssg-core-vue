<template>
    <div class="nav-bar">
      <nav class="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Jogos</a></li>
        <li><a href="#">Quem somos</a></li>
      </ul>
    </nav>
    </div>
</template>
<script>
export default {
  //eslint-disable-next-line vue/multi-word-component-names
    name: 'Navbar'
  
}
</script>
<style>
   .menu {
    text-align: center;
    margin-top: 2em; 
    font-family: 'Roboto', sans-serif;
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