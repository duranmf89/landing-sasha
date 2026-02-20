# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


------ Convertir video para IOS:    --------------------------------
ffmpeg -i "public/video/hero-mobile.MOV" \                                                                                                                                 ─╯
  -vf "scale=720:-2,format=yuv420p" -r 30 \
  -c:v libx264 -crf 23 -preset veryfast \
  -movflags +faststart -an \
  "public/video/hero-mobile.mp4"

----- Convertir video para Android + Poster:    --------------------
ffmpeg -i "public/video/hero-mobile.mp4" \                                                                                                                                 ─╯
  -vf "scale=720:-2" -r 30 \               
  -c:v libvpx-vp9 -b:v 0 -crf 35 -an \   
  "public/video/hero-mobile.webm"

ffmpeg -i "public/video/hero-mobile.mp4" -ss 00:00:01 -vframes 1 -q:v 3 \
  "public/video/hero-mobile-poster.jpg"