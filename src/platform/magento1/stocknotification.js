import AbstractStockNotificationProxy from '../abstract/stocknotification';
import { multiStoreConfig } from './util';

class StockNotificationProxy extends AbstractStockNotificationProxy {
  constructor (config, req){
    const Magento1Client = require('magento1-vsbridge-client').Magento1Client;
    super(config, req)
    this.api = Magento1Client(multiStoreConfig(config.magento1.api, req));
  }
  notification (data) {
    return this.api.stocknotification.notification(data);
  }
}

module.exports = StockNotificationProxy;
