/* global Hydra */
/* global osc */

const canvas = document.getElementById("hydracanvas");

canvas.width = 3840;
canvas.height = 2160;

// create a new hydra-synth instance
var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
})

setResolution(3840,2160);
ar = window.innerWidth/window.innerHeight
pr = 210/297
if (window.innerWidth > window.innerHeight) {sc = pr/ar} else {sc = ar/pr}

// var artists = ["artist1.png","artist2.png","artist3.png","artist4.png"]
// var artist = 0;


s0.initImage("elements/blacktext_layer.png");
s1.initImage("elements/vizmaskmaxtop_layer.png")
s2.initImage("elements/vizmaskmaxbottom_layer.png");

src(s0).invert().posterize( [1, 5, 15, 30] , 0.5 ).scale(sc,1,ar/pr).out(o0)

//LAYER 0
// osc(40,0.1,8).rotate(3.14/2).color(1,0,1).pixelate(20, 2000).sub(s0).scale(sc,1,ar/pr).out(o0)
osc(40,0.1,8).rotate(3.14/2).color(1,0,1).pixelate(20, 2000).sub(s1).scale(sc,1,ar/pr).out(o1)


// Layer1
osc(40,0.1,8).color(1,0,1).pixelate(20, 2000).sub(s2).scale(sc,1,ar/pr).out(o2)





function changeViz(){
    // artist = Math.floor(Math.random()*11)+1
    // s2.initImage("artists/artist"+ artist +".png");
  if (Math.random() > 0.5) {
    out = o1; 
    mask = s1; 
  } else { 
    out = o2;
    mask = s2;
  }    
  numberoffunctions = 8 ; 
  switch( Math.floor(Math.random()*numberoffunctions) ) {
    case 0:
      osc(20, 0.01, 1.1)
      .color(2.83,0.91,0.39)
      .modulateKaleid(osc(11,0.05,0),50)
      .rotate(0, 0.1)
      .modulate(out, () => mouse.x * 0.0004)
      .scale(1.01)
      .sub(mask).scale(sc,1,ar/pr).out(out)  
      break;
    case 1:
      osc(40,0.1,8).color(1,0,1).pixelate(20, 2000).sub(mask).scale(sc,1,ar/pr).out(out)
      break;
    case 2:
      osc(400,0.1,8).color(0,1,1).pixelate(20, 2000).sub(mask).scale(sc,1,ar/pr).out(out)
      break;
    case 3:
      osc(40,0.1,8).color(1,1,1).pixelate(20, 2).sub(mask).scale(sc,1,ar/pr).out(out)
      break;
    case 4:
      osc(400,0.1,8).color(0,1,1).pixelate(20, 200).sub(mask).scale(sc,1,ar/pr).out(out)
      break;    
    default:
      osc(40,0.1,8).color(1,1,0).pixelate(20, 2000).sub(mask).scale(sc,1,ar/pr).out(out)    
    case 5:
      osc(40,0.1,8).rotate(3.14/2).color(1,0,1).pixelate(20, 2000).sub(mask).scale(sc,1,ar/pr).out(out)
      break;
    case 6:
      osc(20, 0.03, 0.7).mult(osc(20, 0.01, 0).rotate(1.58)).modulateScale(osc(10, 0),-0.03).kaleid(55).blend(out, 0.15).scale(0.8, () => (1.05 + 0.1 * Math.sin(0.05*time))).sub(mask).scale(sc,1,ar/pr).out(out)
      break;
    case 7:
      osc(4, 0.1, 0.3).color(0.4, 2, -1.1).rotate(0.63, 0.1).pixelate(5, 10).modulate(voronoi(2.5), 1)
      .sub(mask).scale(sc,1,ar/pr).out(out)  
      break;
    }
}

// changeViz();



// osc(10, 0.01, 1.4)
// 	.rotate(0, 0.4)
// 	.mult(osc(10, 0.1).modulate(osc(10).rotate(0, -0.1), 1))
// 	.color(2.3,2.91,4.39)
//   .out(o1)





src(o1).add(o2).diff(o0).out(o3)
src(o1).add(o2).out(o3)

render(o3)

