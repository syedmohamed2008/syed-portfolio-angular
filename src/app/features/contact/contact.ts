import {
  Component,
  inject,
  signal
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  ContactService
} from '../../core/services/contact';


@Component({
  selector: 'app-contact',

  imports: [
    ReactiveFormsModule
  ],

  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  private readonly fb =
    inject(FormBuilder);

  private readonly contactService =
    inject(ContactService);


  isSubmitting =
    signal(false);

  successMessage =
    signal('');

  errorMessage =
    signal('');


  contactForm = this.fb.nonNullable.group({

    name: [
      '',
      [
        Validators.required,
        Validators.maxLength(100)
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.maxLength(200)
      ]
    ],

    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(2000)
      ]
    ]

  });


  submit(): void {

    this.successMessage.set('');
    this.errorMessage.set('');


    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;

    }


    if (this.isSubmitting()) {
      return;
    }


    this.isSubmitting.set(true);


    const request =
      this.contactForm.getRawValue();


    this.contactService
      .sendMessage(request)
      .subscribe({

        next: () => {

          this.successMessage.set(
            'Your message has been sent successfully.'
          );

          this.contactForm.reset();

          this.isSubmitting.set(false);

        },

        error: error => {

          console.error(
            'Contact API Error:',
            error
          );

          this.errorMessage.set(
            'Unable to send your message. Please try again.'
          );

          this.isSubmitting.set(false);

        }

      });

  }

}