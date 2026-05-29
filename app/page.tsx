'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Header } from '@/components/Header';
import { HologramCard } from '@/components/HologramCard';
import { ArrowRight, Bot, Boxes, BrainCircuit, Clock3, Cog, Gauge, MessageCircle, ShieldCheck, Sparkles, Zap } from 'lucide-react';

/*
 * Definimos diferentes URLs de WhatsApp con mensajes predefinidos.  Cada URL incluye el número
 * de contacto junto con un mensaje específico codificado.  Estas variables se reutilizan en
 * distintos botones de la página para que el visitante envíe un mensaje adecuado según el
 * contexto.  Ajustar los textos aquí permite cambiar el copy sin tocar el markup.  Los
 * mensajes fueron previamente codificados con encodeURIComponent para evitar problemas con
 * espacios y caracteres especiales.
 */
const whatsappBudget =
  'https://wa.me/527361253507?text=Hola%20Automatizaciones%20F%26D%2C%20quiero%20solicitar%20un%20diagn%C3%B3stico%20y%20presupuesto%20gratuito%20para%20automatizar%20mi%20negocio.';
const whatsappExpert =
  'https://wa.me/527361253507?text=Hola%20Automatizaciones%20F%26D%2C%20me%20gustar%C3%ADa%20hablar%20con%20un%20especialista%20sobre%20la%20automatizaci%C3%B3n%20de%20mi%20negocio.';
const whatsappForm =
  'https://wa.me/527361253507?text=Hola%20Automatizaciones%20F%26D%2C%20he%20completado%20el%20formulario%20en%20su%20sitio%20web%20y%20me%20interesa%20automatizar%20mis%20procesos.';
const whatsappGeneral =
  'https://wa.me/527361253507?text=Hola%20Automatizaciones%20F%26D%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20automatizaci%C3%B3n%20de%20mi%20negocio.';


const slogans = [
  'Deja de perder horas en tareas repetitivas',
  'Recupera hasta 40% de tu tiempo',
  'Tu equipo trabaja menos. Tu negocio produce más.',
  'Automatiza hoy o sigue compitiendo manualmente',
];

const solutions = [
  {
    icon: MessageCircle,
    title: 'Bot de WhatsApp Inteligente',
    text: 'Responde clientes, califica prospectos, agenda citas y envía información sin depender de alguien conectado todo el día.',
  },
  {
    icon: Boxes,
    title: 'Automatización de Inventarios y Almacenes',
    text: 'Control de entradas, salidas, alertas de stock, reportes y seguimiento para tiendas, almacenes y operaciones.',
  },
  {
    icon: Cog,
    title: 'Gestión Automática de Oficinas',
    text: 'Flujos para documentos, tareas administrativas, recordatorios, bases de datos y reportes que se actualizan solos.',
  },
  {
    icon: BrainCircuit,
    title: 'Integraciones Personalizadas',
    text: 'Conectamos CRM, tiendas, formularios, hojas de cálculo, dashboards y canales de atención en un sistema centralizado.',
  },
];

const benefits = [
  ['Ahorro de tiempo', 'Menos trabajo manual. Más enfoque en vender, operar y crecer.', Clock3],
  ['Reducción de errores', 'Procesos claros, datos ordenados y menos fallas por captura humana.', ShieldCheck],
  ['Atención 24/7', 'Tu negocio responde incluso cuando tú estás descansando.', Bot],
  ['Escalabilidad', 'Sistemas listos para crecer sin contratar más personal de inmediato.', Gauge],
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, .35], [1, 1.08]);
  const heroY = useTransform(scrollYProgress, [0, .35], [0, -80]);
  const premiumGlow = useTransform(scrollYProgress, [0, .25, .55], [.2, .9, .35]);

  return (
    <main id="inicio" className="relative min-h-screen overflow-hidden text-white">
      <AnimatedBackground />
      <Header />

      <section className="relative min-h-screen px-5 pt-32 lg:px-8 lg:pt-36">
        <motion.div style={{ opacity: premiumGlow }} className="pointer-events-none absolute left-1/2 top-40 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-bunker-green/20 blur-[95px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }} className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-bunker-green/40 bg-bunker-green/10 px-4 py-2 text-sm font-black uppercase tracking-[.2em] text-bunker-green shadow-glow">
              <Sparkles className="h-4 w-4" /> El futuro de tu operación
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Automatizamos tu negocio. <span className="text-bunker-green text-glow-green">Tú recuperas tu tiempo.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              Bots inteligentes de WhatsApp, automatización de inventarios, procesos administrativos y sistemas que trabajan por ti 24/7.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              {/*
               * Botón principal para solicitar un diagnóstico y presupuesto.  Utiliza la URL
               * whatsappBudget definida al principio del archivo.  La propiedad target="_blank"
               * asegura que se abra en una nueva pestaña y rel="noreferrer" evita que la página
               * de WhatsApp vea el referer.
               */}
              <a
                href={whatsappBudget}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-bunker-green px-7 py-4 text-base font-black text-bunker-black shadow-glow transition hover:-translate-y-1 hover:bg-white"
              >
                Solicitar Presupuesto Gratis <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-base font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-bunker-cyan hover:text-bunker-cyan hover:shadow-cyanGlow">
                Ver Demo
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {['+40% tiempo', '24/7 atención', '0 tareas repetidas'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[.06] p-4 text-center backdrop-blur-xl">
                  <p className="text-sm font-black text-bunker-cyan">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ scale: heroScale, y: heroY }} initial={{ opacity: 0, x: 45 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .9, delay: .15 }} className="relative">
            <div className="holo-border relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[.055] p-3 shadow-purpleGlow backdrop-blur-xl">
              <div className="absolute inset-0 scanline opacity-50" />
              <Image
                src="/images/personajes-referencia.png"
                alt="Personajes de Automatizaciones F&D: mujer pelirroja con gafas y hombre con tatuajes en oficina futurista"
                width={920}
                height={520}
                priority
                className="relative z-10 rounded-[1.7rem] object-cover"
              />
              <div className="absolute left-7 top-7 z-20 rounded-2xl border border-bunker-green/30 bg-bunker-black/65 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[.22em] text-white/55">Automation</p>
                <p className="text-2xl font-black text-bunker-green text-glow-green">28%</p>
              </div>
              <div className="absolute bottom-7 right-7 z-20 rounded-2xl border border-bunker-cyan/30 bg-bunker-black/65 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[.22em] text-white/55">Procesos activos</p>
                <p className="text-2xl font-black text-bunker-cyan text-glow-cyan">24/7</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="demo" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm font-black uppercase tracking-[.3em] text-bunker-green">Video de presentación</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 text-4xl font-black sm:text-6xl">Mira cómo se siente una oficina automatizada</motion.h2>
          <div className="holo-border mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06] p-3 shadow-cyanGlow backdrop-blur-xl">
            <video
              className="aspect-video w-full rounded-[1.4rem] object-cover"
              src="/videos/presentacion.mp4"
              poster="/images/personajes-referencia.png"
              autoPlay
              muted
              loop
              controls
              playsInline
            />
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-sm text-white/55">
            Cuando unas el video de 7s y el de 8s en Canva, exporta el archivo como MP4 y reemplaza <strong>/public/videos/presentacion.mp4</strong> por el video final.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {slogans.map((slogan, index) => (
              <HologramCard key={slogan}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-bunker-green/10 text-bunker-green shadow-glow">
                  <Zap className="h-6 w-6" />
                </div>
                <p className="text-xl font-black leading-tight">{slogan}</p>
                <p className="mt-4 text-sm text-white/50">Impacto #{index + 1}</p>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      <section id="soluciones" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[.3em] text-bunker-cyan">Nuestras soluciones</p>
            <h2 className="mt-4 text-4xl font-black sm:text-6xl">Sistemas que convierten tareas lentas en flujos inteligentes.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {solutions.map(({ icon: Icon, title, text }) => (
              <HologramCard key={title} className="min-h-64">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-bunker-green/25 to-bunker-cyan/15 text-bunker-green shadow-glow">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">{title}</h3>
                    <p className="mt-4 leading-7 text-white/65">{text}</p>
                  </div>
                </div>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[.3em] text-bunker-green">Beneficios</p>
            <h2 className="mt-4 text-4xl font-black sm:text-6xl">Menos caos operativo. Más control del negocio.</h2>
            <p className="mt-6 text-lg leading-8 text-white/65">La automatización no es solo tecnología: es recuperar tiempo, reducir errores y convertir tu operación en un sistema medible.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map(([title, text, Icon]) => (
              <HologramCard key={title as string}>
                <Icon className="h-9 w-9 text-bunker-cyan" />
                <h3 className="mt-5 text-2xl font-black">{title as string}</h3>
                <p className="mt-3 text-white/62">{text as string}</p>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[.3em] text-bunker-cyan">Testimonios</p>
            <h2 className="mt-4 text-4xl font-black sm:text-6xl">Preparado para mostrar resultados reales</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <HologramCard key={n}>
                <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-white/15 bg-bunker-black/45">
                  <p className="text-center text-sm font-bold text-white/45">Video de cliente #{n}</p>
                </div>
                <p className="mt-5 text-lg font-black">Caso de éxito listo para incrustar</p>
                <p className="mt-2 text-sm text-white/55">Agrega aquí videos cortos de clientes, capturas de resultados o antes/después de procesos.</p>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-5 py-24 lg:px-8">
        <div className="holo-border mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[.07] p-7 shadow-purpleGlow backdrop-blur-2xl lg:grid-cols-[1fr_.85fr] lg:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[.3em] text-bunker-green">CTA Final</p>
            <h2 className="mt-4 text-4xl font-black sm:text-6xl">Tu negocio no necesita más horas. Necesita mejores sistemas.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">Cuéntanos qué proceso te está robando tiempo y te diremos cómo automatizarlo con una solución clara, escalable y lista para operar.</p>
            {/*
             * CTA final para hablar con un especialista.  Aquí utilizamos whatsappExpert para que el
             * mensaje prellenado invite al usuario a hablar con alguien de nuestro equipo.
             */}
            <a
              href={whatsappExpert}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-bunker-green px-7 py-4 font-black text-bunker-black shadow-glow transition hover:-translate-y-1 hover:bg-white"
            >
              Hablar por WhatsApp <MessageCircle className="h-5 w-5" />
            </a>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-bunker-black/45 p-6 backdrop-blur-xl">
            <label className="mb-2 block text-sm font-bold text-white/70">Nombre</label>
            <input className="mb-4 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-bunker-green" placeholder="Tu nombre" />
            <label className="mb-2 block text-sm font-bold text-white/70">WhatsApp</label>
            <input className="mb-4 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-bunker-green" placeholder="Ej. 736 125 3507" />
            <label className="mb-2 block text-sm font-bold text-white/70">¿Qué quieres automatizar?</label>
            <textarea className="mb-5 min-h-32 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-bunker-green" placeholder="Inventarios, WhatsApp, oficina, CRM, reportes..." />
            {/*
             * El botón del formulario abre una conversación de WhatsApp con un mensaje que hace
             * referencia a que el usuario completó el formulario.  Utilizamos window.open para
             * preservar la navegación en una nueva pestaña.
             */}
            <button
              type="button"
              onClick={() => window.open(whatsappForm, '_blank')}
              className="w-full rounded-2xl bg-bunker-green px-6 py-4 font-black text-bunker-black shadow-glow transition hover:bg-white"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-white/45">
        <p>© 2026 Automatizaciones F&D · WhatsApp: +52 736 125 3507 · admin@elbunker.tech</p>
      </footer>

      <FloatingWhatsApp />
    </main>
  );
}
