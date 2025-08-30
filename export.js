const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Files to include in the export
const filesToInclude = [
  'dist',
  'server.cjs',
  'package.json',
  'package-lock.json',
  'DEPLOYMENT.md'
];

// Create export directory
const exportDir = path.join(__dirname, 'export');
if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir);
  console.log('Created export directory');
}

// Copy files to export directory
filesToInclude.forEach(file => {
  const sourcePath = path.join(__dirname, file);
  const destPath = path.join(exportDir, file);
  
  if (fs.existsSync(sourcePath)) {
    if (fs.lstatSync(sourcePath).isDirectory()) {
      // Copy directory recursively
      copyDir(sourcePath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(sourcePath, destPath);
    }
    console.log(`Copied ${file} to export directory`);
  } else {
    console.warn(`Warning: ${file} not found`);
  }
});

console.log('\nExport completed successfully!');
console.log(`The exported files are in the ${exportDir} directory`);
console.log('Please refer to DEPLOYMENT.md for deployment instructions');

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
} 