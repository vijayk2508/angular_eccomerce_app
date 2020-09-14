import { DashboardComponent } from './../../pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav';
import { SubjectComponent } from '../../pages/subject/subject.component';


@NgModule({
  declarations: [DefaultComponent, DashboardComponent, SubjectComponent],
  imports: [CommonModule, RouterModule, SharedModule, MatSidenavModule],
})
export class DefaultModule {}
