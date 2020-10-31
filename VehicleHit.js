export function vehicleHit(myCar, traffic){

    for(let i=0; i<traffic.length; i++) {

        let randomCar = traffic[i];

        if(randomCar.positionY > 510 && randomCar.positionY < 640){

            if(Math.abs(randomCar.positionX - myCar.positionX) <=35){

                return true;
            }

        }

    }

    return false;
}