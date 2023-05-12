const bcrypt = require('bcrypt');

async function hashedPassword(password) {
	const saltRounds = 10;
	const hashedPassword = await bcrypt.hash(password, saltRounds);
	return hashedPassword;
}

module.exports = { hashedPassword };
