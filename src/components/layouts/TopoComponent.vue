<template>
  <nav>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" href="#" @click="navegarPara('HomeComponent')">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click="navegarPara('PublicarVaga')">Publicar Vaga</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  nome: 'TopoComponent',
  data() {
    return {}
  },
  methods: {
    navegarPara(p) {
      this.$emit('navegarPara', p)
    }
  }
}
</script>
<style scoped></style>
