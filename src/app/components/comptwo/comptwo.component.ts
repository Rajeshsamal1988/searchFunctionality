import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comptwo',
  standalone: true,
  imports: [],
  templateUrl: './comptwo.component.html',
  styleUrl: './comptwo.component.css'
})
export class ComptwoComponent {
  @Input() message: string = '';
  @Output() comp2Click = new EventEmitter<void>();

  incCounter() {
    this.comp2Click.emit();
  }
}
