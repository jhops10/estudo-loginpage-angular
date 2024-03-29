import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-img',
  templateUrl: './main-img.component.html',
  styleUrl: './main-img.component.css',
})
export class MainImgComponent {
  @Input() altText!: string;
}
