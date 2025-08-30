import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Build the application
console.log('Building the application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

// Rename server.js to server.cjs if it exists and hasn't been renamed already
const serverJsPath = path.resolve('./server.js');
const serverCjsPath = path.resolve('./server.cjs');

if (fs.existsSync(serverJsPath)) {
  console.log('Renaming server.js to server.cjs...');
  try {
    // Read the content of server.js
    const serverJsContent = fs.readFileSync(serverJsPath, 'utf8');
    
    // Write the content to server.cjs
    fs.writeFileSync(serverCjsPath, serverJsContent);
    
    console.log('server.cjs created successfully!');
  } catch (error) {
    console.error('Error renaming server.js:', error);
  }
}

// Create a README file with deployment instructions
const readmePath = path.resolve('./DEPLOYMENT.md');
const readmeContent = `# Deployment Instructions

## Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

## Steps to Deploy

1. **Upload Files**
   - Upload all files to your hosting provider
   - Make sure to include the \`dist\` directory which contains the built application

2. **Install Dependencies**
   \`\`\`
   npm install
   \`\`\`

3. **Start the Server**
   \`\`\`
   node server.cjs
   \`\`\`

4. **Environment Variables**
   - The Stripe API keys are already configured in the server.cjs file
   - If you need to change them, edit the server.cjs file directly

5. **Accessing the Application**
   - By default, the server runs on port 3000
   - Access the application at http://your-domain:3000

## Troubleshooting

- If you encounter any issues with the server, check the console output for error messages
- Make sure the server.cjs file is present and properly configured
- Verify that the dist directory contains the built application
`;

try {
  fs.writeFileSync(readmePath, readmeContent);
  console.log('Deployment instructions created successfully!');
} catch (error) {
  console.error('Error creating deployment instructions:', error);
}

console.log('Application is ready for export!'); 