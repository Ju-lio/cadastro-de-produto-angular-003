import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/interface/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/interface/footer/footer.component';
import { NavComponent } from './components/interface/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './modules/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ProductComponent } from './modules/product/product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ProductTabsComponent } from './components/product/product-tabs/product-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { GroupProductComponent } from './modules/group-product/group-product.component';
import { GroupProductFormComponent } from './components/group-product/group-product-form/group-product-form.component';
import { GroupProductTabsComponent } from './components/group-product/group-product-tabs/group-product-tabs.component';
import { GroupProductListComponent } from './components/group-product/group-product-list/group-product-list.component';

registerLocaleData(localePt);

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      NavComponent,
      HomeComponent,
      ProductComponent,
      ProductFormComponent,
      ProductTabsComponent,
      ProductListComponent,

      GroupProductComponent,
      GroupProductFormComponent,
      GroupProductTabsComponent,
      GroupProductListComponent,
   ],
   imports: [
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatSnackBarModule,
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatMenuModule,
      MatDialogModule,
      CurrencyMaskModule,
      MatTabsModule,
      MatSelectModule,
      MatExpansionModule,
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
