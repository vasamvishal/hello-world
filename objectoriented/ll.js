class Node{
    constructor(data)
    {
        this.data=data;
       
        this.next=null;
    }
}
class LinkedList{
    constructor()
     { 
        this.head=null;
        this.size=0; 
    }
//inserting elements
insertAtElement(element)
{
if(element==undefined||element==null)
{
    console.log("enter correct number");
    return null;
}

var node=new Node(element);
var current;
if(this.head==null)
{
this.head=node;
}

else{
 current=this.head;
 while(current.next!=null)
 {
 current=current.next;
 }
current.next=node;
}
    this.size++;
    
}

getsize()
{
return this.size;
}

printListData()
{ var string=" ";
  let current=this.head;
  while(current)
    {
    string=string+" "+current.data;
    current=current.next;
    }
    return string;
}
deleteElement(element)
{
    if(element==undefined||element==null)
    {
        console.log("enter correct number");
        return null;
    }
  
    
 var current=this.head;

  while(current.next!=null)
  {
    
  if(current.next.data==element)
  {
      console.log(current.next.data);
   current.next=current.next.next;
   return true;
  }
  

  current=current.next;
}
}
}

module.exports={
   LinkedList
}