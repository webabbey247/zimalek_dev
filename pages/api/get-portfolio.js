import { axiosRes } from '../../utils/helper';

export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: '/portfolio/all'
	};
	try {
		let response = await axiosRes(options);
		res.status(200).json(response.data);
	} catch (error) {
		res.status(error.response.status).send(error.response.data);
	}
}