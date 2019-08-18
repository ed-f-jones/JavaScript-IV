// CODE here for your Lambda Classes
class sectionLead {
    constructor(names){
        this.name = names.name;
        this.course = names.course;
    }
    spoken(){
        return (`${this.name} is the section lead of ${this.course} for ${this.work}.`);
    }
}

class teamLead extends sectionLead{
    constructor(standups){
        super(standups);
        this.job = standups.job;
        this.time = standups.time;
    }
    greet(){
        return ( `${this.name} is the ${this.job} for ${this.work} that does standups at ${this.time}`);
    }
}

class instructor extends teamLead{
    constructor(learn){
     super(learn);  
    this.teach = learn.teach;
    this.work = learn.work;
    }
    helps(){
        return (`${this.name} is the instructor that teaches ${this.teach} for ${this.work}.`);
    }
}


class teacher extends instructor {
    constructor(lessons){
        super(lessons);
        this.class = lessons.class;
        this.study = lessons.study;
    }
  learns(){
      return (`${this.name} curently  studies ${this.class} using ${this.study} while attending ${this.work}.`);
  }  
}

const winnie = new teacher({
    name: 'Winne Song',
    job: 'Section Lead',
    course: 'WEBPT9',
    class: 'javascript',
    work: 'Lambda School'


});

const danielle = new teacher({
    name: 'Danielle Oneal',
    job: 'Team Lead',
    course: 'WEBPT9',
    time: 1130,
    work: 'Lambda School',
    class: 'javascript'
});

const pace = new teacher({
    name: 'Pace Ellsworth',
    job: 'Instructor',
    course: 'WEBPT9',
    teach: 'Full stack Developement',
    class: 'javascript',
    work: 'Lamda School'
});

const edward = new teacher({
    name: 'Edward Jones',
    job: 'student',
    course: 'WEBPT9',
    study: 'VScode',
    class: 'javascript',
    work: 'Lambda School'
});

console.log(winnie.job, winnie.name);
console.log(danielle.work, danielle.name);
console.log(pace.course, pace.name);
console.log(winnie.spoken());
console.log(danielle.greet());
console.log(pace.helps());
console.log(edward.learns());