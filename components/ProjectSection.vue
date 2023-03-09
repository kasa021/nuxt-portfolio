<template>
  <section class="project-section">
    <h2 class="project-title">My Personal Projects</h2>
    <div class="project-grid">
      <div v-for="project in projects" :project-details="project" :is-reverse="project.isReverse"
        class="project-relative">
        <img src="./icon/MyTodo.png" class="project-image">
        <div class="project-absolute">
          <h3 class="project-name">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tech">
            <div v-for="tech in project.techStack" class="project-tech-item">
              {{ tech.name }}
            </div>
          </div>
          <div class="project-links">
            <a :href="project.githublink" target="_blank" class="project-link">   
              <IconGithub />
            </a>
          </div>
        </div>
      </div>
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
];
</script>

<style scoped>
.text-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.project-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
}

.projext-image-div {
  position: absolute;
  top: 300px;
  left: 0;
  bottom: 80px;
  color: #fff;
  background: rgba(0, 0, 0, .6);
  width: 600px;
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}



/* projext-image とproject-absolute を画面の中央で重ねる */
.project-relative {
  position: relative;
  width: 500px;
  height: 400px;
  margin: 0 auto;
  margin-bottom: 2rem;
}

/* project-imageを画面の中央に配置する */
.project-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 400px;
  object-fit: none;
  object-position: 50% 50%;
  border-radius: 6%;
}

/* project-absoluteを画面の中央に配置する */
.project-absolute {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 400px;
  padding: 1rem;
  background: rgba(0, 0, 0, .6);
  border-radius: 6%;
}



/* When project-absolute is hovered, only project-description and project-tech are displayed, when not hovered, only project-name is displayed.*/

.project-absolute:hover .project-name {
  display: none;
}

.project-absolute:hover .project-description {
  display: block;
  position : absolute;
  right : 160px;
}

.project-absolute:hover .project-tech {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom : 0;
}

.project-absolute:hover .project-links {
  display: flex;
  position: absolute;
  bottom: 0;
  right : 0;
}

.project-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: block;
  text-align: center;
  color: #fff;
}

.project-description {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  display: none;
  color: #fff;
}

.project-tech {
  display: none;
  
}

.project-tech-item {
  display: flex;
  border-radius: 6px;
  color: #fff;
  margin : 0 0;
  width: 80px;
}

.project-links {
  display: none;
}

.project-link {
  display: inline-block;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  color: #fff;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 2rem;
}






img {
  width: 500px;
  height: 400px;
  object-fit: none;
  object-position: 50% 50%;
  border-radius: 6%;
}
</style>