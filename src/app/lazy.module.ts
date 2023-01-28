import { Component, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'foo',
  template: `I'm foo`,
})
export class MyComp {}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forChild([{ path: '', component: MyComp }]),
  ],
})
export class LazyModule {}
