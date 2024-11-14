function aceptarSolicitud() {
    alert('Solicitud aceptada');
    // Implementa lógica para aceptar la solicitud
  }
  
  function rechazarSolicitud() {
    alert('Solicitud rechazada');
    // Implementa lógica para rechazar la solicitud
  }
  
  function filtrarReporte() {
    const gestion = document.getElementById('filtroGestion').value;
    const carrera = document.getElementById('filtroCarrera').value;
    alert(`Filtrar por Gestión: ${gestion}, Carrera: ${carrera}`);
    // Implementa la lógica para filtrar el reporte
  }
  