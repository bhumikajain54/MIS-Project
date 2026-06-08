const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src', 'app');

function removeBlock(content, startStr, endStr) {
    let result = content;
    while (true) {
        const startIdx = result.indexOf(startStr);
        if (startIdx === -1) break;
        const endIdx = result.indexOf(endStr, startIdx);
        if (endIdx === -1) break;
        result = result.substring(0, startIdx) + result.substring(endIdx + endStr.length);
    }
    return result;
}

function walkDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.html') && !fullPath.includes('layout') && !fullPath.includes('dashboard')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Remove <header>...</header>
            content = removeBlock(content, '<header>', '</header>');
            
            // Remove <!-- <header>...</header> -->
            // Actually they might be inside large comments. We can remove large comments entirely if they match the old layout comment pattern.
            content = removeBlock(content, '<!-- <header>', '</div> -->');

            // Remove <div class="sidebar" ... </ul> \n  </div>
            // Notice that the sidebar block ends with </ul>\n  </div>.
            content = removeBlock(content, '<div class="sidebar"', '</ul>\n  </div>');
            content = removeBlock(content, '<div class="sidebar"', '</ul>\r\n  </div>');
            content = removeBlock(content, '<div class="sidebar"', '</ul>\n    </div>');
            content = removeBlock(content, '<div class="sidebar"', '</ul>\r\n    </div>');
            
            // For posp.component.html and others, the sidebar might end differently.
            // Let's just find <div class="sidebar" and the next </div> that has </ul> before it.
            let sidebarStart = content.indexOf('<div class="sidebar"');
            while(sidebarStart !== -1) {
                let ulEnd = content.indexOf('</ul>', sidebarStart);
                if (ulEnd !== -1) {
                    let divEnd = content.indexOf('</div>', ulEnd);
                    if (divEnd !== -1) {
                        content = content.substring(0, sidebarStart) + content.substring(divEnd + 6);
                    } else break;
                } else break;
                sidebarStart = content.indexOf('<div class="sidebar"');
            }

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Cleaned ' + fullPath);
            }
        }
    });
}

walkDir(directory);
