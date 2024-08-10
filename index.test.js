const fs = require('fs');
const path = require('path');

describe('Pruebas en index.html', () => {

    test('debe de contener el texto "Hola Mundo"', () => {

        const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
        expect(html).toContain('<h1>Hola Mundo</h1>');
    });

});