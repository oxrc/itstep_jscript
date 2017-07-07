new Vue({
    data:{
        
    },
    created(){
        $.ajax({
           url: '/api/user/list',
           type: 'GET',
           dataType: 'json',
           success: function(data){
               for(key in data){
                   for(value in key){
                       $('.tables_users tbody').append(
                            '<tr>'+
                               '<td>'+ data[key][value]['id'] +'</td>'+
                               '<td>'+ data[key][value]['name'] +'</td>'+
                               '<td>'+ data[key][value]['age'] +'</td>'+
                               '<td>'+ data[key][value]['phone'] +'</td>'+
                               '<td>'+ data[key][value]['interests'] +'</td>'+
                               '<td><a href="#" class="button" id="btn_delete"><span class="fa fa-trash"></span> Удалить</a></td>'+
                               '<td><a href="#" class="button" id="btn_edit"><span class="fa fa-pencil"></span> Редактировать</a></td>'+
                           '</tr>'
                       )
                   }
               }
           }    
        });
        
        $.ajax({
           url: '/api/interests',
           type: 'GET',
           dataType: 'json',
           success: function(data){
               console.log(data);
               for(key in data){
                       $('#output ul').append(
                            '<li>'+
                                data[key] +
                           '</li>'
                       )
                }
           }    
        });
    }
    
})