<template>
  <div id="Skills" class="technologies">
    <div class="intro-tech -once">
      <h2 class="techTitle">Technologies & Framework</h2>
    </div>
    <ul class="skills-container -once">
      <li v-for="skill in skillSet" class="skillStyle">
        {{ skill.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref } from 'vue';
interface Skill {
  name: string;
}
const skillSet = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'Vue.js' },
  { name: 'Nuxt.js' },
  { name: 'Firebase' },
  { name: 'Git' },
  { name: 'GitHub' },
  { name: 'VSCode' },
]satisfies Skill[];


onMounted(() => {
  const skills = document.getElementById('Skills');
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(showElements, options);
  observer.observe(skills!);



  function showElements(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      const introTech = document.getElementsByClassName('intro-tech')[0];
      const skillsContainer = document.getElementsByClassName('skills-container')[0];
      if (entry.isIntersecting) {
        introTech.classList.add('show');
        skillsContainer.classList.add('show');
      } else {
        introTech.classList.remove('show');
        skillsContainer.classList.remove('show');
      }

    });
  }
})
</script>

<style scoped>
/* .technologies .showにスライドインのアニメーションを追加 */
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
}

.technologies .show {
  animation: slideIn 1s ease-in-out;
}

.technologies {
  height: 30vh;
}

.techTitle {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.skillStyle {
  display: inline-block;
  margin: 10px 10px 10px 0;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #f5f5f5;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.skillStyle:hover {
  transform: translateY(-0.5rem) !important;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
}
</style>