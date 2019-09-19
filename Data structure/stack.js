class Stack { 
    constructor() 
    { 
    this.items = [];  
    }
    
    push(element) 
    {    
    this.items.push(element);    
    } 

    pop() 
    { 
    if (this.items.length == 0) 
    return true; 
    return this.items.pop(); 
    } 

    isEmpty() 
    { 
    if(this.items.length == 0 )
    {
    return true;
    }
    }

    printStack() 
    { 
    var str = ""; 
    for (var i = 0; i < this.items.length; i++) 
    str += this.items[i] + " "; 
    return str; 
    } 
}
    const stack=new Stack();
    try{
    var arr='(5+6)∗(7+8)/(4+3)+(5+6)∗(7+8)(/(4+3)'; 
    }
    catch(err)
    {
     console.log(err);
    }
    var exp=arr.split('');
 
 Array(exp)
 {
   for(let i=0;i<exp.length;i++)
  { 
    if(exp[i]=='('||exp[i]=='{'||exp[i]=='[')
    {  
    stack.push(exp[i]);
    }
    if(exp[i]==')'|| exp[i]=='}'||exp[i]==']')
    {    
    if(stack.pop(exp[i])==true)
    {
    console.log("cannot enter into stack");
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
    }
    