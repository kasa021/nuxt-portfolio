<template>
  <secton>
    <div>
      <div class="text-img-block">
        <div class="leftText">
          <h2 class="profile-title">Introduction</h2>
          <div class="profile-description-container">
            <p class="profile-description">
              こんにちは、Kasaです。現在はフロントエンドエンジニアとして働いていません。
              このポートフォリオサイトは、Nuxt.jsとTailwind CSSを使って作成しました。
              プログラミングは競技プログラミングから始めました。最近は、webアプリケーションの開発に興味があり、
              勉強している最中です。
            </p>
            <p>hello</p>
            <div class="social-icons">
              <a  aria-label="Instagram" target="_blank" class="social-link">
                <IconInstagram />
              </a>

              <a href="https://twitter.com/kAsA02_" aria-label="Twitter" target="_blank" class="social-link">
                <IconTwitter />
              </a>

              <a href="https://github.com/kasa021" aria-label="Github" target="_blank" class="social-link">
                <IconGithub />
              </a>
            </div>
          </div>
        </div>

        <div class="img-icon">
          <img src="./icon/cloud-g6fd602bff_640.jpg" alt="profile image" />
        </div>
      </div>
    </div>
  </secton>
</template>

<style scoped>

.social-icons{
  display: flex;
  gap: 20px;
  align-items: center;

}

.light-mode .social-link svg {
  width: 24px;
  height: 24px;
  fill: #363232
}

.dark-mode .social-link svg {
  width: 24px;
  height: 24px;
  fill: #ddd
}

.text-img-block {
  display: flex;
  gap: 100px;
  justify-content: space-between;
  align-items: center;
  margin: 0 20%;
  height: 100vh;
}

img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
}

.profile-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.profile-description-container {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.profile-description {
  font-size: 1.125rem;
  line-height: 1.875rem;
}

/* .leftText {
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 10%;
  margin-right: 10%
} */
</style>