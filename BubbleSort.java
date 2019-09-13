import java.util.*; 
  
public class BubbleSort { 
 static void bubblesort()
{
 // creating an Empty Integer List 
        List<Integer> arr = new ArrayList<Integer>(4); 
  
        // using add() to initialize values 
        // [10, 20, 30, 40] 
        arr.add(50); 
        arr.add(20); 
        arr.add(30); 
        arr.add(40); 
  
        System.out.println("List: " + arr); 
        
    for(int i=0;i<arr.size()-1;i++)
      {
    for(int j=0;j<arr.size()-i-1;j++)
      {
    if (arr.get(i).compareTo(arr.get(i+1)) > 0)
      {
      int temp = arr.get(i);
                        arr.set(i,arr.get(i+1));
                        arr.set(i+1, temp);
     }
     
     
}}
 

 System.out.println("Updates list "+arr);
}



    



    public static void main(String[] args) 
    { 
       bubblesort();
  }
      
} 
