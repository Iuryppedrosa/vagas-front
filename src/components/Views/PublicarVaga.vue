<template>
  <div class="container border rounded-3 p-5 mt-4">
    <div class="row">
      <div class="col">
        <h4>Apresente a sua vaga para milhares de profissionais de graca!</h4>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label for="" class="form-label">Titulo da vaga</label>
        <input type="text" class="form-control" v-model="titulo" />
        <div class="form-text">Por exemplo: Programador JavaScript e VueJS</div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label for="" class="form-label">Descricao</label>
        <textarea type="text" class="form-control" v-model="descricao"></textarea>
        <div class="form-text">Informe os detalhes da vaga.</div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="" class="form-label">Salario</label>
        <input type="number" class="form-control" placeholder="R$" v-model="salario" />
        <div class="form-text">Informe o salario.</div>
      </div>

      <div class="col">
        <label for="" class="form-label">Modalidade</label>
        <select name="" id="" class="form-select" v-model="modalidade">
          <option value="" disabled>--Selecione</option>
          <option value="1">CLT</option>
          <option value="2">PJ</option>
          <option value="3">Estagio</option>
        </select>
        <div class="form-text">Informe a forma de contratacao.</div>
      </div>
      <div class="col">
        <label for="" class="form-label">Tipo</label>
        <select name="" id="" class="form-select" v-model="tipo">
          <option value="" disabled>--Selecione</option>
          <option value="1">HomeOffice</option>
          <option value="2">Presencial</option>
        </select>
        <div class="form-text">Informe o local das atividades.</div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <button class="btn btn-primary" @click="cadastrarVaga">Cadastrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PublicarVaga',
  data: () => {
    return {
      titulo: '',
      descricao: '',
      salario: 0,
      modalidade: '',
      tipo: '',
      publicacao: ''
    }
  },
  methods: {
    cadastrarVaga() {
      // let vaga abaixo é um objeto que contém os dados da vaga
      let vagas = JSON.parse(localStorage.getItem('vagas'))
      let tempoDecorrido = Date.now()
      let data = new Date(tempoDecorrido)
      data.toLocaleDateString('pt-BR')
      if (!vagas) vagas = []
      let vaga = {
        titulo: this.titulo,
        descricao: this.descricao,
        salario: this.salario,
        modalidade: this.modalidade,
        tipo: this.tipo,
        publicacao: data
      }
      vagas.push(vaga)
      if (this.validaFormulario()) {
        localStorage.setItem('vagas', JSON.stringify(vagas))
        this.emitter.emit('alerta', {
          tipoErro: 'sucesso',
          titulo: `A vaga ${this.titulo} foi cadastrada com sucesso!`,
          descricao: 'Parabens, a vaga ja pode ser visualizada por milhares de profissionais!'
        })
        this.limparCampos()
      } else {
        this.emitter.emit('alerta', {
          tipoErro: 'erro',
          titulo: 'Erro',
          descricao: 'Existem campos em branco, por favor preencha todos os campos!'
        })
      }
    },
    limparCampos() {
      this.titulo = ''
      this.descricao = ''
      this.salario = 0
      this.modalidade = ''
      this.tipo = ''
    },
    validaFormulario() {
      let valido = true
      if (
        this.titulo === '' ||
        this.descricao === '' ||
        this.salario === 0 ||
        this.modalidade === '' ||
        this.tipo === ''
      ) {
        valido = false
      }
      return valido
    }
  },
  created() {}
}
</script>
<style scoped></style>
