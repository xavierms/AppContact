import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Contact } from '../interfaces/contact.interface';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})

export class ContactService{
    
    constructor(private http: HttpClient) {}
    private apiContact = environment.apiContacts;


    getContacts(){
        return this.http.get<Contact[]>(`${ this.apiContact }/contacts`);
    }
    getContactsById(id:number){
        return this.http.get<Contact>(`${ this.apiContact }/contacts/${id}`);
    }
    putContact(id: number, conctact: Contact){
        console.log(id);
        
        return this.http.put<Contact>(`${ this.apiContact }/contacts/` + id, conctact);
    }
    postContact(contact: Contact){
        return this.http.post<Contact>(`${ this.apiContact }/contacts/`, contact);
    }
    deleteContact(id: number){
        return this.http.delete(`${ this.apiContact }/contacts/`+ id)
    }
}