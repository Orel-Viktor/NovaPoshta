import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
   plugins: [react(), eslint()],
   base: '/NovaPoshta/',
   build: {
      outDir: 'dist',
      assetsDir: 'assets',
   },
   pages: [
      {
         // Имя страницы
         name: 'home',
         // Входной файл для этой страницы
         entry: 'src/ui/pages/Main/index.js',
         // Шаблон, который будет использоваться для создания HTML-файла
         template: 'public/index.html',
         // Путь для сохранения HTML-файла
         filename: 'NovaPoshta/index.html',
         // Заголовок страницы
         title: 'Home Page',
      },
      {
         name: 'admissionsList',
         entry: 'src/ui/pages/AdmissionsList/index.js',
         template: 'public/index.html',
         filename: 'NovaPoshta/admissionsList/index.html',
         title: 'Admissions List Page',
      },
   ],
});
