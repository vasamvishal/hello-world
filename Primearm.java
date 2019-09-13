import java.util.*;
class Primearm
{
  void prime(int number)
{

for(int i=1;i<=number;i++)
{

int count=0;
for(int num=i;num>=1;num--)
{
if(i%num==0)
{
count=count+1;
}
}
if(count==2)
{
System.out.print(" "+i);

def(i);


//abc(i);
}
}
}


 void def(int n)
{
int sum=0;
while(n!=0)
//System.out.println(n);

{
int rem=n%10;
 sum=sum+rem*rem*rem;
rem=rem/10;


}
if(n==sum)
{

System.out.println(n);

}
}


//}
//static void abc(int n)
//{
//int sum=0;
//while(n!=0)
//{
//int rem=n%10;
//sum=sum*10;
//rem=rem/10;
//}


//if(n==sum)
//{
//System.out.println("armstrong number");
//}
//}

public static void main(String args[])
{
Primearm p=new Primearm();
//System.out.println("armstrong number");
p.prime(10);

}}

