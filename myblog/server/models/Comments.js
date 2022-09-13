module.exports = (sequelize, DataTypes) => {

    const Comments = sequelize.define("Comments", {
        body: {
            type: DataTypes.STRING(5000),
            allowNull: false,
        },
        creationTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });

    return Comments;
}