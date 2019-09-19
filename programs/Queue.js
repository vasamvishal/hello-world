
class Queue { 
    constructor() 
    { 
    this.items = [];  
    }

enqueue(element) 
{	 
    this.items.push(element); 
} 

dequeue() 
{ 
	if(this.isEmpty()) 
		return "Underflow"; 
	return this.items.shift(); 
} 


isEmpty() 
{ 
	
	return this.items.length == 0; 
} 

addMoney(money,initialMoney)
{
    
    initialMoney=initialMoney+money;
    
    return initialMoney;
}

withdrawMoney(money,initialMoney)
{    
    console.log(initialMoney);
    if(money>initialMoney)
    {
        console.log("not enough funds!!!");
        return ;
    }
    if(money==0)
    {
        console.log("Money should be greather than zero" );
        return ;
    }
    {
    
    initialMoney=initialMoney-money;
    return initialMoney;    
    }

}

printQueue() 
{ 
	var str = ""; 
    for(var i = 0; i < this.items.length; i++) 
    { 
        str =str+ this.items[i] +" "; 
    }
    console.log(str);
       
	return str; 
} 

}
module.exports={
    Queue
}