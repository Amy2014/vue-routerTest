<template>
	<div>
		<span>
			<a @click="goback">BACK</a>
		</span>
	<div class="news">
		<h2>{{news.title}}</h2>
		<p>{{news.author}}</p>
		<p>{{news.content}}</p>
	</div>
	</div>
		
</template>
<script>
	export default{
		data(){
			return{
				news:[],
				navid:''
			}
		},
		beforeRouteEnter (to, from, next) {
			if(from.path=='/nav/1'){
				next(vm=>{
					vm.navid=1;
				})
			}else{
				next(vm=>{
					navid=2;
				})
			}
  		},
		created(){
			this.fetchData();
		},
		methods:{
		goback(){
			 window.history.back(-1);
		},
		fetchData(){
				this.$http.get("../static/json").then((response)=>{
					var _index = this.$route.params.id;
					var data = response.body;
					var _this = this;
					if(this.navid==1)
					{
						var data1=data.life;

					}else{
						var data1=data.pet;
					};
					data1.forEach(function(data){
                    if(data.id == _index){
                       _this.news = data;
                       }
                    });

				})
			}
		}
	}
</script>
<style >
	.news{
		border:1px solid #000;
		width:80%;
		text-align: center;
	}
</style>