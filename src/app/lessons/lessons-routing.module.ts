import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LessonComponent } from './lesson/lesson.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';
import { LessonsComponent } from './lessons.component';
import { AuthGuardService } from '../core/services/auth-guard.service';
import { LessonResolverService } from './resolvers/lesson-resolver.service';

const routes: Routes = [
  {
    path: '', component: LessonsComponent, canActivate: [AuthGuardService],
    children: [
      { path: ':id', component: LessonComponent, resolve: { lesson: LessonResolverService } },
      { path: ':id/edit', component: EditLessonComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class LessonsRoutingModule { }
