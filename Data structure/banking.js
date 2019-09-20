
var Utility=require("../programs/utility");
var readline=Utility.input();
var src=require('../programs/Queue');
var initialMoney=1000;
var count=1;


while(initialMoney>0)
{ 
    var queue=new src.Queue();
    console.log("enter 1 for deposit & enter 2 for withdraw ");
    console.log("enter 3 to exit");
    var choice=readline.question("enter the value ");
    if(choice==undefined||choice<0||choice>4||isNaN(choice))
        { 
        console.log("!!please enter correct value!!");
        return ;
       }
    switch(choice)
    {
    case "1":console.log("entered the queue");
             queue.enqueue(count);
             var money=parseInt(readline.question('enter money to deposit'));
             if(money==undefined||money<0||isNaN(money))
             { 
              console.log("!!please enter correct value!!");
              return ;
             }
             initialMoney=queue.addMoney(money,initialMoney);
             console.log("total balance is "+initialMoney);
             console.log("person have entered the money now dequeue")
             count++;
             queue.dequeue();
            
             break;

     case "2":
             console.log("enter in the queue of withdraw");
             queue.enqueue(count);
             var money=readline.question('enter money to withdraw');
             if(money==undefined||money<0||isNaN(money))
             { 
              console.log("!!please enter correct value!!");
              return ;
             }
             else
             {
             initialMoney=queue.withdrawMoney(money,initialMoney);
             console.log("total balance is "+initialMoney);
             count++; 
             console.log("person have withdrawn the money now dequeue")
             break;
             }

      case "3":
             return ;
             break;

      default:
            return;
   
}
}





