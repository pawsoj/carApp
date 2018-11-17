import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import {MaterialModule} from "./../../material.module"

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, 
    HomeRoutingModule, 
    MaterialModule
    ],
  providers: []
})
export class HomeModule {}
