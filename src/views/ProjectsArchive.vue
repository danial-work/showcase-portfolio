<template>
    <div class="min-h-screen bg-[#09090b] text-zinc-100 pt-24 pb-32 px-[clamp(1.5rem,5vw,6rem)]">
      <div class="max-w-6xl mx-auto">
        
        <header class="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <router-link to="/" class="inline-flex items-center gap-2 text-xs font-mono uppercase text-zinc-500 hover:text-blue-400 transition-colors mb-6 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m15 18-6-6 6-6"/></svg>
              Back Home
            </router-link>
            <h1 class="text-[clamp(2.5rem,4vw,4rem)] font-black tracking-tighter text-white mb-2">
              Project Archive
            </h1>
            <p class="text-zinc-500 font-mono text-xs uppercase tracking-wider">
              Index of historical deployments, pipelines, and analytical properties.
            </p>
          </div>
  
          <div class="relative w-full md:w-80">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Filter by tech (e.g. BigQuery)..." 
              class="w-full bg-[#121214] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 transition-colors font-mono"
            />
          </div>
        </header>
  
        <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <router-link 
            v-for="project in filteredProjects" 
            :key="project.slug"
            :to="`/project/${project.slug}`"
            class="group bg-[#121214] border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-500 flex flex-col justify-between h-full shadow-xl"
          >
            <div>
              <div class="aspect-[16/10] bg-zinc-900 border-b border-zinc-800/50 overflow-hidden relative">
                <img 
                  v-if="project.image && project.image.trim() !== ''"
                  :src="project.image" 
                  :alt="project.title"
                  class="w-full h-full object-cover object-top filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div v-else class="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style="background-image: linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px); background-size: 20px 20px;">
                </div>
              </div>
  
              <div class="p-6">
                <span class="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">
                  {{ project.meta?.timeline || 'ARCHIVE' }}
                </span>
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                  {{ project.title }}
                </h3>
                <p class="text-sm text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                  {{ project.subtitle }}
                </p>
              </div>
            </div>
  
            <div class="px-6 pb-6 pt-2 border-t border-zinc-900 flex flex-wrap gap-1.5">
              <span 
                v-for="tech in splitStack(project.meta?.stack)" 
                :key="tech"
                class="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-zinc-900 border border-zinc-800 text-zinc-500 uppercase"
              >
                {{ tech.trim() }}
              </span>
            </div>
          </router-link>
        </div>
  
        <div v-else class="py-20 text-center border border-dashed border-zinc-800 rounded-3xl">
          <p class="font-mono text-zinc-600 text-sm uppercase tracking-widest">No matching nodes resolved in catalog.</p>
        </div>
  
      </div>
    </div>
  </template>
  
<script setup>
    import { ref, computed, onMounted } from 'vue';
    
    const projectsList = ref([]);
    const searchQuery = ref('');
    
    onMounted(async () => {
        try {
            const response = await fetch('/project-content.json');
            // Since it's already an array, we map it directly to our template reference
            projectsList.value = await response.json();
        } catch (error) {
            console.error("Failed parsing archive listing array stream:", error);
        }
    });
    
    // Helper split string safety method
    const splitStack = (stackString) => {
        if (!stackString) return [];
        return stackString.split(',');
    };
    
    // Computed Live Filter Logic
    const filteredProjects = computed(() => {
        if (!searchQuery.value.trim()) return projectsList.value;
        
        const query = searchQuery.value.toLowerCase();
        return projectsList.value.filter(project => {
        return (
            project.title.toLowerCase().includes(query) ||
            project.subtitle.toLowerCase().includes(query) ||
            (project.meta?.stack && project.meta?.stack.toLowerCase().includes(query))
        );
        });
    });
  </script>