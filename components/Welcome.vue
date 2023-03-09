<template>
  <section id="Home">
    <div class="wapper">
      <div class="border-top-black-1">
        <h1 class="welcon-sentens">
          <span>
            Welcome to Kasa's
            <span>
              <IconUmbrella />
            </span>
            portfolio
          </span>
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.border-top-black-1 {
  border-top: 1px solid rgb(158, 139, 139);
  
}
/* welcome-sentensをwapperの中央に表示 */
.welcon-sentens {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}

.wapper{
  position: relative;
  margin: 0 auto;
  padding: 0 15px;
  height: 100vh; 
}

</style>