import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cortar-imagenes',
  templateUrl: './cortar-imagenes.component.html',
  styleUrls: ['./cortar-imagenes.component.css']
})
export class CortarImagenesComponent {
  @Input() tipo = 'cortar';
  
}
