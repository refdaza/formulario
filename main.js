const container = document.getElementById('container')
container.style.display="flex"
container.style.width="40%"
container.style.height="auto"
container.style.gap="20px"
container.style.margin="0"
const agregar = ()=> {
    container.innerHTML = `
    <form action="">
    <div id="formulario">
    <label>Ingrese el nombre del trabajador</label>
    <input type="text" id="nombre" required/>
    <label>Ingrese la cantidad de horas que trabajo</label>
    <input type="number" id="horas" required/>
    <label>Seleccione la clase del trabajador</label>
    <select name="" id="clase" required>
        <option value="40">A</option>
        <option value="35">B</option>
        <option value="30">C</option>
    </select>
    <label>Ingrese los años de trabajo</label>
    <input type="number" id="yearsWork" required/>
    <input type="submit" value="Calcular" id="calcular" onclick="result(event)"/>
    <input type="reset" value="Limpiar"/>
    </div>
    </form>
    
    <div id="resultado">
    </div>
    `
}
agregar()
const nombre = document.getElementById('nombre')
const horas = document.getElementById('horas')
const clase = document.getElementById('clase')
const yearsWork = document.getElementById('yearsWork')
const formulario = document.getElementById('formulario')
formulario.style.display="flex"
formulario.style.flexDirection="column"
formulario.style.gap="10px"
const resultado = document.getElementById('resultado')
resultado.style.width="400px"
resultado.style.height="200px"
resultado.style.padding="10px"
resultado.style.border="1px solid"



const bono = ()=> {
    const sueldo = `${horas.value * clase.value}`
    let bonficacion = 0
    if(yearsWork.value>=1 || yearsWork<= 3){
       bonificacion = sueldo * 15/100
    } else if (yearsWork.value>=4 || yearsWork.value <= 7) {
        bonificacion = sueldo * 20/100
        
} else if (yearsWork.value >= 8|| yearsWork.value>=12) {
    bonificacion = sueldo  * 30/100
    
} else if(yearsWork.value>= 13) {
    bonificacion = sueldo * 35/100
    
}
return bonificacion;
}
   
const result = (event)=> {
    console.log(horas.value);
    console.log(clase.value);
    const sueldo = `${horas.value * clase.value}`
    const sueldoNeto = parseInt(sueldo) + bono()
    console.log(typeof sueldo);
    console.log(typeof bono());
    event.preventDefault();
    resultado.innerHTML = `
    <p>El sueldo basico de${nombre.value} es: s/. ${sueldo}</p>
    <p>Su bonificacion por años de servicio es: s/.  ${bono()}</p>
    <p>su sueldo neto es:s/. ${sueldoNeto}</p>
      `
}