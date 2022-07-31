import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact } from '../../../../interfaces/contact.interface';
import { ContactService } from '../../../../services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-register',
  templateUrl: './contact-register.component.html',
  styleUrls: ['./contact-register.component.css']
})
export class ContactRegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private contactService: ContactService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  btnDisabled: boolean = true;

  formRegister: FormGroup = this.fb.group({
    name: [,],
    lName: [,],
    phoneNumber: [''],
  });

  
  modelContact(){
    const model: Contact = {
      id:Number( localStorage.getItem('id'))+ 1,
      name: this.formRegister.get('name')?.value,
      lastName: this.formRegister.get('lName')?.value,
      phoneNumber: this.formRegister.get('phoneNumber')?.value,
    }
    return model ;
  }
  postContact(){
    let model = this.modelContact()
    this.contactService.postContact(model)
        .subscribe(resp=>{
          this.toastr.success('Added contact successfully!')
        })    
  }
  /**
   * It returns true if the field is invalid and has been touched
   * @param {string} field - string
   * @returns a boolean value.
   */
   validateField(field: string) {
    return this.formRegister.get(field)?.invalid &&
      this.formRegister.get(field)?.touched
  }
    /**
   * If the form is valid, the button is enabled, otherwise it is disabled
   * @returns The return is a boolean value.
   */
     btnDisable() {
      return this.formRegister.valid ? this.btnDisabled = false : this.btnDisabled = true;
    }
}
