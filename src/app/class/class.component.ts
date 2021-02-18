import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
})
export class ClassComponent implements OnInit {
  public classlist:Array<any>=[];
  constructor(private api: CrudService, private http: HttpClient) {
    this.class()
  }

  ngOnInit(): void {}
  extractdata(res: Response){
    const body =res;
    return body || {}
  }
 class(){
   this.api.getclass()
   .pipe(map(this.extractdata))
   .subscribe((result:any) =>{
   console.log(result);
        this.classlist = result.response_data;
 }
   )}
}
