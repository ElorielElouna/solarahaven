const fs = require("fs");
const path = require("path");
const multiparty = require("multiparty");

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Kun POST er tilladt" }),
    };
  }

  const form = new multiparty.Form();

  return new Promise((resolve, reject) => {
    form.parse(event, function (err, fields, files) {
      if (err) {
        return reject({ statusCode: 500, body: "Fejl ved upload" });
      }

      const file = files.file[0];
      const tempPath = file.path;
      const uploadPath = path.join(
        __dirname,
        "uploaded",
        file.originalFilename,
      );

      fs.copyFile(tempPath, uploadPath, (err) => {
        if (err) {
          return reject({ statusCode: 500, body: "Kunne ikke gemme fil" });
        }

        resolve({
          statusCode: 200,
          body: JSON.stringify({ message: "Fil modtaget og gemt!" }),
        });
      });
    });
  });
};
