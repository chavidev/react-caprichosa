display: flex;  /* gird y algunos métodos mas faltarían aquí*/ 

/* justify si row => actua en x    si colum => actua en y   */ /*  main axis  */
justify-content: flex-start   /* flex-start || flex-end || center || space-between ||  space-around(uniforme) ||  space-evenly(igualado) */
/* actua sobre el cross axis  */
align-items: stretch /* stretch(lo que ocupe el mayor, el resto los estira a esa medida) || flex-start || flex-end || center || baseline(¿los alinea respecto al texto? aligned as their baselines align*/
 align-self: CORRIGE align-items en el hijo

/* poco uso: ¡se usa sólo cuando los item van saltando a las siguientes líneas! */
/* interlineado al principio, al final, en medio o sin interlineado estirando las cajas */
/*  una alternativa es margin botton  */
align-content: stretch  /* flex-start || flex-end || center || space-between ||  space-around || stretch(default)*/


/* espacio entre cajas */
gap: 1 rem /* gap || row-gap || colum-gap */
gap: 10px 30px

flex-direction:row /* row || row-reverse || column || column-reverse */    /* eje principal*/

flex-wrap: nowrap  /* nowrap(no-salta=>overflow) || wrap(salta a la siguiente línea) || wrap-reverse (salta a la línea superior) || inherit */
flex-flow: row wrap   /* flex-direction + flex-wrap*/

######################## propiedades de los hijos######################


flex: 1  /* flex-grow:1 flex-shink:1 flex-basis: AUTO Y NO 0%*CONFIRMAR FUNCINAMIENTO CON AUTO/
flex1 2 /* flex-grow:1 flex-shink:1 flex-basis: AUTO Y NO 0%CONFIRMAR*/

flex-grow: 0(default) /* 0(no crece) || 1(crece) || */                    /* crecimiento */  /*  reparto del sobrante  */

flex-shink: 1(default)  /* 0(constante=> generaoverflow sin flex-wrap)  || 1(contrae) || >1(contrae con mayor intensidad)*/  /*  =encogimiento  || sin espacio =>contrae */ 

flex-basis: 0% || número /* reparte el espacio sobrante, pero si puede lo coge y manda otros a otra línea*/
0  incrementa según el tamaño     ¿nada?=error    PENDIENTE DE ANALIZAR
auto  reparte ¿automático espacion extra según flex-grow?   PENDIENTE DE ANALIZAR
y con valores o porcentage, lo incrementa a proporción (el espacio sobrante)
¿no es espacio extra es todo el tamaño que se multiplica por dos y por cuatrosegún el flex-grow EN CASO DE CERO?



/* ojo los hijos empiezan por el uno */
.card:nth-child(2) { align-self: flex-end}  /* modificamos un item específico  */
.card:nth-child(2n+3) { align-self: flex-end}  /*  hacemos lineas de una cebra */
aling-self: flex-end /*sobreescribe el comportamiento del padre*/

order: -2   /* modifica el orden preestablecido */ /*  por defecto es cero y se le pueden dar valores + y -  */

#####################  no es de flex pero ayouda   #############################

min-width: 15 rem    /*  espacio mínimo de las cajas  */
line-height:     /*interlineado   ¿pa mi que esto no es de flex?   */
text-align: center;   /* ¿pa mi que esto no es de flex? */

/* modificando el orden de escritura */
Direction: ltr       /* left to right  */
Direction: rtl       /*  right to left  */
/* ¡no es flex, pero se puede usar! ¿para tocar las narices? */
