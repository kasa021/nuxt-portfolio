<template>
  <header class="header">
    <div class="header__logo">
      <img src="~/assets/images/logo.png" alt="logo" class="logo" />
    </div>
    <nav>
      <ul class="menu">
        <li class="menu__item">
          <NuxtLink href="#Home" >Home</NuxtLink>
        </li>
        <li class="menu__item">
          <NuxtLink href="#About">About</NuxtLink>
        </li>
        <li class="menu__item">
          <NuxtLink href="#Skills">Skills</NuxtLink>
        </li>
        <li class="menu__item">
        </li>
        <Theme />
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  width: 100vw;
}

.header__logo {
  width: 100px;
}



.menu {
  display: flex;
  list-style: none;
  margin-right: 72px;
  align-items: center;
}

.menu__item {
  margin-right: 20px;
}

.menu__item:last-child {
  margin-right: 0;
  
}

.light-mode .menu__item a {
  color: #000;
}

.dark-mode .menu__item a {
  color: #fff;
}


.menu__item a {
  text-decoration: none;
}

.menu__item a:hover {
  text-decoration: underline;
}

.logo {
  width: 100%;
}
</style>