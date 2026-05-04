<template>
    <main class="h-full overflow-y-auto bg-[#09090b] scroll-smooth">
      <div class="w-full p-[clamp(2rem,5vw,6rem)]">
        
        <header class="mb-16">
          <h2 class="text-[clamp(0.7rem,0.8vw,1rem)] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-4">
            Featured Projects
          </h2>
          <div class="h-1 w-[10vw] bg-blue-500"></div>
        </header>
        
        <div class="space-y-[clamp(4rem,10vw,12rem)]">
          <section v-for="project in projects" :key="project.id" class="group w-full">
            <!-- Expanded Project Preview Area -->
            <!-- h-[450px] or aspect-video keeps it large on big screens -->
            <div class="relative w-full h-[clamp(300px,40vw,600px)] md:h-[450px] lg:h-[500px] mb-8 bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden transition-all duration-700 group-hover:border-zinc-600 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.7)]">
              
              <!-- Subtle Grid Background for that "Data Analyst" feel -->
              <div class="absolute inset-0 opacity-10" 
                   style="background-image: radial-gradient(#27272a 1px, transparent 1px); background-size: 30px 30px;">
              </div>
  
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/20 to-transparent opacity-80"></div>
              
              <!-- Centered Placeholder Text -->
              <div class="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                <div class="w-16 h-1 bg-zinc-800 rounded-full group-hover:bg-blue-500/50 transition-colors"></div>
                <span class="text-zinc-600 font-mono text-xs tracking-[0.5em] uppercase group-hover:text-zinc-300 transition-all duration-500">
                  VIEW_CASE_STUDY
                </span>
                <div class="w-16 h-1 bg-zinc-800 rounded-full group-hover:bg-blue-500/50 transition-colors"></div>
              </div>
              
              <!-- Top Right Link Icon -->
              <div class="absolute top-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <div class="px-4 py-2 bg-white text-black font-bold text-xs rounded-full flex items-center gap-2 shadow-xl">
                  OPEN PROJECT
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                </div>
              </div>
            </div>
  
            <!-- Project Details: Now wider to match the image -->
            <div class="px-2">
                <div class="mt-8">
                    <!-- Title scales significantly with page width -->
                    <h3 class="text-[clamp(2rem,4vw,5rem)] font-black text-white tracking-tighter leading-none mb-4 group-hover:text-blue-400 transition-all">
                    {{ project.title }}
                    </h3>
                
                <!-- Tech Stack Badges (Right aligned on desktop) -->
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in project.tech.split(',')" 
                    :key="tech"
                    class="px-3 py-1 rounded-md bg-blue-500/5 border border-blue-500/10 text-[10px] font-bold text-blue-400 uppercase tracking-tighter"
                  >
                    {{ tech.trim() }}
                  </span>
                </div>
              </div>
  
                <p class="text-[clamp(1rem,1.2vw,1.5rem)] text-zinc-400 leading-relaxed max-w-[80%]">
                    {{ project.desc }}
                </p>
            </div>
          </section>
        </div>
  
        <div class="h-40"></div>
      </div>
    </main>
  </template>
  
  <script setup>
  defineProps({
    projects: Array
  });
  </script>
  
  <style scoped>
  /* Optional: Custom scrollbar behavior for the gallery */
  main::-webkit-scrollbar {
    width: 4px;
  }
  main::-webkit-scrollbar-track {
    background: transparent;
  }
  main::-webkit-scrollbar-thumb {
    background: #27272a;
    border-radius: 10px;
  }
  </style>