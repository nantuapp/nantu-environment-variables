const queryPermission = require('queryPermission');
const copyFromWindow = require('copyFromWindow');
const makeInteger = require('makeInteger');
const log = require('logToConsole');

var nantu_device = 'unknown';
var nantu_browser = 'unknown';
var nantu_browser_type = 'unknown';
var nantu_browser_version = 0;

var nantu_source = 'unknown';
var nantu_medium = 'unknown';
var nantu_campaign = 'unknown';


if (queryPermission('access_globals', 'read', 'nantu_device')) {
	nantu_device = copyFromWindow('nantu_device');
}

if (queryPermission('access_globals', 'read', 'nantu_browser')) {
	nantu_browser = copyFromWindow('nantu_browser');
}

if (queryPermission('access_globals', 'read', 'nantu_browser_type')) {
	nantu_browser_type = copyFromWindow('nantu_browser_type');
}

if (queryPermission('access_globals', 'read', 'nantu_browser_version')) {
	nantu_browser_version = copyFromWindow('nantu_browser_version');
}

if (queryPermission('access_globals', 'read', 'nantu_source')) {
	nantu_source = copyFromWindow('nantu_source');
}

if (queryPermission('access_globals', 'read', 'nantu_medium')) {
	nantu_medium = copyFromWindow('nantu_medium');
}

if (queryPermission('access_globals', 'read', 'nantu_campaign')) {
	nantu_campaign = copyFromWindow('nantu_campaign');
}

if (nantu_device === 'unknown' || nantu_browser === 'unknown' || nantu_browser_type === 'unknown' || nantu_browser_version === 0) {
	return 'no';
}

if (nantu_device === 'desktop') {
	if (data.desktop === false) {
		return 'no';
	}

	if (nantu_browser === 'safari') {
		if (data.safari_desktop === false) {
			return 'no';
		}

		if (nantu_browser_version < makeInteger(data.safari_desktop_version)) {
			return 'no';
		}
	}

	if (nantu_browser === 'chrome') {
		if (data.chrome_desktop === false) {
			return 'no';
		}

		if (nantu_browser_version < makeInteger(data.chrome_desktop_version)) {
			return 'no';
		}
	}


	if (nantu_browser === 'firefox') {
		if (data.firefox_desktop === false) {
			return 'no';
		}

		if (nantu_browser_version < makeInteger(data.firefox_desktop_version)) {
			return 'no';
		}
	}

	if (nantu_browser === 'edge') {
		if (data.edge_desktop === false) {
			return 'no';
		}

		if (nantu_browser_version < makeInteger(data.edge_desktop_version)) {
			return 'no';
		}
	}

	if (nantu_browser === 'opera') {
		if (data.opera_desktop === false) {
			return 'no';
		}

		if (nantu_browser_version < makeInteger(data.opera_desktop_version)) {
			return 'no';
		}
	}
}

if (nantu_device === 'tablet') {
	if (data.tablet === false) {
		return 'no';
	}

	if (nantu_browser === 'safari') {
		if (data.safari_ipad === false) {
			return 'no';
		}

		if (nantu_browser_version < makeInteger(data.safari_ipad_version)) {
			return 'no';
		}
	}

	if (nantu_browser === 'chrome') {
		if (data.chrome_android === false) {
			return 'no';
		}

		if (nantu_browser_version < makeInteger(data.chrome_android_version)) {
			return 'no';
		}
	}

	if (nantu_browser === 'firefox') {
		if (data.firefox_tablet === false) {
			return 'no';
		}

		if (nantu_browser_version < makeInteger(data.firefox_tablet_version)) {
			return 'no';
		}
	}
}

if (nantu_device === 'mobile') {
	if (data.mobile === false) {
		return 'no';
	}

	if (nantu_browser === 'safari') {
		if (data.safari_mobile === false) {
			return 'no';
		}

		if (nantu_browser_version < makeInteger(data.safari_mobile_version)) {
			return 'no';
		}
	}

	if (nantu_browser === 'chrome') {
		if (data.chrome_android_mobile === false) {
			return 'no';
		}

		if (nantu_browser_version < makeInteger(data.chrome_android_mobile_version)) {
			return 'no';
		}

		if (nantu_browser_type === 'safari') {
			if (data.chrome_iphone === false) {
				return 'no';
			}

			if (nantu_browser_version < makeInteger(data.chrome_iphone_version)) {
				return 'no';
			}
		}	
	}

	if (nantu_browser === 'firefox') {
		if (data.firefox_mobile === false) {
			return 'no';
		}

		if (nantu_browser_version < makeInteger(data.firefox_mobile_version)) {
			return 'no';
		}
	}
}

if (data.all_sources === false) {
	if (nantu_medium === 'unknown' && data.visitors_organic === false) {
		return 'no';
	}

	if (nantu_medium === 'organic' && data.visitors_organic === false) {
		return 'no';
	}

	if (nantu_medium === 'cpc' && data.visitors_paid === false) {
		return 'no';
	}

	if (nantu_medium === 'direct' && data.visitors_direct === false) {
		return 'no';
	}

	if (nantu_medium === 'email' && data.visitors_email === false) {
		return 'no';
	}
}

log('data =', data);

return 'yes';
