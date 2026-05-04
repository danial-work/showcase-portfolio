<template>
  <div class="min-h-screen bg-[#09090b] text-zinc-200">
    <nav class="fixed top-0 w-full h-16 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800 z-50 flex items-center justify-between px-8">
      <router-link to="/" class="font-bold text-xl tracking-tighter text-white">DAN.</router-link>
      <div class="space-x-8 text-sm font-medium text-zinc-400">
        <router-link to="/" class="hover:text-blue-400">Home</router-link>
        <router-link to="/certs" class="hover:text-blue-400">My Certs</router-link>
        <router-link to="/contact" class="hover:text-blue-400">Contact</router-link>
      </div>
    </nav>

    <!-- CRITICAL: Ensure this tag exists below the nav -->
    <router-view /> 
  </div>
</template>