import java.util.*;
import java.io.*;
import java.lang.*;
class Sample{
	public static void main(String args[])
	{
		Scanner sc=new Scanner(System.in);
		char[] a=new char[100];
		System.out.println("enter the string");
        a=sc.next().toCharArray();
        System.out.println(a);
        int p=0,count=0,k=0,i,r;
        int n=a.length;
        char[] a1=new char[100];
        char[] rpt=new char[100];
        for(int l=0;l<n;l++){a1[l]=a[l];}
        for(i=0;i<n;i++)
        {
        	if(a1[i]==a1[i+1])
        	{
        		rpt[k]=a1[i];k++;
        		a1[i]='#';
        		a1[i+1]='@';
        	}
        }
        for(r=0;r<k;r++)
        {
        	for(i=0;i<n;i++)
        	{
        		if(a1[i]==rpt[r])
        		{
        			a1[i]='#';
        		}
        	}
        }
        System.out.print(a1);        
	}
}