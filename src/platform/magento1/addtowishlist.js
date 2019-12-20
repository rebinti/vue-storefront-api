import AbstractAddtoWishlistProxy from '../abstract/addtowishlist';
import { multiStoreConfig } from './util';

class AddtoWishlistProxy extends AbstractAddtoWishlistProxy {
  constructor (config, req){
    const Magento1Client = require('magento1-vsbridge-client').Magento1Client;
    super(config, req)
    this.api = Magento1Client(multiStoreConfig(config.magento1.api, req));
  }
  wishlist (data) {
    return this.api.mwishlistadd.maddtowishlist(data);
  }
}

module.exports = AddtoWishlistProxy;
