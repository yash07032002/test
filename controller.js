const axios = require("axios");
const prisma = require('./prismaClient');

module.exports.register = async (req, res, next) => {
    try {
      const { firstName } = req.body;
      let user;
  
        user = await prisma.user.create({
            data: {
            firstName,
            },
        });

        const userId = user.id;
        //await sendOTPOnMobile(mobile, code);

        return res.status(200).json({
            userId: userId,
            message: "OTP sent successfully.",
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send("Internal Server error");
      }
}

module.exports.getprofile = async (req, res, next) => {
    try {
      // const { mobile } = req.body;
      const { id } = req.query;
  
      const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
      });  
      // Make sure that JWT token corresponds to the requested user
      return res.status(200).json(user);
    } catch (e) {
      console.log(e);
      return res.status(400).send({ error: "Internal Server Error" });
    }
  };
  