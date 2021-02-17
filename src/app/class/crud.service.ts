import{Injectable} from '@angular/core';
import{HttpClient} from'@angular/common/http'
@Injectable({

    providedIn:'root',

})
export class CrudService{
    constructor(private http : HttpClient){}
    getclass(){
        return this.http.get('https://amicaapi.herokuapp.com/class');

    }
}