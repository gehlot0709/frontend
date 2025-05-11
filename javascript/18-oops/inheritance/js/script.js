class User {
constructor(name,number,age,add){
    this.name = name
    this.number = number
    this.age = age
    this.add = add
}
}
class Student extends User{
    constructor(sId,name,number,age,add,sub){
        super(name,number,age,add)
        this.sId = sId
        this.sub = sub
    }
}
class Teacher extends User{
    constructor(tId,name,number,age,add,sub){
        super(name,number,age,add)
        this.tId = tId
        this.sub = sub
    }
}

const s1 = new Student(1,'pratham',7041963189,22,'vejalpur','javascript')
const t1 = new Teacher(2,'jaimin',123456789,25,'vastral','javascript,html,css')

console.log(s1);
console.log(t1);
console.log(s1.age);