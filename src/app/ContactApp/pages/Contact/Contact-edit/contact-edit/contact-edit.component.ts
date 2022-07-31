import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contact } from '../../../../interfaces/contact.interface';
import { ContactService } from '../../../../services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
 

  constructor(private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private contactService: ContactService,
              private toastr: ToastrService,
              private router: Router) {  
      this.activatedRoute.params.subscribe((id) => {
      this.routeId= Number(id['id']);
    }); 
  }

  ngOnInit(): void {
    this.getContactById();
  }

  //Props 
  routeId    :number =0;
  btnDisabled: boolean = true;

  //Reactive Forms
  formRegister: FormGroup = this.fb.group({
    name: [,],
    lName: [,],
    phoneNumber: [''],
  });

  contactEdit(){
    const model:Contact = this.modelContact();
    console.log(model);
    
    this.contactService.putContact(this.routeId,model)
        .subscribe(()=>{
          
          this.toastr.success('Contact edited successfully !');
          this.router.navigateByUrl('/')
        })
  }
 getContactById(){
    
    this.contactService.getContactsById(this.routeId)
        .subscribe(contact =>{
            this.setValuesFormeEdit(
              contact.name,
              contact.lastName,
              contact.phoneNumber)
            });
  }
  
  setValuesFormeEdit(name:string, lName:string, phone: number[]){
    this.formRegister.get('name')?.setValue(name);
    this.formRegister.get('lName')?.setValue(lName);
    this.formRegister.get('phoneNumber')?.setValue(phone);
  }

  modelContact(){
    const model = {
      id: this.routeId,
      name: this.formRegister.get('name')?.value,
      lastName: this.formRegister.get('lName')?.value,
      phoneNumber: this.formRegister.get('phoneNumber')?.value,
    }
    return model ;
  }

  validateField(field: string) {
    return this.formRegister.get(field)?.invalid &&
      this.formRegister.get(field)?.touched
  }

  btnDisable() {
    return this.formRegister.valid ? this.btnDisabled = false : this.btnDisabled = true;
  }
}
