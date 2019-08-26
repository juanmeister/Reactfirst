// dssadd
// vcfad
// SVGPathSegCurvetoQuadraticSmoothAbsass
//ctrl+k+c


const personas = [
    {nombre:'Nozdormu', edad:21, aprendiendo:'Tiempo'},
    {nombre:'Malygos', edad:28, aprendiendo:'Magia'},
    {nombre:'Alextrazza', edad:31, aprendiendo:'Vida'},
    {nombre:'Ysera', edad:31, aprendiendo:'Sueño'},
    {nombre:'Alamuerte', edad:61, aprendiendo:'Muete'},  
]

console.log(personas);

const mayores = personas.filter(persona =>{
    return persona.edad > 28;
});

console.log(mayores);