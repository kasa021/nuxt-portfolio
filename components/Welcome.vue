<template>
  <section id="Home">
    <div class="wapper">
      <div class="border-top-black-1">
        <h1 class="welcome-sentens">
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

.welcome-sentens{
  position: relative;
  margin-top: 15%;
  width: 100%;
}

.welcome-sentens {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}

/* welcome-sentensをアニメーションをつけてスライドインさせる*/
.welcome-sentens span {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  white-space: nowrap;
  transform: translate3d(0, 100%, 0);
  animation: slideIn 1s ease forwards;
}

@keyframes slideIn {
  0% {
    transform: translate3d(0, 100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}


.wapper{
  margin: 0 auto;
  padding: 0 15px;
  height: 100vh; 
}

</style>