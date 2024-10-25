/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    let s = [];
    let car = position.map((pos, ind) => {
        return {
            position: pos,
            speed: speed[ind],
            time: (target - pos) / speed[ind]
        }
    });
    car = car.sort((a, b) => {
        return b.position - a.position
    })
    console.log(car);
    for (let i of car) {
        console.log(s);
        if (s.length === 0) {
            s.push(i.time);
        }
        let top = s[s.length - 1];
        if (top < i.time) {
            s.push(i.time)
        }
    }
    return s.length;
}



console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]))