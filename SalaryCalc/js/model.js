const salaryCalculator={
    hra(salary){
        return salary * 0.30;
    },
    da(salary){
        return salary * 0.20;
    },
    ta(salary){
        return salary * 0.10;
    },
    pf(salary){
        return salary *0.05;
    },
    tax(salary){
      return this.gs(salary) * 0.10;  
       
    },
    gs(salary){
        //console.log("THIS IS ",this);
        return parseInt(salary) + this.hra(salary) + this.da(salary) + this.ta(salary) - this.pf(salary);
    },
    ns(salary){
        return this.gs(salary) - this.tax(salary);
    }

}