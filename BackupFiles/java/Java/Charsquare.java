import java.util.*;
import java.io.*;
class Charsquare
{
	public static void main(String args[])
	{
       int a[][]=new int[100][100];int n;char abc=65;
       Scanner sc=new Scanner(System.in);
       System.out.println("enter the no of rows:");
       n=sc.nextInt();
       for(int i=0;i<n;i++)
       {
       	for(int j=0;j<n;j++)
       	{
       		 if(abc!=91){
      		System.out.print(abc++ + " ");
                  }
                  else
                  {abc=65;
                     System.out.print(abc++ + " ");
                  }
       	}
       	System.out.print("\n");
       }
	}
}