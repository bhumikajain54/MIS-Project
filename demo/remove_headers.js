const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src', 'app');
const regex = /<app-header><\/app-header>\s*/g;

function walkDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.html') && !fullPath.includes('public-layout')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<app-header>')) {
                let newContent = content.replace(regex, '');
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log('Cleaned ' + fullPath);
            }
        }
    });
}

walkDir(directory);
