import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import { minify } from 'uglify-es'
import pkg from './package.json'

export default [
  // browser-friendly UMD build
  {
    input: 'src/sdq.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      sourcemap: true
    },
    name: 'sdq',
    plugins: [resolve(), commonjs(), babel(), uglify({}, minify), filesize()]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/sdq.js',
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true }
    ],
    external: Object.keys(pkg.dependencies),
    plugins: [babel(), uglify({}, minify), filesize()]
  }
]
