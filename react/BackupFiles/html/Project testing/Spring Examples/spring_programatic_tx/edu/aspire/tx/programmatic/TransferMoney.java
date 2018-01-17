package edu.aspire.tx.programmatic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

public class TransferMoney implements ITransferMoney {
	@Autowired
	private TransactionTemplate txTemplate;

	public void transfer(final int fromAccNo, final int toAccNo) {
		final ApplicationContext context = SpringContextUtils.getContext();
		// txTemplate.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRES_NEW);
		// txTemplate.setIsolationLevel(TransactionDefinition.ISOLATION_DEFAULT);
		txTemplate.execute(new TransactionCallback() {
			public Object doInTransaction(TransactionStatus arg0) {
				try {
					WithdrawDaoImpl withdrawDao = (WithdrawDaoImpl) context
							.getBean("withdrawDao");
					Withdraw w = withdrawDao.read(fromAccNo);	//SELECT
					w.setAmount(w.getAmount() - 100);
					withdrawDao.update(w);						//UPDATE

					//if(true) throw new Exception();

					DepositDaoImpl depositDao = (DepositDaoImpl) context
							.getBean("depositDao");
					Deposit d = depositDao.read(toAccNo);		//SELECT
					d.setAmount(d.getAmount() + 100);
					depositDao.update(d);						//UPDATE
				} catch (Exception e) {
					System.out.println("catch block....");
					e.printStackTrace();
					arg0.setRollbackOnly();
				}

				return null;
			}
		});

	}
}
