import AbstractNewsletterSubscribeProxy from '../abstract/newslettersubscribe';
import { multiStoreConfig } from './util';

class NewsletterSubscribeProxy extends AbstractNewsletterSubscribeProxy {
  constructor (config, req){
    const Magento1Client = require('magento1-vsbridge-client').Magento1Client;
    super(config, req)
    this.api = Magento1Client(multiStoreConfig(config.magento1.api, req));
  }
  subscribe (data) {
    return this.api.mnewslettersubscribe.mupdatenewslettersubscribe(data);
  }
}

module.exports = NewsletterSubscribeProxy;
