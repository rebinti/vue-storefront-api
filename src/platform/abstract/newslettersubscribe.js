class AbstractNewsletterSubscribeProxy {
    constructor(config, req) {
      this._config = config
      this._request = req
    }
  
    subscribe (data) {
      throw new Error('UserProxy::nonewslettersubscribe must be implemented for specific platform')
    }
  }
  
  export default AbstractNewsletterSubscribeProxy
  