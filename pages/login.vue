<template>
  <div
    class="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
    :style="{ backgroundImage: `url('/images/background.jpg')` }"

  >
    <div class="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-md">
      <div class="text-center mb-6">
        <img src="/images/symbol.png" alt="logo" class="h-50 mx-auto mb-2 opacity-80" />
        <h1 class="drop-shadow-gothic text-4xl font-bold text-center" style="font-family: 'Cinzel Decorative', serif;">
  Velvet Viktorya'ya Hoş Geldiniz
</h1>
      </div>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="email" class="block text-sm text-gray-300 mb-1">E-posta</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-yellow-500 neon-input"
            required
          />
        </div>
        <div class="mb-4 relative">
          <label for="password" class="block text-sm text-gray-300 mb-1">Şifre</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="password"
            class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-yellow-500 neon-input"
            required
          />
          <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute right-3 top-9 text-sm text-yellow-400 hover:text-yellow-200"
          >
            {{ showPassword ? 'Gizle' : 'Göster' }}
          </button>
        </div>
        <button
          type="submit"
          class="w-full bg-yellow-700 hover:bg-yellow-600 text-white font-semibold py-2 rounded neon-button transition"
        >
          Giriş Yap
        </button>
        <div class="mt-6 flex justify-center">
          <img src="/images/logo1.jpg" alt="alt görsel" class="w-48 opacity-70" />
        </div>
      </form>
    </div>
    <audio autoplay loop class="hidden">
  <source src="/audio/theme.mp3" type="audio/mpeg" />
</audio>
  </div>
</template>

<script setup>

import { onMounted } from 'vue'
onMounted(() => {
  const audio = document.querySelector('audio')
  if (audio) {
    // Oynatmayı zorla dene
    const playAttempt = () => {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('🎵 Müzik başarıyla çalıyor.')
          })
          .catch(error => {
            console.warn('🔇 Otomatik oynatma engellendi. İlk tıklamada çalacak.')
            document.addEventListener('click', () => {
              audio.play()
            }, { once: true })
          })
      }
    }
    // Hemen dene
    playAttempt()
  }
})

import { ref } from 'vue';
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const handleLogin = () => {
  console.log('E-posta:', email.value);
  console.log('Şifre:', password.value);
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Cinzel+Decorative&display=swap');

body {
  font-family: 'Cinzel Decorative', 'Playfair Display', serif;
}

/* Neon effect for the heading */

.drop-shadow-gothic {
  text-shadow:
    0 0 5px #f97316,
    0 0 10px #f97316,
    0 0 20px #f97316,
    0 0 30px #f97316;
}

.neon-text {
  color: #f97316;
  text-shadow:
    0 0 8px #f97316,
    0 0 16px #f97316,
    0 0 24px #f97316,
    0 0 32px #f97316,
    0 0 40px #f97316;
  font-family: 'Cinzel Decorative', serif;
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
}

/* Neon effect for buttons */
.neon-button {
  box-shadow:
    0 0 5px #fbbf24,
    0 0 10px #fbbf24,
    0 0 20px #fbbf24,
    0 0 40px #f59e0b;
  transition: box-shadow 0.3s ease;
}

.neon-button:hover {
  box-shadow:
    0 0 10px #fbbf24,
    0 0 20px #fbbf24,
    0 0 30px #f59e0b,
    0 0 60px #f59e0b;
}

/* Neon effect on input focus */
.neon-input:focus {
  border-color: #fbbf24;
  box-shadow:
    0 0 5px #fbbf24,
    0 0 10px #fbbf24;
  outline: none;
}
</style>