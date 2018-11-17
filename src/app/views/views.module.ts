import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ViewsRoutingModule } from './views-routing.module';
import {MaterialModule} from './material.module';

@NgModule({
    declarations: [
      LayoutComponent
    ],
    imports: [
      CommonModule,

      // this needs to be declared after all modules
      ViewsRoutingModule,
      MaterialModule,
    ],
    exports: [
    ],
    providers: [

    ],
  })
export class ViewsModule { }
