import java.util.*;
class Gambler
{
public static void main(String args[])
{
int goal;

Scanner sc=new Scanner(System.in);

int bet=0;
int loss=0;
System.out.print("enter the goal");
goal=sc.nextInt();
System.out.print("enter the stack");
int stack=sc.nextInt();
System.out.print("enter the no of times");
int n=sc.nextInt();
int win=0;
int cash=stack;

for(int i=1;i<=n;i++)

{
while(cash>0&&cash<goal)
{
bet++;
System.out.println(bet);


if(Math.random()>0.5)
{
cash++;

win++;
System.out.println("reached win");
System.out.println(win );
}
else
{
cash--;
loss++;
System.out.println("reached loss");
System.out.println(loss );
}
}

if(cash==goal)
{
System.out.println("reached goal");
System.out.println(cash);

break;
}
}

System.out.println(win );
System.out.println(loss );
try
{

int perwin=n/win;
System.out.println(perwin );
int perloss=n/loss;
System.out.println(perloss);
}
catch(Exception e)
{
System.out.println(e);
}
}

}







