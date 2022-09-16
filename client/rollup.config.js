import del from 'rollup-plugin-delete'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json')

const bundle = config => ({
  ...config,
  input: 'src/.graphclient/index.ts'
})

export default [
  bundle({
    plugins: [
      del({ targets: 'dist/*' }),
      esbuild()
    ],
    output: [
      {
        dir: packageJson.main,
        format: 'cjs',
        sourcemap: false,
        exports: 'auto',
      },
      {
        dir: packageJson.module,
        format: 'es',
        sourcemap: false,
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
