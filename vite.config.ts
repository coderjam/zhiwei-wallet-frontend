import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [
        vue(),
        vueJsx({
            transformOn: true, // transform on: { click: xx } to onClick: xxx
            mergeProps: true // merge static and dynamic class / style attributes / onXXX handlers
        }),
    ]
})
