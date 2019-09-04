//Flip Coin and print percentage of Heads and Tails
//I/P -> The number of times to Flip Coin. Ensure it is positive integer.
//Logic -> Use Random Function to get value between 0 and 1. If < 0.5 then tails or heads
//O/P -> Percentage of Head vs Tails
import java.util.*;
class Coin
{
public static void main(String args[]) throws Exception
{
       int s1,tail=0,head=0;
        Scanner sc=new Scanner(System.in);
         System.out.println("number of flips");
         s1=sc.nextInt(); 
         System.out.println("number of flips"+s1 );
for(int i=0;i<s1;i++)
{
        if(Math.random()<0.5)
          {
         
         tail++;
         }
      else{
            
            head++;

    }       }

int percentagehead=s1%head;
int percentagetail=s1%tail;
System.out.println(percentagehead);
System.out.println(percentagetail);
        
    }
}

