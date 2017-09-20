<template>
<div>
	<div class="header">
		<h2 style="display:inline-block">Search:</h2>
		<input type="text" name="">
	</div>
	<div class="content">
		<router-view></router-view>
	</div>
	<div class="footer">
			<a v-on:click="goList(item.id)" v-for="item in items" class="navlist" :class="{'active': item.id === todoId}">
				<h2>{{item.title}}</h2>
				<h2>{{item.id}}</h2>
			</a>

	</div>
</div>
	
</template>

<script>
export default {
  data () {
    return {
     items:[
     { title: 'life',id: 1 },
     { title: 'pet',id: 2 },
     { title: 'weather',id: 3 },
     { title: 'myself',id: 4 }
     ],
     todoId:1
    }
  },
  watch: {
          "$router.params": "fetchDate"
        },
  methods:{
  	goList(id){
  		this.todoId = id;	
  		this.$router.push({ name: 'nav', params: { id: id } });
			}
    	}
}
</script>

<style scoped>
body{
	margin:0;
}
.header{
	width:100%;
	height:40px;
	background-color: #fff;
	border:1px solid #ccc;
	padding:10px;
}
.header input{
 width:70%;
 height:30px;
 margin-left: 10px;
}
.footer{
	position:absolute;
	bottom:0;
margin-bottom: 0;
border:1px solid #000;
width:100%;
height:100px;

}
.navlist{
	display: inline-block;
	margin-left: 100px;
	padding-top: 30px;
	border:1px solid #000;
	height:80px;
	width:120px;
}	
.active{
	color:red;
}
</style>