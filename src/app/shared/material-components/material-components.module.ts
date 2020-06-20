import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatProgressBarModule, MatButtonModule, MatInputModule, MatIconModule],
})
export class MaterialComponentsModule {}
