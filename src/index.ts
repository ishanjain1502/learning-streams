import * as fs from 'fs';

const main = async() => {
    const readStream = fs.createReadStream("./data/import.csv" , {
        highWaterMark: 100
    });

    const writeStream = fs.createWriteStream("./data/export.csv")

    readStream.on('data' , (buffer) => {
        console.log(">>>DATA:");
        console.log(buffer.toString());

        writeStream.write(buffer);

    })

    readStream.on('end' , ()=> {
        console.log('stream ended');

        writeStream.end()
    })
}

main();