import { bootstrapApplication } from '@angular/platform-browser';
import { provideLazyLoadedAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideLazyLoadedAnimations()],
}).catch((err) => console.error(err));
