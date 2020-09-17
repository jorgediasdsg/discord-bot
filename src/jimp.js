const Jimp = require('jimp');

async function main() {

let font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)
let mask = await Jimp.read('./img/mascaraHEX.png')
// let avatar = await Jimp.read('./img/Goofy.png')
let background = await Jimp.read('./img/fundo.png')

Jimp.read('https://avatars2.githubusercontent.com/u/16909215?s=460&u=9382e8dac305174f9148d2573cda31bf14cb2400&v=4')
  .then(avatar => {

    avatar.resize(130, 130);
    mask.resize(130, 130);

    avatar.mask(mask)

    background.print(font, 170, 175, 'Pateta Goofy')
    background.composite(avatar, 40, 90).write('beta.png');


    // Do stuff with the image.
  })
  .catch(err => {
    console.log("Error loading image!")
  });



}
main();