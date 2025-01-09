import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { ThreeMFLoader } from "three/examples/jsm/Addons.js";
import { hue } from "three/tsl";

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
camera.lookAt(0, 0, 0);
const axesHelper = new THREE.AxesHelper(500);
scene.add(axesHelper);

// const camera = new THREE.PerspectiveCamera(
//   495,
//   window.innerWidth / window.innerHeight,
//   1,
//   1000
// );
// camera.position.z = 400;
camera.position.set(0, 2, 500);

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

//#region Handle by Shape geometry and Extrude Geometry

//#endregion

// function createHandle(width, height, radius, color, steps = 10) {
//   // Material
//   const handleMaterial = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });

//   // Shapes for extrusion
//   const circleShape = new THREE.Shape();
//   circleShape.absarc(0, 0, radius, 0, Math.PI * 2, false);

//   // Extrusion settings
//   const extrudeSettings = {
//     steps: steps,
//     bevelEnabled: false,
//   };

//   // Bottom connector
//   const bottomConnectorGeometry = new THREE.ExtrudeGeometry(circleShape, { ...extrudeSettings, depth: width });
//   const bottomConnectorMesh = new THREE.Mesh(bottomConnectorGeometry, handleMaterial);
//   bottomConnectorMesh.rotation.y = Math.PI / 2;

//   // Right connector
//   const rightConnectorGeometry = new THREE.ExtrudeGeometry(circleShape, { ...extrudeSettings, depth: height - radius * 2 });
//   const rightConnectorMesh = new THREE.Mesh(rightConnectorGeometry, handleMaterial);
//   rightConnectorMesh.rotation.x = Math.PI / 2;
//   rightConnectorMesh.position.set(width + radius, height - radius, 0);

//   // Top connector
//   const topConnectorGeometry = new THREE.ExtrudeGeometry(circleShape, { ...extrudeSettings, depth: width });
//   const topConnectorMesh = new THREE.Mesh(topConnectorGeometry, handleMaterial);
//   topConnectorMesh.rotation.y = Math.PI / 2;
//   topConnectorMesh.position.set(0, height, 0);

//   // Bottom torus (curve)
//   const bottomCurveConnectorGeometry = new THREE.TorusGeometry(radius, radius, 20, 10, Math.PI / 2);
//   const bottomCurveConnectorMesh = new THREE.Mesh(bottomCurveConnectorGeometry, handleMaterial);
//   bottomCurveConnectorMesh.rotation.z = -Math.PI / 2;
//   bottomCurveConnectorMesh.position.set(width, radius);

//   // Top torus (curve)
//   const topCurveConnectorGeometry = new THREE.TorusGeometry(radius, radius, 20, 10, Math.PI / 2);
//   const topCurveConnectorMesh = new THREE.Mesh(topCurveConnectorGeometry, handleMaterial);
//   topCurveConnectorMesh.position.set(width, height - radius);

//   // all parts added to the parent object

//   const parentObject = new THREE.Object3D();

//   parentObject.add(bottomConnectorMesh);
//   parentObject.add(rightConnectorMesh);
//   parentObject.add(topConnectorMesh);
//   parentObject.add(bottomCurveConnectorMesh);
//   parentObject.add(topCurveConnectorMesh);

//   return parentObject;
// }

// const handleWidth = 50;
// const handleHeight = 200;
// const handleRadius = 15;
// const handleColor = 'red';
// const steps = 1;

// const handle = createHandle(handleWidth, handleHeight, handleRadius, handleColor, steps);
// scene.add(handle);

//#endregion

//#region DAY-4 of Task based Training

//#region handle-1

// function createHandle1(widthUp, heightUp, heightDown, depth, isKeyAvailable){

//   // handle base Shape
// const holeRadius = 26;
// const widthDown = widthUp / 2;

//   const handleBase = new THREE.Shape();
// handleBase.moveTo(widthUp, 0);

// if(isKeyAvailable){
//   handleBase.lineTo(widthUp, (heightUp)*2);

// handleBase.quadraticCurveTo(
//   0,
//   (heightUp - 20)*2,
//   0,

//   (heightUp - 40)*2
// );
// }

// else{
//   handleBase.lineTo(widthUp, (heightUp-10));

// handleBase.quadraticCurveTo(
//   0,
//   (heightUp - 20),
//   0,
//   (heightUp - 40)
// );
// }

// handleBase.lineTo(0, heightUp / 3);

// handleBase.quadraticCurveTo(widthUp/2, heightUp/3, widthUp/2, heightUp/3 - heightUp/4);

// handleBase.lineTo(widthDown, -(heightDown - 10));
// handleBase.bezierCurveTo(
//   widthDown,
//   -(heightDown - 10),
//   widthDown,
//   -heightDown,
//   widthDown + 10,
//   -heightDown
// );
// handleBase.lineTo(widthUp - 10, -heightDown);

// handleBase.bezierCurveTo(
//   widthUp - 10,
//   -heightDown,
//   widthUp,
//   -heightDown,
//   widthUp,
//   -(heightDown - 10)
// );

// const handleBaseHole = new THREE.Path();
// handleBaseHole.absarc(
//   widthUp / 2,
//   heightUp - (heightUp / 7)-10,
//   holeRadius,
//   0,
//   Math.PI * 2,
//   true
// );

// const handleBaseLowerHole = new THREE.Path();
// handleBaseLowerHole.absarc(
//   widthUp/2,
//   heightUp/2,
//   holeRadius/2 + holeRadius/5,
//   0,
//   Math.PI * 2,
//   true
// );
// handleBase.holes.push(handleBaseHole);

// handleBase.holes.push(handleBaseLowerHole);

// const extrudeSettings = {
//   steps: 20,
//   depth: depth,
//   bevelEnabled: true,
//   bevelThickness: 4,
//   bevelSize: 1,
//   bevelOffset: 10,
//   bevelSegments: 20,
// };

// const extrudeHandleBase = new THREE.ExtrudeGeometry(handleBase, extrudeSettings);
// const figureMaterial = new THREE.MeshBasicMaterial({
//   color: "red",
//   wireframe: 0,
//   side: THREE.DoubleSide,
// });
// const handleBaseMesh = new THREE.Mesh(extrudeHandleBase, figureMaterial);
// handleBaseMesh.position.x -= widthUp / 2;

// const handdleBaseEdges = new THREE.EdgesGeometry(extrudeHandleBase);
// const linesMaterial = new THREE.LineBasicMaterial({ color: "white" });
// const handleBaseLines = new THREE.LineSegments(handdleBaseEdges, linesMaterial);
// handleBaseLines.position.x = handleBaseMesh.position.x;

// // handle Top Connector
// const heightTopConnector = heightUp/2;
// const handleTopConnector = new THREE.Shape();
// handleTopConnector.moveTo(0,0);
// handleTopConnector.quadraticCurveTo(widthUp/3,heightTopConnector/5,widthUp,heightTopConnector/4);
// if(isKeyAvailable){
//   handleTopConnector.lineTo(widthUp,(heightTopConnector/2+heightUp/12)*3);
//   handleTopConnector.quadraticCurveTo(0-widthUp/6,(heightUp/5+heightTopConnector/4)*3,0,(heightTopConnector/3+heightTopConnector/12)*3);
// }

// else{
// handleTopConnector.lineTo(widthUp,heightTopConnector/2+heightUp/9);
//   handleTopConnector.quadraticCurveTo(0-widthUp/8,(heightUp/5+heightTopConnector/4),0,heightTopConnector/3+heightTopConnector/10);
// }

// handleTopConnector.lineTo(0,0);

// const handleTopHole = new THREE.Path();
// handleTopHole.absarc(
//   widthUp / 2,
//   heightTopConnector - (heightUp / 4) - 9,
//   holeRadius,
//   0,
//   Math.PI * 2,
//   true
// );

// handleTopConnector.holes.push(handleTopHole);

// const keyRadius = holeRadius*1.2;
// const keyHeight = heightUp;
// const keyWidth = widthUp/2;

// const KeyHole = new THREE.Path();
// KeyHole.absarc(keyWidth,keyHeight, keyRadius,0,Math.PI , false);

// KeyHole.lineTo(keyWidth-keyWidth/4,heightTopConnector);
// KeyHole.bezierCurveTo(keyWidth-(keyWidth+keyWidth/2), heightTopConnector+keyRadius, keyWidth, heightTopConnector-keyRadius/2,keyWidth+keyWidth/2, heightTopConnector+keyRadius)
// // KeyHole.quadraticCurveTo(keyWidth-keyRadius/3, keyHeight-(keyHeight-keyRadius/2),keyWidth-keyRadius/3, keyHeight-(keyHeight-keyRadius))

// // handleTopConnector.holes.push(KeyHole);

// const extrudeHandleTopConnector = new THREE.ExtrudeGeometry(handleTopConnector,{...extrudeSettings});
// const topConnectorMaterial = new THREE.MeshBasicMaterial({
//   color: "Yellow",
//   wireframe: 0,
//   side: THREE.DoubleSide,

// });
// const handleTopConnectorMesh = new THREE.Mesh(extrudeHandleTopConnector ,topConnectorMaterial);
// handleTopConnectorMesh.position.set(-(widthUp/2),heightTopConnector+heightUp/10,depth + 10);

// const handleTopConnectorEdges = new THREE.EdgesGeometry(extrudeHandleTopConnector);
// const handleTopConnectorLines = new THREE.LineSegments(handleTopConnectorEdges, linesMaterial);
// handleTopConnectorLines.position.x = handleTopConnectorMesh.position.x;
// handleTopConnectorLines.position.y = handleTopConnectorMesh.position.y;
// handleTopConnectorLines.position.z = handleTopConnectorMesh.position.z;

// // Handle Bottom Connector

// const handleBottomConnector = new THREE.Shape();
// handleBottomConnector.moveTo(0, -(heightDown - 10));
// handleBottomConnector.lineTo(0, -(heightDown - 10));
// handleBottomConnector.bezierCurveTo(
//   0,
//   -(heightDown - 10),
//   0,
//   -heightDown,
//   10,
//   -heightDown
// );
// handleBottomConnector.lineTo(widthDown - 10, -heightDown);

// handleBottomConnector.bezierCurveTo(
//   widthDown - 10,
//   -heightDown,
//   widthDown,
//   -heightDown,
//   widthDown,
//   -(heightDown - 10)
// );

// handleBottomConnector.lineTo(widthDown,heightUp/2+heightTopConnector/4);
// handleBottomConnector.quadraticCurveTo(-(widthDown - widthDown/3),heightUp/2+heightTopConnector/5, -widthDown/3, heightUp/3);

// handleBottomConnector.lineTo(0, -(heightDown - 10));

// const extrudeHandleBottomConnector = new THREE.ExtrudeGeometry(handleBottomConnector, extrudeSettings);
// const bottomConnectorMaterial = new THREE.MeshBasicMaterial({
//   color: "green",
//   wireframe: 0,
//   side: THREE.DoubleSide,

// });
// const handleBottomConnectorMesh = new THREE.Mesh(extrudeHandleBottomConnector, bottomConnectorMaterial );
// handleBottomConnectorMesh.position.set(0,0,depth+20)

// handleBottomConnectorMesh.rotation.x = Math.PI/50;

// const handleBottomConnectorEdges = new THREE.EdgesGeometry(extrudeHandleBottomConnector);
// const handleBottomConnetorLines = new THREE.LineSegments(handleBottomConnectorEdges, linesMaterial);
// handleBottomConnetorLines.position.x = handleBottomConnectorMesh.position.x;
// handleBottomConnetorLines.position.y = handleBottomConnectorMesh.position.y;
// handleBottomConnetorLines.position.z = handleBottomConnectorMesh.position.z;
// handleBottomConnetorLines.rotation.x = handleBottomConnectorMesh.rotation.x;
// const parentObject = new THREE.Object3D();
// parentObject.add(handleBaseMesh);
// parentObject.add(handleBaseLines);
// parentObject.add(handleTopConnectorMesh);
// parentObject.add(handleBottomConnectorMesh);
// parentObject.add(handleTopConnectorLines);
// parentObject.add(handleBottomConnetorLines);

// scene.add(parentObject);
// }

// const widthUp = 100;
// const heightUp = 250;
// const heightDown = 300;
// const depth = 25;
// const isKeyAvailable = false;

//-----------------------------------------------------------To work on this part Later--------------------------------------------------------------------

// createHandle1(widthUp,heightUp,heightDown,depth, isKeyAvailable);

// function createHandle1(widthUp,heightUp,heightDown,depth, isKeyAvailable){
//   const widthDown = widthUp/2;
//   const holeRadius = 15;
//   heightDown = -heightDown;
//    const handleBase = new THREE.Shape();
//    handleBase.moveTo(0,0);
//    if(isKeyAvailable){
//     handleBase.lineTo0,heightUp/2-10;
//     handleBase.quadraticCurveTo(0,heightUp,20,heightUp);
//     handleBase.lineTo(widthUp, heightUp+20);

//    }

//    else{
//     handleBase.lineTo(0,heightUp/2-10);
//    handleBase.quadraticCurveTo(0,heightUp/2,10,heightUp/2);
//    handleBase.lineTo(widthUp,heightUp/2+10);
//    }

//   handleBase.lineTo(widthDown*2,heightDown+10) //(heightDown value is -ve)
//   handleBase.bezierCurveTo(widthDown*2, heightDown+10, widthDown*2, heightDown, widthDown*2-10, heightDown);
//   handleBase.lineTo(widthDown+10,heightDown);
//   handleBase.bezierCurveTo(widthDown+10,heightDown,widthDown, heightDown, widthDown, heightDown+10); //(heightDown value is -ve)
//   handleBase.lineTo(widthDown,-50);
//   // handleBase.bezierCurveTo(widthDown, -50, widthDown,0, widthDown-50,0);
//   handleBase.quadraticCurveTo(widthDown,0, widthDown-50,0)
//   handleBase.lineTo(0,0);

//   if(isKeyAvailable){
//     const handleBaseKeyHole = new THREE.Path();
//     handleBaseKeyHole.absarc(widthUp/2, heightUp-heightUp/8,holeRadius,Math.PI+Math.PI/3,0-Math.PI/3,true);

//     handleBaseKeyHole.lineTo(widthUp/2 + holeRadius/2, heightUp/2 + heightUp/8);
//     handleBaseKeyHole.absarc(widthUp/2, heightUp/2 + heightUp/8, holeRadius/2,0,Math.PI, true)
//     handleBaseKeyHole.lineTo(widthUp/2 - holeRadius/2, heightUp - heightUp/4);

//     handleBase.holes.push(handleBaseKeyHole);
//    }

//   const handleBaseHole = new THREE.Path();
//   if(isKeyAvailable){
//     handleBaseHole.absarc(
//       widthUp / 2-10,
//       heightUp/2 - heightUp/8,
//       holeRadius,
//       0,
//       Math.PI * 2,
//       true
//     );
//   }
//   else{
//     handleBaseHole.absarc(
//       widthUp / 2,
//       heightUp/2 - heightUp/8,
//       holeRadius,
//       0,
//       Math.PI * 2,
//       true
//     );
//   }

// const handleBaseLowerHole = new THREE.Path();

// if(isKeyAvailable){
//   handleBaseLowerHole.absarc(
//     widthUp/2-25,
//     heightUp/10,
//     holeRadius/8,
//     0,
//     Math.PI * 2,
//     true
//   );
// }
// else{
//   handleBaseLowerHole.absarc(
//     widthUp/2-25,
//     heightUp/10,
//     holeRadius/8,
//     0,
//     Math.PI * 2,
//     true
//   );
// }

// handleBase.holes.push(handleBaseHole);

// handleBase.holes.push(handleBaseLowerHole);

//    const extrudeSettings = {
//       steps: 20,
//       depth: depth,
//       bevelEnabled: true,
//       bevelThickness: 4,
//       bevelSize: 1,
//       bevelOffset: 10,
//       bevelSegments: 20,
//     };

//     const extrudeHandleBase = new THREE.ExtrudeGeometry(handleBase, extrudeSettings);
//     const figureMaterial = new THREE.MeshBasicMaterial({
//       color: "red",
//       wireframe: 0,
//       side: THREE.DoubleSide,
//     });
//     const handleBaseMesh = new THREE.Mesh(extrudeHandleBase, figureMaterial);
//     handleBaseMesh.position.x -= widthUp / 2;

//     const handdleBaseEdges = new THREE.EdgesGeometry(extrudeHandleBase);
//     const linesMaterial = new THREE.LineBasicMaterial({ color: "white" });
//     const handleBaseLines = new THREE.LineSegments(handdleBaseEdges, linesMaterial);
//     handleBaseLines.position.x = handleBaseMesh.position.x;

// // Parent Object to the Scene
//     const parentObject = new THREE.Object3D();
//     parentObject.add(handleBaseMesh);
//     parentObject.add(handleBaseLines);

//     scene.add(parentObject);
// }
// const widthUp = 150;
// const heightUp = 450;
// const heightDown = 300;
// const depth = 25;
// const isKeyAvailable = true;
// createHandle1(widthUp,heightUp,heightDown,depth, isKeyAvailable);

//#endregion
//#endregion

//#region handle- VivoShot handle

function handleBar(widthHandleBar, heightHandleBar, handleBarDepth) {
  const handleBarWidth = widthHandleBar;
  const handleBarHeight = heightHandleBar;
  const handleBarShape = new THREE.Shape();
  handleBarShape.moveTo(10, 10);
  handleBarShape.lineTo(0, handleBarHeight - 10);
  handleBarShape.bezierCurveTo(
    0,
    handleBarHeight - 10,
    handleBarWidth / 2,
    handleBarHeight,
    handleBarWidth,
    handleBarHeight - 10
  );
  handleBarShape.lineTo(handleBarWidth - 10, 10);
  handleBarShape.bezierCurveTo(
    handleBarWidth - 10,
    10,
    handleBarWidth / 2,
    0,
    10,
    10
  );

  const extrudeHandleBarSettings = {
    steps: 20,
    depth: handleBarDepth,
    bevelEnabled: true,
    bevelThickness: 4,
    bevelSize: 1,
    bevelOffset: 10,
    bevelSegments: 20,
  };

  const extrudeHandleBar = new THREE.ExtrudeGeometry(
    handleBarShape,
    extrudeHandleBarSettings
  );
  const handleBarMaterial = new THREE.MeshBasicMaterial({ color: "yellow" });
  const handleBarMesh = new THREE.Mesh(extrudeHandleBar, handleBarMaterial);

  return handleBarMesh;
}

function handleBackPlate(
  widthBackPlate,
  heightBackPlate,
  holeRadius,
  backPlateDepth,
  isKeyAvailable
) {
  const handleBackPlateShape = new THREE.Shape();
  handleBackPlateShape.moveTo(0, 10);
  handleBackPlateShape.bezierCurveTo(
    0,
    10,
    widthBackPlate / 2,
    0,
    widthBackPlate,
    10
  );
  if (isKeyAvailable) {
    handleBackPlateShape.lineTo(widthBackPlate, heightBackPlate * 2 - 10);
    handleBackPlateShape.bezierCurveTo(
      widthBackPlate,
      heightBackPlate * 2 - 10,
      widthBackPlate / 2,
      heightBackPlate * 2,
      0,
      heightBackPlate * 2 - 10
    );
  } else {
    handleBackPlateShape.lineTo(widthBackPlate, heightBackPlate - 10);
    handleBackPlateShape.bezierCurveTo(
      widthBackPlate,
      heightBackPlate - 10,
      widthBackPlate / 2,
      heightBackPlate,
      0,
      heightBackPlate - 10
    );
  }

  handleBackPlateShape.lineTo(0, 10);

  if (isKeyAvailable) {
    const keyHole = new THREE.Path();
    keyHole.moveTo(
      widthBackPlate / 2,
      heightBackPlate * 2 - heightBackPlate / 5
    );
    keyHole.absarc(
      widthBackPlate / 2,
      heightBackPlate * 2 - heightBackPlate / 5,
      holeRadius,
      Math.PI + Math.PI / 3,
      0 - Math.PI / 3,
      true
    );
    keyHole.lineTo(
      widthBackPlate / 2 + holeRadius / 2,
      heightBackPlate * 2 - heightBackPlate / 3
    );

    keyHole.absarc(
      widthBackPlate / 2,
      heightBackPlate + heightBackPlate / 2,
      holeRadius / 2,
      0,
      Math.PI,
      true
    );
    keyHole.lineTo(
      widthBackPlate / 2 - holeRadius / 2,
      heightBackPlate + heightBackPlate / 2
    );

    handleBackPlateShape.holes.push(keyHole);
  }

  const backPlateHole = new THREE.Path();

  backPlateHole.moveTo(0, 0);
  backPlateHole.absarc(
    widthBackPlate / 2,
    heightBackPlate - heightBackPlate / 6,
    holeRadius,
    0,
    Math.PI * 2,
    true
  );

  handleBackPlateShape.holes.push(backPlateHole);

  const extrudeBackPlateSettings = {
    steps: 20,
    depth: backPlateDepth,
    bevelEnabled: true,
    bevelThickness: 4,
    bevelSize: 1,
    bevelOffset: 10,
    bevelSegments: 20,
  };
  const extrudeHandleBackPlate = new THREE.ExtrudeGeometry(
    handleBackPlateShape,
    extrudeBackPlateSettings
  );
  const backPlateMaterial = new THREE.MeshBasicMaterial({ color: "red" });
  const backPlateMesh = new THREE.Mesh(
    extrudeHandleBackPlate,
    backPlateMaterial
  );
  return backPlateMesh;
}

function createVivoShotHandle(
  heightHandleBar,
  widthBackPlate,
  heightBackPlate,
  holeRadius,
  backPlateDepth,
  isKeyAvailable
) {
  const parentObject = new THREE.Object3D();

  const backPlate = handleBackPlate(
    widthBackPlate,
    heightBackPlate,
    holeRadius,
    backPlateDepth,
    isKeyAvailable
  );
  parentObject.add(backPlate);
  const widthHandleBar = widthBackPlate;

  const handleBarMesh = handleBar(
    widthHandleBar,
    heightHandleBar,
    handleBarDepth
  );
  handleBarMesh.position.set(0, -(heightHandleBar - heightBackPlate / 2), 20);
  parentObject.add(handleBarMesh);

  scene.add(parentObject);
}
const handleBarHeight = 500;
const backPlateWidth = 100;
const backPlateHeight = 280;
const holeRadius = 40;
const backPlateDepth = 10;
const handleBarDepth = 30;
const isKeyAvailable = true;

createVivoShotHandle(
  handleBarHeight,
  backPlateWidth,
  backPlateHeight,
  holeRadius,
  backPlateDepth,
  handleBarDepth,
  isKeyAvailable
);
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
