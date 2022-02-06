let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");

let command = inputArr[0];

switch (command) {
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organize":
        organizeFn(inputArr[1]);
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("Please input write command");
        break;
}

function treeFn (dirPath) {
    console.log("Tree command implemented for", dirPath);
}

function organizeFn (dirPath) {
    console.log("Organize command implemented for", dirPath);
    
    
    // Create organized_files directory
    let dest;
    if (dirPath == undefined){
        console.log("Kindly enter the path");
        return;
    } else {
        
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            dest = path.join(dirPath, "organized_files");
            if (fs.existsSync(dest) == false){
                fs.mkdirSync(dest);
            }
        }
        else{
            console.log("Kindly Enter the correct Path");
            return;
        }
    }
    
    // Identify categories all the files present in the input directory

    organizeHelper(dirPath, dest);
    

    
}

function organizeHelper(src, dest){
    let childNames = fs.readdirSync(src);
    
    for (let i = 0; i < childNames.length; i++){
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile){
            
            // Copy/Cut files to that Organized Directory respective folders
            let ext = getCategory(childAddress);

            
        }
        
    }
    
    
    
}

function getCategory(name){
    return path.extname(name);
}

    
function helpFn () {
    console.log(`
    List of All the commands:
    -> node main.js tree "DirectoryPath"
    -> node main.js organize "DirectoryPath"
    -> node main.js help
    `);
}
    
    