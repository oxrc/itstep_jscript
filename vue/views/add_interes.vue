<template lang="html">
<div id="add_interes_content" class="row">
    <div style="text-align:center;">
                <input type="text" placeholder="Interes" v-model="name"  />
                <br />
            <button type="submit"  class="btn_search">Add interes</button>
       
     
    </div>
</div>
</template>

<script>
  export default {
  data () {
    return {
        name: ''
    }
  },
  methods: {
      addInteres:function () {
          $.ajax({
             url: '/api/interests/add',
             type: 'POST',
             dataType: 'json',
             data:{name:this.name},
             success: function(data){
                 console.log('Sended!');
             }
        })
      }
  }
}


</script>