package com.example.MIS_Project.Controller;

import com.example.MIS_Project.Model.Attachments;
import com.example.MIS_Project.Service.AttachmentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/attachments")
public class AttachmentsController {

    @Autowired
    private AttachmentsService attachmentsService;

    // Create or update an attachment
    @PostMapping
    public ResponseEntity<Attachments> saveAttachment(
            @RequestParam("file") MultipartFile file,
            @RequestParam("policyNumber") String policyNumber,
            @RequestParam("documentType") String documentType,
            @RequestParam("documentPath") String documentPath) {

        // Create a new Attachments object from request parameters
        Attachments attachment = new Attachments();
        attachment.setPolicyNumber(policyNumber);
        attachment.setDocumentType(Attachments.DocumentType.valueOf(documentType));
        attachment.setDocumentPath(documentPath);

        // Save the file, if needed
        // For example, save the file to a directory and store its path in documentPath

        // Save the attachment to the database
        Attachments savedAttachment = attachmentsService.saveAttachment(attachment);
        return ResponseEntity.ok(savedAttachment);
    }

    // Get all attachments
    @GetMapping
    public ResponseEntity<List<Attachments>> getAllAttachments() {
        List<Attachments> attachments = attachmentsService.getAllAttachments();
        return ResponseEntity.ok(attachments);
    }

    // Get a specific attachment by ID
    @GetMapping("/{id}")
    public ResponseEntity<Attachments> getAttachmentById(@PathVariable Long id) {
        Optional<Attachments> attachment = attachmentsService.getAttachmentById(id);
        return attachment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Get all attachments for a specific policy number
    @GetMapping("/policy/{policyNumber}")
    public ResponseEntity<List<Attachments>> getAttachmentsByPolicyNumber(@PathVariable String policyNumber) {
        List<Attachments> attachments = attachmentsService.getAttachmentsByPolicyNumber(policyNumber);
        return ResponseEntity.ok(attachments);
    }

    // Delete an attachment by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAttachmentById(@PathVariable Long id) {
        attachmentsService.deleteAttachmentById(id);
        return ResponseEntity.noContent().build();
    }
}
