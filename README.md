# MIS Project - Insurance Management Information System

This is a comprehensive backend application built using **Spring Boot** and **Java**, designed to manage various aspects of an insurance business. It acts as a Management Information System (MIS) providing features for policy tracking, document processing, and stakeholder management.

## 🚀 Features

- **Policy Management**: Complete tracking of different types of insurance policies including Life, Health, Motor, and Non-Motor.
- **Stakeholder Management**: Manage Clients, Insurers, Insurance Companies, Account Managers, and Agent/POS entities.
- **Premium & Accounts**: Track premium payments and accounting details.
- **Authentication & Security**: Secure REST APIs utilizing **Spring Security** with **JWT (JSON Web Tokens)**.
- **Document & Data Processing**:
  - **Excel Import/Export**: Seamlessly upload and download bulk data using Apache POI.
  - **OCR Integration**: Extract text and data from uploaded attachments/documents using Tess4J (Tesseract OCR).
- **Communication**: Automated Email notification capabilities via `spring-boot-starter-mail`.

## 🛠️ Technology Stack

- **Framework**: Spring Boot 3 / Java
- **Database**: MySQL (Integrated with Spring Data JPA & Hibernate)
- **Security**: Spring Security + JJWT
- **Libraries/Tools**: 
  - Lombok (Boilerplate code reduction)
  - Apache POI (Excel Data Handling)
  - Tess4J (Optical Character Recognition)
  - Jakarta Validation API

## 📂 Architecture Overview

The system follows a standard Spring Boot layered architecture:
- `Model`: Contains JPA Entities mapped to the database tables (e.g., `Client`, `PolicyLife`, `User`, `OCRData`).
- `Repository`: Spring Data JPA interfaces for database operations.
- `Service`: Business logic handling, including complex operations like Excel processing and OCR.
- `Controller`: REST controllers exposing API endpoints to the frontend.
- `Config`: Configuration files for CORS, Security, and Auditing.

## ⚙️ Setup & Installation

1. **Prerequisites**: Ensure you have Java 17+ installed, Maven, and a local/remote MySQL instance running.
2. **Database Configuration**:
   Update your database credentials in `src/main/resources/application.properties` (or `.yml`):
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/your_db_name
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```
3. **Run the Application**:
   Navigate to the `MIS_Project` directory and run:
   ```bash
   mvn spring-boot:run
   ```

## 🔒 Security
The API uses stateless JWT authentication. Clients must authenticate to receive a bearer token and include it in the `Authorization: Bearer <token>` header for subsequent requests.