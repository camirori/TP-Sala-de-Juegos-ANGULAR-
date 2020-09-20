import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout';
import {MatTooltipModule} from '@angular/material/tooltip';







const MaterialComponents = [
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  LayoutModule,
  MatTooltipModule

]
@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})

export class MaterialModule { }
