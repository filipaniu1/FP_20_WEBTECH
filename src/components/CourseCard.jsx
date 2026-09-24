
function CourseCard() {
  const course = {
    name: "Kurs React",
    teacher: "Rafał Taraszka",
    hours: 30,
    completed: "tak"
  };

  return (
    <section className="course-section">
      <h2 className="course-title">{course.name}</h2>
      <p className="course-teacher">Prowadzący: {course.teacher}</p>
      <p className="course-duration">Czas trwania: {course.hours} godzin</p>
      
      <p className="course-minutes">
        Czas w minutach: {course.hours * 60} minut
      </p>
      <p className="course-status">
        Ukończono: {course.completed}
      </p>
    </section>
  );
}

export default CourseCard;
