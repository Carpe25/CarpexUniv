const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\jaytc\\.gemini\\antigravity\\brain\\f062998b-7e05-4598-a65c-860211f06801';
const destDir = path.join(__dirname, 'public', 'lookbook');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir);
let count = 1;
files.forEach(file => {
    if (file.startsWith('jewelry_') && file.endsWith('.png')) {
        const destPath = path.join(destDir, `jewel${count}.png`);
        fs.copyFileSync(path.join(sourceDir, file), destPath);
        console.log(`Copied ${file} to jewel${count}.png`);
        count++;
    }
});
