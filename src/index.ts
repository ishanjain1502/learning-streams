import * as fs from 'fs';
import csv from 'csvtojson'

const main = async() => {
    const readStream = fs.createReadStream("./data/import.csv"  );

    const writeStream = fs.createWriteStream("./data/export.csv")

    readStream.pipe(writeStream)
}

main();