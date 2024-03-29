import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css',
})
export class FormInputComponent {
  @Input({ required: true }) labelText!: string;
  @Input({ required: true }) inputType!: string;
  @Input({ required: true }) inputPlaceholder!: string;
}
