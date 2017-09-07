import { Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})

export class SearchFilter implements PipeTransform {
    transform(users: any[], search: any): any {
        if(search === '') return users;
        return users.filter(function(users){
             return users.name.toLowerCase().includes(search.toLowerCase());
        })
    }
}