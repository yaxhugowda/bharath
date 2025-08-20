// let num=100;
// // console.log(num)
// // console.log(typeof num)

// console.log(num.toFixed(2));
// str="yaxhu";
// console.log(str.length);
// console.log(str.charAt(2));
// // console.log(str.charCodeAt(0));
// console.log(str.indexOf("y"));
// console.log(str.toUppercase());
// console.log(str.toLowercase());
// slice()
// let str="hello world"
// console.log(str.slice(0,8));
// console.log(str.substring(0,5,))
// console.log(str.includes("hello"))
// console.log(str.split(""))
// console.log(str.split(" "))
// console.log(str.split(","))
//array methods
// let array=[25,56,85,74,23,62,26,27,10,41,47,25]
// console.log(array.length)
// array.push(42)
// console.log(array);
// array.pop()
// console.log(array);
// array.unshift(123)
// console.log(array)
// array.shift()
// console.log(array)
// console.log(array.reverse());
// array.sort()
// console.log(array)
// let str=["yashu","aaa","ssss","hhh","uuu"];
// console.log(str.sort())
// let str1=["yaxhu"]
// let str2=["gowda"]
// console.log(str1.concat(str2));
// array1=["20"]
// array2=["50"]
// console.log(array1.concat(array2));  
//  thear are 4 ways to create java script object 
// 1.by using literals
// let a={}
// a.city="mandya"
// console.log(a);
// 2.using new keyworld 
// let b= new  Object()
// {
//     b.student_no="harsha" 
//     b.student_addreses="yaxhu"
//     b.student_name="veetu"
// }
// console.log(b);
// 3.using constucter function 
// function sbp(y,x,a)
// {
//      this.y=y;
//      this.x=x;
//      this.a=a;
// }
// let std=new sbp("yaxhu",9382854712,"mandya")
// console.log(std);
// by using class constructer
class clg{


    constructor(y,x,a)
    { 
    this.name=y;
    this.mobile_no=x;
    this.city=a;
    }
}
let std=new clg("yaxhu",9382854712,"mandya")
console.log(std);



