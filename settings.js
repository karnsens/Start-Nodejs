const Settings = {
    secretKey: 'JSDFIOEksdfhjwe',
    userPass: 'sdfsd23423dfst',
    databaseName: 'KsDB',
}

const getSecretKey = () => {
    return Settings.secretKey;
}

module.exports.getSecretKey = getSecretKey;
module.exports.userPass = Settings.userPass;
module.exports.databaseName = Settings.databaseName;