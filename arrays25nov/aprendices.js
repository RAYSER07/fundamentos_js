//funciion que dibuja la tabla (recibe el objeto)
function renderizar(aprendiz) {
    let filas = "";

    for (const [clave,valor] of Object.entries(aprendiz)){
        const contenido = (valor === ""|| valor === null || valor === undefined)
        ? "<em>sin dato</em>"
        : valor ;
        
        filas +=`
        <tr>
            <th>${clave}</th>
            <td>${contenido}</td>
        </tr>
    `;
    }
      document.getElementById("salida").innerHTML=`
      <table border="1" cellpadding="6" style="border-collapse: collapse;">
       <thead>
       <tr> <th>campo</th><th>valor</th></tr>
       </thead>
       <tbody>${filas}</tbody>
       </table>
    `;
}


