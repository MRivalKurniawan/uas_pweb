<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Ujian Akhir Semester Mata Kuliah Pemrograman Web</strong>
      </p>
      <p> <a href="">M. Rival Kurniawan</a> & <a href="">Alief Haikal Alwis </a></p>
      <p>&copy; {{year}}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer{
  padding: 30px;
  background-color: #ffffff;
}
</style>