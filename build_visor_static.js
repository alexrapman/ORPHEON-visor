const fs = require('fs');
const path = require('path');

const ecosDir = path.join(__dirname, '../ecos');
const respuestasFile = path.join(__dirname, '../ecos_respuestas.json');

const ecos = fs.readdirSync(ecosDir)
  .filter(f => f.endsWith('.txt'))
  .map(nombre => ({
    nombre,
    contenido: fs.readFileSync(path.join(ecosDir, nombre), 'utf8').trim()
  }));

const respuestas = fs.existsSync(respuestasFile)
  ? JSON.parse(fs.readFileSync(respuestasFile))
  : [];

fs.writeFileSync(path.join(__dirname, 'ecos.json'), JSON.stringify(ecos, null, 2));
fs.writeFileSync(path.join(__dirname, 'respuestas.json'), JSON.stringify(respuestas, null, 2));

console.log('✅ Archivos estáticos generados: ecos.json y respuestas.json');
