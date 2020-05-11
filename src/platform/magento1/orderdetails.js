import AbstractOrderDetailsProxy from '../abstract/orderdetails';
import { multiStoreConfig } from './util';

class OrderDetailsProxy extends AbstractOrderDetailsProxy {
  constructor (config, req){
    const Magento1Client = require('magento1-vsbridge-client').Magento1Client;
    super(config, req)
    this.api = Magento1Client(multiStoreConfig(config.magento1.api, req));
  }
  orderdetails (data) {
    return this.api.morderdetails.mgetorderdetails(data);
  }
}

module.exports = OrderDetailsProxy;
