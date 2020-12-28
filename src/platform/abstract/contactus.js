class AbstractContactUsProxy {
    constructor(config, req) {
      this._config = config
      this._request = req
    }
  
    contactsent (data) {
      throw new Error('UserProxy::nocontactus must be implemented for specific platform')
    }
  }
  
  export default AbstractContactUsProxy
  