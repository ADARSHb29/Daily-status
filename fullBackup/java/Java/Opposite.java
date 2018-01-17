import java.util.*;
import java.io.*;
class Opposite
{
	public static void main(String args[])
	{
		int i=0,n,j,m,y;
	  Scanner sc=new Scanner(System.in);
	  System.out.println("enter the rows");
      n=sc.nextInt();y=n;
      for(i=0;i<n;i++)
      {
      	for(m=0;m<i;m++)
      	{
           System.out.print(" ");
      	}
      	for(j=y;j>0;j--)
      	{
           System.out.print("*" + " ");
      	}
        y-=1;
      	for(m=0;m<i;m++)
      	{
           System.out.print(" ");
      	}
      	System.out.print("\n");
      }
	}
}