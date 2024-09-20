<template>
  <slot :vagas="vagas">
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vaga-component v-bind="vaga"></vaga-component>
      </div>
    </div>
  </slot>
</template>
<script>
import VagaComponent from '../comuns/VagaComponent.vue'
export default {
  components: { VagaComponent },
  //   props: {
  //     vagas: {
  //       type: Array,
  //       required: true
  //     }
  //   },
  data: () => ({
    vagas: []
  }),
  name: 'ListaVagas',
  methods: {},
  mounted() {
    this.vagas = JSON.parse(localStorage.getItem('vagas'))
    console.log('HOME MONTADO')
    this.emitter.on('filtrarVagas', (vaga) => {
      const vagas = JSON.parse(localStorage.getItem('vagas'))
      const vagasFiltradas = vagas.filter((v) => {
        return v.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
      })
      this.vagas = vagasFiltradas
      if (vagasFiltradas.length === 0) {
        this.alerta = true
        this.tipoAlerta = {
          tipoErro: 'erro',
          titulo: 'Nenhuma vaga encontrada',
          descricao: 'Não encontramos nenhuma vaga com o título informado.'
        }
        setTimeout(() => {
          this.alerta = false
        }, 3000)
      }
    })
  }
}
</script>
