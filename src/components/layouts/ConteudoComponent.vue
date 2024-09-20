<template>
  <div>
    <!-- <h1>{{ titulo }}</h1>
    <button @click="atualizarComponente()">Atualizar</button>
    <button @click="conteudo = 'HomeComponent'">Home</button>
    <button @click="conteudo = 'PublicarVaga'">Publicar Vaga</button> -->
    <!-- Renderizar de modo dinamico o componente Home ou PublicarVaga -->
    <!--<HomeComponent />-->
    <!--<PublicarVaga />-->
    <!-- <keep-alive>
      
    </keep-alive> -->
    <component :is="conteudoAReceber" />
  </div>
</template>
<script>
import HomeComponent from '../Views/Home.vue'
import PublicarVaga from '../Views/PublicarVaga.vue'
export default {
  nome: 'ConteudoComponent',
  props: {
    conteudoAReceber: {
      type: String,
      required: true
    }
  },
  components: {
    HomeComponent,
    PublicarVaga
  },
  data: () => {
    return {}
  },
  methods: {},
  //Este metodo é chamado antes de criar o componente
  beforeCreate() {
    console.log('beforeCreate, Antes de criar:' + this.msg)
  },
  // Este metodo é chamado depois de criar o componente
  created() {
    console.log('Agora, apos criado, consigo acessar o: ' + this.msg)
  },
  // Este metodo é chamado antes de montar o componente
  beforeMount() {
    console.log('COMPONENTE CUNTEUDO ANTES DE montar' + this.msg)
  },
  // Este metodo é chamado depois de montar o componente
  mounted() {
    console.log('COMPONENTE CONTEUDO MONATADO!!')
  },

  // outra parte, hooks
  // Este metodo é chamado antes de atualizar o componente
  beforeUpdate() {
    console.log('beforeUpdate = Antes de atualizar o componente CONTEUDO')
  },

  // Este metodo é chamado depois de atualizar o componente
  updated() {
    console.log('updated = Atualizado o componente CONTEUDO')
  },

  // Este metodo é chamado antes de desmontar o componente
  beforeUnmount() {
    console.log('beforeUnmount = Antes de desmontar o componente conteudo')
  },

  // Este metodo é chamado depois de desmontar o componente
  unmounted() {
    console.log('unmounted = Desmontado o componente conteudo')
  },

  errorCaptured() {
    console.log('errorCaptured')
  },
  renderError() {
    console.log('renderError')
  },
  renderTracked() {
    console.log('renderTracked')
  },
  renderTriggered() {
    console.log('renderTriggered')
  },
  activated() {
    console.log('COMPOENENTE CONTEUDO ATIVADO')
  },
  deactivated() {
    console.log('COMPONENTE CONTEUDO DESATIVADO')
  }
}
</script>
<style scoped></style>
