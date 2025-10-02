// string 

// Type of string
// 1. singal

// let name = 'kenil patel this is my javascript';
// console.log(name);


// let fname = 'kenil';
// let lname = 'patel';

// console.log(fname);
// console.log(lname);

// console.log(fname + ' ' + lname);


// 2. duble 
// let fname = "jiya";

// console.log(fname + " "+ lname);


// 3. backtik ( ` )

// fname1 = "kenil";
// fname2 = "jiya";
// fname3 = "aneri";

// fname1 = ["kenil",'jiya',"aneri"];
// date = "2/10/2025"
// // for(i=0;i<3;i++)
// // console.log(`hii ${fname1[i]} , today is nice a day`);

// for(i=0;i<3;i++)
//     document.writeln(`
//         <h2>hii ${fname1[i]} , today is nice a day<\h2> 
//         <h5>${date}<\h5>

//         `);

// list color 10


let color = ["red","green","black","blue"];

document.writeln("List of color")
for(i=0; i<4; i++){
    document.writeln(`
        <li> -  ${color[i]}</li>
        `)
}