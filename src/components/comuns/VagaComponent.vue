<template>
  <div class="card">
    <div class="card-header bg-dark text-white">
      <div class="row">
        <div class="col d-flex justify-content-between">
          <div>
            {{ titulo }}
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" v-model="favoritada" />
            <label class="form-check-label" @click="favoritarVagar">Favoritar</label>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"
        >Salário: {{ salario }} | Modalidade: {{ getModalidade }} | Tipo: {{ getTipo }} | Publicado:
        {{ getPublicacao }}</small
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'VagaComponent',
  data: () => {
    return {
      favoritada: false
    }
  },
  watch: {
    favoritada(novoValor) {
      if (novoValor) {
        this.emitter.emit('favoritarVaga', this.titulo)
      } else {
        this.emitter.emit('desfavoritarVaga', this.titulo)
      }
    }
  },
  props: {
    titulo: {
      type: String,
      required: true,
      validator: (value) => value.length > 5 // essa propriedade é obrigatória e deve ter mais de 5 caracteres, se nao, aparecera um warning no console
    },
    descricao: {
      type: String,
      default: 'Vaga sem descrição'
    },
    salario: {
      type: Number,
      required: true
    },
    tipo: {
      type: String,
      required: true
    },
    publicacao: {
      type: Date,
      required: true
    },
    modalidade: {
      type: String,
      required: true
    }
  },
  methods: {
    dispararEventoComMitt() {
      this.emitter.emit('nomeDoEventoGlobal', () => {
        5 * 5
      })
    }
  },
  computed: {
    getModalidade() {
      switch (this.modalidade) {
        case '1':
          return 'CLT'
        case '2':
          return 'PJ'
        case '3':
          return 'Estágio'
        default:
          return 'Não informado'
      }
    },
    getTipo() {
      switch (this.tipo) {
        case '1':
          return 'Home Office'
        case '2':
          return 'Presencial'
        default:
          return 'Não informado'
      }
    },
    getPublicacao() {
      return new Date(this.publicacao).toLocaleDateString()
    }
  }
}
</script>
