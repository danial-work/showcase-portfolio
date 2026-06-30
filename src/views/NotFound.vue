<template>
    <div class="min-h-screen bg-[#09090b] text-zinc-100 flex items-center justify-center p-6 relative overflow-hidden">
      
      <div class="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style="background-image: linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px); background-size: 30px 30px;">
      </div>
  
      <div class="max-w-md w-full text-center space-y-8 relative z-10">
        
        <div class="space-y-2">
          <h1 class="text-8xl font-black tracking-tighter text-zinc-800 font-mono animate-pulse">
            404
          </h1>
          <p class="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold">
            // CRITICAL_NODE_NOT_FOUND
          </p>
        </div>
  
        <div class="bg-[#121214] border border-zinc-800 rounded-2xl p-6 text-left font-mono text-xs text-zinc-400 space-y-3 shadow-2xl">
          <div class="flex items-center gap-1.5 border-b border-zinc-900 pb-3 mb-1">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
            <span class="text-[10px] text-zinc-600 ml-2">my_portfolio.sh</span>
          </div>
          <p><span class="text-zinc-600">>></span> Initializing request URL map...</p>
          <p><span class="text-zinc-600">>></span> Error: The requested routing query string cannot be resolved.</p>
          <p class="text-red-400/90"><span class="text-zinc-600">>></span> [STATUS] 404 NoSuchKey: Target database entity is undefined.</p>
        </div>
  
        <div>
          <router-link 
            to="/" 
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-[#121214] border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white rounded-xl font-mono text-xs uppercase tracking-wider transition-all shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Return to Secure Domain
          </router-link>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  // Minimal script required for static error view rendering
  </script>