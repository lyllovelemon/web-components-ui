// @ts-ignore
import {Config} from '@stencil/core'
import {sass} from "@stencil/sass"

export const config:Config={
    namespace:"stencil-template",
    outputTargets:[
        {
            type:'dist',
            esmLoaderPath:'../loader'
        },
        {
            type:'dist-custom-elements'
        },
        {
            type:'docs-readme',
            footer:'*Built with lyllovelemon *'
        },
        {
            type:"www",
            serviceWorker:null,//disable service worker
        }
    ],
    plugins:[
        sass()
    ],
    extra:{
        experimentalImportInjection:true
    }
}