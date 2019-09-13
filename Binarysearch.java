import java.util.*;
import java.lang.*;
class Binarysearch
{
 static void binary(int arr[],int first,int last,int key)
{
//System.out.println("Element found");
int mid=(first+last)/2;
while(first<=last)
{
if(arr[mid]>key)
{
 first=mid+1;
}
else if(arr[mid]==key)
{
System.out.println("Element found!");
break;
}
else
{
last=mid-1;

}
mid=(first+last)/2;
}
 
   if ( first > last ){  
      System.out.println("Element is not found!");  
   }
}


static void binarysearch(String str[],int first1,int last1,String key)
{
//System.out.println("Element found");

while(first1<=last1)
{
int mid=(first1+last1)/2;
int res=key.compareTo(str[mid]);
if(res==0)
{
System.out.println("Element is found!");
break;
}
else if(res>0)
{
first1=mid+1;
}
else{
last1=mid-1;
}


}
 
   if ( first1 > last1 ){  
      System.out.println("Element is not found!");  
   }
}








public static void main(String args[]){  
        Scanner sc=new Scanner(System.in);

       int arr[]=new int[100];
        System.out.println("For integer");
       int n=sc.nextInt();
         System.out.println("Enter the Elements ");
       for(int i=0;i<n;i++)
       { 
       arr[i]=sc.nextInt();
           } 

        int key = 30;  
        int last=arr.length-1;  
        binary(arr,0,last,key); 

        String str[]=new String[100];
         System.out.println("For String");
       int n1=sc.nextInt();
         System.out.println("Enter the Elements ");
       for(int j=0;j<=n1;j++)
      {
        str[j]=sc.nextLine();
       }
     String key1 = "def";  
int first1=0;
        int last1=str.length-1;  
        binarysearch(str,first1,last1,key1);
  
  }
}

