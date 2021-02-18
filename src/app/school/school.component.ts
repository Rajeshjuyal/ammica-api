import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss'],
})
export class SchoolComponent implements OnInit {
  public schoollist: Array<any> = [];

  constructor(private api: CrudService, private http: HttpClient) {
    this.schools();
  }

  ngOnInit(): void {}

  extractdata(res: Response) {
    const body = res;
    return body || {};
  }

  schools() {
    this.api
      .getschools()
      .pipe(map(this.extractdata))
      .subscribe((result: any) => {
        console.log(result);
        this.schoollist = result.response_data;
      });
  }
}
