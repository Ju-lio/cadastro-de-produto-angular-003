import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './modules/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ProductsComponent } from './modules/products/products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReadProductComponent } from './components/read-product/read-product.component';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { MatDialogModule } from '@angular/material/dialog';

registerLocaleData(localePt);

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      NavComponent,
      HomeComponent,
      ProductsComponent,
      CreateProductComponent,
      ReadProductComponent,
      UpdateProductComponent,
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
