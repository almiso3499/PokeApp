import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [MatProgressBarModule, MatChipsModule, MatCardModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule],

  exports: [MatProgressBarModule, MatChipsModule, MatCardModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule],
})

export class MaterialModule { }
