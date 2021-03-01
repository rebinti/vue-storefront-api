import { apiStatus, apiError } from '../lib/util';
import { Router } from 'express';
import PlatformFactory from '../platform/factory'

export default ({ config, db }) => {

	let api = Router();

	const _getProxy = (req) => {
		const platform = config.platform
		const factory = new PlatformFactory(config, req)
		return factory.getAdapter(platform, 'newslettersubscribe')
	};

	

	/**
	 * GET get stock item
	 */
	api.post('/urlsubscribe', (req, res) => {
        // console.log('here',req);
		const stockProxy = _getProxy(req);
		// const stockProxy = _getProxy(req);
 console.log('stockProxy', stockProxy)
		stockProxy.subscribe(req.body).then((result) => {
			console.log(result)
			apiStatus(res, result, 200);
		}).catch(err => {
			apiStatus(res, err, 500);
		})
	})

	return api
}
