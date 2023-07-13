/* 
Representa un bloque de tiempo como minutos desde el inicio del día.
*/
class TimeBlock {

    constructor({
        time_ini : startTime,
        time_fin : endTime,
    }) {
        this.startTime = TimeBlock.calculateInstant(startTime);
        this.endTime = TimeBlock.calculateInstant(endTime);
        this.duration = TimeBlock.calculateDuration(startTime, endTime);
    }

    toString() {
        return `${TimeBlock.calculateTime(this.startTime)} - ${TimeBlock.calculateTime(this.endTime)}`
    }

    static fromInstants({
        time_ini : startTime,
        time_fin : endTime,
    }) {
        let timeBlock = new TimeBlock({time_ini: "0000", time_fin: "0000"});
        timeBlock.startTime = startTime;
        timeBlock.endTime = endTime;
        timeBlock.duration = endTime - startTime;
        return timeBlock;
    }

    // Halla la cantidad de minutos desde el inicio del día
    // time en el formato "hhmm", por ejemplo "0920"
    static calculateInstant(time) {
        
        const hour = +time.slice(0,2);
        const minute = +time.slice(2,4);
        const instant = (hour * 60) + minute;
        return instant;
    }

    // Halla el tiempo en formato "hh:mm" a partir de un instante de tiempo
    static calculateTime(instant) {
        
        const hour = Math.floor(instant / 60);
        const minute = String(instant % 60).padStart(2, '0');  // Padding para casos como '0'
        const time = hour + ":" + minute;
        return time;
    }

    // Calcula la duración en minutos entre dos tiempos.
    // startTime < endTime
    static calculateDuration(startTime, endTime) {

        // Halla la duración como una diferencia entre instantes de tiempo
        const startInstant = TimeBlock.calculateInstant(startTime);
        const endInstant = TimeBlock.calculateInstant(endTime);
        return endInstant - startInstant;
    }
}

export { TimeBlock };