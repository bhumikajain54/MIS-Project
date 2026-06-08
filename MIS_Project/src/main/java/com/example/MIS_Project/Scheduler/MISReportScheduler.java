package com.example.MIS_Project.Scheduler;

import com.example.MIS_Project.Service.EmailService;
import com.example.MIS_Project.Repository.PolicyRepository; // Assuming a PolicyRepository exists
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class MISReportScheduler {

    @Autowired
    private EmailService emailService;

    @Autowired
    private PolicyRepository policyRepository;

    @Scheduled(cron = "0 0 11 * * FRI")
    public void sendWeeklyReports() {
        // Fetch all policy numbers from the policy table
        policyRepository.findAllPolicyNumbers()
                .forEach(policyNumber -> emailService.sendPolicyEmail((String) policyNumber, "recipient@example.com"));
    }
}
