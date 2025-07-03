<template>
  <div
    class="min-h-screen bg-cover bg-center text-white font-serif p-8"
    :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('/images/bc4.jpg')` }"
  >
    <nav class="relative z-50 flex justify-between items-center bg-black bg-opacity-70 px-30 py-4 rounded-lg shadow-lg">
      <div class="flex items-center space-x-4 mb-12">
        <img src="/images/symbol.png" alt="Sol Sembol" class="h-30 w-30 object-contain" />
        <div class="text-3xl font-bold tracking-wide drop-shadow-gothic"
  style="font-family: 'Cinzel Decorative', serif;"
>
  Velvet Viktorya
        </div>
        <img src="/images/symbol.png" alt="Sağ Sembol" class="h-30 w-30 object-contain" />
      </div>
      <div class="flex space-x-6 items-center">
        <NuxtLink to="/" class="nav-link">Ana Sayfa</NuxtLink>

        <!-- Ürünler dropdown -->
        <div @mouseenter="startOpen" @mouseleave="startClose" class="relative">
          <button class="nav-link flex items-center" :aria-expanded="isOpen.toString()" @focus="openNow" @blur="startClose">
            Ürünler
            <svg class="ml-1 w-4 h-4 text-orange-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-if="isOpen" @mouseenter="cancelClose" @mouseleave="startClose" class="absolute bg-black bg-opacity-90 mt-2 rounded shadow-lg w-48 z-50">
            <div class="p-2 border-b border-orange-600">
              <div class="font-semibold text-orange-400 mb-1 px-2">Kadın</div>
              <ul>
                <li v-for="item in womenProducts" :key="item.name" tabindex="0" @click="select(item.name)" @keydown.enter="select(item.name)" class="dropdown-item">{{ item.name }}</li>
              </ul>
            </div>
            <div class="p-2">
              <div class="font-semibold text-orange-400 mb-1 px-2">Erkek</div>
              <ul>
                <li v-for="item in menProducts" :key="item.name" tabindex="0" @click="select(item.name)" @keydown.enter="select(item.name)" class="dropdown-item">{{ item.name }}</li>
              </ul>
            </div>
          </div>
        </div>

        <NuxtLink to="/about" class="nav-link active-link">Hakkımızda</NuxtLink>
      </div>
    </nav>

    <section class="max-w-4xl mx-auto bg-black bg-opacity-70 rounded-lg p-10 shadow-lg">
      <h1
        class="text-5xl font-bold mb-6 drop-shadow-gothic text-center"
        style="font-family: 'Cinzel Decorative', serif;"
      >
        Hakkımızda
      </h1>

      <p class="mb-6 text-lg leading-relaxed drop-shadow">
      Viktoryen Mağaza, 19. yüzyılın zarafetini ve gotik mimarinin derinliğini modern çizgilerle harmanlayan bir moda markasıdır. Her parçamız, Viktoryen dönemin estetiğinden ilham alınarak özenle seçilmiş kumaşlarla tasarlandı.
      </p>

      <p class="mb-6 text-lg leading-relaxed drop-shadow">
        Dantel, kadife ve metal detaylar koleksiyonlarımızın temelidir. Karanlık ama şık, dramatik ama asil… Markamız, kendini farklı ifade edenleri yansıtmak için kuruldu.
      </p>

      <h2 class="text-3xl font-semibold mb-8 neon-underline relative inline-block">
        Misyonumuz
      </h2>
      <p class="mb-10 drop-shadow leading-relaxed">
        Müşterilerimize kaliteli ve özgün viktoryen temalı ürünler sunarak, stil ve tarih tutkusunu birleştiren özel bir alışveriş deneyimi yaratmak. Her parça, özenle seçilmiş ve estetikle harmanlanmıştır.
      </p>

      <h2 class="text-3xl font-semibold mb-8 neon-underline relative inline-block">
        Vizyonumuz
      </h2>
      <p class="mb-10 drop-shadow leading-relaxed">
        Dünya çapında gotik ve viktoryen moda tutkunlarının ilk tercihi olmak, bu benzersiz kültürü yaymak ve modaya farklı bir perspektif getirmek.
      </p>

      <h2 class="text-3xl font-semibold mb-8 neon-underline relative inline-block">
        Değerlerimiz
      </h2>
      <ul class="list-disc list-inside space-y-3 drop-shadow leading-relaxed mb-12">
        <li>Özgünlük ve estetik</li>
        <li>Kalite ve dayanıklılık</li>
        <li>Müşteri memnuniyeti</li>
        <li>Sürdürülebilirlik ve etik üretim</li>
        <li>Tarih ve kültüre saygı</li>
      </ul>

      <div class="mt-10 text-center">
        <p
          class="text-orange-400 font-semibold italic"
          style="
            font-size: 1.75rem;
            text-shadow:
              0 0 8px rgba(249, 115, 22, 0.8),
              0 0 15px rgba(249, 115, 22, 0.6);
          "
        >
          "Karanlığın zarafetiyle stilinizi yansıtın."
        </p>
      </div>
    </section>
    <audio autoplay loop class="hidden">
  <source src="/audio/m3.mp3" type="audio/mpeg" />
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

import { ref } from 'vue';

const womenProducts = [
  { name: "Elbise", image: "/images/dress.png" },
  { name: "Bolero", image: "/images/bolero.png" },
  { name: "Kolye", image: "/images/necklace.webp" },
  { name: "Şapka", image: "/images/hat1.png" }
];

const menProducts = [
  { name: "Suit", image: "/images/suit.jpg" },
  { name: "Ceket", image: "/images/tailcoat.png" },
  { name: "Saat", image: "/images/watch.png" },
  { name: "Şapka", image: "/images/hat2.png" }
];

const isOpen = ref(false);
let openTimer = null;
let closeTimer = null;

function startOpen() {
  clearTimeout(closeTimer);
  openTimer = setTimeout(() => {
    isOpen.value = true;
  }, 300);
}

function startClose() {
  clearTimeout(openTimer);
  closeTimer = setTimeout(() => {
    isOpen.value = false;
  }, 300);
}

function cancelClose() {
  clearTimeout(closeTimer);
}

function openNow() {
  clearTimeout(closeTimer);
  isOpen.value = true;
}

function select(name) {
  alert(`${name} seçildi!`);
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap');

.drop-shadow-gothic {
  text-shadow:
    0 0 5px #f97316,
    0 0 10px #f97316,
    0 0 20px #f97316,
    0 0 30px #f97316;
}

.neon-underline {
  position: relative;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: #f97316;
  box-shadow:
    0 0 5px #f97316,
    0 0 10px #f97316,
    0 0 20px #f97316;
  border-radius: 2px;
}

.nav-link {
  position: relative;
  font-weight: 600;
  color: white;
  padding-bottom: 2px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background: #f97316;
  box-shadow:
    0 0 5px #f97316,
    0 0 10px #f97316;
  border-radius: 2px;
  transition: width 0.3s ease;
}
.nav-link:hover::after,
.nav-link:focus::after,
.nav-link.active-link::after {
  width: 100%;
}

.drop-shadow {
  text-shadow:
    0 0 2px #f97316;
}

.dropdown-item {
  padding: 6px 12px;
  cursor: pointer;
  user-select: none;
}
.dropdown-item:hover,
.dropdown-item:focus {
  background: #f97316;
  color: black;
  outline: none;
}
</style>
