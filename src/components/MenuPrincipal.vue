<template>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>index</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <script src="https://unpkg.com/vue@next"></script> 
    <script src="tarefa.js" defer></script>
</head>

<body>
  <script src="tarefa.js"></script>
</nav>
<section class="banner">
    <div class="texto">
       <h1 class="titulo"></h1>
       <div class="botoes">
         <a> <button class="overlay">Insira seu Prompt</button></a> 
       </div>
    </div>
    <br>
    <br>
    <div class="area" style="margin-top:80px;"> 
        <textarea rows="40" rows="40" name="resposta" id="resposta"></textarea>
      </div>
      
        <div id="app" style="margin-bottom: 200px;">
            <form id="app-form">
                <input type="text" v-model="input_name" placeholder="Try Now">
                <input type="submit" value="Enviar" v-on:click="submitForm">
            </form></h2>
         
      </section>














  <!--    <p>O meu nome é:{{ name }}</p>

    <p>data binding {{ input_name }}</p>
</div>
<h1 style="text-align: center;">trying de vue </h1>
<h5 style="text-align: center;"></h5>
</div>
  Primeira imagem com largura de 800px-->
  <!--<div style="width: 100%;border: 2px solid green;">-->
    <img class="" src="" alt="" width="100%"> <br> 
 

  <!--<div style="width: 50%;border: 2px solid green;">
  <div style="width: 50%;border: 2px solid green;">-->
   <!--   <img class="" src="" alt="" width="49%">

   <div style="width: 50%;border: 2px solid green; text-align: right;">
    <img class="" src="" alt="" width="49%">

    <h2>Os estudos...</h2>
    <div class="container" style="width: 100%;">
      <img src="gr.jpg" alt="imagemgr" width="1080" height="720">
    </div>
    <br>
    <h2>O pessoal foi para a rua sem a permissão...</h2>
    <div class="high">
      <img src="ygonamoura.jpg" alt="imagemygona" width="720" height="460">
    </div>
    <h2>O twitter parou com o rato frito...</h2>
    <div class="size">
      <img src="aghata.jpg" alt="imagemaghata" width="580" height="">
    </div>
  <br>
    <video width="320" height="240" controls>
      <source src="ygv.mp4" type="video/mp4">
    </video>
    <input name="pesquisaCep" id="pesquisaCep" type="number">
    <input type="button" name="Pesquisar" onclick="buscarEnderecoNoViaCEP()" value="Pesquisar">
  <br>
  
  <br>
  <center>
    <h1>The best scale</h1>
  </center>
    <br>
    <center><table border="5">
      <tr>
          <th>Nome</th>
          <th>Ano</th>
          <th>Meme</th> 
      </tr>
      <tr>
          <td>Aula Online</td>
          <td>2022</td>
          <td><div class="v" style="width: 100%;">
            <img src="gr.jpg" alt="imagemgr" width="500" height="400">
          </div>
        </td>
      </tr>
      <tr>
          <td>Partiu ygonamoura</td>
          <td>2021</td>
          <td>  <div class="v">
            <img src="ygonamoura.jpg" alt="imagemygona">
          </div>  </td>
        </tr>
  
          <tr>
            <td>Aghata Nunes borracheira</td>
            <td width="50" height="50">2020</td>
            <td>  <div class="v">
              <img src="aghata.jpg" alt="imagemaghata">
            </div>   </td>
  
            <tr>
              <td>Uma diva Trabalhadora </td>
              <td>2021</td>
              <td>  
              </div class=""> <video width="320" height="240" controls>
                <source src="trabalhadora.mp4" type="video/mp4" width="500" height="800">
              </video>
                </td>
      </tr>
  </table></center>
>-->

</body>
</html>
</template>