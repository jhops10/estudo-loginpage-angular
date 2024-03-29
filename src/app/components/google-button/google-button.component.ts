import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html',
  styleUrl: './google-button.component.css',
})
export class GoogleButtonComponent {
  @Input({ required: true }) textButton!: string;
}
