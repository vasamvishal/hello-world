import java.util.*;
class Windchill
{
public static void main(String args[])
{
Scanner sc=new Scanner(System.in);
System.out.println("enter no less than 50");

double t=Double.parseDouble(args[0]);
System.out.println("enter no less than 120 and graether than 3");
double v=Double.parseDouble(args[0]);
double c=(0.4275*t-35.75);
if(t<50&&v<120&&v>3)
{
double w=35.74 + 0.6215*t+(c)*Math.pow(v,0.16);
System.out.println(w);
}
else
{
System.out.println("not available");
}
}
}


