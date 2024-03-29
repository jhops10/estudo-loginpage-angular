import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-green-button',
  templateUrl: './green-button.component.html',
  styleUrl: './green-button.component.css',
})
export class GreenButtonComponent {
  @Input({ required: true }) textButton!: string;
}
