import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

import localePt from '@angular/common/locales/pt';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ProductModule } from './modules/product/product.module';
import { GroupProductModule } from './modules/group-product/group-product.module';
import { HomeModule } from './modules/home/home.module';
import { ComponentsModule } from './components/components.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  imports: [
    ProductModule,
    GroupProductModule,
    CommonModule,
    HomeModule,
    ComponentsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
