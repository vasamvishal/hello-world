import java.util.*;
class Vendor
{

public static void main(String args[])
{
int arr[]={1000,500,200,100,20,50,10,5,2,1};
int num=Integer.parseInt(args[0]);
for(int i=0;i<arr.length;i++)
{

if(num>=arr[i])
{
int sum=num/arr[i];
System.out.println("no of notes "+arr[i]+sum);
num=num-arr[i]*sum;
}
}
}
}

