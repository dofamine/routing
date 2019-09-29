import { Component, OnInit } from '@angular/core';
import { Lesson } from './lesson/lesson.model';
import { LessonsService } from './services/lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
})
export class LessonsComponent implements OnInit {
  lessons: Lesson[];

  constructor(
    private readonly lessonsService: LessonsService,
  ) { }

  ngOnInit() {
    this.lessons = this.lessonsService.getLessons();
  }
}
