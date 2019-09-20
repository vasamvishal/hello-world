var src=require('../programs/stackarray')
const stack=new src.Stack();
const fs = require('fs');
var text = fs.readFileSync('./input1.txt','utf8');  
var exp=text.split('');
matchRet=(element,element1)=>
  {
     if(element=='(' && element1==')')
      {
       return true;
      }
     if(element=='{' && element1=='}')
      {
       return true;
      }
    if(element=='['&& element1==']')
      {
       return true;
      }
   }
 
for(let i=0;i<exp.length;i++)
 { 
  if(exp[i]=='('||exp[i]=='{'||exp[i]=='[')
    {  
     stack.push(exp[i]);
    }
  if(exp[i]==')'|| exp[i]=='}'||exp[i]==']')
    {  
      if(stack.isEmpty()==true)
       {
        console.log("cannot enter into stack");
        return;
       }
       else if(matchRet(stack.pop(),exp[i])==true)
       {}
       else
        {
         console.log("wrong characters");
         return;
        }
    }
}
       
console.log(stack.printStack());
if(stack.isEmpty()==true)
{
console.log("balanced");
}
else
{
console.log("not balanced");
}
       

       
    