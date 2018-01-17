package edu.aspire.beans;

public class GreetingServiceImpl implements GreetingService {
	private String greeting;

	public GreetingServiceImpl() {
		System.out.println("########");
	}

	public GreetingServiceImpl(String greeting) {
		System.out.println("########");
		this.greeting = greeting;
	}

	public void setGreeting(String greeting) {
		this.greeting = greeting;
	}

	public void sayGreeting() {
		System.out.println("Hai " + greeting);
	}
}
