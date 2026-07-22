const { execSync } = require('child_process');
const path = require('path');

// Target file extensions to format
const TARGET_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.css', '.json', '.md'];

function getFiles() {
  const args = process.argv.slice(2);
  const targetAll = args.includes('--all');
  const targetModified = args.includes('--modified') || args.length === 0;
  const targetUntracked = args.includes('--untracked') || args.length === 0;

  const files = new Set();

  try {
    if (targetAll) {
      // Find all files in src/ that match our targets
      const allFiles = execSync('find src -type f', { encoding: 'utf8' })
        .split('\n')
        .filter(Boolean);
      allFiles.forEach(f => files.add(f));
    } else {
      if (targetModified) {
        // Unstaged modified files
        const diffFiles = execSync('git diff --name-only', { encoding: 'utf8' })
          .split('\n')
          .filter(Boolean);
        diffFiles.forEach(f => files.add(f));

        // Staged files
        const cachedFiles = execSync('git diff --cached --name-only', { encoding: 'utf8' })
          .split('\n')
          .filter(Boolean);
        cachedFiles.forEach(f => files.add(f));
      }

      if (targetUntracked) {
        // Untracked new files
        const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' })
          .split('\n')
          .filter(Boolean);
        statusOutput.forEach(line => {
          if (line.startsWith('?? ')) {
            files.add(line.slice(3));
          }
        });
      }
    }
  } catch (error) {
    console.error('Error fetching files from Git status:', error.message);
    process.exit(1);
  }

  // Filter files by matching target extensions and check existence
  const fs = require('fs');
  return Array.from(files).filter(file => {
    const ext = path.extname(file);
    return TARGET_EXTENSIONS.includes(ext) && fs.existsSync(file);
  });
}

function run() {
  const filesToFormat = getFiles();

  if (filesToFormat.length === 0) {
    console.log('No files to format.');
    return;
  }

  console.log(`Formatting ${filesToFormat.length} files...`);
  console.log(filesToFormat.map(f => `  - ${f}`).join('\n'));

  try {
    const fileList = filesToFormat.map(f => `"${f}"`).join(' ');
    execSync(`npx prettier --write ${fileList}`, { stdio: 'inherit' });
    console.log('Formatting complete!');
  } catch (err) {
    console.error('Error running Prettier:', err.message);
    process.exit(1);
  }
}

run();
