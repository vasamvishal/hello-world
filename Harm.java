//Harmonic Number 
//Desc -> Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N (http://users.encs.concordia.ca/~chvatal/notes/harmonic.html).
//I/P -> The Harmonic Value N. Ensure N != 0
//Logic -> compute 1/1 + 1/2 + 1/3 + ... + 1/N
//O/P -> Print the Nth Harmonic Value.
import java.util.*;
class Harm
{
public static void main(String args[]) 
{
double a1=1;
 Scanner sc=new Scanner(System.in);
 System.out.println("number of values");
 int n=sc.nextInt(); 
 
 for(int i=2;i<=n;i++)
 {
 a1=a1+1.0/i;
System.out.println(a1);
 }

 System.out.println("number of harmonic values"+a1);

 }
 }
