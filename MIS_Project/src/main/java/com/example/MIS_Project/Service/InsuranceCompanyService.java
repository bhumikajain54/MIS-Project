package com.example.MIS_Project.Service;
import com.example.MIS_Project.Model.InsuranceCompany;
import com.example.MIS_Project.Repository.InsuranceCompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class InsuranceCompanyService {

    @Autowired
    private InsuranceCompanyRepository repository;

    public InsuranceCompany saveInsuranceCompany(InsuranceCompany insuranceCompany) {
        return repository.save(insuranceCompany);
    }

    public InsuranceCompany getInsuranceCompany(String id) {
        return repository.findById(id).orElse(null);
    }

    public List<InsuranceCompany> getAllInsuranceCompanies() {
        return repository.findAll();
    }

    public void deleteInsuranceCompany(String id) {
        repository.deleteById(id);
    }
}
