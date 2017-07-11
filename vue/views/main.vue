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
                    <th>Name</th>
                    <th>Age</th>
                    <th>Telephone</th>
                    <th>Interest</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
      
    </div>
    
   

   </div> 
</div>
</template>

<script>
  export default {
      data: function () {
          return {}
      }
  }
</script>
<style></style>