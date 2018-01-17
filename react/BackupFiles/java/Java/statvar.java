class Statvar{
	static int b=0;
	static void abc()
	{
		b+=1;
	}
	int c;
public static void main(String args[])
{
	Statvar a1=new Statvar();
	a1.c=101;
	Statvar.abc();
	Statvar.abc();
	Statvar.abc();
System.out.println(a1.c);
System.out.println(b);
}
}