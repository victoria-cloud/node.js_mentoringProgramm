//TASK 1.1
//Write a program which reads a string from the standard input stdin, reverses it and then writes it to the standard output stdout.
//•The program should be started from npmscript via nodemon(i.e. npm run task1).
//•The program should be running in a stand-by mode and should not be terminated after the first-stringprocessing.

process.stdin.on("data",(str)=>{
    const res=Array.prototype.reverse.call(str)
    process.stdout.write(res)
} )