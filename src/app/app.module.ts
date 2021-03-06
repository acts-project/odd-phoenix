import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { PhoenixUIModule } from 'phoenix-ui-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenDataDetector } from './pages/open-data-detector/open-data-datector.component';
import { EventDataExplorerComponent } from './components/event-data-explorer/event-data-explorer.component';
import { EventDataExplorerDialogComponent } from './components/event-data-explorer/event-data-explorer-dialog/event-data-explorer-dialog.component';
import { RingLoaderComponent } from './components/ring-loader/ring-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenDataDetector,
    EventDataExplorerComponent,
    EventDataExplorerDialogComponent,
    RingLoaderComponent,
  ],
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
