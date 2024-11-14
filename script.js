document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const codigo = document.getElementById('codigo').value;
    
    // Simula verificación de código (puedes adaptar este código para validar)
    if (codigo === 'DOCENTE2023') {
      window.location.href = 'docente.html'; // Redirige a docente.html
    } else if (codigo === 'EMPRESA2023') {
      window.location.href = 'empresa.html'; // Redirige a empresa.html
    } else {
      alert('Código incorrecto');
    }
  });
  
  
  function aceptarSolicitud() {
    alert('Solicitud aceptada');
    // Implementa la lógica para aceptar la solicitud
  }
  
  function rechazarSolicitud() {
    alert('Solicitud rechazada');
    // Implementa la lógica para rechazar la solicitud
  }
  
  function filtrarReporte() {
    const gestion = document.getElementById('filtroGestion').value;
    const carrera = document.getElementById('filtroCarrera').value;
    alert(`Filtrar por Gestión: ${gestion}, Carrera: ${carrera}`);
    // Implementa la lógica para filtrar el reporte
  }
  