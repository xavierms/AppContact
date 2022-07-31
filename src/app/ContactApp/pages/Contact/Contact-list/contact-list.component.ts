import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/ContactApp/interfaces/contact.interface';
import { ContactService } from 'src/app/ContactApp/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
 
  constructor(private contactService: ContactService,
              private router: Router,
              private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.getContact();

    
  }
  maxId!: number;

  contactList: Contact[]=[];

  getContact(){
   return this.contactService.getContacts()
              .subscribe(contact =>{
                 contact.map(contact => {
                  
                 let id= contact.id
                this.maxId=  Math.max( id);
                 Number(localStorage.setItem('id',String(this.maxId)));
                })
               
                this.contactList =contact;
              })
        
  }

  deleteContact(id: number){
    this.contactService.deleteContact(id)
        .subscribe(()=>{
          this.getContact();
          this.toastr.success('Contact deleted successfully !');

        });
  }
  clicking(e: any) {
    const { path, target } = e;
    
    [...path[2].querySelector('.dropdownlist')?.classList].includes('open');
   

    const dropEl = path[2].querySelector('.dropdownlist');
    //
    if (![...dropEl.classList].includes('open')) {
      //no open
      //console.log('if');
      //console.log(target.classList);
      target.classList.replace('fa-plus', 'fa-minus');
      //console.log(target.classList);

      return dropEl.classList.add('open');
    }
    target.classList.replace('fa-minus', 'fa-plus');
    return dropEl.classList.remove('open');
  }
}
