import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
FlexLayoutModule,
MatTableModule,
MatPaginatorModule
  ],
})
export class CoreModule {}
