module.exports = {
    dbConnectionConfig: {
        // database: 'wc_db',
        // user: 'root',
        // // password: '1234',]
        // password: 'D@!cel16',
        database: 'IxJIbPqSgm',
        user: 'IxJIbPqSgm',
        password: 'LOx8ot3ZyM',
        options: {
            // host: 'localhost',
            // host: '159.228.166.203',
            host: 'remotemysql.com',
            dialect: 'mysql',
            logging: false,
            dialectOptions: {
                dateStrings: true,
                typeCast: true
            },
            define: {
                underscored: true,
                freezeTableName: true,
                charset: 'utf8',
                dialectOptions: {
                    collate: 'utf8_general_ci'
                },
                timestamps: false
            },
            timezone: '+07:00',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }
    }
  
};
