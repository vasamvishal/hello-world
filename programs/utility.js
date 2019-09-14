
module.exports ={
input()
{
var readline=require('readline-sync')        
return readline;
},

Array2d(row,col)
{ 
var Utility=require('./utility');
var readline=Utility.input()
var geek=new Array(row);
for(let k=0;k < row;k++)
{
geek[k]=new Array(col);
}
for(let k=0;k < row;k++)
{
console.log(geek[k]);
}
console.log("enter the number");
for(let i=0;i<row;i++)
{
 for(let j=0;j<col;j++)
{
  geek[i][j]=readline.question(" ");
}
}
console.log("enter the output");
console.log(geek);
return geek;
},

anagram(str,str1)
{ 
let a = 0;
if (str.length != str1.length)
 {
console.log("not anagram");
return;
 }
var string1 = str.toLowerCase().split('').sort().join('');
var string2 = str1.toLowerCase().split('').sort().join('');
for (var i = 0; i <str.length; i++) {
if (string1[i] == string2[i])  {
a++;
}
else { }
}
if (a == string1.length) {
console.log("anagaram");
 }
else { console.log("not anagram");
}

},

couponNumberGenerator()
{
var Utility = require('../../Utility/programs/utility'); 
var readline = Utility.input();
var num=readline.question("enter the no you want to enter ");
var  letters=["a","b","c","d","e","f","g","h","s","i","j","k","l","m","n","o","1","2","3","4","5","6","7","8","9","10"];  
coupon="";
random =(Math.random()*num);
while(random>0)
{	
coupon=letters[Math.floor(random % letters.length)];
random= Math.floor(random/letters.length);
}
console.log("Coupon: "+coupon);
},

harmonic(str)
{var add=0;
if(str>0)
{
for(var i=1;i<=str;i++)
{add=add+1.0/i;  
}
console.log(add);
}
},

Gambler(goal,stack,n)
{let bet=0;
let loss=0;
let win=0;
for(let i=0;i<n;i++)
{
var cash=stack;
while(cash>0 && cash<goal)
{
bet++;
if(Math.random()<0.5)
cash++;
else
cash--;
}
if(cash==goal)
win++;  
}
loss=n-win;
console.log(win);
let perwin=(win/n)*100;
console.log(perwin );
let perloss=(loss/n)*100;
console.log(perloss);
},

leapYear(year)
{
if((year%400==0) || (year%4==0)&&(year%100!=0))
{console.log("leap year",year);
}
else{ console.log(year+" is not leap year");
}
},

stringrep(string1,string2)
{
if(string2.length<=3)
{
console.log("enter character more than 3");
return;
}
else
{
var arr=string1.split(" ");
var replacedString=string1.replace('<<UserName>>',string2);
var arrChanged=replacedString.split(" ");
console.log(arrChanged);
}
},

prime(str)
{
let add= 0;
let increment=" ";
for(var i=1;i<=str;i++)
{
for(var num=1;num<=i;num++)
 {
if(i%num==0)
{
add++; }
}
if(add==2)
{
add=0;
increment=increment+" "+i;
}
else{
add=0;
}  
}
console.log(increment);
return increment;
},

palindrome(array)
{
var increment=" ";
for(let i=2;i<array.length;i++)
{
var number=array[i];
var num1=number;
var final=0;
while(number!=0)
{
let rem = number%10;
number = Math.floor(number/10);  
final = final*10+rem; 
}
if(final==num1)
{ 
increment=increment+' '+num1;
}
}
console.log("palindrome nos are");
console.log(increment);
},

randomnum(flip)
{
var tail=0;
var head=0;
for(var i=0;i<flip;i++)
{
if(Math.random()>0.50)
{tail++;
}
else
{head++; }
}   
console.log(head);
console.log(tail);           
var percentageHead=(head/flip)*100;
var percentageTail=(tail/flip)*100;
console.log (percentageHead);
console.log(percentageTail);
},

quadratic(a,b,c)
{
var delta = b*b-4*a*c; 
var delta1=Math.abs(delta);
console.log("delta value is",delta1);
var sqrt=Math.sqrt(delta1);
console.log("sqrt value is",sqrt);
var root1 = (-b+sqrt/2*a); 
var root2 = (-b-sqrt/2*a); 
console.log(root1);
console.log(root2);
},

bubbleSort(row,arr)
{
for(let i=0;i<row-1;i++)
{
for(var j=0;j<row-i-1;j++)
{
if(arr[j]>arr[j+1])
{  
temp=arr[j];
arr[j]=arr[j+1];
arr[j+1]=temp;
}
}
}
console.log(arr);
},

insertionSort(row,arr)
{
console.log(arr);
for(var i=1;i<row;i++)
{
var temp=arr[i];
for(var j=i-1;j>=0 && arr[j]>temp;j--)
{
arr[j+1]=arr[j];
}
arr[j+1]=temp;
}
console.log(arr);
},


array1D(row)
{
var Utility=require('./utility');
var readline=Utility.input()
let arr=new Array(2);
console.log("enter the number");
for(let i=0;i<row;i++)
{
arr[i]=readline.question("");
}
return arr;
},

Atm(amount)
{
let arr=['1','2','5','10','20','50','100','200','500','2000'];
// var notes=[];
let a=arr.length;
for(let i=a-1;i>0;i--)
{
if(amount >= arr[i])
{
 sum=Math.floor(amount/arr[i]);
 amount=amount-arr[i]*sum;
  console.log(arr[i]+"*"+sum);
}
}
},

temperatureConversion(farheniet)
{
var celcius=(farheniet-32)*5/9;
var farhenit=(celcius*5/9)+32;
console.log(celcius);
console.log(farhenit);
},


Anagram: function(str1,str2)
{
  
if(str1.length!=str2.length)
return false;
else
{
var string1 = [];
var string2 = [];
string1 = str1.split('').sort().join('');
string2 = str2.split('').sort().join('');
for(var i = 0;i<str1.length;i++)
{
if(string1[i]!=string2[i])
{
return false;
break;
}	
}
return true;
}
},

binarysearch:function recursivefunction(arr,x,start,end)
{  
if(start>end)
{
return false;
}
var mid=Math.floor((start+end)/2);
if(arr[mid]==x)
{
return true;
}
if(arr[mid]>x)
{
return recursivefunction(arr,x,start,mid-1);
}
if(arr[mid]<x)
{
return recursivefunction(arr,x,mid+1,end);
}
},

}
