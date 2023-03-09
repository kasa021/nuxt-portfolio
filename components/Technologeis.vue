<template>
    <div id="Skills" class="technologies">
      <div class="intro-tech">
        <h2 class="techTitle">Technologies & Framework</h2>
      </div>
      <ul class="skills-container">
        <li v-for="skill in skillSet" class="skillStyle">
          {{ skill.name }}
        </li>
      </ul>
    </div>
</template>

<script setup lang="ts">
interface Skill {
  name: string;
}
const skillSet =[
  {name: 'HTML'},
  {name: 'CSS'},
  {name: 'JavaScript'},
  {name: 'TypeScript'},
  {name: 'Vue.js'},
  {name: 'Nuxt.js'},
  {name: 'Firebase'},
  {name: 'Git'},
  {name: 'GitHub'},
  {name: 'VSCode'},
] satisfies Skill[];


</script>

<style scoped>
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