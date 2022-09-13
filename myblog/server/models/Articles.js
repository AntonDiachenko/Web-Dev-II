module.exports = (sequelize, DataTypes) => {
    const Articles = sequelize.define("Articles", {
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING(4000),
            allowNull: false,
        },
        creationTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });

    // Articles.associate = (models) => {
    //     Articles.hasMany(models.Comments, {
    //         onDelete: "cascade",
    //     });
    // };

    return Articles;
}