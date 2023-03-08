<template>
  <header>
    <div class="wapper">
      <Nav />
      <div class="border-top-black-1">
        <h1 class="welcon-sentens">
          <span>
            Welcom to Kasa's
            <span>
              <IconUmbrella />
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

.wapper{
  max-width: auto;
  margin: 0 auto;
  padding: 0 15px;
}

</style>