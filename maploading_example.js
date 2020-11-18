// JS example for M2M?
function readMol(file, colour){
	fetch(file).then(function(x){
		stage.loadFile(file, {ext:'mol'}).then(function(o){
			o.addRepresentation('licorice', {color:colour, multipleBond: 'symmetric'})
			o.autoView()
		})
	})
}

function readPDB(file, representation){
	fetch(file).then(function(x){
		stage.loadFile(file, {ext:'pdb'}).then(function(o){
			o.addRepresentation(representation)
		})
	})
}

function readMap(file, colour){
  fetch(file).then(function(x){
    stage.loadFile(file).then(function(o){
      o.addRepresentation('surface', {color:colour, isolevel:2,boxSize:0, contour:true, wrap:true})
    })
  })
}


readPDB('https://raw.githubusercontent.com/TJGorrie/FourMol/master/Mpro-x0072_0A/Mpro-x0072_0A_apo.pdb', 'cartoon')

readMol('https://raw.githubusercontent.com/TJGorrie/FourMol/master/Mpro-x0072_0A/Mpro-x0072_0A.mol', 'tomato')
// The eventmaps I have copied do not appear to have any densities associated, so demonstrating with map files.
readMap('https://raw.githubusercontent.com/TJGorrie/FourMol/master/Mpro-x0072_0A/Mpro-x0072_0A_2fofc.map', 'tomato')

readMol('https://raw.githubusercontent.com/TJGorrie/FourMol/master/Mpro-x0104_0A/Mpro-x0104_0A.mol', 'limegreen')
readMap('https://raw.githubusercontent.com/TJGorrie/FourMol/master/Mpro-x0104_0A/Mpro-x0104_0A_2fofc.map' , 'limegreen')

//readMap('https://raw.githubusercontent.com/TJGorrie/FourMol/master/Mpro-x0072-event_2_1-BDC_0.27_map.native.P1.ccp4')
