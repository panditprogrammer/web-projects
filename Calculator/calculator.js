
let calculator_buttons = [
    {
        name : "delete",
        symbol : "⌫",
        formula : false,
        type : "key"
    },
    
    {
        name : "clear",
        symbol : "C",
        formula : false,
        type : "key"
    },
    
    {
        name : "percent",
        symbol : "%",
        formula : "/100",
        type : "number"
    },
    
    {
        name : "division",
        symbol : "÷",
        formula : "/",
        type : "operator"
    },
    
    {
        name : "7",
        symbol : 7,
        formula : 7,
        type : "number"
    },
    
    {
        name : "8",
        symbol : 8,
        formula : 8,
        type : "number"
    },
    
    {
        name : "9",
        symbol : 9,
        formula : 9,
        type : "number"
    },
    
    {
        name : "multiplication",
        symbol : "×",
        formula : "*",
        type : "operator"
    },
    
    {
        name : "4",
        symbol : 4,
        formula : 4,
        type : "number"
    },
    
    {
        name : "5",
        symbol : 5,
        formula : 5,
        type : "number"
    },
    
    {
        name : "6",
        symbol : 6,
        formula : 6,
        type : "number"
    },
    
    {
        name : "subtraction",
        symbol : "–",
        formula : "-",
        type : "operator"
    },
    
    {
        name : "1",
        symbol : 1,
        formula : 1,
        type : "number"
    },
    
    {
        name : "2",
        symbol : 2,
        formula : 2,
        type : "number"
    },
    
    {
        name : "3",
        symbol : 3,
        formula : 3,
        type : "number"
    },
    
    {
        name : "addition",
        symbol : "+",
        formula : "+",
        type : "operator"
        
    },
    
    {
        name : "0",
        symbol : 0,
        formula : 0,
        type : "number"
    },
    
    {
        name : "comma",
        symbol : ".",
        formula : ".",
        type : "number"
    },
    
    {
        name : "calculate",
        symbol : "=",
        formula : "=",
        type : "calculate"
    }
];

//element selector

const input_element = document.querySelector(".input");
const output_result_element = document.querySelector(".result .value");
const output_operation_element = document.querySelector(".operation .value");


//caculator button
function createButtons()
{
    const btn_per_row = 4;
    let add_btn =  0;

    //foreach loop for array
    calculator_buttons.forEach((button ) =>{
        if(add_btn % btn_per_row == 0)
        {
            input_element.innerHTML +=`<div class="row"></div>`;
        }

        const row = document.querySelector(".row:last-child");

        row.innerHTML += `<button id="${button.name}">${button.symbol}</button>`;

        add_btn++;
    })
}

createButtons();

//onclick 

input_element.addEventListener("click",event =>{

    const target_btn = event.target;

    calculator_buttons.forEach(button =>{

        if(button.name  == target_btn.id)
        calculator(button);
    })

})

//caculator data
let data = {
    operation :[],
    result :[]
}


//calculator button array 

function calculator(button)
{
    if(button.type == "operator")
    {
        data.operation.push(button.symbol);
        data.result.push(button.formula);
    }
    else if(button.type == "number")
    {
        data.operation.push(button.symbol);
        data.result.push(button.formula);
    }
    else if(button.type == "key")
    {
        if(button.name  == "clear")
        {
            data.operation = [];
            data.result = [];
            updateOutputResult(0);
        }
        else if(button.name == "delete")
        {
            data.operation.pop();
            data.result.pop();
        }

    }
    else if(button.type == "calculate")
    {
        let join_result = data.result.join('');

        data.operation = [];
        data.result = [];

        let result_final;
        try
        {
             result_final = eval(join_result);
        }
        catch(e)
        {
            if(e instanceof SyntaxError )
            {
                result_final = "Error!";
                updateOutputResult(result_final);
                return;
            }
        }

        result_final = formatResult(result_final);
        
        data.operation.push(result_final);
        data.result.push(result_final);
        
        updateOutputResult(result_final);
        return;
    }
    
    updateOutputOperation(data.operation.join(''));
}

//outputOperation and result function

function updateOutputOperation(operation)
{
    output_operation_element.innerHTML = operation;
}

function updateOutputResult(result)
{
    output_result_element.innerHTML = result;
}

//formating result
function formatResult(result)
{
    const max = 10;
    const output_precision = 5;

    if(countDigit(result) > max)
    {
        if(isFloat(result))
        {
            const result_int = parseInt(result);
            const result_int_length = countDigit(result_int);

            if(result_int_length > max)
            {
                return result.toPrecision(output_precision);
            }
            else
            {
                const digitAfterPoint = max - result_int_length;
                return result.toFixed(digitAfterPoint);
            }
        }
        else 
        {
            //check integer number
            return result.toPrecision(output_precision);
            
        }

    }
    else
    {
        return result;
    }

}

//checking float number
function isFloat(number)
{
    return number%1 != 0;
}

//digit counter
function countDigit(number)
{
   
    return number.toString().length;
}