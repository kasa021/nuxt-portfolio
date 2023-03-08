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



/* projext-image とproject-absoluteの一を重ねる */
.project-relative {
  position: relative;
  width: 600px;
  height: 400px;
  margin: 0 20px 20px 0;
  border-radius: 6%;
  overflow: hidden;
}

.project-image {
  width: 600px;
  height: 400px;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 6%;
}

.project-absolute {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 10px;
  color: #fff;
  background: rgba(0, 0, 0, .6);
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
/* .project-absoluteをhoverするとproject-description project-tech のみ表示される,hoverしていないとproject-nameのみ表示する*/
.project-absolute:hover .project-description,
.project-absolute:hover .project-tech {
  display: block;
}

.project-absolute:hover .project-name {
  display: none;
}

.project-name {
  display: block;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.project-description {
  display: none;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
}

.project-tech {
  display: none;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
}

.project-tech-item {
  display: inline-block;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: #fff;
  color: #000;
}

.project-links {
  display: flex;
  justify-content: flex-end;
}

.project-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-left: 1rem;
  border-radius: 50%;
  background: #fff;
  color: #000;
}

.project-link:hover {
  background: #000;
  color: #fff;
}









img {
  width: 500px;
  height: 400px;
  object-fit: none;
  object-position: 50% 50%;
  border-radius: 6%;
}
</style>