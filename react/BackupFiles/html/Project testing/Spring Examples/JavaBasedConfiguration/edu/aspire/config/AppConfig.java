package edu.aspire.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import edu.aspire.bean.GreetingService;
import edu.aspire.bean.GreetingServiceImpl;

@Configuration
public class AppConfig {
	@Bean(name="gs1")
	public GreetingService getGs1(){
		GreetingServiceImpl gs = new GreetingServiceImpl();
		gs.setGreeting("Good Morning");
		return gs;
	}
	
	@Bean(name="gs2")
	public GreetingService getGs2(){
		GreetingServiceImpl gs = new GreetingServiceImpl("Good Afternoon");
		return gs;
	}
}
