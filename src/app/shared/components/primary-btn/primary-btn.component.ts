import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.scss']
})
export class PrimaryBtnComponent {
@Input() btnText: string = '-'
}
