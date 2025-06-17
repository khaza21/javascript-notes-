//two sum 

const numbers = [2,7,11,12]
const target = 9;

function twoSum (numbers, target){
    for (i=0; i< numbers.length; i++){
        for(j=i+1; j< numbers.length; j++){
            if(numbers[i]+ numbers[j] === target){
                return [i,j];
            }

        }
    }
}
console.log (twoSum(numbers,target));










