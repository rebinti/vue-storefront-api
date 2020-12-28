import AbstractContactUsProxy from '../abstract/contactus';
import { multiStoreConfig } from './util';

class ContactUsProxy extends AbstractContactUsProxy {
  constructor (config, req){
    const Magento1Client = require('magento1-vsbridge-client').Magento1Client;
    super(config, req)
    this.api = Magento1Client(multiStoreConfig(config.magento1.api, req));
  }
  contactsent (data) {
    return this.api.mcontactus.musercontactus(data);
  }
}

module.exports = ContactUsProxy;
