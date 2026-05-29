# Landing Page — Automatizaciones F&D

Stack: Next.js 15 + Tailwind CSS + Framer Motion.

## Instalación

```bash
npm install
npm run dev
```

Abre: `http://localhost:3000`

## Assets incluidos

- `public/images/personajes-referencia.png`: imagen principal de los personajes.
- `public/images/estilo-bunker.png`: referencia visual del estilo.
- `public/videos/presentacion.mp4`: video actual subido.

## Video final unido en Canva

Cuando tengas el video unido de 7s + 8s exportado desde Canva:

1. Nómbralo `presentacion.mp4`.
2. Reemplaza el archivo en `public/videos/presentacion.mp4`.
3. La página ya está preparada con:

```tsx
<video
  src="/videos/presentacion.mp4"
  poster="/images/personajes-referencia.png"
  autoPlay
  muted
  loop
  controls
  playsInline
/>
```

## WhatsApp configurado

El botón principal y el botón flotante apuntan a:

`https://wa.me/527361253507`
