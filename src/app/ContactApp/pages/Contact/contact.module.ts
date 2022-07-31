import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './Contact-list/contact-list.component';
import { ContactRegisterComponent } from './Contact-register/contact-register/contact-register.component';
import { ContactRoutingModule } from './contact.routing.module';
import { ContactEditComponent } from './Contact-edit/contact-edit/contact-edit.component';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ContactListComponent,
    ContactRegisterComponent,
    ContactEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ContactRoutingModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot({preventDuplicates:true}),

  ],

})
export class ContactModule { }
