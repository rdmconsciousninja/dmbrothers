import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "es";

type Dict = Record<string, string>;

export const translations: Record<Lang, Dict> = {
  en: {
    "nav.cta": "DM us",
    "hero.title1": "Two Brothers. One Obsession ",
    "hero.title2": "With Systems That Behave Perfectly.",
    "hero.sub":
      "We take chaotic operations, manual labor, and outdated visual media, transforming them into seamless, automated systems built to scale.",
    "hero.cta": "DM us",
    "hero.ctaSub": "Direct Message Us",
    "hero.showreel": "Showreel",
    "story.label": "WHO WE ARE • BUILT BY BROTHERS",
    "story.title1": "Engineered for ",
    "story.title2": "Peace of Mind",
    "story.title3": "Built for Growth.",
    "story.body":
      "We build systems so you can focus on running your business—instead of your business running you. From automated client onboarding and instant lead responses to custom visual media that actually converts, we eliminate manual chaos and replace it with reliable, high-performance architecture built around your real-world needs.",
    "builds.label": "WHAT WE DEPLOY",
    "builds.title1": "High-Converting Systems",
    "builds.title2": "Engineered for Results.",
    "builds.marina": "Marina & Boatyard OS + Web Portal",
    "builds.marinaAlt": "Marina & Boatyard OS web portal dashboard",
    "card1.title": "Unlocking Hours",
    "card1.body":
      "Reclaiming up to 10+ hours a week by automating repetitive tasks, eliminating manual data handling, and synchronizing disjointed operations.",
    "card1.tag": "API · Agents · Workflows",
    "card2.title": "Yachting Infrastructure",
    "card2.body":
      "Specialized networking, automation, and reliable on-board technology that works flawlessly in all marine industries.",
    "card2.tag": "Infrastructure",
    "card3.title": "Visual & Food Enhancement - Media & Aesthetic",
    "card3.body":
      "High-end visual refinement, color grading, and dynamic content that transforms standard photos into luxury, high-converting assets.",
    "card3.tag": "Before → After",
    "card4.title": "New Clients on Autopilot",
    "card4.body":
      "Building optimized local presence and instant follow-up systems that turn search traffic into active leads while you sleep.",
    "card4.tag": "Build · Rank · Convert",
    "card5.title": "Digital Media & Smart Marketing Hub",
    "card5.body":
      "YouTube, commercials, marketing shorts, and smart performance-driven website designs for maximum audience retention and lead generation.",
    "card5.tag": "Digital Media & Marketing",
    "card6.title": "Backend API Workflows",
    "card6.body":
      "Custom agents and webhooks wired directly into the tools your team already lives in, syncing data in real time.",
    "card6.tag": "Automation",
    "proof.label": "Straight from the inbox",
    "proof.title": "Unedited messages from people we've built for.",
    "proof.t1":
      "Honestly the fastest turnaround I've ever had. Site was live in days and bookings doubled 🚀",
    "proof.t2":
      "The enhanced menu photos are unreal. Same dishes, completely different restaurant. Worth every cent 👍",
    "proof.t3":
      "They automated our whole intake process. Saved us about 15 hours a week. Exceptional work quality.",
    "proof.status": "Delivered · Seen",
    "cta.title1": "Ready to Upgrade Your Digital ",
    "cta.title2": "Infrastructure",
    "cta.sub":
      "We build custom websites and automated systems engineered to scale your business.",
    "cta.button": "DM US",
    "footer.rights": "The DM Brothers. Precision by design.",
  },
  es: {
    "nav.cta": "CONTÁCTANOS",
    "hero.title1": "Dos Hermanos. Una Obsesión ",
    "hero.title2": "Con Sistemas Que Funcionan a la Perfección.",
    "hero.sub":
      "Tomamos operaciones caóticas, trabajo manual y medios visuales obsoletos, y los transformamos en sistemas automatizados y fluidos, construidos para escalar.",
    "hero.cta": "CONTÁCTANOS",
    "hero.ctaSub": "Envíanos un Mensaje Directo",
    "hero.showreel": "Demo",
    "story.label": "QUIÉNES SOMOS • CONSTRUIDO POR HERMANOS",
    "story.title1": "Diseñado para tu ",
    "story.title2": "Tranquilidad",
    "story.title3": "Construido para Crecer.",
    "story.body":
      "Construimos sistemas para que puedas enfocarte en dirigir tu negocio, en lugar de que tu negocio te dirija a ti. Desde la incorporación automatizada de clientes y respuestas instantáneas a prospectos hasta medios visuales personalizados que realmente convierten, eliminamos el caos manual y lo reemplazamos con una arquitectura confiable y de alto rendimiento diseñada para tus necesidades reales.",
    "builds.label": "LO QUE DESPLEGAMOS",
    "builds.title1": "Sistemas de Alta Conversión",
    "builds.title2": "Diseñados para Resultados.",
    "builds.marina": "Sistema Operativo para Marinas y Astilleros + Portal Web",
    "builds.marinaAlt": "Panel del portal web del sistema para marinas y astilleros",
    "card1.title": "Liberando Horas",
    "card1.body":
      "Recupera hasta más de 10 horas a la semana automatizando tareas repetitivas, eliminando el manejo manual de datos y sincronizando operaciones dispersas.",
    "card1.tag": "API · Agentes · Flujos de Trabajo",
    "card2.title": "Infraestructura Náutica",
    "card2.body":
      "Redes especializadas, automatización y tecnología de a bordo confiable que funciona a la perfección en toda la industria marina.",
    "card2.tag": "INFRAESTRUCTURA",
    "card3.title": "Mejora Visual y Gastronómica - Medios y Estética",
    "card3.body":
      "Refinamiento visual de alta gama, corrección de color y contenido dinámico que transforma fotos comunes en activos de lujo y alta conversión.",
    "card3.tag": "Antes → Después",
    "card4.title": "Nuevos Clientes en Autopiloto",
    "card4.body":
      "Construyendo presencia local optimizada y sistemas de seguimiento instantáneo que convierten el tráfico de búsqueda en clientes activos mientras duermes.",
    "card4.tag": "Construir · Posicionar · Convertir",
    "card5.title": "Centro de Medios Digitales y Marketing Inteligente",
    "card5.body":
      "YouTube, comerciales, shorts de marketing y diseños web optimizados para máxima retención de audiencia y generación de clientes potenciales.",
    "card5.tag": "MEDIOS DIGITALES Y MARKETING",
    "card6.title": "Flujos de Trabajo API Backend",
    "card6.body":
      "Agentes personalizados y webhooks conectados directamente a las herramientas que tu equipo ya utiliza, sincronizando datos en tiempo real.",
    "card6.tag": "AUTOMATIZACIÓN",
    "proof.label": "Directo desde la bandeja de entrada",
    "proof.title": "Mensajes sin editar de clientes para quienes hemos construido.",
    "proof.t1":
      "Honestamente, la entrega más rápida que he tenido. El sitio estuvo en línea en días y las reservas se duplicaron 🚀",
    "proof.t2":
      "Las fotos mejoradas del menú son increíbles. Los mismos platos, un restaurante completamente distinto. Vale cada centavo 👍",
    "proof.t3":
      "Automatizaron todo nuestro proceso de captación. Nos ahorraron unas 15 horas por semana. Calidad de trabajo excepcional.",
    "proof.status": "Entregado · Visto",
    "cta.title1": "¿Listo para Actualizar tu ",
    "cta.title2": "Infraestructura Digital",
    "cta.sub":
      "Construimos sitios web personalizados y sistemas automatizados diseñados para escalar tu negocio.",
    "cta.button": "CONTÁCTANOS POR DM",
    "footer.rights": "The DM Brothers. Precisión por diseño.",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => translations.en[k] ?? k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (k: string) => translations[lang][k] ?? translations.en[k] ?? k;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
