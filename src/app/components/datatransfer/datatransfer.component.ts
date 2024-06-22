import { Component } from '@angular/core';
import { ComponeComponent } from '../compone/compone.component';
import { ComptwoComponent } from '../comptwo/comptwo.component';

@Component({
  selector: 'app-datatransfer',
  standalone: true,
  imports: [ComponeComponent,ComptwoComponent],
  templateUrl: './datatransfer.component.html',
  styleUrl: './datatransfer.component.css'
})
export class DatatransferComponent {
  countCompone = 0;
  countComptwo = 0;
  messageCompone = '';
  messageComptwo = '';

  componeClick() {
    this.countCompone++;
    this.messageCompone = `Component one  Count: ${this.countCompone}`;
  }

  comptwoClick() {
    this.countComptwo++;
    this.messageComptwo = `Component two Count: ${this.countComptwo}`;
  }
}
