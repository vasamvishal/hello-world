class Node
{
     constructor(data)
     {
         this.data=data;
         this.next=null;
     }
}
class Stack
{
    constructor()
    {
        this.top=null;
    }

    push(data)
    {
        let node=new Node(data);
        if(this.top)
        {
          node.next=this.top;
          this.top=node;
        }
        else
        {
         this.top=node;
        }

    }
    pop()

    { 
         if(this.top)
        {

        let itempop=this.top;
        this.top=this.top.next;
        
        return itempop.data;
        }
        else
        {
         console.log("stack is empty");
         
        }
    }
    showdata()
    {
        while(this.top!=null)
        {
            let temp=this.top;
            console.log(temp.data);
            this.top=this.top.next;
        }
    }
}
module.exports={
    Stack
}