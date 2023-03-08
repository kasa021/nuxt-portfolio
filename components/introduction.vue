<template>
  <secton>
    <div >
      <div >
        <div class="leftText">
          <h2 class="profile-title">Introduction</h2>
          <div class="profile-description-container">
            <p class="profile-description">
              こんにちは、Kasaです。現在はフロントエンドエンジニアとして働いています。
              このポートフォリオサイトは、Nuxt.jsとTailwind CSSを使って作成しました。
              プログラミングは競技プログラミングから始めました。最近は、webアプリケーションの開発に興味があり、
              勉強している最中です。
            </p>
            <p>hello</p>
          </div>
        </div>

        <div >
          <img src="/profile-pics/profile.webp" width="350" height="350" alt="profile image" loading="lazy" />
        </div>
      </div>
    </div>
  </secton>
</template>

<style scoped>
.profile-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #000;
}

.profile-description-container {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.profile-description {
  font-size: 1.125rem;
  line-height: 1.875rem;
  color: #000;
  width: 40%;
}

.leftText {
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 10%;
}
</style>