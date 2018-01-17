//ClientProgrammaticTx.java
import org.springframework.context.ApplicationContext;

import edu.aspire.tx.programmatic.ITransferMoney;
import edu.aspire.tx.programmatic.SpringContextUtils;

public class ClientProgrammaticTx {
	public static void main(String[] args) {
		ApplicationContext context = SpringContextUtils.getContext();
		ITransferMoney transMoney = (ITransferMoney)context.getBean("transferMoney");
		transMoney.transfer(1, 1);
		System.out.println("successfully transferred...");
	}
}
