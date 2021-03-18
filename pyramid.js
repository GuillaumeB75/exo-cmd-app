const pyramid = (nbStars, str) => {
  for (let i = 1; i <= nbStars; i+= 1) {
    console.log(str.repeat(i))
  }
}

let nbStars = process.argv[2]
let str = process.argv[3]
pyramid(nbStars,str)
