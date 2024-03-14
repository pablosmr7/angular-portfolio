import { Component } from '@angular/core';
import { ThemeService } from './_services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PabloS';
  constructor(private theme: ThemeService) {}

  ngOnInit() {
    this.theme.init();
  }
}
