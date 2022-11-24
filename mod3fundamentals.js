        function questionOne(){
            console.clear(); 
            console.log('---------------------1-----------------------')
            result = ("" + 1 + 0)
            console.log(result)
            console.log('-----------------------2---------------------')
            result = ("" - 1 + 0 )
            console.log(result)
            console.log('-----------------------3---------------------')
            result = (true + false)
            console.log(result)
            console.log('------------------------4--------------------')
            result = (6 / "3")
            console.log(result)
            console.log('------------------------5--------------------')
            result = ("2" * "3")
            console.log(result)
            console.log('-------------------------6-------------------')
            result = (4 + 5 + "px")
            console.log(result)
            console.log('-------------------------7-------------------')
            result = ("$" + 4 + 5)
            console.log(result)
            console.log('------------------------8--------------------')
            result = ("4" - 2)
            console.log(result)
            console.log('----------------------9----------------------')
            result = ("4px" - 2)
            console.log(result)
            console.log('------------------------10--------------------')
            result = (" -9 " + 5)
            console.log(result)
            console.log('----------------------11----------------------')
            result = (" -9 " - 5)
            console.log(result)
            console.log('-----------------------12---------------------')
            result = (null + 1)
            console.log(result)
            console.log('-------------------------13-------------------')
            result = (undefined + 1)
            console.log(result)
            console.log('---------------------------14-----------------')
            result = (" \t \n" - 2)
            console.log(result)
        }

        function questionTwo() {
            console.clear();   
            let a = parseInt(prompt("First Number?", 1));
            let b = parseInt(prompt ("Second Number?", 2));
            const sum = a + b ;
            alert (`The sum of ${a} and ${b} is ${sum} `) ; //3  
            console.log(sum) 
        }
        function questionThree() {
            console.clear();
            console.log('------------------1--------------------------')
            var a = 5 > 4  ;
            console.log(a);
            console.log('------------------2-------------------------')
            var a = "apple" > "pineapple";
            console.log(a);
            console.log('-------------------3-------------------------')
            var a = '2' > '12';
            console.log('2 > 12 results in ' + a);
            console.log('--------------------4------------------------')
            var a = undefined == null
            console.log(a);
            console.log('--------------------5------------------------')
            var a = undefined === null
            console.log(a);
            console.log('---------------------6-----------------------')
            var a = null == "\n0\n"
            console.log(a);
            console.log('--------------------7------------------------')
            var a = null === +"\n0\n"
            console.log(a);
            }
        function questionFive(){

            var a = 3;
            var b = 0;
            console.clear();
            
            console.log((a+b < 4) ? "Below" : "Over");
            }


        function questionSix(){
            const delay = (func,ms) => (...arg) => setTimeout(() => func.apply(null , arg), ms) 

            const hello = ( who ) => console.log('Hello ' + who);
        
            const delayHello = delay(hello, 3000);
        
            delayHello('world');

        }


        function questionSeven(){
            console.clear();
            //Write isEmpty function here
            function isEmpty(schedule){
                for (let key in schedule){
                    return false;
                }
                    return true; 
            } 

            let schedule = {};

            alert( isEmpty(schedule) ) // true

            schedule['8:30'] = "get up";

            alert (isEmpty(schedule) ) // false
        }

        function questionEight(){
            console.clear();
            let ladder = {
                step: 10,
                up() {
                    this.step++;
                    return this;
                },
                down() {
                    this.step--;
                    return this;
                },
                showStep: function() { //shows the current step
                    console.log( this.step )
                    return this;
                }
                
            }
            
            ladder.up().up().down().down().up().up().up().down().showStep();
        }
        
// 9: Create New Accumulator
//Create a constructor function Accumulator(startingValue).
//Object that it creates should:

//  1: Store the "current value" in the property value. The starting value
//  is set to the argument of the constructor startingValue
//
//  2: The read() method should use prompt to read a new number and add it to value

//In other words, the value property is the sum of all user-entered
//values with the initial value startingValue

//Here's the demo of the code:

function questionNine() {
    //Write constructor function here
    

    let accumulator = new Accumulator(1); //initial value 1

    accumulator.read(); //adds the user-entered value

    accumulator.read(); //adds the user-entered value

    console.log(accumulator.value); // shows the sum of these values
}
    
    
        
            

            
