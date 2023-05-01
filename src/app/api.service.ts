import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private apiUrl = 'https://api.crm.xonis.net/api/json/example/task/contactCards';
    private token = '1e70676a3c6787bf6c4656a93e19d0ffea085b7b-aaabff5bc3f926159ce38d51ba7bf525-1682681240';

    constructor(private http: HttpClient) { }
    
    getContacts(): Observable<any> {
        const options = {
            params: {
                token: this.token
            }
        };

        return this.http.get<any>(this.apiUrl, options).pipe(
            map((data: any) => {
                const contacts = data.contacts.map((contact: any) => {
                    const randomAvatar = Math.floor(Math.random() * 17) + 1
                    return {
                        ...contact,
                        avatar: `./assets/avatar/${randomAvatar}.jpg`
                    };
                });
                return {
                    ...data,
                    contacts
                };
            })
        );
    }
}

