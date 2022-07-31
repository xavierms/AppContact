import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './ContactApp/pages/Contact/Contact-list/contact-list.component';

const routes: Routes = [
  {
    path:'',
    component: ContactListComponent,
    pathMatch: 'full'
  },
  {
    path:'contact',
    loadChildren:() => import('./ContactApp/pages/Contact/contact.module').then( m => m.ContactModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
