// Importa las funciones necesarias de Vue
import { createApp } from "vue";
// Importa el archivo de estilos principal de Tailwind CSS
import "./assets/style.css";
// Importa el componente principal de la aplicación
import App from "./App.vue";
// Importa la librería para el desplazamiento suave (smooth scroll)
import VueSmoothScroll from "vue3-smooth-scroll";

// Importa los componentes personalizados
import Button from "./components/Button.vue";
import LinkButton from "./components/LinkButton.vue";
import ProductCard from "./components/ProductCard.vue"; // Importa el nuevo componente ProductCard

// Crea la instancia de la aplicación Vue
let app = createApp(App);

// Usa el plugin VueSmoothScroll para habilitar el desplazamiento suave
app.use(VueSmoothScroll);

// Registra los componentes personalizados globalmente para que puedan ser usados en cualquier parte de la aplicación
app.component("Button", Button);
app.component("LinkButton", LinkButton);
app.component("ProductCard", ProductCard); // Registra el componente ProductCard

// Monta la aplicación en el elemento con el id "app" en index.html
app.mount("#app");
