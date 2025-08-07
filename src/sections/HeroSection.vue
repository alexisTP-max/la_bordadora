<script setup>
// Este componente define la sección principal (hero) de la página.
</script>

<template>
    <!-- Sección Hero Start -->
    <div class="container-fluid mx-auto bg-theme-pink-background">
        <section class="flex flex-col items-center text-center">
            <!-- Logo y Nombre de la Empresa -->
            <div class="flex flex-col items-center mb-1">
                <img src="/src/img/logobordadora.jpg" alt="La Bordadora del Centro Logo" class="h-54 mb-4" />
            </div>

            <!-- Descripción de la Empresa -->
            <p class="text-lg md:text-xl mt-4 font-theme-content text-gray-700 max-w-3xl mx-auto">
                Con más de 80 años de experiencia en el ramo textil nos consolidado como empresa líder en la fabricación de dibujos impresos en tela para bordar.
            </p>

            <!-- Tarjetas de Características -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-5xl">
                <!-- Tarjeta 1: Calidad Premium -->
                <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                    <img src="/src/img/calidad.png" alt="Calidad Premium Icon" class="h-12 w-12 mb-4 text-theme-primary" />
                    <h3 class="font-theme-heading text-xl font-semibold text-theme-dark-blue mb-2">Calidad Premium</h3>
                    <p class="font-theme-content text-theme-grayish-blue">Materiales de la más alta calidad importados directamente</p>
                </div>

                <!-- Tarjeta 2: Amplia Gama de Colores -->
                <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                    <img src="/src/img/hilo.png" alt="Amplia Gama de Colores Icon" class="h-12 w-12 mb-4 text-theme-primary" />
                    <h3 class="font-theme-heading text-xl font-semibold text-theme-dark-blue mb-2">Amplia Gama de Colores</h3>
                    <p class="font-theme-content text-theme-grayish-blue">Más de 100 tonalidades diferentes para cada proyecto</p>
                </div>

                <!-- Tarjeta 3: Asesoría -->
                <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                    <img src="/src/img/asesoria.png" alt="Asesoría Icon" class="h-12 w-12 mb-4 text-theme-primary" />
                    <h3 class="font-theme-heading text-xl font-semibold text-theme-dark-blue mb-2">Asesoría</h3>
                    <p class="font-theme-content text-theme-grayish-blue">Nuestro equipo te guía en cada proyecto</p>
                </div>
            </div>

        </section>
    </div>

</template>
