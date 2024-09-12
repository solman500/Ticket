import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations'; // Correct import

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      NgxEchartsModule.forRoot({
        echarts: () => import('echarts'),
      })
    ), 
    provideAnimations(), // Use provideAnimations() instead of provideAnimationsAsync()
  ]
};
