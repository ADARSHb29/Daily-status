package edu.aspire;

import org.aspectj.lang.ProceedingJoinPoint;

public class Audience1 {
	public void takeSeats() {
		System.out.println("The audience is taking their seats.");
	}

	public void turnOffCellPhones() {
		System.out.println("The audience is turning off their cellphones");
	}

	public void applaud() {
		System.out.println("CLAP CLAP CLAP CLAP CLAP");
	}

	public void demandRefund() {
		System.out.println("Boo! We want our money back!");
	}

	public void watchPerformance(ProceedingJoinPoint joinpoint) {
		try {
			System.out.println("The audience is taking their seats.");
			System.out.println("The audience is turning off their cellphones");
			long start = System.currentTimeMillis();

			joinpoint.proceed();

			long end = System.currentTimeMillis();
			System.out.println("CLAP CLAP CLAP CLAP CLAP");
			System.out.println("The performance duration is :" + (end - start) + " milliseconds");
		} catch (Throwable e) {
			System.out.println("Boo! We want our money back!");
		}
	}
}