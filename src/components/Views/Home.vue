<template>
  <div>
    <div class="container py-4">
      <AlertaComponent v-if="alerta" :tipoErro="tipoAlerta.tipoErro">
        <template v-slot:titulo>
          <h3>{{ tipoAlerta.titulo }}</h3>
        </template>
        <template v-slot:descricao>
          <p>{{ tipoAlerta.descricao }}</p>
        </template>
      </AlertaComponent>
      <div class="row">
        <div class="col">
          <pesquisar-vaga :vagas="vagas"> </pesquisar-vaga>
        </div>
      </div>
      <lista-vagas :vagas="vagas"></lista-vagas>
      <!-- <lista-vagas v-slot:default="slotProps"> {{ slotProps }} </lista-vagas> -->

      <!--
      <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
        <div class="col">
          -->
      <!-- <vaga-component
            :titulo="vaga.titulo"
            :descricao="vaga.descricao"
            :salario="vaga.salario"
            :tipo="vaga.tipo"
            :publicacao="vaga.publicacao"
          ></vaga-component> -->
      <!-- <vaga-component v-bind="vaga"></vaga-component> 
        </div> 
        
      </div>
      -->
      <div class="row mt-5">
        <div class="col-4">
          <indicador-tamplate
            titulo="Vagas Abertas"
            indicador="100"
            bg="bg-dark"
            color="text-white"
          ></indicador-tamplate>
        </div>
        <div class="col-4">
          <indicador-tamplate
            titulo="Profissionais Cadastrados"
            indicador="225"
            bg="bg-dark"
            color="text-white"
          ></indicador-tamplate>
        </div>
        <div class="col-4">
          <indicador-tamplate
            titulo="Visitantes Onlines"
            :indicador="usuariosOnline"
            bg="bg-white"
            color="text-dark"
          >
          </indicador-tamplate>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IndicadorTamplate from '../comuns/IndicadorTemplate.vue'
import PesquisarVaga from '../comuns/PesquisarVaga.vue'
import AlertaComponent from '../comuns/AlertaComponent.vue'
import ListaVagas from '../comuns/ListaVagas.vue'

export default {
  components: { PesquisarVaga, IndicadorTamplate, AlertaComponent, ListaVagas },
  name: 'HomeComponent',
  data: () => {
    return {
      usuariosOnline: 0,
      intervalId: null,
      vagas: [],
      alerta: false,
      tipoAlerta: {
        tipoErro: '',
        titulo: '',
        descricao: ''
      }
    }
  },
  methods: {
    atualizarQuantidadeUsuarios() {
      this.usuariosOnline = Math.floor(Math.random() * 100)
      console.log(this.usuariosOnline)
    },
    iniciarAtualizacao() {
      this.intervalId = setInterval(this.atualizarQuantidadeUsuarios, 5000)
    },
    pararAtualizacao() {
      clearInterval(this.intervalId)
    }
  },
  created() {
    this.atualizarQuantidadeUsuarios()
    console.log('HOME CRIADO')
  },
  mounted() {
    this.iniciarAtualizacao()
  },
  beforeUnmount() {
    this.pararAtualizacao()
    console.log('HOME ANTES DE DESMONTAR')
  },
  unmounted() {
    console.log('HOME DESMONTADO')
  },

  // sao chamados apenas se keep-alive for usado
  activated() {
    this.iniciarAtualizacao()
    console.log('home ATIVADOOO ')
  },
  // é chamado apenas se keep-alive for usado
  deactivated() {
    this.pararAtualizacao()
    console.log('home desativado')
  }
}
</script>
<style scoped></style>
