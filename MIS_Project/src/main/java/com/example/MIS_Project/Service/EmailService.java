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

    public void sendPasswordResetEmail(String recipientEmail, String tempPassword) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(recipientEmail);
            helper.setSubject("MIS Insurance Portal - Password Reset");
            helper.setText("Dear User,\n\nYour password has been reset. Your temporary password is:\n\n" 
                    + tempPassword + "\n\nPlease login using this password and change it under settings.\n\nRegards,\nMIS Team");

            mailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void sendOtpEmail(String recipientEmail, String otpCode) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(recipientEmail);
            helper.setSubject("MIS Insurance Portal - Password Reset OTP Code");
            helper.setText("Dear User,\n\nYour OTP for resetting your password is:\n\n" 
                    + otpCode + "\n\nThis OTP is valid for 10 minutes. Do not share this OTP with anyone.\n\nRegards,\nMIS Team");

            mailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
            throw new IllegalArgumentException("Failed to send OTP email. Please check email address or server mail settings: " + (e.getCause() != null ? e.getCause().getMessage() : e.getMessage()));
        }
    }
}

