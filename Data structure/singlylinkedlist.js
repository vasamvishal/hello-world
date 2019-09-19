
var Utility=require("../programs/utility")
var readline=Utility.input();
var src=require('../programs/linkedList');

 var fs=require('fs')
 fs.readFile('input.txt','utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data);
    var arr=data.split(' ');

   // console.log(arr);

   const n1=new src.LinkedList();
   for(let i=0;i<arr.length;i++)
   {
       n1.insertAtElement(arr[i]);
   }
   var element=readline.question("enter the string  to be searched")
   if(n1.deleteElement(element)!=true)
   {
       n1.insertAtElement(element);
   }
    var o=n1.printListData();
    fs.writeFile("temp.txt",o,(err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
   });
});

