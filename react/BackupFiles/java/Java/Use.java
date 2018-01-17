abstract class A{
	abstract void randomm();
}
class Use extends A
{
    void randomm(){System.out.println("Hello1234");}
	public static void main(String args[])
	{
	  A abc=new Use();
	  abc.randomm();
	}
}