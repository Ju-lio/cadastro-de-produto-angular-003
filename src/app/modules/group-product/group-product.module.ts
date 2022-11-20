import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupProductComponent } from './group-product.component';
import { GroupProductFormComponent } from './group-product-form/group-product-form.component';
import { GroupProductTabsComponent } from './group-product-tabs/group-product-tabs.component';
import { GroupProductListComponent } from './group-product-list/group-product-list.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    GroupProductComponent,
    GroupProductFormComponent,
    GroupProductTabsComponent,
    GroupProductListComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    MatExpansionModule,
  ],
})
export class GroupProductModule {}
