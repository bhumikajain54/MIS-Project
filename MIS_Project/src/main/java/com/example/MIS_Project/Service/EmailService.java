package com.example.MIS_Project.Service;


import com.example.MIS_Project.Model.MISReport;
import com.example.MIS_Project.Model.Policy;
import com.example.MIS_Project.Repository.MISReportRepository;
import com.example.MIS_Project.Repository.PolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import java.time.LocalDateTime;

@Service
@SuppressWarnings("null")
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private PolicyRepository policyRepository;

    @Autowired
    private MISReportRepository misReportRepository;

    public void sendPolicyEmail(String policyNumber, String recipientEmail) {
        Policy policy = policyRepository.findById(policyNumber)
                .orElseThrow(() -> new IllegalArgumentException("Policy not found"));

        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(recipientEmail);
            helper.setSubject("Policy Details: " + policy.getPolicyName());
            helper.setText("Policy Number: " + policy.getPolicyNumber() +
                    "\nPolicy Name: " + policy.getPolicyName());

            mailSender.send(message);

            MISReport report = new MISReport();
            report.setReportName("Policy Email");
            report.setReportGenerationDate(LocalDateTime.now());
            report.setEmailRecipient(recipientEmail);
            report.setStatus(MISReport.Status.SENT);
            report.setPolicyNumber(policy.getPolicyNumber());

            misReportRepository.save(report);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}

