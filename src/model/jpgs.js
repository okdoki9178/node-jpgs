const model = require('./index')

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Jpgs', {
    jpgs_key: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },   // 키값
    original_name: { type: DataTypes.STRING },                                      // 파일 원본이름
    real_path: { type: DataTypes.STRING },                                               // 파일이 저장된 PATH
    size: { type: DataTypes.INTEGER },  // 사이즈
    download_count: { type: DataTypes.INTEGER },  // 다운로드수
    ip_address: { type: DataTypes.STRING }, // 업로더 ip주소
    width: { type: DataTypes.INTEGER },   // 이미지일경우 너비
    height: { type: DataTypes.INTEGER },  // 이미지일경우 높이
    type: { type: DataTypes.STRING }
  }, {
    classMethods: {},
    tableName: 'jpgs',
    freezeTableName: true,
    underscored: true,
    timestamps: true,
    paranoid: true
  })
}
