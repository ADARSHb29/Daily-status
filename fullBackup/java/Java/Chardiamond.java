import java.util.*;
import java.io.*;
class Chardiamond
{
	public static void main(String args[])
	{
	  int i=0,k=0,n,j,b,st=1,m;char abc=65;
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
      	for(j=0;j<=i;j++)
      	{
      		if(abc!=91){
                  System.out.print(abc++ + " ");
                  }
                  else
                  {abc=89;
                     System.out.print(abc-- + " ");
                  }
      	}
      	System.out.print("\n");
      }
      int inv=n-1;
      for(i=1;i<n;i++)
      {
      	for(m=0;m<i;m++)
      	{
           System.out.print(" ");
      	}
      	for(j=inv;j>0;j--)
      	{
                  abc-=1;
           System.out.print(abc + " ");
      	}
            inv-=1;
      	for(m=0;m<i;m++)
      	{
           System.out.print(" ");
      	}
      	System.out.print("\n");
      }
	}
}