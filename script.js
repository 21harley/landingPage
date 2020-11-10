const $d=document;
const mensaje=["Nombre","Email corporativo","Empresa","Sitio web","Telefono"];
const $input=$d.querySelectorAll(".formulario-form__input");
let id=-1;

$d.addEventListener("click",(e)=>{
    $input.forEach((el,index)=>{
          if(el.value==""){
              el.value=mensaje[index];
          }
    });
    if(e.target.matches(".formulario-form__input")){
       id=e.target.id;
       e.target.value="";
    }
});
$d.addEventListener("submit",(e)=>{
    e.preventDefault();
    let cont=0;
    $input.forEach((el,index)=>{
          if(el.value!==mensaje[index]){
              cont++;
          }
    });
    if(cont<2){
        alert("No ingreso datos");
        return;
    }
    if(/[0-9]/.test($input[0].value)){
        alert("El nombre no es valido");
        return;
    }
    if(!(/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i.test($input[1].value))){
        console.log($input[1].value);
        alert("El correo no es valido");
        return;
    }
    if(/[^A-Za-z0-9_]/.test($input[2].value)){
        alert("El nombre de la empresa no es valido");
        return;
    }
    if(/[^A-Za-z0-9_.://]/.test($input[3].value)){
        alert("El nombre del sitio web no es valido");
        return;
    }
    if(/[^0-9]/.test($input[4].value)){
        alert("El numero no es valido");
        return;
    }
    const $form=$d.querySelector(".formulario-form");
    const $padre=$form.parentNode;
    const $clon=$form.childNodes[11].cloneNode();
    
    $clon.className+=" open";
    $padre.removeChild($form);

    const $a=$d.createElement("a");
    
    $a.setAttribute("href","asset/pdf/guia_optimizacion_motores_busqueda.pdf");
    $a.setAttribute("download","SEO");
    $a.setAttribute("class","descarga");
    $a.innerHTML="Download";
    
    $clon.append($a);
    $padre.append($clon);
    $padre.style.gridTemplateRows="repeat(2,15%) 60% 10%";
    
});

