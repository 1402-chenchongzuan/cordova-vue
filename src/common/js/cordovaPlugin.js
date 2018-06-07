
//cordova plugin add
//cordova-plugin-barcodescanner   cordova-plugin-camera

export function Photograph(){
  const options = {
    quality:100,
    targetWidth: 200,
    targetHeight: 200,
  };
  let promise=new Promise((resolve,reject)=>{
    navigator.camera.getPicture((data)=>{
      resolve(data);
    },(err)=>{    //err===20时为无相机权限
     reject(err);
    },options)
  });
  return promise;

}

export function Scanner(){
   let promise=new Promise((resolve,reject)=>{
     cordova.plugins.barcodeScanner.scan(
       function (result) {
         resolve(result);
       },
       function (error) {
         reject(error);
       }
     );
   });
   return promise;

}


/*
Photograph().then((data)=>{
  this.imgUrl=data;
}).catch((err)=>{
  if(err===20){  //无相机权限
    alert('需要开启相机权限')
  }
});*/


/*
Scanner().then((result)=>{
  let code=result.text;
  code?alert(`code:${result.text}`):'';
}).catch((error)=>{
  alert("此操作需要手机权限");
});*/
