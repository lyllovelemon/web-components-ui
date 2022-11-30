const fs = require("fs")
const {resolve,basename,extname} = require("path")
const {optimize} = require("svgo")
const svgson = require("svgson")
const camelCase = require("camelcase")
const prettier = require("prettier")

const entryDir = resolve(__dirname,'../svgs')
const outDir = resolve(__dirname,'../icons')
const outDirESM = resolve(__dirname,'../icons_esm')

// usage:https://github.com/svg/svgo
const svgoPlugins = [
    {
        name: 'convertColors',
        params: { currentColor: /^(?!url|none)./ },
    },
    {
        name: 'cleanupListOfValues',
        active: true,
    },
    {
        name: 'removeStyleElement',
        active: true,
    },
    {
        name: 'removeViewBox',
        active: false,
    },
    {
        name: 'removeDimensions',
        active: true,
    },
];


const transSvg = (svgString,svgFileName)=>{
    return new Promise((resolve,reject)=>{
        try {
            console.log('svgString',svgString)
            if(!svgString||!svgString.length) return reject(1)
            const result = optimize(svgString,{
                plugins:svgoPlugins
            })
            console.log('transSvg result-->',result.data)
            // 彩色不执行去颜色配置
            svgson(svgFileName.slice(-2)==='-c'?svgson:result.data,{},resolve)
        }
        catch (e) {
            reject(e)
        }
    })
}

async function build(entryDir,outDir,outDirESM,prefix,suffix) {
    fs.rmSync(outDir,{recursive:true})
    fs.rmSync(outDirESM,{recursive:true})
    fs.mkdirSync(outDir)
    fs.mkdirSync(outDirESM)

    const prettierConfig = require(resolve(__dirname,'../../../.prettierrc.js'))
    const files = fs.readdirSync(entryDir,'utf-8')
    const indexFileName='index.js'
    const match = files.filter(file=>extname(file)==='.svg').map(async f=>{
        try {
            const svgFileName=basename(f,'.svg')
            const componentName=`${prefix}${camelCase(svgFileName,{pascalCase:true})}${suffix}`

            const jsonFileName=`${componentName}.js`

            const svgContent = fs.readdirSync(entryDir,'utf-8')
            let JSONCode = await transSvg(svgContent,svgFileName)
            JSONCode._name = svgFileName

            // cjs
            let _JSONCode = `exports.default=${JSON.stringify(JSONCode)}`
            const formattedCode = prettier.format(_JSONCode,prettierConfig)
            fs.writeFileSync(resolve(outDir,jsonFileName),formattedCode,'utf-8')

            // esm
            let _JSONCode_esm=`exports.default=${JSON.stringify(JSONCode)}`
            const formattedCode_esm = prettier.format(_JSONCode_esm,prettierConfig)
            fs.writeFileSync(resolve(outDirESM,jsonFileName),formattedCode_esm,'utf-8')
            return  {fileName:jsonFileName,componentName}
        }
        catch (e) {
            console.error(e)
            throw e
        }
    })
    const arr = await Promise.all(match)
    // cjs
    const indexFileContent = arr
        .map((a) => `exports.${a.componentName} = require('./${a.componentName}').default;`)
        .join('\n');
    fs.writeFileSync(resolve(outDir,indexFileName),'utf-8')
    // esm
    const indexFileContent_esm = arr
        .map((a) => `export { default as ${a.componentName} } from './${a.componentName}';`)
        .join('\n');
    fs.writeFileSync(resolve(outDirESM, indexFileName), indexFileContent_esm + '\n', 'utf-8');
    return arr;
}
build(entryDir, outDir, outDirESM, 'icon', '').then(res=>{
    console.log('build res---->',res)
}).catch(err=>{
    // console.error('build err-->',err)
})