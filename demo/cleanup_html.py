import os
import re

directory = r"d:\Working file\Job1\demo\src\app"

pattern = re.compile(r'(<!--.*?-->\s*)?<header>.*?</header>\s*<div class="sidebar"[^>]*>.*?</div>\s*', re.DOTALL)

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.html') and 'layout' not in file and 'dashboard' not in file:
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if '<div class="sidebar"' in content:
                new_content = pattern.sub('', content)
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Cleaned {filepath}")
