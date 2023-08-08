import { error } from 'console';
import * as fs from 'fs';

export default class FS {
  static getData() {
    return new Promise((resolve, reject) => {
      fs.readFile("data/data.json", "UTF-8", function (err, data) {
        if (err) {
          reject(err);
        } else {
          console.log("Resolve");
          resolve(data);
        }
      });
    });
  }

  static updateData(content) {
    console.log("UPDATE DATA");
    return new Promise((resolve, reject) => {
      console.log("UPDATE DATA DENTRO DA PROMESSA");

      content = JSON.stringify(content);
      this.getData()
        .then((oldData) => {
          fs.writeFile("data/data.json", content, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve({
                updateData: true,
                newData: JSON.parse(content),
                oldData: JSON.parse(oldData),
              });
            }
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
