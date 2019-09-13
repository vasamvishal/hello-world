class InsertionString
{

static void insertionString(String str[],int n)
{

for(int i=1;i<n;i++)
{
int j;
String temp=str[i];

j=i-1;

while (j>= 0) {
            if (temp.compareTo(str[j]) < 0) {
                break;
            }
            str[j + 1] = str[j];
            j--;
        }}
        str[j + 1] = temp;


System.out.println(Arrays.toString(str));
}

for(int i=0;i<n;i++)
{
System.out.print(str[i]);

}
}

}
public static void main(String args[])
{
long millis_startTime1 = System.currentTimeMillis();
 String str[]=new String[100];
         System.out.println("For String");
       int n1=sc.nextInt();
         System.out.println("Enter the Elements ");
       for(int j=0;j<=n1;j++)
      {
        str[j]=sc.nextLine();
       }

        insertionString(str,n);
   long millis_endTime2 = System.currentTimeMillis(); 
     System.out.println("Time taken in milli seconds: "
                           + (millis_endTime2- millis_startTime1));
}
}

