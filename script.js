// Задача 1
// Робота има нужда от система за навигация, трябва да получава входни данни какъв е типът на обекта който се намира пред него, стена, стол или нищо. Ако пред него има стена, то той трябва да се обърне на ляво или на дясно. Ако пред него има стол то той трябва да го прескочи ако няма нищо трябва да продължи напред. Програмата на робота трябва да приеме входните данни и да му даде команда Forward / Jump / Go Sideway

const HIT_COEFFICIENT = 5;
const MAX_NUMBER_OF_HITS = 4;

var isRobotTurnOn = true;
var numberOfAvailableHits = MAX_NUMBER_OF_HITS;


while(isRobotTurnOn) {

    const objectInFrontOfMe = prompt("Какъв обект има пред мен?");
    // 1 - ако това е стена
    // 2 - ако това е стол
    // 3 - ако това е нищо
    // 0 - нищо

    if(objectInFrontOfMe == 1) {
        alert("Go Sideway");
    }
    if(objectInFrontOfMe == 2) {
        alert("Jump");
    }
    if(objectInFrontOfMe == 3) {
        alert("Forward");
    }
    if(objectInFrontOfMe == 0) {
        alert("Robot turned off");
        isRobotTurnOn = false; // - друг вариант за прекъсване на цикъла.
        // break; // бъде ли срещната, извежда кода на следващата линия непосредствено след затварящата скоба на цикъла, т. е. цикъла приключва.
    }

    // задача 2.1
    const numberOfEnvironmentPixels = prompt("Засечени пиксели от заобикалящия ни терен:");
    const isMouseDetected = numberOfEnvironmentPixels % 2 == 0;

    //задача 2.2
    //  TODO - да не забравя да извадя направения удар от numberofAvailableHits!
    
    
    
    const isBatteryFull = numberOfAvailableHits > 0;
    
    if(!isBatteryFull) {
        alert("Свърши ми тока - отивам да зареждам");

        do {
            const phaseCoefficient = Math.floor(Math.random()*(1000 - 1) + 1);
            const zeroCoefficient = Math.floor(Math.random()*(1000 - 1) + 1);
            if(phaseCoefficient > zeroCoefficient) {
                numberOfAvailableHits = MAX_NUMBER_OF_HITS; 
            }
            if(phaseCoefficient < zeroCoefficient) {
                isRobotTurnOn = false;
                // break; - ако го напиша, то само вътрешният цикъл ще прилючи! А не цикъла, в който е цикъла с break;
            }
        
        } while(phaseCoefficient == zeroCoefficient)

    }



    // задача 2.3
    const randomGeneratedNumber = Math.ceil(Math.random() * 9 + 1);

    // връща от 0 до 1, но никога 1;
    // Math.random()*(10 - 5) + min

    // 1* 10 = 10
    // 0* 10 = 0
    // 0.5* 10 = 5


    // вариант 1:
    // const isHitSuccessfull = randomGeneratedNumber > 5 || randomGeneratedNumber < 5;
    // Вариант 2:
    const isHitSuccessfull = randomGeneratedNumber !=HIT_COEFFICIENT;

    // проверка за възможност за нанасяне на удар:
    const isHitPossible = isMouseDetected && isBatteryFull && isHitSuccessfull;


     // задача 5:
             // Вар 1:
    if(isHitPossible) {
        alert("Успешно нанесохте удар");
        // numberOfAvailableHits = numberOfAvailableHits - 1; // вариант 1
        numberOfAvailableHits--; //вариант 2 на предходния ред
    
        // вар 2:
        // var upperBoundNumber = 10;
        // while(upperBoundNumber > 0 ); {
        //     alert(upperBoundNumber);
        //     if(upperBoundNumber % 2 == 0) {
        //         alert(`I am a robottttt ${upperBoundNumber}`);
        //     }
        //     upperBoundNumber--;
        // }

        // Цикъл с брояч
        for(var upperBound = 10; upperBound > 0; upperBound--) {

            alert(upperBoundNumber);

            if(upperBoundNumber % 2 == 0) {
                alert(`I am a Robottttt ${upperBoundNumber}`);
            }
        }
    }

}










