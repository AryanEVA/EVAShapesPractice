import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Scene setup
const scene = new THREE.Scene();
// scene.background = new THREE.Color( 'white' );
// Ambient light setup
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

//#region  Camera Setup
// Camera setup
const camera = new THREE.OrthographicCamera(
  window.innerWidth / -2,
  window.innerWidth / 2,
  window.innerHeight / 2,
  window.innerHeight / -2,
  1,
  1200
);
camera.lookAt(0,0,0);
// const axesHelper = new THREE.AxesHelper( 500 );
// scene.add( axesHelper );

// const camera = new THREE.PerspectiveCamera(
//   495,
//   window.innerWidth / window.innerHeight,
//   1,
//   1000
// );
// camera.position.z = 400;
camera.position.set(0, 2, 400);

//#endregion
//#region DAY-1 of Task based Training (3/1/25)
//#region Shapes setups
// Box setup
// const geometry = new THREE.BoxGeometry(1,1,1);

// Circle setup
// const geometry = new THREE.CircleGeometry(1, 90);

// Cone Setup
// const geometry = new THREE.ConeGeometry(1, 2, 45);

// const shape = new THREE.Shape();
// shape.moveTo(2,1.5);

// shape.bezierCurveTo(0,4,-1,2,-1,0);
// shape.lineTo(1,-1);
// shape.bezierCurveTo(-1.5,0,0,-0.5);
// shape.bezierCurveTo(2,-1,2,-2);
// shape.absarc(0,2,2,0,Math.PI, false);
// shape.bezierCurveTo(-2,1,2,0)
// shape.absarc(0,0,2,0,Math.PI, true);

// shape.lineTo(-2,-2);
// shape.closePath();
// const axesHelper = new THREE.AxesHelper(19);
// scene.add( axesHelper );
// const extrudeSettings = {
// 	steps: 77,
// 	depth: 1,
// 	bevelEnabled: false,
// };

// const shapeGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
// const material = new THREE.MeshBasicMaterial({color: 'red'});

// const box = new THREE.Mesh(geometry, material);
// const mesh = new THREE.Mesh(shapeGeo, material);

// scene.add(mesh);

//#endregion

//#region T Shape Task-1
// const vtShape = new THREE.Shape();
// vtShape.moveTo(0, 0);
// vtShape.lineTo(0, 20);
// vtShape.lineTo(100, 20);
// vtShape.lineTo(100, 0);

// const htShape = new THREE.Shape();
// htShape.moveTo(40, 0);
// htShape.lineTo(40, -80);
// htShape.lineTo(60, -80);
// htShape.lineTo(60, 0);

// const shapeDepth = 1500;
// const extrudeSettings = {
//   steps: 100,
//   depth: shapeDepth,
//   bevelEnabled: true,
// };
// const tMaterial = new THREE.MeshBasicMaterial({ color: "red" });

// const vtEShape = new THREE.ExtrudeGeometry(vtShape, extrudeSettings);
// const vCube = new THREE.Mesh(vtEShape, tMaterial);

// const htEShape = new THREE.ExtrudeGeometry(htShape, extrudeSettings);
// const hCube = new THREE.Mesh(htEShape, tMaterial);

// const tGroup = new THREE.Group();
// tGroup.add(vCube);
// tGroup.add(hCube);
// // scene.add(tGroup);
// tGroup.rotation.x = Math.PI / 2;
// tGroup.rotation.y = Math.PI / 2;
// tGroup.position.x -= shapeDepth / 2;

// camera.position.set( 0, 1, 194 );

//#endregion

//#region Task-2
// const y = 500;
// const x = 500;
//#region Task-2 playAround by capsule
// const capsule = new THREE.CapsuleGeometry(x/2,y-x,3,2);
// const capsuleMaterial = new THREE.MeshStandardMaterial({color: 'red' , roughness: 2, metalness: 0.03});
// const capsuleMesh = new THREE.Mesh(capsule, capsuleMaterial);
// capsuleMesh.rotation.y = Math.PI / 2;

// const capsuleEdges = new THREE.EdgesGeometry(capsule);
// const edgesMesh = new THREE.LineBasicMaterial({ color: 'white'});
// const capsuleLine = new THREE.LineSegments(capsuleEdges, edgesMesh);
// capsuleLine.rotation.y = Math.PI/2;
// const hole1 = new THREE.CircleGeometry(x/4, 1000, 0, Math.PI * 2);

// const hole2 = new THREE.CircleGeometry(x/4, 1000, 0, Math.PI * 2);

// const holeMaterial = new THREE.MeshBasicMaterial({color: 'black', antialias: true});
// const hole1Mesh = new THREE.Mesh(hole1, holeMaterial);
// const hole2Mesh = new THREE.Mesh(hole2, holeMaterial);
// hole1Mesh.position.y += y/2-25;
// hole2Mesh.position.y -= y/2-30;

// const figure = new THREE.Group();
// figure.add(capsuleMesh);
// figure.add(hole1Mesh);
// figure.add(hole2Mesh);
// figure.add(capsuleLine);

// scene.add(figure);
//#endregion
//#region Task-2 Capsule figure to be worked on later
// Upper arc structure
// const uperArc = new THREE.Shape();

// uperArc.absarc(0,y/5,25,0,Math.PI, false);

// Middle Square Structure
// const square = new THREE.Shape();
// square.moveTo(-25,100);
// square.lineTo(-25,-100);
// square.lineTo( 25,-100);
// square.lineTo(25,100);

//Lower Arc Structure
// const LowerArc = new THREE.Shape();
// LowerArc.absarc(0,-y/5,-25,0,Math.PI, false);

// const extrudefigSetting = {
//   	steps: 77,
//   	depth: 30,
//   	bevelEnabled: false,
//   };

// Holes
// Hole 1
// const hole1 = new THREE.Shape();
// hole1.absarc(0, 90, 12, 0, Math.PI * 2, false);

// const holeMaterial = new THREE.MeshBasicMaterial({color: 'yellow'});
// const extrudeHole1 = new THREE.ExtrudeGeometry(hole1, holeMaterial);
// const hole1Mesh = new THREE.Mesh(extrudeHole1, extrudefigSetting);

// Holes
// const hole1 = new THREE.CircleGeometry(12,30,0,Math.PI * 2);
// uperArc.holes.push(hole1);

// const extrudeArc = new THREE.ExtrudeGeometry(uperArc, extrudefigSetting);
// const figureMaterial = new THREE.MeshBasicMaterial({color: 'red'});
// const uperArcMesh = new THREE.Mesh(extrudeArc,figureMaterial);

// const extrudeSquare = new THREE.ExtrudeGeometry(square, extrudefigSetting);
// const squareMesh = new THREE.Mesh(extrudeSquare, figureMaterial);

// const extrudeLowerArc = new THREE.ExtrudeGeometry(LowerArc, extrudefigSetting);
// const lowerArcMesh = new THREE.Mesh(extrudeLowerArc,figureMaterial);

// const figureGroup = new THREE.Group();
// figureGroup.add(uperArcMesh);
// figureGroup.add(squareMesh);
// figureGroup.add(lowerArcMesh);

// scene.add(figureGroup);

//#endregion
//#region Task successfull square shape with a hole in the middle
// const squareShape = new THREE.Shape();
// squareShape.moveTo(-250,250);
// squareShape.lineTo(-250,-250);
// squareShape.lineTo(250,-250);
// squareShape.lineTo(250,250);

// const hole = new THREE.Path();
// hole.absarc(0,0,100,0,Math.PI *2, false);

// squareShape.holes.push(hole);

// const extrudeSquareShape = new THREE.ExtrudeGeometry(squareShape, extrudefigSetting);
// const squareMaterial = new THREE.MeshBasicMaterial({color: 'blue'});
// const figMesh = new THREE.Mesh(extrudeSquareShape, squareMaterial);

// scene.add(figMesh);
//#endregion

//#region Challenge for the complex shape (successfull)
// const y = 500;
// const x = 50;
// const figure = new THREE.Shape();

// figure.absarc(0, 225, 25, 0, Math.PI, false);
// figure.lineTo(-25, -225);
// figure.absarc(0, -225, -25, 0, Math.PI, false);
// figure.lineTo(25, 225);

// const holeShape1 = new THREE.Path();
// holeShape1.absarc(0, 220, 20, 0, Math.PI * 2, true);
// figure.holes.push(holeShape1);

// const holeShape2 = new THREE.Path();
// holeShape2.absarc(0, -220, 20, 0, Math.PI * 2, true);
// figure.holes.push(holeShape2);

// const extrudefigSetting = {
//   steps: 77,
//   depth: 20,
//   bevelEnabled: false,
// };
// const extrudeFigure = new THREE.ExtrudeGeometry(figure, extrudefigSetting);
// const edges = new THREE.EdgesGeometry(extrudeFigure);
// const edgesMaterial = new THREE.LineBasicMaterial({color: 'white'});
// const edgesMesh = new THREE.LineSegments(edges, edgesMaterial);
// scene.add(edgesMesh);
// const figureMaterial = new THREE.MeshStandardMaterial({
//   color: "red",
//   metalness: 0.01,
//   roughness: 8,
// });
// const figMesh = new THREE.Mesh(extrudeFigure, figureMaterial);

// scene.add(figMesh);
//#endregion

//#endregion

//#region Bonus Task
// const tShape = new THREE.Shape();
// tShape.moveTo(-100,0);
// tShape.lineTo(-350,0);
// tShape.lineTo(-350,500);
// tShape.lineTo(350,500);
// tShape.lineTo(350,0);
// tShape.lineTo(100,0);
// tShape.lineTo(100,-300);
// tShape.lineTo(-100,-300);
// tShape.lineTo(-100,0)

// const hollowTShape = new THREE.Path();
// hollowTShape.moveTo(-90,10);
// hollowTShape.lineTo(-340,10);
// hollowTShape.lineTo(-340,490);
// hollowTShape.lineTo(340,490);
// hollowTShape.lineTo(340,10);
// hollowTShape.lineTo(90,10);
// hollowTShape.lineTo(90,-290);
// hollowTShape.lineTo(-90,-290);
// hollowTShape.lineTo(-90,10);

// tShape.holes.push(hollowTShape);

// const extrudeSettings = {
//   step: 100,
//   depth:100,
//   bevelEnabled: true,
// }
// const extrudeTShape = new THREE.ExtrudeGeometry(tShape,extrudeSettings);
// const material = new THREE.MeshBasicMaterial({color: 'red'});
// const TShapeMesh = new THREE.Mesh(extrudeTShape, material);

// scene.add(TShapeMesh);
//#endregion

//#endregion

//#region  DAY-2 of Task based Training

//#region  Hollow T Shape
// const hollowT = new THREE.Shape();
// hollowT.moveTo(-100,0);
// hollowT.lineTo(-330,0)
// hollowT.bezierCurveTo(-330,0,-350,0,-350,20);
// hollowT.lineTo(-350,280)
// hollowT.bezierCurveTo(-350,280,-350,300,-330,300);
// hollowT.lineTo(330,300);
// hollowT.bezierCurveTo(330,300,350,300,350,280);
// hollowT.lineTo(350,20);
// hollowT.bezierCurveTo(350,20,350,0,330,0);
// hollowT.lineTo(100,0);
// hollowT.lineTo(100,-300);
// hollowT.lineTo(-100,-300);
// hollowT.lineTo(-100,0);

// const subT = new THREE.Path();
// subT.moveTo(-100,10);
// subT.lineTo(-330,10)
// subT.bezierCurveTo(-330,10,-340,10,-340,20);
// subT.lineTo(-340,280)
// subT.bezierCurveTo(-340,280,-340,290,-330,290);
// subT.lineTo(330,290);
// subT.bezierCurveTo(330,290,340,290,340,280);
// subT.lineTo(340,20);
// subT.bezierCurveTo(340,20,340,10,330,10);
// subT.lineTo(90,10);
// subT.lineTo(90,-290);
// subT.lineTo(-90,-290);
// subT.lineTo(-90,10);

// hollowT.holes.push(subT);

// const extrudeSettings = {
// steps: 200,
// depth: 70,
// bevelEnabled: true,
// bevelThickness: 100,
// bevelSize: 1,
// bevelOffset: 10,
// bevelSegments: 100
// };

// const extrudeHollowT = new THREE.ExtrudeGeometry(hollowT, extrudeSettings);
// const hollowTMaterial = new THREE.MeshStandardMaterial({color: 'red', side: THREE.DoubleSide, metalness: 0.2, roughness: 5, wireframe: false});
// const hollowTMesh = new THREE.Mesh(extrudeHollowT, hollowTMaterial);

// const edges = new THREE.EdgesGeometry(extrudeHollowT);
// const edgesMaterial = new THREE.LineBasicMaterial({color: "white"});
// const line = new THREE.LineSegments(edges, edgesMaterial);

// scene.add(line);

// scene.add(hollowTMesh);

//#endregion

//#region Task - 4

// const widthParent = 900;
// const hightParent = 500;
// const widthChild = 600;
// const hightChild = 200;
// const depth = 40;
// const ParentRectangleShape = new THREE.Shape();
// ParentRectangleShape.moveTo(0,0);
// ParentRectangleShape.lineTo(-(widthParent/2 - 10), 0);
// ParentRectangleShape.bezierCurveTo(-(widthParent/2 - 10), 0, -(widthParent/2), 0, -(widthParent/2), 10);
// ParentRectangleShape.lineTo(-(widthParent/2), (hightParent - 10))
// ParentRectangleShape.bezierCurveTo(-(widthParent/2), (hightParent - 10), -(widthParent/2), hightParent, -(widthParent/2 - 10), hightParent);
// ParentRectangleShape.lineTo((widthParent/2 - 10), hightParent);
// ParentRectangleShape.bezierCurveTo((widthParent/2 - 10), hightParent, (widthParent/2) , hightParent, (widthParent/2), (hightParent - 10));
// ParentRectangleShape.lineTo((widthParent/2), 10);
// ParentRectangleShape.bezierCurveTo((widthParent/2), 10, (widthParent/2), 0, (widthParent/2 -10), 0);
// ParentRectangleShape.lineTo(0,0)

// const ChildRectangleShape = new THREE.Shape();
// ChildRectangleShape.moveTo(0,0);
// ChildRectangleShape.lineTo(-(widthChild/2 - 10), 0);
// ChildRectangleShape.bezierCurveTo(-(widthChild/2 - 10), 0, -(widthChild/2), 0, -(widthChild/2), 10);
// ChildRectangleShape.lineTo(-(widthChild/2), (hightChild - 10))
// ChildRectangleShape.bezierCurveTo(-(widthChild/2), (hightChild - 10), -(widthChild/2), hightChild, -(widthChild/2 - 10), hightChild);
// ChildRectangleShape.lineTo((widthChild/2 - 10), hightChild);
// ChildRectangleShape.bezierCurveTo((widthChild/2 - 10), hightChild, (widthChild/2) , hightChild, (widthChild/2), (hightChild - 10));
// ChildRectangleShape.lineTo((widthChild/2), 10);
// ChildRectangleShape.bezierCurveTo((widthChild/2), 10, (widthChild/2), 0, (widthChild/2 -10), 0);
// ChildRectangleShape.lineTo(0,0);

// const parentHoleShape = new THREE.Path();
// parentHoleShape.absarc(-(widthParent/2 - 100),hightParent/2,hightChild/3,0,Math.PI * 2, true);

// const childHoleShape = new THREE.Path();
// childHoleShape.absarc(widthChild/2 - 100,hightChild/2,hightChild/3,0,Math.PI * 2, true);

// ParentRectangleShape.holes.push(parentHoleShape);

// ChildRectangleShape.holes.push(childHoleShape);

// const extrudeSettings = {
//   steps: 400,
//   depth: depth,
//   bevelEnabled: true,
//   bevelThickness: 10,
//   bevelSize: 10,
//   bevelOffset: 10,
//   bevelSegments: 1
//   };

//   const extrudeParentShape = new THREE.ExtrudeGeometry(ParentRectangleShape, extrudeSettings);
//   const extrudeChildShape = new THREE.ExtrudeGeometry(ChildRectangleShape, extrudeSettings);

//   const parentShapeMaterial = new THREE.MeshBasicMaterial({color: "red", side: THREE.DoubleSide, wireframe: false});
//   const childShapeMaterial = new THREE.MeshBasicMaterial({color: "Yellow", side: THREE.DoubleSide, wireframe: false});

//   const parentShapeMesh = new THREE.Mesh(extrudeParentShape, parentShapeMaterial);
//   const childShapeMesh = new THREE.Mesh(extrudeChildShape, childShapeMaterial);

//   // childShapeMesh.position.set(-(widthParent/2),(hightParent/2-hightChild/2),50);
//   childShapeMesh.position.set(
//     -(widthChild/2 + widthParent/2-200) ,
//     (hightParent / 2 - hightChild / 2),
//     extrudeSettings.depth + 20
//   );

//   parentShapeMesh.position.z += 1;
//   // parentShapeMesh.rotation.z += Math.PI;
//   childShapeMesh.position.z +=  parentShapeMesh.position.z;

//   // const shapeGroup = new THREE.Object3D();
//   // shapeGroup.add(parentShapeMesh);
//   parentShapeMesh.add(childShapeMesh);

//   parentShapeMesh.position.set(0,-200)
//   scene.add(parentShapeMesh);

//#endregion

//#region Task - 5
// const widthUp = 300;
// const heightUp = 500;
// const widthDown = widthUp / 2;
// const heightDown = 1200;
// const depth = 80;

// const figShape = new THREE.Shape();
// figShape.moveTo(widthUp, 0);
// figShape.lineTo(widthUp, heightUp);
// figShape.quadraticCurveTo(
//   10,
//   heightUp - heightUp / 5,
//   0,
//   heightUp - heightUp / 3
// );
// figShape.lineTo(0, heightUp / 3);
// figShape.quadraticCurveTo(0, heightUp / 4, 20, heightUp/5);
// // figShape.lineTo(widthDown, 10);
// figShape.quadraticCurveTo(widthUp/2, 50, widthUp/2, 0);
// figShape.lineTo(widthUp/3, heightUp/6)

// // figShape.quadraticCurveTo(widthUp/2 - 20, heightUp/4, widthUp/2,heightUp/4)
// figShape.bezierCurveTo(widthUp/3, heightUp/6,widthUp/2, heightUp/4, widthUp/2, 0)
// figShape.lineTo(widthDown, -(heightDown - 10));
// figShape.bezierCurveTo(
//   widthDown,
//   -(heightDown - 10),
//   widthDown,
//   -heightDown,
//   widthDown + 10,
//   -heightDown
// );
// figShape.lineTo(widthUp - 10, -heightDown);

// figShape.bezierCurveTo(
//   widthUp - 10,
//   -heightDown,
//   widthUp,
//   -heightDown,
//   widthUp,
//   -(heightDown - 10)
// );

// const figHole = new THREE.Path();
// figHole.absarc(
//   widthUp / 2,
//   heightUp - heightUp / 3,
//   widthUp / 4,
//   0,
//   Math.PI * 2,
//   true
// );

// figShape.holes.push(figHole);

// const extrudeSettings = {
//   steps: 200,
//   depth: depth,
//   bevelEnabled: true,
//   bevelThickness: 15,
//   bevelSize: 20,
//   bevelOffset: 10,
//   bevelSegments: 10,
// };

// const extrudeFigure = new THREE.ExtrudeGeometry(figShape, extrudeSettings);
// const figureMaterial = new THREE.MeshBasicMaterial({
//   color: "red",
//   wireframe: 0,
//   side: THREE.DoubleSide,
// });
// const figMesh = new THREE.Mesh(extrudeFigure, figureMaterial);
// figMesh.position.x -= widthUp / 2;
// const edges = new THREE.EdgesGeometry(extrudeFigure);
// const linesMaterial = new THREE.LineBasicMaterial({ color: "white" });
// const lines = new THREE.LineSegments(edges, linesMaterial);
// lines.position.x = figMesh.position.x;
// scene.add(lines);
// scene.add(figMesh);
//#endregion

//#endregion

//#region DAY-3 of Task based Training

//#region Handles

// 
// class HandleCurve extends THREE.Curve {
//   constructor() {
//     super();
//   }

//   getPoint(t) {
//     // Define control points for the tube path with handles
//     const radius = 2; // Radius of the handle
//     const length = 10; // Length of the tube
//     const handleOffset = 5; // Offset for the handles

//     let angle = t * Math.PI * 2; // For handles (loops)

//     if (t < 0.25) {
//       // Straight part leading to the first handle
//       return new THREE.Vector3(-length / 2 + t * length, 0, 0);
//     } else if (t < 0.5) {
//       // First handle (circular arc)
//       t = (t - 0.25) * 4; // Normalize
//       return new THREE.Vector3(
//         -length / 2 + handleOffset * Math.cos(t * Math.PI),
//         handleOffset * Math.sin(t * Math.PI),
//         0
//       );
//     } else if (t < 0.75) {
//       // Straight part between handles
//       t = t - 0.5;
//       return new THREE.Vector3(length / 2 - (1 - t) * length, 0, 0);
//     } else {
//       // Second handle (circular arc)
//       t = (t - 0.75) * 4; // Normalize
//       return new THREE.Vector3(
//         length / 2 + handleOffset * Math.cos(t * Math.PI),
//         handleOffset * Math.sin(t * Math.PI),
//         0
//       );
//     }
//   }
// }

// // Create the tube geometry
// const handleCurve = new HandleCurve();
// const tubeGeometry = new THREE.TubeGeometry(handleCurve, 100, 0.5, 8, false);

// // Create material and mesh
// const tubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false });
// const tubeMesh = new THREE.Mesh(tubeGeometry, tubeMaterial);

// // Add the tube to the scene
// scene.add(tubeMesh);

// class CustomSinCurve extends THREE.Curve {

// 	constructor( scale = 1 ) {
// 		super();
// 		this.scale = scale;
// 	}

// 	getPoint( t, optionalTarget = new THREE.Vector3() ) {

// 		const tx = this.scale * Math.cos(Math.PI * t);
// 		const ty = this.scale * Math.sin( Math.PI * t );
// 		const tz = 0;
//     // alert(t); 
// 		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );
// 	}
// }

// const path = new CustomSinCurve( 10 );
// const geometry = new THREE.TubeGeometry( path, 20, 20, 8, false );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const mesh = new THREE.Mesh( geometry, material );
// scene.add( mesh );

//#endregion
//#endregion

//#region Handle by Shape geometry and Extrude Geometry


// handleShape.moveTo(0,0);
// handleShape.lineTo(widthHandle-10,0);
// handleShape.bezierCurveTo(widthHandle-10,0,widthHandle,0,widthHandle,10);
// handleShape.lineTo(widthHandle,heightHandle-10);
// handleShape.bezierCurveTo(widthHandle,heightHandle-10, widthHandle, heightHandle, widthHandle-10, heightHandle);
// handleShape.lineTo(0,heightHandle);

// handleShape.lineTo(0,heightHandle-(radius*2));
// handleShape.lineTo(widthHandle-(radius*2)-10,heightHandle-(radius*2));
// handleShape.bezierCurveTo(widthHandle- (radius*2)-10, heightHandle-(radius*2),widthHandle -(radius*2),heightHandle-(radius*2), widthHandle - (radius*2), heightHandle - (radius*2)-10)
// handleShape.lineTo(widthHandle-(radius * 2), radius * 2 + 10);
// handleShape.bezierCurveTo(widthHandle-(radius * 2), radius * 2 + 10, widthHandle-(radius * 2), radius*2, widthHandle-(radius*2)-10, radius*2);
// handleShape.lineTo(0,radius*2);
function createHandle(width, height, radius, color, steps = 10) {
  // Material
  const handleMaterial = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });

  // Shapes for extrusion
  const circleShape = new THREE.Shape();
  circleShape.absarc(0, 0, radius, 0, Math.PI * 2, false);

  // Extrusion settings
  const extrudeSettings = {
    steps: steps,
    bevelEnabled: false,
  };

  // Bottom connector
  const bottomConnectorGeometry = new THREE.ExtrudeGeometry(circleShape, { ...extrudeSettings, depth: width });
  const bottomConnectorMesh = new THREE.Mesh(bottomConnectorGeometry, handleMaterial);
  bottomConnectorMesh.rotation.y = Math.PI / 2;

  // Right connector
  const rightConnectorGeometry = new THREE.ExtrudeGeometry(circleShape, { ...extrudeSettings, depth: height - radius * 2 });
  const rightConnectorMesh = new THREE.Mesh(rightConnectorGeometry, handleMaterial);
  rightConnectorMesh.rotation.x = Math.PI / 2;
  rightConnectorMesh.position.set(width + radius, height - radius, 0);

  // Top connector
  const topConnectorGeometry = new THREE.ExtrudeGeometry(circleShape, { ...extrudeSettings, depth: width });
  const topConnectorMesh = new THREE.Mesh(topConnectorGeometry, handleMaterial);
  topConnectorMesh.rotation.y = Math.PI / 2;
  topConnectorMesh.position.set(0, height, 0);

  // Bottom torus (curve)
  const bottomCurveConnectorGeometry = new THREE.TorusGeometry(radius, radius, 20, 10, Math.PI / 2);
  const bottomCurveConnectorMesh = new THREE.Mesh(bottomCurveConnectorGeometry, handleMaterial);
  bottomCurveConnectorMesh.rotation.z = -Math.PI / 2;
  bottomCurveConnectorMesh.position.set(width, radius);

  // Top torus (curve)
  const topCurveConnectorGeometry = new THREE.TorusGeometry(radius, radius, 20, 10, Math.PI / 2);
  const topCurveConnectorMesh = new THREE.Mesh(topCurveConnectorGeometry, handleMaterial);
  topCurveConnectorMesh.position.set(width, height - radius);
  
  // all parts added to the parent object

  const parentObject = new THREE.Object3D();

  parentObject.add(bottomConnectorMesh);
  parentObject.add(rightConnectorMesh);
  parentObject.add(topConnectorMesh);
  parentObject.add(bottomCurveConnectorMesh);
  parentObject.add(topCurveConnectorMesh);

  return parentObject;
}

const handleWidth = 25;
const handleHeight = 50;
const handleRadius = 5;
const handleColor = 'red';
const steps = 1;

const handle = createHandle(handleWidth, handleHeight, handleRadius, handleColor, steps);
scene.add(handle);


//#endregion
//#region  Renderer setup
const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.render(scene, camera);
//#endregion

//#region Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

controls.update();
//#endregion

//#region animation
function animate() {
  controls.update();

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
//#endregion
