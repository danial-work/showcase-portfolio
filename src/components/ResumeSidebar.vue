<template>
    <aside class="flex flex-col bg-[#121214] border-r border-zinc-800 h-full">
      <div class="p-[clamp(1.5rem,3vw,3rem)] border-b border-zinc-800">
        <!-- Name scales between 1.5rem and 3rem -->
        <h1 class="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-white tracking-tight leading-tight">
          {{ profile?.name }}
        </h1>
        <p class="text-[clamp(0.875rem,1vw,1.1rem)] text-blue-400 font-medium mb-6">
          {{ profile?.title }}
        </p>
        
        <!-- Contact links also scale slightly -->
        <div class="space-y-4 text-[clamp(0.75rem,0.8vw,0.9rem)]">
          <!-- Email -->
          <div class="flex items-center gap-3 group">
            <div class="text-zinc-500 group-hover:text-blue-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <a :href="`mailto:${profile?.email}`" class="text-xs text-zinc-400 hover:text-white transition-colors">
              {{ profile?.email }}
            </a>
          </div>
  
          <!-- Social Links -->
          <div class="flex flex-wrap gap-3">
            <a 
              v-for="link in profile?.socials" 
              :key="link.name" 
              :href="link.url" 
              target="_blank"
              class="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-[11px] text-zinc-300 hover:border-blue-500/50 hover:text-white transition-all"
            >
              <span>{{ link.name }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </a>
          </div>
        </div>
      </div>
  
      <!-- Bottom Section: Scrollable Experience -->
      <div class="flex-1 overflow-y-auto p-[clamp(1.5rem,3vw,3rem)] scrollbar-hide">
      <h2 class="text-[clamp(0.6rem,0.7vw,0.8rem)] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8">
        Experience
      </h2>
        
      <div class="space-y-12">
        <div v-for="job in experience" :key="job.id" class="relative pl-6 border-l border-zinc-800">
          <!-- Timeline Dot -->
          <div class="absolute w-2 h-2 bg-blue-500 rounded-full -left-[4.5px] top-1 shadow-[0_0_10px_rgba(59,130,246,0.4)]"></div>
          
            <!-- Period / Date -->
            <span class="block text-[clamp(0.6rem,0.65vw,0.75rem)] font-bold text-zinc-500 tracking-wider mb-2 uppercase">
                {{ job.period }}
            </span>

            <h3 class="text-[clamp(0.9rem,1.1vw,1.25rem)] font-bold text-zinc-100 leading-tight mb-1">
                {{ job.role }}
            </h3>
            <a class="text-[clamp(0.75rem,0.8vw,0.9rem)] text-blue-400/80 mb-4" target="_blank" :href="job.url">
                {{ job.company }}
            </a>
            
            <p class="text-[clamp(0.8rem,0.9vw,1rem)] text-zinc-500 leading-relaxed">
                {{ job.desc }}
            </p>
          </div>
        </div>
      </div>
    </aside>
  </template>
  
  <script setup>
  defineProps({
    profile: Object,
    experience: Array
  });
  </script>
  
  <style scoped>
  /* Hides scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  /* Hides scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  </style>