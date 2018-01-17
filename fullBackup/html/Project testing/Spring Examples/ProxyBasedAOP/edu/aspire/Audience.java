package edu.aspire;

import java.lang.reflect.Method;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.springframework.aop.AfterReturningAdvice;
import org.springframework.aop.MethodBeforeAdvice;
import org.springframework.aop.ThrowsAdvice;

public class Audience implements MethodBeforeAdvice, AfterReturningAdvice, ThrowsAdvice, MethodInterceptor {
	@Override
	public void before(Method method, Object[] data, Object target) throws Throwable {
		System.out.println("The audience is taking their seats.");
	}

	/*
	 * @Override public void before(Method method, Object[] data, Object target)
	 * throws Throwable { System.out.println(
	 * "The audience is turning off their cellphones"); }
	 */

	@Override
	public void afterReturning(Object returnValue, Method method, Object[] data, Object target) throws Throwable {
		System.out.println("CLAP CLAP CLAP CLAP CLAP");
	}

	public void afterThrowing(Method method, Object[] data, Object target, PerformanceException e) {
		System.out.println("Boo! We want our money back!");
	}

	@Override
	public Object invoke(MethodInvocation joinpoint) throws Throwable {
		Object obj = null;
		long start = System.currentTimeMillis();

		obj = joinpoint.proceed();

		long end = System.currentTimeMillis();
		System.out.println("***The performance took***:" + (end - start) + " milliseconds");
		return obj;
	}
}