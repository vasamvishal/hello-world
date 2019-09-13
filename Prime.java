
import java.util.*;
class Prime
{
void print(int num)
{
 for(int i=2;i*i<=num;i++)
{
while(num%i==0)
{

System.out.println(i);
 

num=num/i;

}
}
}
public static void main(String args[]) 
{

//Scanner sc=new Scanner(System.in);
System.out.println("number of values");
Scanner sc=new Scanner(System.in);
int num=sc.nextInt();
Prime p=new Prime(); 
p.print(num);


}
}
 


