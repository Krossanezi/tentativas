<template>
    <ImagensPrincipal />
    <VideoUnico />
    <TabelaDiversos/>
</template>

<script>

import  ImagensPrincipal  from './ImagensDiversos.vue';
import VideoUnico from './VideoUnico.vue';
import TabelaDiversos from './TabelaDiversos.vue';
export default {
    name: 'PaginaPrincipal',
    components: {
        ImagensPrincipal, VideoUnico, TabelaDiversos,
    },
    props: {
        msg: String
    }
}
</script>

<!--Add "scoped" atribute to limite css to this component only-->
<style scoped></style>