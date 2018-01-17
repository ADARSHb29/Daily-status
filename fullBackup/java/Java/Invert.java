import java.util.*;
import java.io.*;
class Invert
{
	public static void main(String args[])
	{
	  int i=0,k=0,n,j,b,st=2,m;
	  Scanner sc=new Scanner(System.in);
	  System.out.println("enter the rows");
      n=sc.nextInt();
      b=n-1;
      int inv=(n-1)*2-1;
      for(i=1;i<n;i++)
      {
      	for(m=0;m<i;m++)
      	{
           System.out.print(" ");
      	}
      	for(j=inv;j>0;j--)
      	{
           System.out.print("*");
      	}
            inv-=2;
      	for(m=0;m<i;m++)
      	{
           System.out.print(" ");
      	}
      	System.out.print("\n");
      }
      for(i=1;i<n-1;i++)
      {
            for(k=b-1;k>0;k--)
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