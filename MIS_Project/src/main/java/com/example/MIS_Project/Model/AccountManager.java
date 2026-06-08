package com.example.MIS_Project.Model;

import jakarta.persistence.*;

@Entity
@Table(name="account_managers_table")
public class AccountManager {

	public AccountManager() {
	}

	public AccountManager(String name, String email, long mobile, String status, String lastUpdatedDate, String accountRole) {
		super();
		this.name = name;
		this.email = email;
		this.mobile = mobile;
		this.status = status;
		this.lastUpdatedDate = lastUpdatedDate;
		this.accountRole = accountRole;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "email")
	private String email;

	@Column(name = "mobile")
	private long mobile;

	@Column(name = "status")
	private String status;

	@Column(name = "last_updated_date")
	private String lastUpdatedDate;

	@Column(name = "account_role")
	private String accountRole;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getLastUpdatedDate() {
		return lastUpdatedDate;
	}

	public void setLastUpdatedDate(String lastUpdatedDate) {
		this.lastUpdatedDate = lastUpdatedDate;
	}

	public String getAccountRole() {
		return accountRole;
	}

	public void setAccountRole(String accountRole) {
		this.accountRole = accountRole;
	}
}
