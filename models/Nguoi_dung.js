const { Model, DataTypes } = require("sequelize");
const sequelize = require("./Sequelize");

class Nguoi_dung extends Model {}

Nguoi_dung.init({
    id_quyen: DataTypes.NUMBER,
    ho_ten: DataTypes.STRING,
    ten_dang_nhap: DataTypes.STRING,
    mat_khau: DataTypes.STRING,
    email: DataTypes.STRING,
    ngay_tao: DataTypes.DATE,
    lan_dang_nhap_cuoi: DataTypes.DATE,
    trang_thai: DataTypes.NUMBER,
  },{
    sequelize,
    modelName: "Nguoi_dung",
    tableName: "nguoi_dung",
    timestamps: false,
  }
);
module.exports= Nguoi_dung