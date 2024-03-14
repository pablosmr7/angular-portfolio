import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = false;

  isDarkMode() {
    return this.darkMode;
  }

  init() {
    document.body.classList.add('light-theme');
  }

  setDarkMode(isDarkMode: boolean) {
    this.darkMode = isDarkMode;
    if (isDarkMode) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }
}
