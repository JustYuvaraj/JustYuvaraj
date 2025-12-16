import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Path to the resume file
  const filePath = path.join(process.cwd(), 'public', 'resume.pdf');
  
  try {
    // Read the file
    const fileBuffer = fs.readFileSync(filePath);
    
    // Set the appropriate headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Yuvaraj_S_Resume.pdf"');
    
    // Send the file
    res.send(fileBuffer);
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).json({ error: 'Failed to download resume' });
  }
}
