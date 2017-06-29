<template lang="html">
<div class="page-wrapper">
   <div class="row">  
    <div class="search_user five columns">
        <form action="" method="post" style="width: 248px;float:right;">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Age" />
                <input type="text" placeholder="Telephone" />
                <input type="text" placeholder="Interest" />
            <button type="submit" class="btn_search"><span class="fa fa-search"></span> Search</button>
        </form>
        <ul>
            <li><a class="button" href=""><span class="fa fa-eraser"></span> Clear</a></li>
            <li><a class="button" href="/vue/adduser"><span class="fa fa-user-plus"></span> Add User</a></li>
            <li><a class="button" href="/vue/addinteres">Add interes</a></li>
        </ul>
    </div>
    <div class="tables_users seven columns">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Telephone</th>
                    <th>Interest</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>Mark</td>
                    <td>Joke</td>
                    <td>23</td>
                    <td>757834965</td>
                    <td>Sport</td>
                    <td><a href="#" class="button"  id="btn_delete"><span class="fa fa-trash"></span> Удалить</a></td>
                    <td><a href="#" class="button" id="btn_edit"><span class="fa fa-pencil"></span> Редактировать</a></td>
                </tr>
                <tr>
                    <th>1</th>
                    <td>Mark</td>
                    <td>Joke</td>
                    <td>23</td>
                    <td>757834965</td>
                    <td>Sport</td>
                    <td><a href="#" class="button" id="btn_delete"><span class="fa fa-trash"></span> Удалить</a></td>
                    <td><a href="#" class="button" id="btn_edit"><span class="fa fa-pencil"></span> Редактировать</a></td>
                </tr>
                <tr>
                    <th>1</th>
                    <td>Mark</td>
                    <td>Joke</td>
                    <td>23</td>
                    <td>757834965</td>
                    <td>Sport</td>
                    <td><a href="#" class="button" id="btn_delete"><span class="fa fa-trash"></span> Удалить</a></td>
                    <td><a href="#" class="button" id="btn_edit"><span class="fa fa-pencil"></span> Редактировать</a></td>
                </tr>
            </tbody>
        </table>
      
    </div>


    <div id="output">
      
    </div>

   </div> 
</div>
</template>
