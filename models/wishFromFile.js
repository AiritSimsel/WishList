const fs = require('fs');
const path = require('path');

const pathToFile = path.join(path.dirname(require.main.filename), 'data', 'wish.json');

module.exports = class Wish {
    constructor(wish){
        this.item = wish;
    }

    saveWish(){
        fs.readFile(pathToFile, (error, fileContent) => {
            let wishes = [];

            if(!error) {
                wishes = JSON.parse(fileContent);
            } else {
                console.log(error);
            }
            wishes.push(this);

            fs.writeFile(pathToFile, JSON.stringify(wishes), (error) => {
                console.log('Error', error);
            });
        });
    }
    static fetchWishes(callBack) {
        fs.readFile(pathToFile, (error, fileContent) => {
            if(error){
                callBack([]);
            };
            callBack(JSON.parse(fileContent));
        });
    }

    static deleteWish(wish) {
        fs.readFile(pathToFile, (error, fileContent) => {
            let wishes = [];
            if(!error) {
                wishes = JSON.parse(fileContent);
            }

            for(let i = 0; i < wishes.length; i++) {
                if(wishes[i].item === wish) {
                    wishes.splice(i, 1);
                    break;
                }
            }

            fs.writeFile(pathToFile. JSON.stringify(wishes), (error) => {
                console.log(error);
            });
        });
    }
}