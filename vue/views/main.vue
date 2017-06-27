<template lang="html">
   <div class="row page-wrapper">
                 <div class="col-lg-5 col-md-12 search_user">
                     <form action="" method="post">
                          <div class="form-group">
                                <input type="text" placeholder="First Name" />
                          </div>
                          <div class="form-group">
                                <input type="text" placeholder="Last Name" />
                          </div>
                          <div class="form-group">
                                <input type="text" placeholder="Age" />
                          </div>
                          <div class="form-group">
                                <input type="text" placeholder="Telephone" />
                          </div>
                          <div class="form-group">
                                <input type="text" placeholder="Interest" />
                          </div>
                          <button type="submit" class="btn_search"><span class="fa fa-search"></span> Search</button>
                     </form>
                     <ul>
                        <li><a href=""><span class="fa fa-eraser"></span> Clear</a></li>
                        <li><a href="/vue/adduser"><span class="fa fa-user-plus"></span> Add User</a></li>
                        <li><a href="/vue/addinteres"><span class="fa fa-paper-plane"></span> Add interes</a></li>
                     </ul>
                 </div>
                 <div class="col-lg-7 col-md-12" id="tables_users">
                     <table class="table">
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
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Joke</td>
                                <td>23</td>
                                <td>757834965</td>
                                <td>Sport</td>
                                <td><a href="#"  id="btn_delete"><span class="fa fa-trash"></span> Удалить</a></td>
                                <td><a href="#"  id="btn_edit"><span class="fa fa-pencil"></span> Редактировать</a></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Joke</td>
                                <td>23</td>
                                <td>757834965</td>
                                <td>Sport</td>
                                <td><a href="#"  id="btn_delete"><span class="fa fa-trash"></span> Удалить</a></td>
                                <td><a href="#"  id="btn_edit"><span class="fa fa-pencil"></span> Редактировать</a></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Joke</td>
                                <td>23</td>
                                <td>757834965</td>
                                <td>Sport</td>
                                <td><a href="#"  id="btn_delete"><span class="fa fa-trash"></span> Удалить</a></td>
                                <td><a href="#"  id="btn_edit"><span class="fa fa-pencil"></span> Редактировать</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="pagination">
                       <nav aria-label="Page navigation example">
                          <ul class="pagination">
                            <li class="page-item">
                              <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                              </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                              <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </nav> 
                    </div>
                 </div>
              </div>
         
</template>
