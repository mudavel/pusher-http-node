const Config = require("./config")

function PusherConfig(options) {
  Config.call(this, options)

  if (options.host) {
    this.host = options.host
  } else if (options.cluster) {
    this.host = "api-" + options.cluster + ".pusher.com"
  } else {
    this.host = "api.pusherapp.com"
  }
}

Object.assign(PusherConfig.prototype, Config.prototype)

PusherConfig.prototype.prefixPath = function (subPath) {
  this.appId = process.env.NODE_ENV === 'production' ? process.env.PUSHER_ID : require('../../../config').PUSHER_SECRETS.app_id
  return "/apps/" + this.appId + subPath
}

module.exports = PusherConfig
