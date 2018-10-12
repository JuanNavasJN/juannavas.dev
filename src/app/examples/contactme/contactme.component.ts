import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactmeService } from './contactme.service';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html'
})
export class ContactmeComponent implements OnInit {

    enviado: boolean = false;

    constructor(private contactmeService: ContactmeService) {}

    ngOnInit() {
      
    }
   
    onSubmit(form: NgForm) {
        let message = {
            'name': form.value.name,
            'email': form.value.email,
            'message': form.value.message,
        };
        this.contactmeService.sendEmail(message)
            .subscribe(
                () => console.log('Mensaje enviado'),
                () => console.error('Mensaje no enviado')
            );
        form.resetForm();
        this.enviado = true;
      }

}
