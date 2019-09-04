import java.util.*;
class Insertion
{
static void insertion(int arr[],int n)

{

for(int i=1;i<n;i++)
{
int j;
int temp=arr[i];
for( j=i-1;j>=0&&arr[j]>temp;j--)
{
  arr[j+1]=arr[j];
}
arr[j+1]=temp;


}

for(int i=0;i<n;i++)
{
System.out.print(arr[i]);

}

}


}

public static void main(String args[])
{
long millis_startTime = System.currentTimeMillis();
int arr[]=new int[100];
   
Scanner sc=new Scanner(System.in);
 System.out.println("For integer");
 int n=sc.nextInt();
 System.out.println("Enter the Elements ");
for(int i=0;i<n;i++)
       { 
       arr[i]=sc.nextInt();
           } 

    insertion(arr,n); 
long millis_endTime = System.currentTimeMillis(); 
 System.out.println("Time taken in milli seconds: "
                           + (millis_endTime - millis_startTime));

}
}


