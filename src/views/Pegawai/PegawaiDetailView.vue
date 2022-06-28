<template>
  <section class="hero mt-5 is-small">
    <div class="hero-body">
      <p class="title">
        Detail Pegawai
      </p>
      <p class="subtitle">
        Menampilkan Data Pegawai
      </p>
    </div>
  </section>
  <section class="content">
    <div v-if="pegawai">
      <div class="card mt-2">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="/src/assets/User.png" alt="image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title2 is-4 ">{{nip}}</p>
              <p class="title2 is-6">{{pegawai.nama}}</p>
            </div>
          </div>
          <hr>
          <div class="content">
            <dl>
              <dt>id_kamar</dt>
              <dd><strong>{{Pegawai.id_kamar}}</strong></dd>

              <dt>tipe_kamar</dt>
              <dd><strong>{{Pegawai.tipe_kamat}}</strong></dd>

              <dt>nama_pelanggan</dt>
              <dd><strong>{{pegawai.nama_pelanggan.namamk}}</strong></dd>

              <dt>tanggal_masuk</dt>
              <dd><strong>{{pegawai.tanggal_masuk}}</strong></dd>

              <dt>tanggal_keluar</dt>
              <dd><strong>{{pegawai.tanggal_keluar}}</strong></dd>

              <dt>harga</dt>
              <dd><strong>{{pegawai.harga}}</strong></dd>


            </dl>
            <hr>
            <div class="columns">
              <div class="column">
                <RouterLink to="/dosen" class="button is-info">
                  <span class="icon is-small">
                    <i class="fas fa-arrow-left"></i>
                  </span>
                  <span>Kembali</span>
                </RouterLink>
              </div>
              <div class="column has-text-right">
                Created at {{dosen.created_at}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="container">
        <div class="notification is-danger">
          Maaf, dosen dengan <strong>NIP `{{nip}}` tidak ditemukan</strong>
        </div>
      </div>
    </div>
    <div class="has-text-centered" v-if="isLoading">
      <i class="fa-solid fa-spinner fa-pulse"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: "DosenDetailView",
  data() {
    return {
      dosen: null,
      nip: this.$route.params.nip,
      isLoading: false
    }
  },
  methods:{
    load(){
      this.isLoading = true;
      //const baseurl = import.meta.env.VITE_URL_ENDPOINT_2;
      fetch(`https://projectbersama.my.id/pages/dosen/get.php?nip=${this.nip}`,{
        method: 'GET',
      })
        .then(response => {
          if(response.ok){
            return response.json();
          }
        })
        .then(json => {
          this.dosen = json.data;
        })
        .catch(()=>{
          alert('Terjadi error')
        })
        .finally(()=>{
          this.isLoading = false;
        })
    }
  },
  mounted() {
    this.load();
  }
}
</script>

<style scoped>
.hero{
  background-color: #165596;
  border-radius: 10px;
}
.card{
  background-color: #a1eafb;
}
.title{
  text-align: center;
  color: white;
}
.subtitle{
  text-align: center;
  color: white;
}
.title2{
  font-family: "Times New Roman";
  font-weight: bold;

}
</style>