"use strict";


const output = {
  hello: (req, res) => {
    res.render("home/index");
  },  
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["woori", "taegyu", "wecode"],
  psword: ["123", "1234", "123456"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          succees: true,
        });
      }
    }

    return res.json({
      succees: false,
      msg: "로그인에 실패하셨습니다.",
    })
  },
};


module.exports = {
  output,
  process,
};