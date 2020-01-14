class AbstractAddtoBoardProxy {
    constructor(config, req) {
      this._config = config
      this._request = req
    }
  
    board (data) {
      throw new Error('UserProxy::noaddtoboard must be implemented for specific platform')
    }
  }
  
  export default AbstractAddtoBoardProxy
  