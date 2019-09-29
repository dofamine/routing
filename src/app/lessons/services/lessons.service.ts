import { Injectable } from '@angular/core';
import { Lesson } from '../lesson/lesson.model';

@Injectable()
export class LessonsService {

  lessons: Lesson[] = [
    {
      id: 1,
      name: 'Math',
      category: 'interesting',
      allowEdit: 1
    },
    {
      id: 8,
      name: 'Science',
      category: 'exciting',
      allowEdit: 1
    }, {
      id: 17,
      name: 'World History',
      category: 'exciting',
      allowEdit: 0
    }
  ];
  constructor() { }

  getLessons(): Lesson[] {
    return this.lessons;
  }

  getLesson(id: number): Lesson {
    return this.lessons.find(
      (lessonItem: Lesson) => {
        return lessonItem.id === id;
      }
    );
  }

  updateLesson(id: number, lessonInfo: { name: string, category: string }) {
     const lesson = this.lessons.find(
      (lessonItem: Lesson) => {
        return lessonItem.id === id;
      }
    );
    if (lesson) {
      lesson.name = lessonInfo.name;
      lesson.category = lessonInfo.category;
    }
  }
}
