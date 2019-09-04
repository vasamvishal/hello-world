import java.util.*;
class Quadratic
{
public static void main(String args[])
{
Scanner sc=new Scanner(System.in);
System.out.println("enter the numbers");
double a=sc.nextInt(); 
double b=sc.nextInt();
double c=sc.nextInt();

System.out.println(a+"+x*x+"+b+"+x+"+c);
double delta =Math.abs(b*b-4*a*c);
double x1=(-b+Math.sqrt(delta))/2*a;
double x2=(-b-Math.sqrt(delta))/2*a;

System.out.println(delta);
System.out.println(x1);
System.out.println(x2);
 
}
}
