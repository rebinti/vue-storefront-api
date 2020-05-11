class AbstractOrderDetailsProxy {
    constructor(config, req) {
      this._config = config
      this._request = req
    }
  
    orderdetails (data) {
      throw new Error('UserProxy::orderdetails must be implemented for specific platform')
    }
  }
  
  export default AbstractOrderDetailsProxy
  