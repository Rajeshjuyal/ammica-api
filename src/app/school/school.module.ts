import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolRoutingModule } from './school-routing.module';
import { HttpClient } from '@angular/common/http';
import { SchoolComponent } from './school.component';

@NgModule({
  declarations: [SchoolComponent],
  imports: [CommonModule, SchoolRoutingModule],
})
export class SchoolModule {}
