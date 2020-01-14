import AbstractAddtoBoardProxy from '../abstract/addtoboard';
import { multiStoreConfig } from './util';

class AddtoBoardProxy extends AbstractAddtoBoardProxy {
  constructor (config, req){
    const Magento1Client = require('magento1-vsbridge-client').Magento1Client;
    super(config, req)
    this.api = Magento1Client(multiStoreConfig(config.magento1.api, req));
  }
  board (data) {
    return this.api.mboardadd.maddtoboard(data);
  }
}

module.exports = AddtoBoardProxy;
