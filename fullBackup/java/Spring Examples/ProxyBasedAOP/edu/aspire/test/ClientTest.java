package edu.aspire.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import edu.aspire.Performer;

public class ClientTest {
	public static void main(String[] args) throws Exception {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext_proxy_based_aop.xml");
		Performer pRef = (Performer) context.getBean("proxybean");
		pRef.perform();
	}
}
