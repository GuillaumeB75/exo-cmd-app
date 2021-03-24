const pyramid = (nbStars, str) => {
  for (let i = 1; i <= nbStars; i+= 1) {
    console.log(str.repeat(i))
  }
}

if (process.argv.length !== 4) {
  console.log('usage : node pyramid.js nbStars str')
  process.exit(1)
}
if (isNaN(process.argv[2])) {
  console.log(`error : ${process.argv[2]} is not a number`)
  process.exit(1)
}
  
let nbStars = process.argv[2]
let str = process.argv[3]
pyramid(nbStars,str)
