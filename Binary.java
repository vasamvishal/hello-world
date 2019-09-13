import java.util.*;
class Binary
{
public static void main(String args[])
{
int a=100;

//System.out.println(c);

//int d=a/10;
//System.out.println(a/10);
String c=Integer.toBinaryString(a);
System.out.println(c);
char chars[]=c.toCharArray();
int d=chars.length;
System.out.println(d);

System.out.println(d/2);

}
}