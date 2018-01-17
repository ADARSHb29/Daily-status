package edu.aspire.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import edu.aspire.Performer1;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("/applicationContext_declarative_based_aop.xml")
public class AspectTest1 {
	@Autowired
	ApplicationContext context;

	@Test
	public void audienceShouldApplaud() throws Exception {
		Performer1 eddie = (Performer1) context.getBean("eddie");
		eddie.perform();
	}
}
