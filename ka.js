import { createRouter, createWebHistory } from 'vue-router';
import VideosDiversos from '@/components/VideosDiversos.vue'; // Ajuste o caminho conforme necessário

// Defina suas rotas aqui
const routes = [
  {
    path: '/videos',
    name: 'VideosDiversos',
    component: VideosDiversos
  }
  // Adicione outras rotas aqui, se necessário
];

// Crie uma instância do roteador
const router = createRouter({
  history: createWebHistory(), // Usando o histórico HTML5 para URLs amigáveis
  routes
});

export default router;
