import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';
import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsService } from './services/lessons.service';
import { AuthGuardService } from '../core/services/auth-guard.service';
import { LessonResolverService } from './resolvers/lesson-resolver.service';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LessonsComponent,
    LessonComponent,
    EditLessonComponent
  ],
  imports: [
    CommonModule,
    LessonsRoutingModule,
    FormsModule
  ],
  providers: [
    LessonsService,
    AuthGuardService,
    LessonResolverService
  ]
})
export class LessonsModule { }
