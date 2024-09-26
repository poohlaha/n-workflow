/**
 * @fileOverview frontend 项目打包
 * @date 2023-04-12
 * @author poohlaha
 */
const { Paths, Utils } = require('@bale-tools/utils')
const { WebpackCompiler, WebpackDllCompiler } = require('@bale-tools/mutate-service')
const chalk = require('chalk')
const fsExtra = require('fs-extra')
const { performance } = require('node:perf_hooks')
const path = require('node:path')

const LoggerPrefix = chalk.cyan('[Bale Chat Compiler]:')

class ProjectBuilder {
  _SCRIPTS = ['start', 'dev', 'simulate', 'prod'] // scripts
  _script = ''
  _appRootDir = ''
  _dllDir = ''
  _copyDir = ''
  _projectUrl = ''
  _args = []
  _copyDestDir = ''
  _nodeModulesDir = ''

  constructor() {
    this._args = process.argv.slice(2) || []
    this._script = this._getScript()
    this._projectUrl = this._getProjectUrl()
    this._copyDestDir = 'pc'
    this._appRootDir = Paths.getAppRootDir() || ''
    this._dllDir = path.join(this._appRootDir, '.vendor')
    this._nodeModulesDir = path.join(this._appRootDir, 'node_modules')
    this._copyDir = path.resolve(this._nodeModulesDir, '@bale-sprint/react')
  }

  _getProjectUrl() {
    const commands = this._args.filter(x => x.startsWith('--projectUrl=')) || []
    if (commands.length === 0) return ''
    const command = commands[0] || ''
    return command.replace('--projectUrl=', '')
  }

  _getScript() {
    const commands = this._args.filter(x => !x.startsWith('--')) || []
    if (commands.includes(this._SCRIPTS[0])) {
      return this._SCRIPTS[0]
    }

    if (commands.includes(this._SCRIPTS[2])) {
      return this._SCRIPTS[2]
    }

    if (commands.includes(this._SCRIPTS[3])) {
      return this._SCRIPTS[3]
    }

    return this._SCRIPTS[1]
  }

  copy(isDelete = false) {
    // copy files
    const files = [
      {
        from: 'src/common/@types/global.d.ts',
        to: 'src/@types/global.d.ts'
      },
      {
        from: 'src/common/sample/stores/index.tsx',
        to: 'src/views/stores/index.tsx'
      },
      {
        from: 'src/common/communal/exception',
        to: 'src/communal/exception'
      },
      {
        from: 'src/common/communal/hooks',
        to: 'src/communal/hooks'
      },
      {
        from: 'src/common/communal/provider',
        to: 'src/communal/provider'
      },
      {
        from: 'src/common/communal/router',
        to: 'src/communal/router'
      },
      {
        from: 'src/common/communal/index.tsx',
        to: 'src/communal/index.tsx'
      },
      {
        from: `src/${this._copyDestDir}/utils`,
        to: 'src/communal/utils'
      }
    ]

    for (let file of files) {
      if (isDelete) {
        fsExtra.removeSync(path.resolve(this._appRootDir, file.to))
      } else {
        fsExtra.copySync(path.resolve(this._copyDir, file.from), path.resolve(this._appRootDir, file.to))
      }
    }
  }

  // build dll
  _buildDll(needBuild = true) {
    console.log(LoggerPrefix, `Starting ${chalk.cyan('build dll')} ...`)
    const startTime = performance.now()

    WebpackDllCompiler(this._script, {
      entry: {
        vendor: ['react', 'react-dom', 'react-router-dom', 'mobx', 'mobx-react-lite'],
        other: ['crypto-js']
        // antd: ['antd']
      },
      output: {
        path: this._dllDir
      },
      done: () => {
        const endTime = performance.now()
        console.log(LoggerPrefix, `Finished ${chalk.cyan('build dll')} after ${chalk.magenta(`${endTime - startTime} ms`)}`)
        if (needBuild) this._build()
      }
    })
  }

  // build
  _build() {
    console.log(`${LoggerPrefix} Starting ${chalk.cyan('build')} ...`)
    const startTime = performance.now()

    const options = {
      script: this._script,
      opts: {
        entry: path.resolve(this._appRootDir, 'src/communal/index.tsx'),
        settings: {
          jsLoaderInclude: [
            path.resolve(this._copyDir, 'src/common'),
            path.resolve(this._copyDir, 'src', this._copyDestDir),
            path.resolve(this._nodeModulesDir, '@bale-web/request')
          ],
          usePurgecssPlugin: false,
          usePwaPlugin: false,
          useMinimize: true,
          experiments: false,
          generateReport: false,
          useTerserWebpackPlugin: true,
          providePlugin: {

          },
          compress: {
            enable: true,
            deleteOutput: true,
            suffix: '.zip'
          }
        },
        clean: true
      },
      done: () => {
        const endTime = performance.now()
        // 删除根目录下的 .vendor 文件
        fsExtra.removeSync(this._dllDir)
        console.log(LoggerPrefix, `Finished ${chalk.cyan('build')} after ${chalk.magenta(`${endTime - startTime} ms`)}`)
      }
    }

    if (this._script !== this._SCRIPTS[0]) {
      // 读取 .vendor 目录下的 manifest 文件
      const dllDir = this._dllDir
      if (fsExtra.pathExistsSync(dllDir)) {
        const files = (Paths.getFileList(dllDir) || []).filter((file) => path.extname(file) === '.json')
        const manifestList = files.map((file) => file.replace('.json', ''))
        options.opts.dllSettings = {
          dllOutput: this._dllDir,
          manifestList
        }

        options.opts.clean = true
      }
    }

    if (!Utils.isBlank(this._projectUrl)) {
      options.opts.settings.definePlugin = {
        PROJECT_URL: this._projectUrl
      }
    }

    WebpackCompiler(options)
  }

  // instance
  instance() {
    // 删除 webpack 缓存
    const cacheDir = path.join(this._appRootDir, 'node_modules', '.cache')
    if (fsExtra.pathExistsSync(cacheDir)) {
      fsExtra.removeSync(cacheDir)
    }

    this.copy()

    if (this._script === this._SCRIPTS[0]) { // start
      return this._build()
    }

    return this._buildDll()
  }

}

module.exports = ProjectBuilder
