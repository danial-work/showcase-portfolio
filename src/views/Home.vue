<template>
  <div v-if="data" class="flex flex-col md:flex-row h-screen pt-16 overflow-hidden bg-[#09090b]">
    
    <!-- Left: Resume (30%) -->
    <ResumeSidebar 
      class="w-full md:w-[30%]" 
      :profile="data.profile" 
      :experience="data.experience" 
    />

    <!-- Right: Projects (70%) -->
    <ProjectGallery 
      class="w-full md:w-[70%]" 
      :projects="featuredProjects" 
    />

  </div>
  
  <!-- Loading state... -->
  <div v-else class="h-screen w-full flex items-center justify-center bg-[#09090b]">
    <p class="text-zinc-500 animate-pulse uppercase tracking-widest text-xs">Loading Portfolio...</p>
  </div>
</template>
  
<script setup>
  import { ref, computed, onMounted } from 'vue';
  import ResumeSidebar from '../components/ResumeSidebar.vue';
  import ProjectGallery from '../components/ProjectGallery.vue';

  const data = ref(null);
  const allProjects = ref([]);

  onMounted(async () => {
    try {
      // Note: If you are using Vite, use /data.json 
      // to point to public/data.json
      const res = await fetch('/data.json');
      if (!res.ok) throw new Error("File not found");
      data.value = await res.json();
    } catch (err) {
      console.error("Failed to load data:", err);
      // FALLBACK: Useful for testing if the fetch fails
      data.value = {
        profile: { name: "Loading Failed", title: "Check Console", socials: [] },
        experience: [],
        projects: []
      };
    }
  });

  onMounted(async () => {
  try {
    const response = await fetch('/project-content.json');
    allProjects.value = await response.json();
  } catch (error) {
    console.error("Failed parsing unified projects collection:", error);
  }
  });

  // Compute and filter out only items flagged as featured for the homepage view
  const featuredProjects = computed(() => {
    return allProjects.value.filter(project => project.featured);
  });
</script>