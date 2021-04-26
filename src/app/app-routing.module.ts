import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';

const routes: Routes = [
  {path:"main",component:MainWrapperComponent},
  {path:"**",redirectTo:"main",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
