import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './index/home/home.component';
import { HeaderComponent } from './index/header/header.component';
import { FooterComponent } from './index/footer/footer.component';
import { HeroComponent } from './shared/hero/hero.component';
import { WorksComponent } from './shared/works/works.component';
import { AboutComponent } from './shared/about/about.component';
import { ThemeToggleComponent } from './shared/theme-toggle/theme-toggle.component';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    WorksComponent,
    AboutComponent,
    ThemeToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    NzMenuModule,
    NzButtonModule,
    NzCarouselModule,
    NzDropDownModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES },
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
