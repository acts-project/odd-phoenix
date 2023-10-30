import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { PhoenixUIModule } from 'phoenix-ui-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ODDComponent } from './pages/odd/odd.component';

@NgModule({
  declarations: [AppComponent, ODDComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PhoenixUIModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
