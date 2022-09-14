import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
// import resolve from '@rollup/plugin-node-resolve'
// import commonjs  from '@rollup/plugin-commonjs'

const bundle = config => ({
  ...config,
  input: 'src/.graphclient/index.ts',
  // external: id => !/^[./]/.test(id),
})

export default [
  bundle({
    plugins: [
      // resolve({ extensions: [ '.mjs','.js', '.json', '.node' ] }),
      // commonjs({ extensions: [ '.mjs','.js', '.json', '.node' ] }),
      esbuild()
    ],
    output: [
      {
        dir: 'dist/main.js',
        format: 'cjs',
        // sourcemap: true,
        exports: 'auto',
      },
      {
        dir: 'dist/module.mjs',
        format: 'es',
        // sourcemap: true,
        exports: 'auto',
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      dir: 'dist/types.d.ts',
      format: 'es',
      exports: 'auto'
    },
  }),
]
