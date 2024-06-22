import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-compone',
  standalone: true,
  imports: [],
  templateUrl: './compone.component.html',
  styleUrl: './compone.component.css'
})
export class ComponeComponent {
  @Input() message: string = '';
  @Output() comp1Click = new EventEmitter<void>();

  incCounter() {
    this.comp1Click.emit();
  }
}
