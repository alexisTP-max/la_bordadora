// Este archivo define los datos para las diferentes secciones de productos (características).
const features = [
  {
      id: 1,
      name: "COSTURAS", // Nombre de la pestaña/categoría
      details: {
          heading: "COSTURAS", // Título principal de la sección
          description: "Amplia gama de colores firmes, lisos y matizados fabricados en algodón 100 % mercerizado de 6 hebras.", // Descripción de la sección
          items: [
              // Lista de productos individuales con sus detalles
              { name: "Almohadones", price: "$0", imageUrl: "/src/img/costura1.jpg" }, // Usando la imagen de hilo
              { name: "Servilletas", price: "$0", imageUrl: "/src/img/costura2.jpg" },
              { name: "Manteles", price: "$0", imageUrl: "/src/img/costura3.jpg" },
              { name: "Sublimada", price: "$0", imageUrl: "/src/img/costura4.jpg" },
              { name: "Manta Cruda", price: "$0", imageUrl: "/src/img/costura5.jpg" },
              { name: "Diamante", price: "$0", imageUrl: "/src/img/costura6.jpg" },
              { name: "Alemanisco", price: "$0", imageUrl: "/src/img/costura7.jpg" },
          ],
      },
  },
  {
      id: 2,
      name: "HILO VELA",
      details: {
          heading: "HILO VELA",
          description: "Amplia gama de colores firmes, lisos y matizados fabricados en algodón 100 % mercerizado de 6 hebras.",
          items: [
              { name: "HILO VELA", price: "$0", imageUrl: "https://tejemania.com/cdn/shop/products/900.jpg?v=1690828811" }, // Usando la imagen de hilo
              { name: "HILO VELA", price: "$0", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-e8IlK41fkMdwFfIlQFsPOHKm1_dFaHJyKRukIpSjVhdXsoCi2AZPeIlkK0ApvAet70Q&usqp=CAU" },
              { name: "HILO VELA", price: "$0", imageUrl: "https://tejemania.com/cdn/shop/products/915_1200x.jpg?v=1690828811" },
              { name: "HILO VELA", price: "$0", imageUrl: "https://almacenesfarah.mx/cdn/shop/files/omega-omega-distribuidores-de-hilo-s-a-de-c-v-hilo-vela-para-bordar-omega-art-121-col-719-42818830172385.jpg?v=1726405158" },
              { name: "HILO VELA", price: "$0", imageUrl: "https://almacenesfarah.mx/cdn/shop/files/omega-omega-distribuidores-de-hilo-s-a-de-c-v-hilo-vela-para-bordar-omega-art-121-col-337-42818826666209.jpg?v=1726398490" },
              { name: "HILO VELA", price: "$0", imageUrl: "https://almacenesfarah.mx/cdn/shop/files/omega-omega-distribuidores-de-hilo-s-a-de-c-v-hilo-vela-para-bordar-omega-art-121-col-314-42818828992737.jpg?v=1726398678" },
              { name: "HILO VELA", price: "$0", imageUrl: "https://almacenesfarah.mx/cdn/shop/files/omega-omega-distribuidores-de-hilo-s-a-de-c-v-hilo-vela-para-bordar-omega-art-121-col-117-42818748219617.jpg?v=1726415413" },
          ],
      },
  },
  {
      id: 3,
      name: "PUNTO DE CRUZ",
      details: {
          heading: "PUNTO DE CRUZ",
          description: "Variedad de aros y telares para tus proyectos de bordado y tejido.",
          items: [
              { name: "ARO BORDADO", price: "$0", imageUrl: "https://m.media-amazon.com/images/I/81-XW9hmzKL._UF894,1000_QL80_.jpg" }, // Usando la imagen de asesoría como ejemplo
              { name: "TELAR CIRCULAR", price: "$0", imageUrl: "https://m.media-amazon.com/images/I/71a1VjXDioL.jpg" }, // Usando la imagen de calidad como ejemplo
              { name: "TELAR RECTANGULAR", price: "$0", imageUrl: "https://i.etsystatic.com/36847346/r/il/ba197b/4729371065/il_fullxfull.4729371065_enrd.jpg" },
          ],
      },
  },
    {
      id: 4,
      name: "ESTAMBRE",
      details: {
          heading: "ESTAMBRE",
          description: "Variedad de aros y telares para tus proyectos de bordado y tejido.",
          items: [
              { name: "Cristal Liso", price: "$0", imageUrl: "https://www.labordadora.com/_gal-estambre/images/1_thumb.jpg" }, // Usando la imagen de asesoría como ejemplo
              { name: "Cristal MAtizado", price: "$0", imageUrl: "https://www.labordadora.com/_gal-estambre/images/2_thumb.jpg" }, // Usando la imagen de calidad como ejemplo
              { name: "Metalisco", price: "$0", imageUrl: "https://www.labordadora.com/_gal-estambre/images/3_thumb.jpg" },
              { name: "Esambon", price: "$0", imageUrl: "https://www.labordadora.com/_gal-estambre/images/4_thumb.jpg" },
              { name: "Mini Bola", price: "$0", imageUrl: "https://www.labordadora.com/_gal-estambre/images/5_thumb.jpg" },
          ],
      },
  },
      {
      id: 5,
      name: "AGUJA MAGICA",
      details: {
          heading: "AGUJA MAGICA",
          description: "Variedad de aros y telares para tus proyectos de bordado y tejido.",
          items: [
              { name: "Galvanizada", price: "$0", imageUrl: "https://www.labordadora.com/_gal-aguja/images/3.jpg" }, // Usando la imagen de asesoría como ejemplo
              { name: "De Laton", price: "$0", imageUrl: "https://www.labordadora.com/_gal-aguja/images/4.jpg" }, // Usando la imagen de calidad como ejemplo
              { name: "Con Carrete", price: "$0", imageUrl: "https://www.labordadora.com/_gal-aguja/images/5.jpg" },
              { name: "Ganchos", price: "$0", imageUrl: "https://www.labordadora.com/_gal-aguja/images/2.jpg" },
          ],
      },
  },
];

export default features;
