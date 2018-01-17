import java.util.*;
import java.io.*;
class Triangle
{
	public static void main(String args[])
	{
	  int i=0,k=0,n,j,b,st=1,m;
	  Scanner sc=new Scanner(System.in);
	  System.out.println("enter the rows");
      n=sc.nextInt();
      b=n-1;
      for(i=0;i<n;i++)
      {
      	for(k=b;k>0;k--)
      	{
      		System.out.print(" ");
      	}
      	b--;
      	for(j=0;j<i+st;j++)
      	{
      		System.out.print("*");
      	}
      	System.out.print("\n");
      	st++;
      }
	}
}