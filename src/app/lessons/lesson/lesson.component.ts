import { Component, OnInit } from '@angular/core';
import { Lesson } from './lesson.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
})
export class LessonComponent implements OnInit {
  lesson: Lesson;
  isEditable: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // disadvantages snapshot
    console.log(this.route);
    // this.lesson = this.route.snapshot.data.lesson;
    // this.isEditable = this.route.snapshot.queryParams.allowEdit;

    // stream of data
    this.route.data.subscribe(({lesson}) => this.lesson = lesson);
    this.route.queryParams.subscribe(({allowEdit}) => this.isEditable = Boolean(Number(allowEdit)));
  }

  goToEditLesson() {
    this.router.navigate(['../', this.lesson.id ,'edit'],{ relativeTo: this.route });
  }
}
