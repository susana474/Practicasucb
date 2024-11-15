document.getElementById('evaluacionForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const practicante = document.getElementById('practicante').value;
    const carrera = document.getElementById('carrera').value;
    const evaluacion = document.getElementById('evaluacion').value;
    const calificacion = document.getElementById('calificacion').value;
  
    if (!practicante || !carrera || !evaluacion || !calificacion) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    // Simulación de envío de datos (puedes conectar con una API aquí)
    alert(`Evaluación enviada:\nPracticante: ${practicante}\nCarrera: ${carrera}\nCalificación: ${calificacion}\nComentarios: ${evaluacion}`);
    
    // Limpia el formulario
    document.getElementById('evaluacionForm').reset();
  });
  