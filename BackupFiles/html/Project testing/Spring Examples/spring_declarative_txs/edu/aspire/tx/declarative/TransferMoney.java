package edu.aspire.tx.declarative;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Component("transfermoney")
@Transactional(propagation=Propagation.REQUIRED)
public class TransferMoney implements ITransferMoney{
	public void transfer(final int fromAccNo, final int toAccNo) {
		final ApplicationContext context = SpringContextUtils.getContext();
		WithdrawDaoImpl withdrawDao = (WithdrawDaoImpl) context
				.getBean("withdrawDao");
		Withdraw w = withdrawDao.read(fromAccNo);	//SELECT
		w.setAmount(w.getAmount()-100);
		withdrawDao.update(w);						//UPDATE

		DepositDaoImpl depositDao = (DepositDaoImpl) context
				.getBean("depositDao");
		Deposit d = depositDao.read(toAccNo);		//SELECT
		d.setAmount(d.getAmount()+100);				//UPDATE
		depositDao.update(d);
	}
}