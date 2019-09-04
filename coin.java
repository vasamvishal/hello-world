Flip Coin and print percentage of Heads and Tails
I/P -> The number of times to Flip Coin. Ensure it is positive integer.
Logic -> Use Random Function to get value between 0 and 1. If < 0.5 then tails or heads
O/P -> Percentage of Head vs Tails

class Coin
{
public static void main(String args[])
{
       int s1,tail=0,head=0;
        Scanner sc=new Scanner(System.in);
        int s1=sc.nextInt(); 
         System.out.print("number of flips"+s1 );
        if(Math.Random<0.5)
          {
System.out.println("tail");
tail++;
         }
else{
System.out.println("heads");
head++;

}

int percentagehead=s1%head;
int percentagetail=s1%tail;
        
    }
}

