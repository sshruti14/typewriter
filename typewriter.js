const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   //console.log(char);
//   process.stdout.write(char);
// }


setTimeout(()=>{
  for (const char of sentence) {
    console.log(char);
    //process.stdout.write(char);
  }
  
},500)