<template>
    
    <div class="iframe">
      <iframe width="560" height="315" src="ygv.mp4" title="mp4 video"   
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
  </template>
  
  <script>
  export default {
      name: 'VideoUnico',
      props: {
          msg: String 
      }
  }
  </script>
  
  <!--Add "scoped" atribute to limite css to this component only-->
  <style scoped></style>