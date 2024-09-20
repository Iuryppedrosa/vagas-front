<template>
  <div class="h-100 p-5 gg-light border rounded-3">
    <h2>Pesquisar Vagas</h2>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="pesquisa">Titulo da Vaga</label>
          <input
            type="text"
            class="form-control"
            id="pesquisa"
            placeholder="Pesquise por palavras chaves, por exemplo: 'PHP, Java, Analista de Sistemas'"
            v-model="titulo"
          />
          <small class="form-text text-muted"
            >Informe palavras que estejam relacionadas com o título da vaga que vc procura.</small
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-primary" @click="pesquisarVaga">Pesquisar</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PesquisarVaga',
  data: () => {
    return {
      titulo: ''
    }
  },
  methods: {
    pesquisarVaga() {
      this.emitter.emit('filtrarVagas', {
        titulo: this.titulo
      })
    }
  }
}
</script>
