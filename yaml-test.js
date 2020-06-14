const yaml = require('js-yaml');
const fs   = require('fs');
 
// Get document, or throw exception on error
try {
  const doc = yaml.safeLoad(fs.readFileSync('./content/menu.yaml', 'utf8'));
  console.log(JSON.stringify(doc));
} catch (e) {
  console.log(e);
}