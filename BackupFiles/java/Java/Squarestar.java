import java.util.*;
import java.io.*;
class Squarestar
{
	public static void main(String args[])
	{
       int a[][]=new int[100][100];int n;
       Scanner sc=new Scanner(System.in);
       System.out.println("enter the no of rows:");
       n=sc.nextInt();
       for(int i=0;i<n;i++)
       {
       	for(int j=0;j<n;j++)
       	{
       		System.out.print("*");
       	}
       	System.out.print("\n");
       }
	}
}