import json
import os
import re

files_to_update = set([
    r'MIS_Project\src\main\java\com\example\MIS_Project\auditing\ApplicationAuditAware.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\config\CorsConfig.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Controller\AccountManagerController.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Service\AgentPOSService.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Service\AttachmentsService.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Service\AuthenticationService.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Service\ClientService.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Service\EmailService.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Service\ExcelUpdatesService.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Service\InsuranceCompanyService.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Service\InsurerService.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Service\OCRDataService.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Service\PolicyHealthService.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Service\PolicyLifeService.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Service\PolicyMotorService.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Service\PolicyNonMotorService.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Service\PolicyService.java',
    r'MIS_Project\src\main\java\com\example\MIS_Project\Service\PremiumService.java'
])

for f in files_to_update:
    path = os.path.join(r'd:\Working file\Job1', f)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Check if already suppressed
        if '@SuppressWarnings(\"null\")' in content:
            continue
            
        # Find the public class declaration
        class_decl_match = re.search(r'public class \w+', content)
        if class_decl_match:
            new_content = content[:class_decl_match.start()] + '@SuppressWarnings(\"null\")\n' + content[class_decl_match.start():]
            with open(path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print('Updated ' + f)

