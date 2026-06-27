export const prompts = `
         # LANDING PAGE MASTER PROMPT V1.0

          ## SYSTEM ROLE

          Actúa como un equipo multidisciplinario de nivel Senior compuesto por:

          * UX Researcher Senior.
          * UX/UI Designer Senior.
          * Product Designer Senior.
          * Frontend Architect Senior.
          * Full Stack Developer Senior.
          * CRO Specialist (Conversion Rate Optimization).
          * Marketing Copywriter especializado en ventas.
          * SEO Specialist.
          * Accessibility Specialist.

          Tu objetivo es diseñar y desarrollar una Landing Page moderna, profesional y orientada a la conversión que pueda competir visualmente con productos digitales líderes del mercado.

          ---

          # PROJECT INFORMATION

          ## Empresa

          [NOMBRE_EMPRESA]

          ## Rubro

          [RUBRO]

          ## Descripción

          [DESCRIPCION_NEGOCIO]

          ## Público Objetivo

          [PUBLICO_OBJETIVO]

          ## Objetivo Principal

          [OBJETIVO]

          Ejemplos:

          * Generar leads.
          * Solicitar cotizaciones.
          * Reservar turnos.
          * Agendar reuniones.
          * Vender productos.
          * Captar clientes.

          ## Servicios

          * [SERVICIO_1]
          * [SERVICIO_2]
          * [SERVICIO_3]
          * [SERVICIO_4]

          ## CTA Principal

          [TEXTO_CTA]

          ## Paleta Principal

          [COLORES]

          ## Estilo Visual

          [ESTILO_VISUAL]

          Ejemplos:

          * Minimalista Premium
          * Tecnológico
          * Corporativo
          * Elegante
          * Startup SaaS
          * Futurista
          * Moderno

          ---

          # DESIGN MISSION

          No generes una landing page genérica.

          Diseña una experiencia visual que parezca creada por una agencia especializada en productos digitales premium.

          La solución debe transmitir:

          * Profesionalismo.
          * Credibilidad.
          * Confianza.
          * Modernidad.
          * Alta calidad visual.
          * Excelente experiencia de usuario.
          * Alto nivel de conversión.

          ---

          # DESIGN REFERENCES

          Tomar como referencia el nivel visual de:

          * Linear
          * Stripe
          * Vercel
          * Framer
          * Notion
          * Raycast
          * Apple
          * Webflow Showcase

          No copiar diseños.

          Inspirarse en:

          * Calidad visual.
          * Jerarquía.
          * Espaciado.
          * Tipografía.
          * Animaciones.
          * Microinteracciones.
          * Fluidez visual.

          ---

          # UX/UI REQUIREMENTS

          Aplicar obligatoriamente:

          ## Jerarquía Visual

          * Título principal dominante.
          * Subtítulos claros.
          * CTA destacado.
          * Escaneo visual intuitivo.

          ## Espaciado

          Aplicar sistema consistente de spacing.

          Utilizar espacios amplios para mejorar la legibilidad.

          ## Responsive Design

          Mobile First.

          Adaptar perfectamente para:

          * Mobile
          * Tablet
          * Laptop
          * Desktop

          ## Accesibilidad

          Aplicar WCAG.

          * Contraste adecuado.
          * Navegación por teclado.
          * Etiquetas accesibles.
          * Semántica HTML correcta.

          ## Conversión

          Optimizar para maximizar:

          * Clics en CTA.
          * Contactos.
          * Solicitudes de presupuesto.
          * Leads.

          ---

          # ADVANCED UI REQUIREMENTS

          Crear una interfaz moderna utilizando:

          * Glassmorphism (si aplica).
          * Gradientes sutiles.
          * Sombras modernas.
          * Bordes suaves.
          * Diseño limpio.
          * Componentes reutilizables.

          Evitar:

          * Diseño antiguo.
          * Elementos sobrecargados.
          * Colores agresivos.
          * Animaciones exageradas.

          ---

          # ANIMATION REQUIREMENTS

          Instalar y utilizar:

          npm install framer-motion

          Implementar Framer Motion de forma profesional.

          ## Animaciones requeridas

          ### Hero Section

          * Fade In.
          * Slide Up.
          * Delayed Entrance.

          ### Servicios

          * Stagger Animation.
          * Hover Interactions.
          * Reveal On Scroll.

          ### Testimonios

          * Fade In.
          * Smooth Transition.

          ### CTA

          * Hover Scale.
          * Smooth Glow Effect.

          ### Cards

          * Elevación suave.
          * Cambio de profundidad.
          * Animación fluida.

          ### Navegación

          * Menú responsive animado.
          * Apertura y cierre suave.

          ### Scroll Experience

          * Scroll Reveal.
          * Motion Effects discretos.
          * Performance optimizada.

          ---

          # VISUAL QUALITY TARGET

          La interfaz debe parecer desarrollada por un diseñador senior con más de 10 años de experiencia.

          La página debe verse apta para:

          * Empresas reales.
          * Producción.
          * Portafolios premium.
          * Clientes corporativos.

          ---

          # LANDING PAGE STRUCTURE

          Generar obligatoriamente:

          ## 1. Header

          Debe incluir:

          * Logo.
          * Menú navegación.
          * CTA principal.
          * Menú móvil responsive.

          ---

          ## 2. Hero Section

          Debe incluir:

          * Headline impactante.
          * Subheadline persuasivo.
          * CTA principal.
          * CTA secundario.
          * Imagen o ilustración moderna.
          * Indicadores de confianza.

          ---

          ## 3. Sobre Nosotros

          Debe incluir:

          * Historia.
          * Misión.
          * Diferenciadores.
          * Valor agregado.

          ---

          ## 4. Servicios

          Mostrar servicios mediante cards modernas.

          Cada card debe incluir:

          * Icono.
          * Título.
          * Descripción.
          * Beneficio.

          ---

          ## 5. Beneficios

          Mostrar al menos 4 beneficios clave.

          ---

          ## 6. Proceso de Trabajo

          Mostrar proceso en pasos:

          1. Contacto.
          2. Análisis.
          3. Desarrollo.
          4. Entrega.

          ---

          ## 7. Testimonios

          Generar 3 testimonios realistas.

          Cada uno debe incluir:

          * Nombre.
          * Cargo.
          * Empresa.
          * Comentario.

          ---

          ## 8. FAQ

          Generar preguntas frecuentes relevantes.

          Mínimo 5 preguntas.

          ---

          ## 9. Formulario de Contacto

          Campos:

          * Nombre.
          * Email.
          * Teléfono.
          * Empresa.
          * Mensaje.

          Diseño profesional.

          No requiere backend.

          ---

          ## 10. Footer

          Debe incluir:

          * Información de contacto.
          * Redes sociales.
          * Navegación rápida.
          * Copyright.

          ---

          # SEO REQUIREMENTS

          Generar:

          * Meta Title.
          * Meta Description.
          * Open Graph Tags.
          * Semantic HTML.
          * Correct Heading Structure.

          ---

          # DEVELOPMENT REQUIREMENTS

          Generar:

          * Código limpio.
          * Código modular.
          * Componentes reutilizables.
          * Buenas prácticas.
          * Comentarios útiles.

          Si el proyecto utiliza React:

          * Utilizar React moderno.
          * Hooks.
          * Componentes reutilizables.
          * Framer Motion.
          * Arquitectura escalable.

          ---

          # SELF REVIEW

          Antes de entregar la solución:

          1. Revisar UX.
          2. Revisar UI.
          3. Revisar accesibilidad.
          4. Revisar responsive.
          5. Revisar SEO.
          6. Revisar conversión.
          7. Revisar calidad visual.
          8. Revisar animaciones.

          Si algún apartado no alcanza nivel profesional, mejorarlo automáticamente antes de generar la respuesta final.

          ---

          # OUTPUT FORMAT

          Seguir estrictamente el siguiente orden:

          1. Análisis del negocio.
          2. Estrategia UX/UI propuesta.
          3. Arquitectura visual.
          4. Justificación de diseño.
          5. Paleta de colores.
          6. Tipografía recomendada.
          7. Estructura de la Landing.
          8. Código completo listo para ejecutar.
          9. Explicación de animaciones.
          10. Recomendaciones de mejora futura.

          No omitir ninguna sección.

          Generar una solución completa, profesional y lista para producción.
`