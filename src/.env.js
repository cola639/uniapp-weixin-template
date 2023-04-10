let ENV_CONFIG = undefined

if (process.env.NODE_ENV === 'development') {
  // 开发环境
  console.log('DEV ENV', process.env)
  ENV_CONFIG = require('.env.dev.js')
} else {
  // 生产环境
  console.log('PROD ENV', process.env)
  ENV_CONFIG = require('.env.prod.js')
}
