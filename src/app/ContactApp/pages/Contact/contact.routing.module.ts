import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactListComponent } from './Contact-list/contact-list.component';
import { ContactRegisterComponent } from './Contact-register/contact-register/contact-register.component';
import { ContactEditComponent } from './Contact-edit/contact-edit/contact-edit.component';

const routes: Routes = [
    {
        path: '',
        children:[
          {
          path: 'list',
          component: ContactListComponent,
          },
          {
          path: 'add',
          component: ContactRegisterComponent,
          },
          {
          path: 'edit/:id',
          component: ContactEditComponent,
          },
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ContactRoutingModule { }