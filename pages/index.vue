<template>
  <div class="min-h-screen bg-cover bg-center text-white font-serif"
       :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/images/bc4.jpg')` }">

    <!-- Navbar -->
    <nav class="relative z-50 flex justify-between items-center bg-black bg-opacity-70 px-30 py-4 rounded-lg shadow-lg">
      <div
  class="text-3xl font-bold tracking-wide drop-shadow-gothic"
  style="font-family: 'Cinzel Decorative', serif;"
>
  Velvet Viktorya
</div>
        <img src="/images/symbol.png" alt="Sembol" class="h-30 w-30 object-contain" />
      <div class="flex space-x-6 items-center">
        <NuxtLink to="/" class="nav-link">Ana Sayfa</NuxtLink>
        <div @mouseenter="startOpen" @mouseleave="startClose" class="relative">
          <button class="nav-link flex items-center" :aria-expanded="isOpen.toString()" @focus="openNow" @blur="startClose">
            Ürünler
            <svg class="ml-1 w-4 h-4 text-orange-500" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div v-if="isOpen" @mouseenter="cancelClose" @mouseleave="startClose"
               class="absolute bg-black bg-opacity-90 mt-2 rounded shadow-lg w-48 z-50">
            <div class="p-2 border-b border-orange-600">
              <div class="font-semibold text-orange-400 mb-1 px-2">Kadın</div>
              <ul>
                <li v-for="item in womenProducts" :key="item.name" tabindex="0"
                    @click="select(item.name)" class="dropdown-item">{{ item.name }}</li>
              </ul>
            </div>
            <div class="p-2">
              <div class="font-semibold text-orange-400 mb-1 px-2">Erkek</div>
              <ul>
                <li v-for="item in menProducts" :key="item.name" tabindex="0"
                    @click="select(item.name)" class="dropdown-item">{{ item.name }}</li>
              </ul>
            </div>
          </div>
        </div>
        <NuxtLink to="/about" class="nav-link">Hakkımızda</NuxtLink>
      </div>
    </nav>

    <!-- Ürünler -->
    <div class="container mx-auto p-6 space-y-12 mt-12">

      <!-- Kadın -->
      <section>
        <div class="flex items-center gap-2 mb-4">
          <h2 class="text-2xl font-bold bg-black/80 px-3 py-1 rounded relative inline-block">
            Kadın
            <span class="neon-underline"></span>
          </h2>
          <svg class="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a5 5 0 1 0 0 10..." />
          </svg>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="(item, i) in womenProducts" :key="i" class="product-card" @click="select(item.name)">
            <div class="image-wrapper">
              <img :src="item.image" alt="Ürün" />
            </div>
            <p class="product-name">{{ item.name }}</p>
          </div>
        </div>
      </section>

      <!-- Erkek -->
      <section>
        <div class="flex items-center gap-2 mb-4">
          <svg class="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 2a5 5 0 1 1 0 10..." />
          </svg>
          <h2 class="text-2xl font-bold bg-black/80 px-3 py-1 rounded relative inline-block">
            Erkek
            <span class="neon-underline"></span>
          </h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="(item, i) in menProducts" :key="i" class="product-card" @click="select(item.name)">
            <div class="image-wrapper">
              <img :src="item.image" alt="Ürün" />
            </div>
            <p class="product-name">{{ item.name }}</p>
          </div>
        </div>
      </section>
    </div>
    <audio autoplay loop class="hidden">
  <source src="/audio/m2.mp3" type="audio/mpeg" />
</audio>
  </div>
</template>

<script setup>

import { onMounted } from 'vue'
onMounted(() => {
  const audio = document.querySelector('audio')
  if (audio) {
    const playAttempt = () => {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Müzik başarıyla çalıyor.")
          })
          .catch(error => {
            console.warn('Otomatik oynatma engellendi. İlk tıklamada çalacak.')
            document.addEventListener('click', () => {
              audio.play()
            }, { once: true })
          })
      }
    }
    playAttempt()
  }
})

import { ref } from 'vue'

const womenProducts = [
  { name: "Elbise", image: "/images/dress.png" },
  { name: "Bolero", image: "/images/Bolero.png" },
  { name: "Kolye", image: "/images/necklace.webp" },
  { name: "Şapka", image: "/images/hat1.png" }
]

const menProducts = [
  { name: "Suit", image: "/images/suit.jpg" },
  { name: "Ceket", image: "/images/tailcoat.png" },
  { name: "Saat", image: "/images/watch.png" },
  { name: "Şapka", image: "/images/hat2.png" }
]

const isOpen = ref(false)
let openTimer, closeTimer

function startOpen() {
  clearTimeout(closeTimer)
  openTimer = setTimeout(() => isOpen.value = true, 300)
}
function startClose() {
  clearTimeout(openTimer)
  closeTimer = setTimeout(() => isOpen.value = false, 300)
}
function cancelClose() { clearTimeout(closeTimer) }
function openNow() { isOpen.value = true }
function select(name) { alert(`${name} seçildi!`) }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap');

nav{position:relative;z-index:50}
.drop-shadow-gothic {
  text-shadow:
    0 0 5px #f97316,
    0 0 10px #f97316,
    0 0 20px #f97316,
    0 0 30px #f97316;
}

.neon-title {
  font-family: 'Cinzel Decorative', serif;
  color: #f97316;
  text-shadow:
   0 0 5px #f97316,
    0 0 10px #f97316,
    0 0 20px #f97316,
    0 0 30px #f97316;
  transition: text-shadow 0.3s ease;
}

.neon-underline{
  position:absolute;bottom:0;left:0;
  height:3px;width:100%;
  background:#f97316;
  box-shadow:0 0 5px #f97316,0 0 10px #f97316;
  border-radius:2px;
}
.nav-link{
  position:relative;font-weight:600;color:white;
  padding-bottom:2px;cursor:pointer;
}
.nav-link::after{
  content:'';position:absolute;bottom:0;left:0;
  width:0;height:2px;background:#f97316;
  transition:width .3s ease;
}
.nav-link:hover::after,
.nav-link:focus::after,
.nav-link.active-link::after{
  width:100%;
}
.product-card{
  background:rgba(0,0,0,0.8);padding:1rem;
  border-radius:.5rem;box-shadow:0 0 6px #000;
  cursor:pointer;display:flex;flex-direction:column;
  justify-content:space-between;transition:box-shadow .3s ease;
  position:relative;
}
.product-card:hover{ box-shadow:0 0 10px #f97316,0 0 20px #f97316 }
.image-wrapper{
  flex-grow:1;display:flex;align-items:center;
  justify-content:center;overflow:hidden;
}
.image-wrapper img{
  max-height:260px;width:auto;transition:transform .3s ease;
}
.product-card:hover .image-wrapper img{
  transform:scale(1.1);
}
.product-name{text-align:center;font-size:1.25rem;margin-top:.75rem}
.dropdown-item{padding:6px 12px;cursor:pointer}
.dropdown-item:hover, .dropdown-item:focus{
  background:#f97316;color:black;
}
</style> 