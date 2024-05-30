import ImageView from './ImageView/index.vue'
import SKU from './XtxSku/index.vue'

export const componentPlugin = {
    install(app) {
        app.component('XtxImageView', ImageView)
        app.component('XtxSKU', SKU)
    }
}