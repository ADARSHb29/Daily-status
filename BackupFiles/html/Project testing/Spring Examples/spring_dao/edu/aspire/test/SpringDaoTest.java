package edu.aspire.test;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import edu.aspire.dao.AccountDao;
import edu.aspire.model.Account;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("/applicationContext_dao.xml")
public class SpringDaoTest {
	@Autowired
	ApplicationContext context;
	
	@Test
	public void testSpringDao() {
		AccountDao accDao = (AccountDao)context.getBean("accdao");
		
		Account account = new Account();
		account.setAccno(2);
		account.setAccName("Aspire");
		account.setAccType("Current");
		account.setBal(1000.00);
		
		accDao.save(account);
	}
}
