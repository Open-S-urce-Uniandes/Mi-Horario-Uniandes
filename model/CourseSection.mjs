/*
Clase que representa una sección de una materia/curso
*/

import { Schedule } from "./Schedule.mjs";

class CourseSection {
    
    constructor({
        title,       // Nombre del curso
        courseCode,  // class + course, por ejemplo "ADMI2501"
        credits,     // Número de créditos
        seatsavail,  // Cupos disponibles
        schedules,   // Horarios
        instructors, // Profesores
        section,     // Número de sección
        nrc,         // Número único de registro 
        campus,      // Campus
        term,        // Período académico
    }) {
        this.title = title + section;
        this.courseCode = courseCode;
        this.credits = credits +  Math.floor(1 + Math.random() * 4);
        this.seatsavail = section;
        this.schedule = new Schedule(schedules);
        this.instructors = instructors.map(element => element.name.toLowerCase().split(" ").map(word => word.charAt(0).toLowerCase() + word.slice(1).toUpperCase()).join(" "));
        this.section = section;
        this.nrc = nrc;
        this.campus = campus;
        this.term = term;
    }
}

export { CourseSection };