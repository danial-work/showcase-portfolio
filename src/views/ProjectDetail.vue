<template>
    <div v-if="project" class="min-h-screen bg-[#09090b] text-zinc-100 pt-20 pb-32 selection:bg-blue-500/30">
      <header class="w-full border-b border-zinc-900 bg-[#121214]/30 backdrop-blur-md relative overflow-hidden">
        <div v-if="project.heroImage && project.heroImage.trim() !== ''" class="absolute inset-0 z-0">
          <img 
            :src="project.heroImage" 
            :alt="project.title" 
            class="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.1]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent"></div>
        </div>

        <div v-else class="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div class="absolute inset-0" 
              style="background-image: linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px); background-size: 40px 40px;">
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent"></div>
        </div>

        <div class="max-w-5xl mx-auto px-6 py-[clamp(4rem,8vw,10rem)] relative z-10">
          <router-link 
            :to="backLink" 
            class="inline-flex items-center gap-2 text-xs font-mono uppercase text-zinc-500 hover:text-blue-400 transition-colors mb-12 group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2.5"
              class="transform group-hover:-translate-x-1 transition-transform"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
            {{ backLabel }}
          </router-link>
          
          <h1 class="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tighter leading-none mb-6 text-white drop-shadow-md">
            {{ project.title }}
          </h1>
          <p class="text-[clamp(1.1rem,1.5vw,1.5rem)] text-zinc-300 leading-relaxed max-w-3xl font-medium drop-shadow-sm">
            {{ project.subtitle }}
          </p>
        </div>
      </header>
  
      <section class="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-b border-zinc-900 text-sm font-mono">
        <div>
          <span class="block text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Role</span>
          <span class="text-zinc-300">{{ project.meta?.role }}</span>
        </div>
        <div>
          <span class="block text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Timeline</span>
          <span class="text-zinc-300">{{ project.meta?.timeline }}</span>
        </div>
        <div>
          <span class="block text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Engine Stack</span>
          <span class="text-blue-400 font-bold uppercase text-xs">{{ project.meta?.stack }}</span>
        </div>
      </section>
  
      <main class="max-w-4xl mx-auto px-6 mt-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
          <div class="lg:col-span-2 text-[clamp(1.1rem,1.2vw,1.35rem)] text-zinc-300 leading-relaxed font-light">
            {{ project.overview }}
          </div>
          <div class="bg-[#121214] border border-zinc-800 rounded-2xl p-6 space-y-6">
            <div v-for="metric in project.metrics" :key="metric.label" class="border-b border-zinc-800 last:border-none pb-4 last:pb-0">
              <span class="block text-3xl font-black text-white tracking-tight shadow-sm">{{ metric.value }}</span>
              <span class="text-xs font-mono text-zinc-500 uppercase tracking-wider">{{ metric.label }}</span>
            </div>
          </div>
        </div>
  
        <article class="space-y-16">
          <div v-for="(block, index) in project.sections" :key="index" class="space-y-4">
            <h2 class="text-2xl md:text-3xl font-bold text-white tracking-tight pt-4">
              {{ block.heading }}
            </h2>
            
            <p v-if="block.type === 'text'" class="text-zinc-400 leading-relaxed text-base md:text-lg font-normal">
              {{ block.content }}
            </p>
  
            <div v-if="block.type === 'code'" class="relative font-mono text-sm bg-[#121214] border border-zinc-800 rounded-xl p-6 overflow-x-auto text-blue-300/90 shadow-inner">
              <div class="absolute right-4 top-3 text-[9px] uppercase tracking-widest text-zinc-600 select-none font-bold">
                {{ block.language || 'code' }}
              </div>
              <pre><code>{{ block.content }}</code></pre>
            </div>

            <div v-if="block.type === 'image'" class="space-y-2 my-8">
              <div class="border border-zinc-800 rounded-2xl overflow-hidden bg-[#121214]/50 p-2 backdrop-blur-sm">
                <img 
                  :src="block.url" 
                  :alt="block.caption || 'Project illustration'" 
                  class="w-full h-auto rounded-xl object-contain max-h-[600px] mx-auto"
                  loading="lazy"
                />
              </div>
              <p v-if="block.caption" class="text-xs font-mono text-zinc-500 text-center tracking-wide">
                // {{ block.caption }}
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
    
    <div v-else class="h-screen w-full flex items-center justify-center bg-[#09090b] text-zinc-500">
      <p class="animate-pulse font-mono tracking-widest text-xs uppercase">Resolving Analytics Workspace...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  const project = ref(null);

  const backLink = ref('/');
  const backLabel = ref('Back to Portfolio');

  onMounted(async () => {
    // 1. Calculate navigation history origin securely
    // router.options.history.state holds the history entry metadata
    const historyState = router.options.history.state;
    
    if (historyState && historyState.back) {
      const previousPath = historyState.back;

      if (previousPath.includes('/projects')) {
        backLink.value = '/projects';
        backLabel.value = 'Back to Projects Archive';
      } else if (previousPath === '/') {
        backLink.value = '/';
        backLabel.value = 'Back to Portfolio';
      } else {
        backLink.value = '/';
        backLabel.value = 'Back to Home';
      }
    } else {
      // Fallback if they landed directly via link sharing/bookmarking
      backLink.value = '/';
      backLabel.value = 'Back to Home';
    }

    // 2. Fetch project content data payload
    try {
      const response = await fetch('/project-content.json');
      const projectsList = await response.json();
      const projectSlug = route.params.id;
      
      const match = projectsList.find(p => p.slug === projectSlug);
      if (match) {
        project.value = match;
      }
    } catch (error) {
      console.error("Critical routing retrieval breakdown:", error);
    }
  });
  </script>