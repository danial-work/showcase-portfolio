<template>
    <div class="pt-24 min-h-screen bg-[#09090b] px-[clamp(1.5rem,5vw,6rem)] pb-20">
      <div class="w-full">
        <header class="mb-16">
          <h1 class="text-[clamp(2rem,4vw,4rem)] font-black text-white tracking-tighter mb-4">
            Certifications
          </h1>
          <div class="h-1 w-20 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
        </header>
  
        <!-- Certification Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a 
            v-for="cert in certs" 
            :key="cert.id" 
            :href="cert.link" 
            target="_blank"
            class="group bg-[#121214] border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
          >
            <!-- Cert Image Area -->
            <div class="aspect-[16/9] bg-zinc-900 flex items-center justify-center p-8 overflow-hidden relative border-b border-zinc-800/50">
            
            <!-- Condition 1: Image Link Exists -->
            <img 
                v-if="cert.image && cert.image.trim() !== ''"
                :src="cert.image" 
                :alt="cert.name"
                class="max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
            />

            <!-- Condition 2: Fallback Placeholder (No Image) -->
            <div v-else class="flex flex-col items-center justify-center text-center px-4">
                <div class="w-12 h-1 bg-blue-500/30 mb-4 rounded-full group-hover:w-20 group-hover:bg-blue-500 transition-all duration-500"></div>
                <span class="text-[clamp(0.8rem,1vw,1.2rem)] font-black text-zinc-700 uppercase tracking-tighter leading-tight group-hover:text-zinc-500 transition-colors">
                {{ cert.name }}
                </span>
            </div>

            <!-- External Icon Overlay (Keep this) -->
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </div>
            </div>
  
            <!-- Cert Details -->
            <div class="p-[clamp(1.5rem,2vw,2rem)]">
              <!-- Date Badge -->
              <div class="flex items-center gap-2 mb-4">
                <span class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest bg-zinc-800 px-2 py-1 rounded">
                  {{ cert.start }} — {{ cert.expiry }}
                </span>
              </div>
  
              <h3 class="text-[clamp(1.1rem,1.3vw,1.5rem)] font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                {{ cert.name }}
              </h3>
              
              <p class="text-[clamp(0.8rem,0.9vw,1rem)] text-zinc-500 leading-relaxed line-clamp-3">
                {{ cert.desc }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const certs = ref([]);
  
  onMounted(async () => {
    try {
      const res = await fetch('/data.json');
      const data = await res.json();
      certs.value = data.certifications;
    } catch (err) {
      console.error("Failed to load certs:", err);
    }
  });
  </script>