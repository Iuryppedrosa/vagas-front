<template>
  <div :class="estiloAlerta" role="alert">
    <slot name="titulo">
      <h4>Titulo</h4>
    </slot>
    <slot name="descricao">
      <p>Descricao</p>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'AlertaComponent',
  props: {
    tipoErro: {
      type: String
    }
  },
  data: () => {
    return {}
  },
  methods: {},
  computed: {
    estiloAlerta() {
      switch (this.tipoErro) {
        case 'erro':
          return 'alert alert-danger'
        case 'sucesso':
          return 'alert alert-success'
        default:
          return 'alert alert-success'
      }
    }
  }
}
</script>
