package edu.aspire.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import edu.aspire.Performer2;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("/applicationContext_annotation_based_aop.xml")
public class AspectTest2 {
	@Autowired
	ApplicationContext context;

	@Test
	public void audienceShouldApplaud() throws Exception {
		Performer2 eddie = (Performer2) context.getBean("eddie");
		eddie.perform();
	}
}
