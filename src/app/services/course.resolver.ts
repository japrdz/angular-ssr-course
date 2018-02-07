import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Course} from '../model/course';
import {Observable} from 'rxjs/Observable';
import {CoursesService} from './courses.service';
import {first, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {isPlatformServer} from '@angular/common';


@Injectable()
export class CourseResolver implements Resolve<Course> {

    constructor(private coursesService: CoursesService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {

        const courseId = route.params['id'];

        return this.coursesService.findCourseById(courseId)
            .pipe(
                first()
            );


    }

}