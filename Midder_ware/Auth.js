const { Op } = require("sequelize");
const Nguoi_dung = require("../models/Nguoi_dung");
const Token = require("../models/Token");

module.exports = {
  authLogin: async (req, res, next) => {
    const auth = req.header("Authorization");
    if (auth != null && auth != "" && typeof auth != "undefined") {
      const Auth = auth.split(" ")[1];
      console.log(auth);
      const data_string_auth = Buffer.from(Auth, "base64").toString();

      const email = data_string_auth.split(" ")[0];
      const password = data_string_auth.split(" ")[1];
      const expireted_date = data_string_auth.split(" ")[2];
      console.log(expireted_date);
      //    console.log(email)
      //    console.log(password)
      const date_curr = new Date().toISOString().split("T")[0];
      console.log();
      const result_token = await Token.findAll({
        where: {
          [Op.and]: [
            { token: Auth },
            {
              expireted_date: {
                [Op.gte]: date_curr,
              },
            },
          ],
        },
      });

      if (result_token != "") {
        console.log("check_nguoi");
        const result_info_user = await Nguoi_dung.findAll({
          where: {
            [Op.and]: [{ email: email }, { mat_khau: password }],
          },
        });

        // console.log(result_info_user[0].created_date)
        if (result_info_user != "") {
          res.json({
            message: "Login sucessfull",
            error: false,
            data: result_info_user,
          });
        } else {
          // console.log('sai')
          next();
        }
      } else {
        next();
        // console.log("token khong dung")
      }
    }else{
        next();
    }
  }
};
