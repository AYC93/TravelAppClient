import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService{
    
    emailId!: number
    email!: string

    // convert and pull emailId : number
    emailIdLocalPull():number{
        const emailIdString = localStorage.getItem('emailIdString')
        this.emailId = Number.parseInt(emailIdString||'0')
        return this.emailId
    }

    // pull email
    emailLocalPull():string {
      const storedEmail = localStorage.getItem('email')
      return this.email = storedEmail ? storedEmail : ''
    }
}