<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid px-5">
      <NuxtLink class="navbar-brand" to="/">Kasa</NuxtLink>
      <button class="navbar-toggler" type="button" >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link active" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" to="/about">About</NuxtLink>
          </li>
        </ul>
      </div>
      <theme />
    </div>
  </nav>
</template>