import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

let loader = document.getElementById('loader');

document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    loader?.classList.add('fade-loader');
  }, 500);
  setTimeout(() => {
    loader?.classList.add('hidden');
  }, 1000);
})