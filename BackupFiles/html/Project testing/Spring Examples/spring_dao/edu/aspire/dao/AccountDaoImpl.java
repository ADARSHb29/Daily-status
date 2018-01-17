package edu.aspire.dao;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Required;

import edu.aspire.model.Account;
public class AccountDaoImpl implements AccountDao {
	private DataSource dataSource;

	public AccountDaoImpl() {
	}

	@Required
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	@Override
	public void save(Account account) {
		// Declare resources
		Connection con = null;
		PreparedStatement pstmt = null;
		try {
			// Get connection.
			con = dataSource.getConnection();
			// Create statement.
			pstmt = con.prepareStatement("INSERT INTO account VALUES(?,?,?,?)");
			// Set parameters.
			pstmt.setInt(1, account.getAccno());
			pstmt.setString(2, account.getAccName());
			pstmt.setString(3, account.getAccType());
			pstmt.setDouble(4, account.getBal());
			// Execute statement.
			pstmt.execute();
			System.out.println("Record Inserted successfully");
		} catch (Exception e) {// Handle Exceptions
			e.printStackTrace();
		} finally {// Clean up resources to avoid memory leaks problems.
			try {
				pstmt.close();
				con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

	}

	@Override
	public Account get(int accno) {
		// Declare resources.
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		Account avo = null;
		try {
			// Get connection.
			con = dataSource.getConnection();
			// Create statement object.
			stmt = con.createStatement();
			// Prepare query.
			String query = "SELECT * FROM account WHERE ACC_NO=" + accno;
			// Execute query.
			rs = stmt.executeQuery(query);
			if (rs.next()) {
				avo = new Account();
				avo.setAccno(rs.getInt(1));
				avo.setAccName(rs.getString(2));
				avo.setAccType(rs.getString(3));
				avo.setBal(rs.getDouble(4));
			}
			// Handle exceptions
		} catch (Exception e) {
			e.printStackTrace();
		}
		// Release resources to avoid memory leaks.
		finally {
			try {
				rs.close();
				stmt.close();
				con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}

		}
		return avo;
	}

	@Override
	public void remove(int accno) {
		// TODO Auto-generated method stub

	}

	@Override
	public void update(Account accout) {
		// TODO Auto-generated method stub

	}

}
