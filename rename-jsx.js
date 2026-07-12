const fs = require('fs');
const path = require('path');

function renameJsxFiles(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      renameJsxFiles(fullPath);
    } else if (item.endsWith('.jsx')) {
      // Rename .jsx to .js
      const newPath = fullPath.replace(/\.jsx$/, '.js');
      fs.renameSync(fullPath, newPath);
      console.log(`Renamed: ${fullPath} -> ${newPath}`);
    }
  }
}

function main() {
  try {
    const basePath = path.join(__dirname, 'app/learn/typescript');
    console.log(`Renaming .jsx files in: ${basePath}`);
    renameJsxFiles(basePath);
    console.log('Done! All .jsx files have been renamed to .js');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();