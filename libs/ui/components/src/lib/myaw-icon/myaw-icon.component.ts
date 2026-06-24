import { Component, input } from '@angular/core';

import { MyawIconName } from './myaw-icon.model';

@Component({
  selector: 'myaw-icon',
  imports: [],
  templateUrl: './myaw-icon.component.html',
  styleUrl: './myaw-icon.component.css',
})
export class MyawIconComponent {
  iconName = input.required<MyawIconName>();
}
