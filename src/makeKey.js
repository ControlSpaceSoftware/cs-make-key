/**
 * Created by onvelocity on 8/8/17.
 */

import md5 from 'md5';

export default function makeKey(obj) {
	return md5(Object.keys(obj).sort().map(key => key + String(obj[key])).join('|'));
};
