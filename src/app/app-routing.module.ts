import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainComponent } from './main/main.component';
import { PricingComponent } from './pricing/pricing.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/main'}  ,
  { path: 'contactus', component: ContactusComponent},
  { path: 'main', component: MainComponent},
  {path:'pricing',component:PricingComponent},
  {path:'aboutus',component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
