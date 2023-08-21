import db from "../db/index.js";

export async function getUser(req, res) {
  try {
    const [list] = await db.query("select * from users");
    console.log(list);
    res.send({
      status: 200,
      data: [],
      message: "sussess",
    });
  } catch (error) {
    res.send({
      status: 500,
      data: [],
      message: "erro",
    });
  }

  //   db.query("select id, usename,nickname * from users");
}
