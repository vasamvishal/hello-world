
User Input and Replace String Template “Hello <<UserName>>, How are you?” 
I/P -> Take User Name as Input. Ensure UserName has min 3 char
Logic -> Replace <<UserName>> with the proper name
O/P -> Print the String with User Name 

class Abc
{
    public static void main(String args[])
    {
        String s1=“Hello <<UserName>>, How are you?”;
        Scanner sc=new Scanner(System.in);
        string s2;
         System.out.print("enter character more than 3" );

        s2=sc.nextLine(); 
        System.out.print(s1.replace("<<UserName>>",s2));
    }
}
