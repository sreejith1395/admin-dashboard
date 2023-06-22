import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployessComponent } from './employess/employess.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LeadComponent } from './lead/lead.component';

const routes: Routes = [
  {
    
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'',redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path:'employees',component:EmployessComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'lead',component:LeadComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
