<template>
  <section class="project-section">
    <h2 class="project-title">My Personal Projects</h2>
    <div class="project-grid">
      <!-- <ul class="project-list">
        <li 
      </ul> -->
      <!-- <div v-for="project in projects"  :project-details="project"
        :is-reverse="project.isReverse" >
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">

interface techStack {
  name: string;
}

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  isReverse: boolean;
  githublink: string;
  techStack: techStack[];
}

const projects: Project[] = [
  {
    title: 'Todo App',
    description: 'My first project with Vue.js',
    imageUrl: './icons/todo.png',
    isReverse: true,
    githublink: 'https://github.com/kasa021/vue-TodoApp',
    techStack: [
      { name: 'Vue.js' },
      { name: 'TypeScript' },
    ],
  }
</script>