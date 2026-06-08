const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src', 'app');
const regex = /(?:<!--.*?-->\s*)?<header>[\s\S]*?<\/header>\s*<div class="sidebar"[^>]*>[\s\S]*?<\/div>\s*/;

function walkDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.html') && !fullPath.includes('layout') && !fullPath.includes('dashboard')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<div class="sidebar"')) {
                let newContent = content.replace(regex, '');
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log('Cleaned ' + fullPath);
            }
        }
    });
}

walkDir(directory);
