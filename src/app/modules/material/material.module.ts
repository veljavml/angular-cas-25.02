import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


const MateralComponents = [MatTableModule];

@NgModule({
  imports:[MateralComponents],
  exports:[MateralComponents]
  
})
export class MaterialModule { }
