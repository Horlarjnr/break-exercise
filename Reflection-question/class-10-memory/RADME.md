THEORY 

QUESTION 1 

Feature          var                      let                        const  

Scope           Function scope          Block scope              Block scope

Hoisting        Hoisted,initialized     Hoisted, stays           Hoisted, stays uninitialized
                as undefined            uninitialized (TDZ)      (TDZ)

Reassignment    Allowed                 Allowed                  Not allowed 

Redeclaration   Allowed                 Not Allowed              Not Allowed 

The const keyword protects the variable binding (the memory pointer), not the value itself. You cannot overwrite the pointer with a completely new object or array using the assignment operator (=) but You can freely alter, add, or delete the properties inside that object or array because the underlying memory pointer remains exactly the same

QJUESTION 2 

The Temporal Dead Zone (TDZ) is a specific period in JavaScript execution where a variable exists but cannot be accessed

It is use to prevent run time error 

Example 

function calculateTotal(price) {
    
    if (!config) { 
        return price; 
    }
    
    return price * config.discountRate;


    const config = { discountRate: 0.85 }; 
}

const config = { discountRate: 0.90 };
console.log(calculateTotal(100));

 Instead of processing a faulty calculation and causing a financial or logic error down the line, JavaScript crashes instantly with a clear error message.  

 QUESTION 3 

 Memory HeapCall                Stack (Bottom to Top)
 
 Object → [90, 85, 88]           Frame 3: result = "Hello, Sarah"
 
 Address → 0x00A                 Frame 2: greet(person)  person → Address 0x00A
 
                                 Frame 1 (Global):  result → Address 0x00A (or "Hello, Sarah")  scores →                                Pointer to 0x00A  age → 22  name → "Sarah"



PRODUCT THINKING 

For the display value, the operator, the previous operand i will use let for everythinng because of the below explanation :

Display Value: the values changes everytime the user types number and it mutates in action like deleting, inserting and others. 

Operator:  The operator must be cleared or updated after pressing the equals = button.

Previous Operand: It must reset to empty or zero once the final calculation is complete.