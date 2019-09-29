import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LessonsService } from "../services/lessons.service";
import { CATEGORIES, Lesson } from "../lesson/lesson.model";

@Component({
	selector: 'app-edit-lesson',
	templateUrl: './edit-lesson.component.html',
})
export class EditLessonComponent implements OnInit {
  lesson: Lesson;
  name: string;
  category: string;

	constructor(
		private readonly route: ActivatedRoute,
    private readonly ls: LessonsService,
    private readonly router: Router
	) {
	}

	get lessonCategories(): string[] {
	  return CATEGORIES;
  }

	ngOnInit() {
		this.lesson = this.ls.getLesson(+this.route.snapshot.params.id);
		this.name = this.lesson.name;
		this.category = this.lesson.category;
	}

  updateLesson() {
    this.ls.updateLesson(this.lesson.id, {name: this.name, category: this.category});
    this.router.navigate(['../'],
      {relativeTo: this.route, queryParams: {allowEdit: this.lesson.allowEdit}})
  }
}
