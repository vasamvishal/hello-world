class Anagram
{
void static anagram(string s1,string s2,int length1,int length2)

{
if(length1==length2)
{
char c[]=s1.toCharArray();
char c1[]=s2.toCharArray();
for(int i=0;i<length1-1;i++)
{
for(int j=i+1;j<length1;j++)
{
  if(c[i]>c[j])
{
  temp=c[i];
  c[i]=c[j];
  c[j]=temp;
}
}
}
}
for(int i=0;i<length2-1;i++)
{
for(int j=i+1;j<length2;j++)
{
  if(c1[i]>c1[j])
{
  temp=c1[i];
  c1[i]=c1[j];
  c1[j]=temp;
}}}
for(int i=0;i<length1;i++)
{
System.out.print(c[i]);
}
for(int i=0;i<length2;i++)
{
System.out.print(c[j]);
}
for(int i=0;i<length1;i++)
{
if(c[i]==c1[i])
{
found++;
}
else
{
notfound++;
}
}
if(found>0)
{
System.out.println("anagram");
}
else
{
System.out.println(" not anagram");
}

for(int i=0;i<length1;i++)
{
System.out.print(c[i]);
}
 public static void main(String args[])
{
Scanner sc=new Scanner(System.in);
String s1=sc.nextLine();
String s2=sc.nextLine();
int length1=s1.length();
int length2=s2.length();
anagram(s1,s2,length1,length2);
}
}
}



