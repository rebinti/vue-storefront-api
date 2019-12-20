class AbstractAddtoWishlistProxy {
    constructor(config, req) {
      this._config = config
      this._request = req
    }
  
    wishlist (data) {
      throw new Error('UserProxy::noaddtowishlist must be implemented for specific platform')
    }
  }
  
  export default AbstractAddtoWishlistProxy
  