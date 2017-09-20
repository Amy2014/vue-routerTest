<template>
	<div>
		<div class="newList" v-for="data in datas">	
		  <router-link :to="{name:'detail',params:{id:data.id}}" >	
				<h2>{{data.title}}</h2>
				<p>{{data.author}}</p>
				<p>{{data.id}}</p>
		  </router-link>
		</div>
	</div>
</template>

<script >
export default{
	data(){
		return{
			datas:[]
		}
	},
	created(){
		this.fetchData();
	},
	watch:{
	 '$route.params.id'() {
       this.fetchData();
    }
	},
	methods:{
		fetchData(){	
			this.$http.get("../static/json").then((response)=>{
				var _index = this.$route.params.id;
				var data = response.body;
				if(_index==1){
					this.datas = data.life;
				}
				else if(_index==2){
					this.datas = data.pet;
				}
			})
		 
		}

	}
}	
</script>

<style >
	.newList{
		width:100%;
		height:80px;
		border:1px solid #000;
	}
</style>