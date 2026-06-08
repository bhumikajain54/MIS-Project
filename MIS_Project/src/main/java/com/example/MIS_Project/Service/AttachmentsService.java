package com.example.MIS_Project.Service;
import com.example.MIS_Project.Model.Attachments;
import com.example.MIS_Project.Repository.AttachmentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@SuppressWarnings("null")
public class AttachmentsService {

    @Autowired
    private AttachmentsRepository attachmentsRepository;

    // Save or update an attachment
    public Attachments saveAttachment(Attachments attachment) {
        return attachmentsRepository.save(attachment);
    }

    // Fetch all attachments
    public List<Attachments> getAllAttachments() {
        return attachmentsRepository.findAll();
    }

    // Fetch a specific attachment by ID
    public Optional<Attachments> getAttachmentById(Long id) {
        return attachmentsRepository.findById(id);
    }

    // Fetch all attachments for a specific policy number
    public List<Attachments> getAttachmentsByPolicyNumber(String policyNumber) {
        return attachmentsRepository.findByPolicyNumber(policyNumber);
    }

    // Delete an attachment by ID
    public void deleteAttachmentById(Long id) {
        attachmentsRepository.deleteById(id);
    }
}

