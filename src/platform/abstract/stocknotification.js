class AbstractStockNotificationProxy {
    constructor(config, req) {
      this._config = config
      this._request = req
    }
  
    notification (data) {
      throw new Error('UserProxy::nostocknotification must be implemented for specific platform')
    }
  }
  
  export default AbstractStockNotificationProxy
  