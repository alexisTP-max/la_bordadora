<!--seccion productos-->
<script setup>

import features from '../data/features.js';
import { ref } from 'vue';
import ProductCard from '../components/ProductCard.vue'; 

let isOpen = ref(1); 

</script>

<template>
<div id="features" class="container-fluid mx-auto px-5 bg-theme-white py-16">
    <section class="py-16">
        <div class="w-4/5 md:w-3/5 mx-auto">
            <!-- Título de la sección de productos, el color del texto se cambió a negro para mejor contraste -->
            <h2 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center text-black">{{ features.find(f => f.id === isOpen).details.heading }}</h2>
            <!-- Descripción de la sección de productos -->
            <p class="text-black text-center mt-7 font-theme-content text-lg">{{ features.find(f => f.id === isOpen).details.description }}</p>
        </div>

        <!-- Navegación de pestañas para las categorías de productos -->
        <div class="mt-10">
            <ul class="flex flex-col items-center md:flex-row justify-center font-theme-heading">
                <li v-for="feature in features" :key="feature.id"
                    :class="isOpen === feature.id ? 'md:border-b-4 md:border-black' : ''"
                    class="w-full md:w-56 cursor-pointer hover:text-black transition duration-200 border-b-2 border-t-2 md:border-t-0 flex justify-center">
                    <a @click.prevent="isOpen = feature.id" href="#"
                       :class="isOpen === feature.id ? 'text-black border-black' : 'text-black-200'"
                       class="py-5 md:border-b-0 border-b-4">{{ feature.name }}</a>
                </li>
            </ul>
        </div>

        <!-- Contenido de las pestañas: muestra las tarjetas de productos -->
        <div class="mt-16">
            <template v-for="feature in features" :key="feature.id">
                <div v-show="isOpen === feature.id"
                     class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                    <!-- Itera sobre los elementos de cada categoría y renderiza un ProductCard -->
                    <ProductCard v-for="(item, index) in feature.details.items" :key="index" :name="item.name" :price="item.price" :imageUrl="item.imageUrl" />
                </div>
            </template>
        </div>
    </section>
</div>
</template>
