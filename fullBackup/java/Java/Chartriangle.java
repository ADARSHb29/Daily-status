import java.util.*;
import java.io.*;
class Chartriangle
{
	public static void main(String args[])
	{
	  int i=0,k=0,n,j,b,st=1,m;
      n=7;char abc=65;
      b=n-1;
      for(i=0;i<n;i++)
      {
      	for(k=b;k>0;k--)
      	{
      		System.out.print(" ");
      	}
      	b--;
      	for(j=0;j<=i;j++)
      	{     if(abc!=91){
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