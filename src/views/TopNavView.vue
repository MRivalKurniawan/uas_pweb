<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <RouterLink class="navbar-item" to="/">
          <img src="/src/assets/iconss.png" alt="Logo"> <Strong>Valip</Strong>
        </RouterLink>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar ">
          <RouterLink class="navbar-item" to="/">
            Home
          </RouterLink>
          <RouterLink class="navbar-item" to="/about">
            About
          </RouterLink>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Database Hotel
            </a>
            <div class="navbar-dropdown">
              <RouterLink class="navbar-item" to="/pegawai">
                PEGAWAI
              </RouterLink>
              <RouterLink class="navbar-item" to="/pelanggan">
                PELANGGAN
              </RouterLink>
              <RouterLink class="navbar-item" to="/kamar">
                KAMAR
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
export default {
  name: "TopNavView"
}
</script>

<style scoped>
.navbar {
  background-color: #ffffff;
}

</style>