const validateIP = (IP) => {
	const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';
	const regex = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}$`);
	return regex.test(IP);
};

export { validateIP };
