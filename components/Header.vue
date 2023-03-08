<template>
  <header class="headerHeight">
    <div>
      <Nav />
      <div class="border-top-black-1 text-center p-3 mb-5">
        <h1 class="display-2 welcon-sentens">
          <span>
            Welcom to Kasa's
            <span>
              <IconsIconUmbrella />
            </span>
            portfolio
          </span>
        </h1>
      </div>
    </div>
  </header>
</template>

<style scoped>
.border-top-black-1 {
  border-top: 1px solid rgb(158, 139, 139);
  
}

.welcon-sentens{
  /* background-color: antiquewhite; */
  position: relative;
  margin-top: 15%;
  height: 200%;
  width: 100%;
}

.headerHeight {
  height: calc(100vh - 60px);
}

</style>