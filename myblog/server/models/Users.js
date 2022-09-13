
module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(64),
            allowNull: false,
        },
    });

    // Users.associate = (models) => {
    //     Users.hasMany(models.Comments, {
    //         onDelete: "cascade",
    //     });
    // };

    return Users;
};