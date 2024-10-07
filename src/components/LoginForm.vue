<template>
    <div>
      <h2>Salvar Login</h2>
      <form @submit.prevent="saveLogin">
        <div>
          <label for="userId">ID do Usuário:</label>
          <input v-model="login.userId" id="userId" type="text" required />
        </div>
        <button type="submit">Salvar Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        login: {
          userId: ''
        }
      };
    },
    methods: {
      async saveLogin() {
        try {
          const response = await axios.post('http://localhost:5000/api/logins', {
            userId: this.login.userId
          });
          console.log('Login salvo:', response.data);
          this.resetForm();
        } catch (error) {
          console.error('Erro ao salvar login:', error);
        }
      },
      resetForm() {
        this.login.userId = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Adicione estilos conforme necessário */
  </style>