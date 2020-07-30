// Setup to load data from rawgit
// https://codepen.io/pen?editors=0011
// Create NGL Stage object

var stage = new NGL.Stage( "viewport" );

// Handle window resizing
window.addEventListener( "resize", function( event ){
    stage.handleResize();
}, false );

function readFile(file, badids){
  fetch(file).then(response => response.text()).then(function(x){
    var regexp = /[CSONF]/g;
    var match,matches = [];
    while( ( match = regexp.exec(x) ) != null ){ 
        matches.push(match[0]);
    }
    var idx = [...Array(matches.length).keys()]
    let diff = idx.filter(x => !badids.includes(x))
    stage.loadFile(file).then(function(o){
        //o.addRepresentation('line', {multipleBond:'symmetric'})
        o.addRepresentation('ball+stick',
                     {aspectRatio:2, sele:'@'.concat(diff), 
                      multipleBond:'symmetric'})
        o.addRepresentation('point',
                     {sele:'@'.concat(badids), sizeAttenuation: true,
                      pointSize: 5,
                      opacity: .6,
                      useTexture: true,
                      alphaTest: 0,
                      edgeBleach: 1,
                      forceTransparent: false,
                      sortParticles: true})
  })
})
}

readFile('https://raw.githubusercontent.com/TJGorrie/FourMol/master/Mpro-x0072_0.mol', 
         badids=[9,10,11]);
readFile('https://raw.githubusercontent.com/TJGorrie/FourMol/master/Mpro-x0104_0.mol', 
         badids=[15,14,13,12]);
readFile('https://raw.githubusercontent.com/TJGorrie/FourMol/master/Mpro-x0161_0.mol', 
         badids=[0,1,2,3]);
