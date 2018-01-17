package edu.aspire.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import edu.aspire.bean.GreetingService;
import edu.aspire.config.AppConfig;

public class HelloApp {
	public static void main(String[] args) {
		// Spring Framework
		
		ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class); 

		GreetingService gs1 = (GreetingService) context.getBean("gs1");
		GreetingService gs2 = (GreetingService) context.getBean("gs2");

		gs1.sayGreeting();
		gs2.sayGreeting();
	}
}
