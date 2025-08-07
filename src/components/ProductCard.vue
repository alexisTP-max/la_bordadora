<script setup>
// Este componente muestra una tarjeta individual de producto.
const props = defineProps({
  name: String, // El nombre del producto
  price: String, // El precio del producto
  imageUrl: String, // La URL de la imagen del producto (nueva prop)
});
</script>

<template>
  <!-- Estructura y estilos de la tarjeta de producto -->
  <div class="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
      <!-- Imagen del producto (condicionalmente renderizada si imageUrl existe) -->
      <img v-if="imageUrl" :src="imageUrl" :alt="name" class="w-32 h-32 object-contain mb-4" />

      <!-- Nombre del producto -->
      <h4 class="font-theme-heading text-lg font-medium">{{ name }}</h4>
      <!-- Precio del producto -->
      <p class="font-theme-content text-theme-grayish-blue">{{ price }}</p>
  </div>
</template>
