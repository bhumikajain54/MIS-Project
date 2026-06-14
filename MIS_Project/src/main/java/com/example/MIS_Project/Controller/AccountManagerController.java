package com.example.MIS_Project.Controller;

import com.example.MIS_Project.Model.AccountManager;
import com.example.MIS_Project.Repository.AccountManagerRepository;
import com.example.MIS_Project.auth.RegisterRequest;
import com.example.MIS_Project.constant.Role;
import com.example.MIS_Project.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class AccountManagerController {

	@Autowired
	private AccountManagerRepository accountManagerRepository;

	@Autowired
	private AuthenticationController authenticationController;

	//get all data
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/account-managers")
	public List<AccountManager> getAllAccountManagers() {
		return accountManagerRepository.findAll();
	}

	//create
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/account-managers")
	public AccountManager createAccountManager(@RequestBody AccountManager accountManager) {
		AccountManager accMgr = accountManagerRepository.save(accountManager);
		RegisterRequest request = new RegisterRequest();
		request.setFirstname(accountManager.getName());
		request.setEmail(accountManager.getEmail());
		request.setRole(Role.ACCOUNT_MANAGER);
		request.setPassword("Welcome@1");
		authenticationController.register(request);
		return accMgr;
	}

	// get data by id
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/account-managers/{id}")
	public ResponseEntity<AccountManager> getByID(@PathVariable(value = "id") Long id) {
		AccountManager accountManager = accountManagerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Account Manager not found with id " + id + " does not exist"));
		return ResponseEntity.ok(accountManager);
	}

	//update data
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/account-managers/{id}")
	public ResponseEntity<AccountManager> updateAccountManagerByID(@PathVariable Long id, @RequestBody AccountManager accountManagerDetails) {
		AccountManager accountManager = accountManagerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Account Manager with id " + id + " does not exist"));

		accountManager.setName(accountManagerDetails.getName());
		accountManager.setEmail(accountManagerDetails.getEmail());
		accountManager.setStatus(accountManagerDetails.getStatus());
		accountManager.setLastUpdatedDate(accountManagerDetails.getLastUpdatedDate());
		accountManager.setMobile(accountManagerDetails.getMobile());
		accountManager.setAccountRole(accountManagerDetails.getAccountRole());

		AccountManager updatedAccountManager = accountManagerRepository.save(accountManager);

		return ResponseEntity.ok(updatedAccountManager);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/account-managers/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAccountManager(@PathVariable Long id) {
		AccountManager accountManager = accountManagerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Account Manager with id " + id + " does not exist"));

		accountManagerRepository.delete(accountManager);

		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}