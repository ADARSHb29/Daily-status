package edu.aspire.tx.programmatic;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringContextUtils {
	private static ApplicationContext context;
	static {
		context = new ClassPathXmlApplicationContext(
				"applicationContext_Programatic_Tx.xml");
	}

	public static ApplicationContext getContext() {
		return context;
	}
}
