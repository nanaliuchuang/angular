class Person{
    lastName: string;
    firstName: string;
    constructor(last:string, first:string){
        this.lastName = last;
        this.firstName = first;
    }
    getFirstName():string{
        return this.firstName;
    }
    setFirstName(first){
        this.firstName = first;
    }
    getLastName():string{
        return this.lastName;
    }
    setLastName(last){
        this.lastName = last;
    }
}
class Student extends Person{
    age:number;
    ScoreHTML: number;
    scoreJS: number;
    scoreCSS:number;
    constructor(last:string, first:string,age:number,html:number,js:number,css:number){
        super(last,first);
        this.scoreCSS = css;
        this.ScoreHTML = html;
        this.scoreJS = js;
        this.age = age;
    }
    avgScore():number{
        return (this.scoreCSS + this.scoreJS + this.ScoreHTML)/3;
    }
}
var s: Student = new Student("Nanaliu","Chuang",25,8,5,7);
var text:string="";
text+= "I'm " + s.lastName+ " "+ s.firstName + "," + "i am " + s.age + " years old. " + "My average is " + s.avgScore() +" .";
document.body.textContent = text;