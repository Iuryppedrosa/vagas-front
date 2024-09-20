<template>
  <div id="app">
    <VagasFavoritas />
    <TopoComponent @navegarPara="componenteDestino = $event" />
    <AlertaComponent v-if="alerta" :tipoErro="tipoAlerta.tipoErro">
      <template v-slot:titulo>
        <h3>{{ tipoAlerta.titulo }}</h3>
      </template>
      <template v-slot:descricao>
        <p>{{ tipoAlerta.descricao }}</p>
      </template>
    </AlertaComponent>
    <ConteudoComponent v-if="visibilidade" :conteudoAReceber="componenteDestino" />
  </div>
</template>

<script>
import ConteudoComponent from '@/components/layouts/ConteudoComponent.vue'
import TopoComponent from '@/components/layouts/TopoComponent.vue'
import VagasFavoritas from './components/comuns/VagasFavoritas.vue'
import AlertaComponent from './components/comuns/AlertaComponent.vue'

export default {
  nome: 'App',
  data: () => {
    return {
      visibilidade: true,
      componenteDestino: 'HomeComponent',
      alerta: false,
      tipoAlerta: {
        tipoErro: '',
        titulo: '',
        descricao: ''
      }
    }
  },
  methods: {},
  components: {
    TopoComponent,
    ConteudoComponent,
    VagasFavoritas,
    AlertaComponent
  },
  mounted() {
    this.emitter.on('alerta', (mensagemAlerta) => {
      this.tipoAlerta = mensagemAlerta
      this.alerta = true
      setTimeout(() => {
        this.alerta = false
      }, 3000)
    })
  }
}
</script>

<style scoped></style>
