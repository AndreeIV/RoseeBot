const { glob } = require('glob');
const { promisify } = require('util');
const proGlob = promisify(glob);

module.exports = class BotUtils{
    contructor(client) {
        this.client = client
    }

    async loadFiles(dirname) {
        
            // console.log(process.cwd())
            // console.log(`${process.cwd().replace(/\\/g, "/")}/${dirname}/**/*.js`)
            // console.log('C:\Users\HP\Desktop\PruebaHandler\src\Commands')
            const ARCHIVOS = await glob(`${process.cwd().replace(/\\/g, "/")}/${dirname}/**/*.js`);
            
            ARCHIVOS.forEach( ARCHIVO => delete require.cache[require.resolve(ARCHIVO)])
            
            return ARCHIVOS;
    }
}