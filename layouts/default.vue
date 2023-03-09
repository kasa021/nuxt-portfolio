<template>
  <div>
    <Header />
    <Welcome />
    <slot />
    <Footer />
  </div>
</template>

<style>
body {
  margin:0;
}

html {
  scroll-behavior: smooth;
}
</style>