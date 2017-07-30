var sharp = require("sharp")
var fs = require("fs")
var path = require("path")

const getAllJpgs = (root) => {
  const dir = fs.readdirSync(root)
  let res = []
  dir.forEach(item => {
    const p = path.join(root, item)
    const state = fs.lstatSync(p)
    if (state.isDirectory()) {
      res = res.concat(getAllJpgs(p))
    } else {
      if (path.extname(p) === '.jpg') {
        res.push(p)
      }
    }
  })
  return res
}

const mkdir = (dir) => {
  if (fs.existsSync(dir)) {
    return
  } else {
    mkdir(path.dirname(dir))
    fs.mkdirSync(dir)
  }
}

const handleJpg = (p) => {
  const s = sharp(p)
  s.metadata().then(data => {
    const dir = p.replace('raw_images', 'static/images')
    mkdir(path.dirname(dir))
    if (data.width > 1000) {
      s.resize(1000)
    }
    s.toFile(dir, (err, info) => {
      if (err) console.log(err)
    })
  })
}

const root = './raw_images'
const jpgs = getAllJpgs(root)
jpgs.forEach(handleJpg)
