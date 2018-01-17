package com.empdetails.config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@ComponentScan("com.empdetails.*")
@EnableWebMvc
public class ApplicationContextConfig {
	
	 @Bean
	    public DataSource getDataSource() {
	        DriverManagerDataSource dataSource = new DriverManagerDataSource();
	        dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
	        dataSource.setUrl("jdbc:sqlserver://172.16.8.223;databaseName=ePROFILE_DEV");
	        dataSource.setUsername("eprofile");
	        dataSource.setPassword("eprofile");
	         
	        return dataSource;
	 }

	@Bean(name = "viewResolver")
    public InternalResourceViewResolver getViewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setPrefix("/WEB-INF/pages/");
        viewResolver.setSuffix(".jsp");
        return viewResolver;
    }
	
	
	 
	}
	   
	
	
	
 