import {defineConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react'

const ReactCompilerConfig = {
    /*sources: (filename: string) => {
        return filename.indexOf('src/path/to/dir') !== -1;
    }*/
}
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tsconfigPaths(),
        react({
            babel: {
                plugins: [
                   // ["babel-plugin-react-compiler", ReactCompilerConfig],
                ],
            },
        })
    ],
})
