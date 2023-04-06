export function isEmail(mail: string) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
		return true;
	}
	return false;
}

export function isValidZipcode(value: string) {
	if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value)) {
		return true;
	}

	return false;
}
