const fs = require('fs');
const PNG = require('pngjs').PNG;
fs.createReadStream('../Realistic Tennis Ball PBR/textures/tennis .png')
  .pipe(new PNG())
  .on('parsed', function() {
    let r=0, g=0, b=0;
    for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
            let idx = (this.width * y + x) << 2;
            r += this.data[idx];
            g += this.data[idx+1];
            b += this.data[idx+2];
        }
    }
    const count = this.width * this.height;
    console.log(`Avg Color: R: ${Math.round(r/count)}, G: ${Math.round(g/count)}, B: ${Math.round(b/count)}`);
  });
