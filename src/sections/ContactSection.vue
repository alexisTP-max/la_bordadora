<script setup>
import { ref } from 'vue'; // Importa ref para crear variables reactivas

// Variables reactivas para el número de contacto y el mensaje de error
const contactNumber = ref('');
const contactNumberError = ref('');

// Función para validar el formato del número de contacto
const validateContactNumber = () => {
    // Limpia cualquier caracter no numérico del número de contacto
    const cleanedNumber = contactNumber.value.replace(/\D/g, '');

    if (!cleanedNumber) {
        contactNumberError.value = 'El número de contacto no puede estar vacío.';
    } else if (cleanedNumber.length < 7 || cleanedNumber.length > 15) { // Ejemplo de validación de longitud
        contactNumberError.value = 'Por favor, introduce un número de contacto válido (7-15 dígitos).';
    } else {
        contactNumberError.value = ''; // Limpia el error si el formato es válido
    }
};

// Función para manejar el envío del formulario
const submitForm = () => {
    validateContactNumber(); // Valida el número de contacto antes de enviar
    if (!contactNumberError.value) {
        // Si no hay errores, puedes procesar el formulario (ej. enviar a una API)
        console.log('Número de contacto enviado:', contactNumber.value);
        alert('¡Gracias por contactarnos!');
        contactNumber.value = ''; // Limpia el campo después del envío exitoso
    }
};
</script>

<template>
    <!-- Sección de Contacto -->
    <div id="download-section" class="container mx-auto px-5 md:w-4/5">
        <section class="py-16 pt-18">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-theme-heading font-medium text-center">Contáctanos</h2>
                <p class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg">
                    Atendemos pedidos foráneos en toda la República Mexicana Ventas:
                    (0155) 5522-5215
                    Contamos con venta de mostrador, visítenos en nuestra tienda ubicada en: República del Salvador 132, Primer Piso, Col. Centro, México, 06060, D.F.
                </p>
            </div>
            <!-- Formulario de Contacto -->
            <div class="mt-12 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                <form @submit.prevent="submitForm" class="space-y-6">
                    <div>
                        <label for="contact-number" class="block text-sm font-medium text-gray-700 sr-only">Número de Contacto</label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="tel"
                                name="contact-number"
                                id="contact-number"
                                v-model="contactNumber"
                                @input="validateContactNumber"
                                :class="{'border-theme-secondary': contactNumberError, 'border-gray-300': !contactNumberError}"
                                class="block w-full pr-10 focus:outline-none focus:ring-theme-primary focus:border-theme-primary sm:text-sm rounded-md p-3 border"
                                placeholder="Introduce tu número de contacto"
                                aria-describedby="contact-number-error"
                            />
                            <div v-if="contactNumberError" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <p v-if="contactNumberError" class="mt-2 text-sm text-theme-secondary" id="contact-number-error">{{ contactNumberError }}</p>
                    </div>
                    <div>
                        <Button type="submit" btn-type="secondary">
                            Enviar Mensaje
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>
