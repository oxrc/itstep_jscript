<template lang="html">
<div id="add_user_content" class="row">
    <div class="container" style="text-align:center;">
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
                <select id="interests">
                    <option value="1">food</option>
                    <option value="2">family</option>
                    <option value="3">shelter</option>
                </select>
            </div>
            <button type="submit" class="btn_search"><span class="fa fa-user-plus"></span>Add user</button>
        </form>
    </div>
</div>
</template>
