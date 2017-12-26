'use strict'
let mypromise=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('hi issue is resolved');
	},1000);
	setTimeout(()=>{
		reject('error is caught');
	},500);
	
});
mypromise.then((res)=>{
console.log(res);
})
.catch((err)=>{
   console.log(err);
})