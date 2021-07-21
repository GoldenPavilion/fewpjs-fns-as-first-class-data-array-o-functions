const wakeDog = function wakeDog(dogName, dogBreed) {
    const wake = `Wake ${dogName} the ${dogBreed}`;
    console.log(wake);
    return wake ;
}

const leashDog = function leashDog(dogName, dogBreed) {
    const leash = `Leash ${dogName} the ${dogBreed}`;
    console.log(leash);
    return leash;
}

const walkToPark = function walkToPark(dogName, dogBreed) {
    const walk = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(walk);
    return walk;
}

const throwFrisbee = function throwFrisbee(dogName, dogBreed) {
    const throwFrisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(throwFrisbee);
    return throwFrisbee;
}

const walkHome = function walkHome(dogName, dogBreed) {
    const walk = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(walk);
    return walk;
}

const unleashDog = function unleashDog(dogName, dogBreed) {
    const unleash = `Unleash ${dogName} the ${dogBreed}`;
    console.log(unleash);
    return unleash;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    const newArray = []

    for (let i = 0; i < routine.length; i++) {
        const update = routine[i](dogName, dogBreed)
        newArray.push(update)
    }
    return newArray;
}