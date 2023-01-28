#!/usr/bin/env node

console.log('hello titan cli')

// // 注册一个命令 titan init
// const argv = require(`process`).argv;
// const command = argv[2];
// // const options = argv.slice(3);
// // let [option, param] = options;
// // option = option.replace('--', '');
// const lib ={
//     init: function (){
//         console.log('坑爹王能不骚？')
//     }
// }
//
// if(command){
//     if(lib[command]){
//         lib[command]();
//     }else{
//         console.log('无效的命令')
//     }
// }else{
//     console.log('请输入命令')
// }