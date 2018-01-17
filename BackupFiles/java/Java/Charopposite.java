import java.util.*;
import java.io.*;
class Charopposite
{
	public static void main(String args[])
	{
		int i=0,n,j,m,y;char abc=90;
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
      	{if(abc!=64)
      		{
           System.out.print(abc-- + " ");
      		}
      		else
      		{abc=90;
      			System.out.print(abc-- + " ");
      		}
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