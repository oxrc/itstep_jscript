var app = new Vue({
    el: "#app",
    data:{
      
    },
    created(){
        $.ajax({
           url: '/api/users',
           type: 'GET',
           dataType: 'json',
           success: function(data){
               for(key in data){
                    $('.tables_users tbody').append(
                            '<tr>'+
                               '<td>'+ data[key]['id'] +'</td>'+
                               '<td>'+ data[key]['name'] +'</td>'+
                               '<td>'+ data[key]['age'] +'</td>'+
                               '<td>'+ data[key]['phone'] +'</td>'+
                               '<td>'+ data[key]['interests'] +'</td>'+
                               '<td><a href="#" class="button" id="btn_delete"><span class="fa fa-trash"></span> Удалить</a></td>'+
                               '<td><a href="#" class="button" id="btn_edit"><span class="fa fa-pencil"></span> Редактировать</a></td>'+
                           '</tr>'
                       )
               }
           }    
        });
        
        
    }
    
})

