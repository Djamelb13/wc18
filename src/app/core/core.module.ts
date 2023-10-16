import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [MatCardModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatSelectModule,BrowserModule,BrowserAnimationsModule], // Assurez-vous que MatFormFieldModule est exporté ici
})
export class CoreModule {}
