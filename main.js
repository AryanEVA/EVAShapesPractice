import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Scene setup
const scene = new THREE.Scene();
// scene.background = new THREE.Color( 'white' );
// Ambient light setup
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
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
camera.position.set(0, 2, 700);

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
//#region To be worked on
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
//#endregion

//#region handle- VivoShot handle

// function handleBar(widthHandleBar, heightHandleBar, handleBarDepth) {
//   const handleBarWidth = widthHandleBar;
//   const handleBarHeight = heightHandleBar;
//   const handleBarShape = new THREE.Shape();
//   handleBarShape.moveTo(10, 10);
//   handleBarShape.lineTo(0, handleBarHeight - 10);
//   handleBarShape.bezierCurveTo(
//     0,
//     handleBarHeight - 10,
//     handleBarWidth / 2,
//     handleBarHeight,
//     handleBarWidth,
//     handleBarHeight - 10
//   );
//   handleBarShape.lineTo(handleBarWidth - 10, 10);
//   handleBarShape.bezierCurveTo(
//     handleBarWidth - 10,
//     10,
//     handleBarWidth / 2,
//     0,
//     10,
//     10
//   );

//   const extrudeHandleBarSettings = {
//     steps: 20,
//     depth: handleBarDepth,
//     bevelEnabled: true,
//     bevelThickness: 4,
//     bevelSize: 1,
//     bevelOffset: 10,
//     bevelSegments: 20,
//   };

//   const extrudeHandleBar = new THREE.ExtrudeGeometry(
//     handleBarShape,
//     extrudeHandleBarSettings
//   );
//   const handleBarMaterial = new THREE.MeshBasicMaterial({ color: "yellow" });
//   const handleBarMesh = new THREE.Mesh(extrudeHandleBar, handleBarMaterial);

//   return handleBarMesh;
// }

// function handleBackPlate(
//   widthBackPlate,
//   heightBackPlate,
//   holeRadius,
//   backPlateDepth,
//   isKeyAvailable
// ) {
//   const handleBackPlateShape = new THREE.Shape();
//   handleBackPlateShape.moveTo(0, 10);
//   handleBackPlateShape.bezierCurveTo(
//     0,
//     10,
//     widthBackPlate / 2,
//     0,
//     widthBackPlate,
//     10
//   );
//   if (isKeyAvailable) {
//     handleBackPlateShape.lineTo(widthBackPlate, heightBackPlate * 2 - 10);
//     handleBackPlateShape.bezierCurveTo(
//       widthBackPlate,
//       heightBackPlate * 2 - 10,
//       widthBackPlate / 2,
//       heightBackPlate * 2,
//       0,
//       heightBackPlate * 2 - 10
//     );
//   } else {
//     handleBackPlateShape.lineTo(widthBackPlate, heightBackPlate - 10);
//     handleBackPlateShape.bezierCurveTo(
//       widthBackPlate,
//       heightBackPlate - 10,
//       widthBackPlate / 2,
//       heightBackPlate,
//       0,
//       heightBackPlate - 10
//     );
//   }

//   handleBackPlateShape.lineTo(0, 10);

//   if (isKeyAvailable) {
//     const keyHole = new THREE.Path();
//     keyHole.moveTo(
//       widthBackPlate / 2,
//       heightBackPlate * 2 - heightBackPlate / 5
//     );
//     keyHole.absarc(
//       widthBackPlate / 2,
//       heightBackPlate * 2 - heightBackPlate / 5,
//       holeRadius,
//       Math.PI + Math.PI / 3,
//       0 - Math.PI / 3,
//       true
//     );
//     keyHole.lineTo(
//       widthBackPlate / 2 + holeRadius / 2,
//       heightBackPlate * 2 - heightBackPlate / 3
//     );

//     keyHole.absarc(
//       widthBackPlate / 2,
//       heightBackPlate + heightBackPlate / 2,
//       holeRadius / 2,
//       0,
//       Math.PI,
//       true
//     );
//     keyHole.lineTo(
//       widthBackPlate / 2 - holeRadius / 2,
//       heightBackPlate + heightBackPlate / 2
//     );

//     handleBackPlateShape.holes.push(keyHole);
//   }

//   const backPlateHole = new THREE.Path();

//   backPlateHole.moveTo(0, 0);
//   backPlateHole.absarc(
//     widthBackPlate / 2,
//     heightBackPlate - heightBackPlate / 6,
//     holeRadius,
//     0,
//     Math.PI * 2,
//     true
//   );

//   handleBackPlateShape.holes.push(backPlateHole);

//   const extrudeBackPlateSettings = {
//     steps: 20,
//     depth: backPlateDepth,
//     bevelEnabled: true,
//     bevelThickness: 4,
//     bevelSize: 1,
//     bevelOffset: 10,
//     bevelSegments: 20,
//   };
//   const extrudeHandleBackPlate = new THREE.ExtrudeGeometry(
//     handleBackPlateShape,
//     extrudeBackPlateSettings
//   );
//   const backPlateMaterial = new THREE.MeshBasicMaterial({ color: "red" });
//   const backPlateMesh = new THREE.Mesh(
//     extrudeHandleBackPlate,
//     backPlateMaterial
//   );
//   return backPlateMesh;
// }

// function createVivoShotHandle(
//   heightHandleBar,
//   widthBackPlate,
//   heightBackPlate,
//   holeRadius,
//   backPlateDepth,
//   isKeyAvailable
// ) {
//   const parentObject = new THREE.Object3D();

//   const backPlate = handleBackPlate(
//     widthBackPlate,
//     heightBackPlate,
//     holeRadius,
//     backPlateDepth,
//     isKeyAvailable
//   );
//   parentObject.add(backPlate);
//   const widthHandleBar = widthBackPlate;

//   const handleBarMesh = handleBar(
//     widthHandleBar,
//     heightHandleBar,
//     handleBarDepth
//   );
//   handleBarMesh.position.set(0, -(heightHandleBar - heightBackPlate / 2), 20);
//   parentObject.add(handleBarMesh);

//   scene.add(parentObject);
// }
// const handleBarHeight = 500;
// const backPlateWidth = 100;
// const backPlateHeight = 280;
// const holeRadius = 40;
// const backPlateDepth = 10;
// const handleBarDepth = 30;
// const isKeyAvailable = true;

// createVivoShotHandle(
//   handleBarHeight,
//   backPlateWidth,
//   backPlateHeight,
//   holeRadius,
//   backPlateDepth,
//   handleBarDepth,
//   isKeyAvailable
// );

// #region Sweet handle backplate

// function handleBackPlate(
//   widthBackPlate,
//   heightBackPlate,
//   holeRadius,
//   backPlateDepth,
//   keyHoleYPosition
// ) {
//   const handleBackPlateShape = new THREE.Shape();
//   const radius = heightBackPlate/10;
//   handleBackPlateShape.moveTo(widthBackPlate/2,radius);
//    handleBackPlateShape.absarc(widthBackPlate/2,radius, radius,  Math.PI,0, false );
//     handleBackPlateShape.lineTo(widthBackPlate/2 + radius, heightBackPlate - radius);
//     handleBackPlateShape.moveTo(widthBackPlate/2,heightBackPlate-radius);
//    handleBackPlateShape.absarc(widthBackPlate/2,heightBackPlate-radius, radius,  0, Math.PI, false );
//   handleBackPlateShape.lineTo(widthBackPlate/2 - radius, radius);

//     const keyHole = new THREE.Path();
//     keyHole.moveTo(
//       widthBackPlate / 2,
//       keyHoleYPosition - holeRadius
//     );
//     keyHole.absarc(
//       widthBackPlate / 2,
//       keyHoleYPosition,
//       holeRadius,
//       Math.PI + Math.PI / 3,
//       0 - Math.PI / 3,
//       true
//     );
//     keyHole.lineTo(widthBackPlate/2+ holeRadius/2, keyHoleYPosition-15);
//     keyHole.absarc(
//       widthBackPlate / 2,
//       keyHoleYPosition-15,
//       holeRadius / 2,
//       0,
//       Math.PI,
//       true
//     );
//     keyHole.lineTo(widthBackPlate/2 -  holeRadius/2, keyHoleYPosition- holeRadius);

//     handleBackPlateShape.holes.push(keyHole);

//   const extrudeBackPlateSettings = {
//     steps: 20,
//     depth: backPlateDepth,
//     bevelEnabled: false,

//   };
//   const extrudeHandleBackPlate = new THREE.ExtrudeGeometry(
//     handleBackPlateShape,
//     extrudeBackPlateSettings
//   );
//   const backPlateMaterial = new THREE.MeshBasicMaterial({ color: "red" });
//   const backPlateMesh = new THREE.Mesh(
//     extrudeHandleBackPlate,
//     backPlateMaterial
//   );
//   return backPlateMesh;
// }

// function createSweetHandle(widthBackPlate,
//   heightBackPlate,
//   holeRadius,
//   backPlateDepth,
//   keyHoleYPosition){

//   const parentObject = new THREE.Object3D();
//   const sweetBackPlate1 = handleBackPlate(widthBackPlate,
//     heightBackPlate,
//     holeRadius,
//     backPlateDepth,
//     keyHoleYPosition);
//     const sweetBackPlate2 = handleBackPlate(widthBackPlate,
//       heightBackPlate,
//       holeRadius,
//       backPlateDepth,
//       keyHoleYPosition);
//   parentObject.add(sweetBackPlate1);

//   sweetBackPlate2.position.set(widthBackPlate + 10, 0, 0);
//   parentObject.add(sweetBackPlate2);

//   scene.add(parentObject);
//   }

// const backPlateWidth = 50;
// const backPlateHeight = 100;
// const backPlateDepth = 4;
// const holeRadius = 5; // radius of the Key Hole
// const keyHoleYPosition = 30; // Position on y axis of Key hole

// createSweetHandle(backPlateWidth,
//   backPlateHeight,
//   holeRadius,
//   backPlateDepth,
//   keyHoleYPosition);
//#endregion
//#endregion

//#region Sweet handle

// function frontConnector(widthFront, heightFront, depthFrontConnector) {
//   const frontConnectorShape = new THREE.Shape();
//   frontConnectorShape.moveTo(0, 5);
//   frontConnectorShape.bezierCurveTo(0, 5, widthFront / 2, 0, widthFront, 5);
//   frontConnectorShape.lineTo(widthFront, heightFront - 5);
//   frontConnectorShape.bezierCurveTo(
//     widthFront,
//     heightFront - 5,
//     widthFront / 2,
//     heightFront,
//     0,
//     heightFront - 5
//   );
//   frontConnectorShape.lineTo(0, 5);

//   const extrudeFrontConnectorSettings = {
//     steps: 1,
//     depth: depthFrontConnector,
//     bevelEnabled: false,
//   };
//   const extrudeFrontConnector = new THREE.ExtrudeGeometry(
//     frontConnectorShape,
//     extrudeFrontConnectorSettings
//   );
//   const frontConnectorMaterial = new THREE.MeshBasicMaterial({
//     color: "red",

//     side: THREE.DoubleSide,
//   });
//   const frontConnectorMesh = new THREE.Mesh(
//     extrudeFrontConnector,
//     frontConnectorMaterial
//   );

//   const edges = new THREE.EdgesGeometry(extrudeFrontConnector);
//   const lines = new THREE.LineBasicMaterial({color: "white"});
//   const edgesFrontConnector = new THREE.LineSegments(edges, lines);
//  frontConnectorMesh.add(edgesFrontConnector);
//   return frontConnectorMesh;
// }

// function handleCurve(widthCurve, heightCurve, heightFront, depthCurve) {
//   const handleCurveShape = new THREE.Shape();
//   handleCurveShape.moveTo(widthCurve + 10, 5);
//   handleCurveShape.bezierCurveTo(widthCurve + 10, 5, 5, 5, 5, widthCurve / 2);
//   handleCurveShape.lineTo(0, heightCurve);
//   handleCurveShape.lineTo(widthCurve, heightCurve);
//   handleCurveShape.bezierCurveTo(
//     widthCurve,
//     heightCurve,
//     widthCurve - 10,
//     heightCurve / 3,
//     widthCurve + 10,
//     heightFront - 5
//   );
//   handleCurveShape.lineTo(widthCurve + 10, 5);

//   const extrudeCurveHandleSettings = {
//     steps: 1,
//     depth: depthCurve,
//     bevelEnabled: false,
//   };

//   const extrudeCurveHandle = new THREE.ExtrudeGeometry(
//     handleCurveShape,
//     extrudeCurveHandleSettings
//   );
//   const curveHandleMaterial = new THREE.MeshBasicMaterial({
//     color: "red",

//     side: THREE.DoubleSide,
//   });
//   const curveHandleMesh = new THREE.Mesh(
//     extrudeCurveHandle,
//     curveHandleMaterial
//   );

//   const edges = new THREE.EdgesGeometry(extrudeCurveHandle);
//   const lines = new THREE.LineBasicMaterial({color: "white"});
//   const edgesCurveHandle = new THREE.LineSegments(edges, lines);
//   curveHandleMesh.add(edgesCurveHandle);

//   return curveHandleMesh;
// }

// function createSweetHandle(widthFront, heightFront, depthFrontConnector) {
//   const parentObject = new THREE.Object3D();
//   const frontConnectorhandle = frontConnector(
//     widthFront,
//     heightFront,
//     depthFrontConnector
//   );
//   parentObject.add(frontConnectorhandle);
//   const curvehandleConnector = handleCurve(
//     widthCurve,
//     heightCurve,
//     heightFront,
//     depthCurve
//   );
//   curvehandleConnector.position.set(-(widthCurve + 10), 5, depthCurve + 5);
//   parentObject.add(curvehandleConnector);
//   curvehandleConnector.rotation.x -= Math.PI / 2;
//   scene.add(parentObject);
// }
// const widthFront = 80;
// const heightFront = 25;
// const depthFrontConnector = 15;

// const widthCurve = 25;
// const heightCurve = 50;
// const depthCurve = 15;

// createSweetHandle(widthFront, heightFront, depthFrontConnector);
//#endregion

//#region COCKSPUR HANDLE

// function bottomConnector(heightBottomConnector, depthBottomConnector){
//   const widthBottomConnector = 14;
//   const bottomConnectorShape = new THREE.Shape();
//   bottomConnectorShape.moveTo(0,heightBottomConnector);
//   bottomConnectorShape.lineTo(0,widthBottomConnector/2);
//   bottomConnectorShape.absarc(widthBottomConnector/2, widthBottomConnector/2, widthBottomConnector/2,Math.PI, 0, false);
//   bottomConnectorShape.lineTo(widthBottomConnector, heightBottomConnector);

//   const extrudeBottomConnectorSettings = {
//     steps: 1,
//     depth: depthBottomConnector,
//     bevelEnabled: false,
//   };

// const extrudeBottomConnector = new THREE.ExtrudeGeometry(bottomConnectorShape, extrudeBottomConnectorSettings);
//   const BottomConnectorMaterial = new THREE.MeshBasicMaterial({color: "red"});
//   const bottomConnectorMesh = new THREE.Mesh(extrudeBottomConnector, BottomConnectorMaterial);

//   const edges = new THREE.EdgesGeometry(extrudeBottomConnector);
//   const lines = new THREE.LineBasicMaterial({color: "white"});
//   const edgesBottomConnector = new THREE.LineSegments(edges, lines);
//   bottomConnectorMesh.add(edgesBottomConnector);

//   return bottomConnectorMesh;

// }

// function zConnector(depthBottomConnector){
// const zConnectorShape = new THREE.Shape();
// const heightZConnector = depthBottomConnector;
// const widthZConnector = 10;

// zConnectorShape.moveTo(0,5);

// zConnectorShape.bezierCurveTo(widthZConnector/2 - 5, 5, widthZConnector/2, 0, widthZConnector,  0);
// zConnectorShape.lineTo(widthZConnector,0);
// zConnectorShape.lineTo(widthZConnector,heightZConnector);
// zConnectorShape.lineTo(widthZConnector/2 + 5, heightZConnector);
// zConnectorShape.bezierCurveTo(widthZConnector/2 + 5, heightZConnector, widthZConnector/2, heightZConnector, 0, heightZConnector + 5);
// zConnectorShape.lineTo(0,heightZConnector + 5);
// zConnectorShape.lineTo(0,5);

// const extrudeZConnectorSettings = {
//   steps: 1,
//   depth: 14,
//   bevelEnabled: false,
// };

// const extrudeZConnector = new THREE.ExtrudeGeometry(zConnectorShape, extrudeZConnectorSettings);
// const zConnectorMaterial = new THREE.MeshBasicMaterial({color: "yellow"});
// const zConnectorMesh = new THREE.Mesh(extrudeZConnector, zConnectorMaterial);

// const edges = new THREE.EdgesGeometry(extrudeZConnector);
//   const lines = new THREE.LineBasicMaterial({color: "white"});
//   const edgesZConnector = new THREE.LineSegments(edges, lines);

//   zConnectorMesh.add(edgesZConnector);

// return zConnectorMesh;

// }

// function topConnector(depthBottomConnector){
//   const width = 40;
//   const connectorWidth = 14;
//   const height = 30;
//   const topConnectorShape = new THREE.Shape();
//   topConnectorShape.moveTo(width - connectorWidth, 0);
//   topConnectorShape.bezierCurveTo(width - connectorWidth, 0, width - connectorWidth, height/6,width - connectorWidth - width/4, height/6);
//   topConnectorShape.bezierCurveTo(width - connectorWidth - width/4, height/6, width/3, height/2 - height/3, width/8, height/2 - height/10);
//   topConnectorShape.bezierCurveTo(width/8, height/2 - height/10, 0, height/2, width/8, height/2 + height/10);
//   topConnectorShape.bezierCurveTo(width/8, height/2 + height/10, width/3, height/2 + height/6, width - connectorWidth - width/10, height - height/10);
//   topConnectorShape.bezierCurveTo(width - connectorWidth - width/10, height - height/10, width - connectorWidth, height, width - width/10, height- height/3);
//   topConnectorShape.bezierCurveTo(width - width/10, height- height/3, width, height/2, width, 0)
//   topConnectorShape.lineTo(width - connectorWidth, 0);

//   const topConnectorHole = new THREE.Path();
//   topConnectorHole.absarc(width-connectorWidth,height/2, height/4, 0, Math.PI * 2, false);

//   topConnectorShape.holes.push(topConnectorHole);

//   const connector = new THREE.SphereGeometry(height/4,32,18,0, Math.PI * 2, 0,Math.PI/2);
//   const connectorMaterial = new THREE.MeshBasicMaterial({color: "pink"});
//   const connectorMesh = new THREE.Mesh(connector, connectorMaterial);
//   connectorMesh.rotation.x += Math.PI/2;
//   connectorMesh.position.set(width/2 + width/7 + width/150,height/2,connectorWidth/6);

//   const extrudeTopConnectorSettings = {
//     steps: 1,
//     depth: depthBottomConnector,
//     bevelEnabled: false,
//   };

//   const extrudeTopConnector = new THREE.ExtrudeGeometry(topConnectorShape, extrudeTopConnectorSettings);
//   const topConnectorMaterial = new THREE.MeshBasicMaterial({color: "green"});
//   const topConnectorMesh = new THREE.Mesh(extrudeTopConnector, topConnectorMaterial);

//   topConnectorMesh.add(connectorMesh);
//   const edges = new THREE.EdgesGeometry(extrudeTopConnector);
//   const lines = new THREE.LineBasicMaterial({color: "white"});
//   const edgesTopConnector = new THREE.LineSegments(edges, lines);

//   topConnectorMesh.add(edgesTopConnector);
//   return topConnectorMesh;

// }

// function boltBase(diameter) {
//   const radius = diameter / 2;

//   const extrudeBoltSettings = {
//     steps: 1,
//     depth: 5,
//     bevelEnabled: false,
//   };

//   const boltFrontPlateShape = new THREE.Shape();
//   boltFrontPlateShape.moveTo(0, 0);
//   boltFrontPlateShape.absarc(radius, radius, radius, 0, Math.PI * 2, true);

//   const boltHoles = new THREE.Path();
//   boltHoles.moveTo(diameter / 12, radius - diameter / 8);
//   boltHoles.lineTo(diameter / 12, radius + diameter / 8);
//   boltHoles.lineTo(radius - diameter / 8, radius + diameter / 8);
//   boltHoles.lineTo(radius - diameter / 8, diameter - diameter / 12);
//   boltHoles.lineTo(radius + diameter / 8, diameter - diameter / 12);
//   boltHoles.lineTo(radius + diameter / 8, radius + diameter / 8);
//   boltHoles.lineTo(diameter - diameter / 12, radius + diameter / 8);
//   boltHoles.lineTo(diameter - diameter / 12, radius - diameter / 8);
//   boltHoles.lineTo(radius + diameter / 8, radius - diameter / 8);
//   boltHoles.lineTo(radius + diameter / 8, diameter / 12);
//   boltHoles.lineTo(radius - diameter / 8, diameter / 12);
//   boltHoles.lineTo(radius - diameter / 8, radius - diameter / 8);

//   boltFrontPlateShape.holes.push(boltHoles);

//   const extrudeBoltFrontPlate = new THREE.ExtrudeGeometry(
//     boltFrontPlateShape,
//     extrudeBoltSettings
//   );
//   const BoltMaterial = new THREE.MeshBasicMaterial({
//     color: "gray",
//     side: THREE.DoubleSide,
//   });
//   const BoltFrontPlateMesh = new THREE.Mesh(
//     extrudeBoltFrontPlate,
//     BoltMaterial
//   );

//   return BoltFrontPlateMesh;
// }

// function backPlateConnector(){
//   const height = 50;
//   const width = 30;
//   const diameter = 6;
//   const backPlateShape = new THREE.Shape();
//   backPlateShape.moveTo(0,0);
//   backPlateShape.lineTo(0,height);
//   backPlateShape.lineTo(width/2, height);
//   backPlateShape.lineTo(width/2, height - height/4);
//   backPlateShape.bezierCurveTo(width/2, height - height/4, width, height/2, width/2, height/4);
//   backPlateShape.lineTo(width/2, 0);
//   backPlateShape.lineTo(0,0);

//   const backPlateHole1 = new THREE.Path();
//   backPlateHole1.absarc(width/4, height - width/4, width/10, 0, Math.PI * 2, false);

//   const backPlateHole2 = new THREE.Path();
//   backPlateHole2.absarc(width/4, width/4, width/10, 0, Math.PI * 2, false);

//   backPlateShape.holes.push(backPlateHole1);
//   backPlateShape.holes.push(backPlateHole2);

//   const bolt1 = boltBase(diameter);
//   const bolt2 = boltBase(diameter);
//   bolt1.position.set(width/6 - width/(diameter * 10),height - width/3 - width/(diameter * 10));
//   bolt2.position.set(width/6 - width/(diameter * 10), width/6 - width/(diameter * 10),0);
//   const extrudeBackPlateSettings = {
//     steps: 1,
//     depth: 5,
//     bevelEnabled: false
//   }
//   const extrudeBackPlate = new THREE.ExtrudeGeometry(backPlateShape, extrudeBackPlateSettings);
//   const material = new THREE.MeshBasicMaterial({color: "purple"});
//   const backPlateMesh = new THREE.Mesh(extrudeBackPlate, material);
//   backPlateMesh.add(bolt1);
//   backPlateMesh.add(bolt2);
//   return backPlateMesh;
// }

// function createCockspurHandle(heightBottomConnector, depthBottomConnector){
//   const parentObject = new THREE.Object3D();
//   const handleBottomConnector = bottomConnector(heightBottomConnector, depthBottomConnector);
//   parentObject.add(handleBottomConnector);

//   const handleZConnector = zConnector(depthBottomConnector);
//   handleZConnector.position.set(0,heightBottomConnector,-depthBottomConnector);
//   handleZConnector.rotation.z -= Math.PI/2;
//   handleZConnector.rotation.x -= Math.PI;
//   handleZConnector.rotation.y += Math.PI/2;
//   parentObject.add(handleZConnector);

//   const handleTopConnector = topConnector(depthBottomConnector);
//   handleTopConnector.position.set(-26,heightBottomConnector + 10,-5)
//   parentObject.add(handleTopConnector);

//   const handleBackPlate = backPlateConnector();
//   handleBackPlate.position.set(-15,100,-10);
//   parentObject.add(handleBackPlate);

//   scene.add(parentObject);

// }

// const heightBottomConnector = 100;
// const depthBottomConnector = 5;
// createCockspurHandle(heightBottomConnector, depthBottomConnector);
//#endregion

//#region CockSpur edges
// function bottomConnector(heightBottomConnector, depthBottomConnector){
//   const widthBottomConnector = 14;
//   const bottomConnectorShape = new THREE.Shape();
//   bottomConnectorShape.moveTo(0,heightBottomConnector);
//   bottomConnectorShape.lineTo(0,widthBottomConnector/2);
//   bottomConnectorShape.absarc(widthBottomConnector/2, widthBottomConnector/2, widthBottomConnector/2,Math.PI, 0, false);
//   bottomConnectorShape.lineTo(widthBottomConnector, heightBottomConnector);

//   const extrudeBottomConnectorSettings = {
//     steps: 1,
//     depth: depthBottomConnector,
//     bevelEnabled: false,
//   };

//   const extrudeBottomConnector = new THREE.ExtrudeGeometry(bottomConnectorShape, extrudeBottomConnectorSettings);

//   const edges = new THREE.EdgesGeometry(extrudeBottomConnector);
//   const lines = new THREE.LineBasicMaterial({color: "white"});
//   const edgesBottomConnector = new THREE.LineSegments(edges, lines);

//   return edgesBottomConnector;

// }

// function zConnector(depthBottomConnector){
// const zConnectorShape = new THREE.Shape();
// const heightZConnector = depthBottomConnector;
// const widthZConnector = 10;

// zConnectorShape.moveTo(0,5);

// zConnectorShape.bezierCurveTo(widthZConnector/2 - 5, 5, widthZConnector/2, 0, widthZConnector,  0);
// zConnectorShape.lineTo(widthZConnector,0);
// zConnectorShape.lineTo(widthZConnector,heightZConnector);
// zConnectorShape.lineTo(widthZConnector/2 + 5, heightZConnector);
// zConnectorShape.bezierCurveTo(widthZConnector/2 + 5, heightZConnector, widthZConnector/2, heightZConnector, 0, heightZConnector + 5);
// zConnectorShape.lineTo(0,heightZConnector + 5);
// zConnectorShape.lineTo(0,5);

// const extrudeZConnectorSettings = {
//   steps: 1,
//   depth: 14,
//   bevelEnabled: false,
// };

// const extrudeZConnector = new THREE.ExtrudeGeometry(zConnectorShape, extrudeZConnectorSettings);

//   const edges = new THREE.EdgesGeometry(extrudeZConnector);
//   const lines = new THREE.LineBasicMaterial({color: "white"});
//   const edgesZConnector = new THREE.LineSegments(edges, lines);

// return edgesZConnector;

// }

// function topConnector(depthBottomConnector){
//   const width = 40;
//   const connectorWidth = 14;
//   const height = 30;
//   const topConnectorShape = new THREE.Shape();
//   topConnectorShape.moveTo(width - connectorWidth, 0);
//   topConnectorShape.bezierCurveTo(width - connectorWidth, 0, width - connectorWidth, height/6,width - connectorWidth - width/4, height/6);
//   topConnectorShape.bezierCurveTo(width - connectorWidth - width/4, height/6, width/3, height/2 - height/3, width/8, height/2 - height/10);
//   topConnectorShape.bezierCurveTo(width/8, height/2 - height/10, 0, height/2, width/8, height/2 + height/10);
//   topConnectorShape.bezierCurveTo(width/8, height/2 + height/10, width/3, height/2 + height/6, width - connectorWidth - width/10, height - height/10);
//   topConnectorShape.bezierCurveTo(width - connectorWidth - width/10, height - height/10, width - connectorWidth, height, width - width/10, height- height/3);
//   topConnectorShape.bezierCurveTo(width - width/10, height- height/3, width, height/2, width, 0)
//   topConnectorShape.lineTo(width - connectorWidth, 0);

//   const topConnectorHole = new THREE.Path();
//   topConnectorHole.absarc(width-connectorWidth,height/2, height/4, 0, Math.PI * 2, false);

//   topConnectorShape.holes.push(topConnectorHole);

//   const connector = new THREE.SphereGeometry(height/4,32,18,0, Math.PI * 2, 0,Math.PI/2);
//   const connectorMaterial = new THREE.MeshBasicMaterial({color: "pink"});
//   const connectorMesh = new THREE.Mesh(connector, connectorMaterial);
//   connectorMesh.rotation.x += Math.PI/2;
//   connectorMesh.position.set(width/2 + width/7 + width/150,height/2,connectorWidth/6);

//   const extrudeTopConnectorSettings = {
//     steps: 1,
//     depth: depthBottomConnector,
//     bevelEnabled: false,
//   };

//   const extrudeTopConnector = new THREE.ExtrudeGeometry(topConnectorShape, extrudeTopConnectorSettings);

//   // topConnectorMesh.add(connectorMesh);
//   const edges = new THREE.EdgesGeometry(extrudeTopConnector);
//   const lines = new THREE.LineBasicMaterial({color: "white"});
//   const edgesTopConnector = new THREE.LineSegments(edges, lines);

//   return edgesTopConnector;

// }

// function boltBase(diameter) {
//   const radius = diameter / 2;

//   const extrudeBoltSettings = {
//     steps: 1,
//     depth: 5,
//     bevelEnabled: false,
//   };

//   const boltFrontPlateShape = new THREE.Shape();
//   boltFrontPlateShape.moveTo(0, 0);
//   boltFrontPlateShape.absarc(radius, radius, radius, 0, Math.PI * 2, true);

//   const boltHoles = new THREE.Path();
//   boltHoles.moveTo(diameter / 12, radius - diameter / 8);
//   boltHoles.lineTo(diameter / 12, radius + diameter / 8);
//   boltHoles.lineTo(radius - diameter / 8, radius + diameter / 8);
//   boltHoles.lineTo(radius - diameter / 8, diameter - diameter / 12);
//   boltHoles.lineTo(radius + diameter / 8, diameter - diameter / 12);
//   boltHoles.lineTo(radius + diameter / 8, radius + diameter / 8);
//   boltHoles.lineTo(diameter - diameter / 12, radius + diameter / 8);
//   boltHoles.lineTo(diameter - diameter / 12, radius - diameter / 8);
//   boltHoles.lineTo(radius + diameter / 8, radius - diameter / 8);
//   boltHoles.lineTo(radius + diameter / 8, diameter / 12);
//   boltHoles.lineTo(radius - diameter / 8, diameter / 12);
//   boltHoles.lineTo(radius - diameter / 8, radius - diameter / 8);

//   boltFrontPlateShape.holes.push(boltHoles);

//   const extrudeBoltFrontPlate = new THREE.ExtrudeGeometry(
//     boltFrontPlateShape,
//     extrudeBoltSettings
//   );

//   const edges = new THREE.EdgesGeometry(extrudeBoltFrontPlate);
//   const lines = new THREE.LineBasicMaterial({color: "white"});
//   const edgesBolt = new THREE.LineSegments(edges, lines);

//   return edgesBolt;
// }

// function backPlateConnector(){
//   const height = 50;
//   const width = 30;
//   const diameter = 6;
//   const backPlateShape = new THREE.Shape();
//   backPlateShape.moveTo(0,0);
//   backPlateShape.lineTo(0,height);
//   backPlateShape.lineTo(width/2, height);
//   backPlateShape.lineTo(width/2, height - height/4);
//   backPlateShape.bezierCurveTo(width/2, height - height/4, width, height/2, width/2, height/4);
//   backPlateShape.lineTo(width/2, 0);
//   backPlateShape.lineTo(0,0);

//   const backPlateHole1 = new THREE.Path();
//   backPlateHole1.absarc(width/4, height - width/4, width/10, 0, Math.PI * 2, false);

//   const backPlateHole2 = new THREE.Path();
//   backPlateHole2.absarc(width/4, width/4, width/10, 0, Math.PI * 2, false);

//   backPlateShape.holes.push(backPlateHole1);
//   backPlateShape.holes.push(backPlateHole2);

//   const bolt1 = boltBase(diameter);
//   const bolt2 = boltBase(diameter);
//   bolt1.position.set(width/6 - width/(diameter * 10),height - width/3 - width/(diameter * 10));
//   bolt2.position.set(width/6 - width/(diameter * 10), width/6 - width/(diameter * 10),0);
//   const extrudeBackPlateSettings = {
//     steps: 1,
//     depth: 5,
//     bevelEnabled: false
//   }
//   const extrudeBackPlate = new THREE.ExtrudeGeometry(backPlateShape, extrudeBackPlateSettings);
//   const material = new THREE.MeshBasicMaterial({color: "purple"});
//   const backPlateMesh = new THREE.Mesh(extrudeBackPlate, material);
//   backPlateMesh.add(bolt1);
//   backPlateMesh.add(bolt2);

//   const edges = new THREE.EdgesGeometry(extrudeBackPlate);
//   const lines = new THREE.LineBasicMaterial({color: "white"});
//   const edgesBackPlate = new THREE.LineSegments(edges, lines);
// edgesBackPlate.add(bolt1);
// edgesBackPlate.add(bolt2);
//   return edgesBackPlate;
// }

// function createCockspurHandle(heightBottomConnector, depthBottomConnector){
//     const parentObject = new THREE.Object3D();
//     const handleBottomConnector = bottomConnector(heightBottomConnector, depthBottomConnector);
//     parentObject.add(handleBottomConnector);

//     const handleZConnector = zConnector(depthBottomConnector);
//     handleZConnector.position.set(0,heightBottomConnector,-depthBottomConnector);
//     handleZConnector.rotation.z -= Math.PI/2;
//     handleZConnector.rotation.x -= Math.PI;
//     handleZConnector.rotation.y += Math.PI/2;
//     parentObject.add(handleZConnector);

//     const handleTopConnector = topConnector(depthBottomConnector);
//     handleTopConnector.position.set(-26,heightBottomConnector + 10,-5)
//     parentObject.add(handleTopConnector);

//     const handleBackPlate = backPlateConnector();
//     handleBackPlate.position.set(-15,100,-10);
//     parentObject.add(handleBackPlate);

//     scene.add(parentObject);

//   }

//   const heightBottomConnector = 100;
//   const depthBottomConnector = 5;
//   createCockspurHandle(heightBottomConnector, depthBottomConnector);

//#endregion

//#region Lines

//#region Rectangle
// const vertices = new Float32Array([
//   0,0,
//   10,0,
//   10,50,
//   0,50,
//   0,0
// ]);
// // const line = new THREE.LineGeometry()
// const line = new THREE.BufferGeometry().setFromPoints();
// line.setAttribute("position", new THREE.BufferAttribute(vertices, 2));
// const material = new THREE.LineBasicMaterial({color: "white"})
// const rectAngle = new THREE.Line(line, material);

// scene.add(rectAngle)
//#endregion

//#region 2d Capsule
// const width = 20;
// const height = 50;
// const radius = width / 2;

// // Top arc
// const topArc = new THREE.ArcCurve(radius, height - radius, radius, 0, Math.PI, false).getPoints(100);

// // Bottom arc
// const bottomArc = new THREE.ArcCurve(radius, radius, radius, Math.PI, 0, false).getPoints(100);

// // Combining all points
// const shapePoints = [
//   ...topArc,
//   new THREE.Vector2(0, radius),
//   ...bottomArc,
//   new THREE.Vector2(width, radius),
// ];

// const shape = new THREE.BufferGeometry().setFromPoints(shapePoints);
// const material = new THREE.LineBasicMaterial({ color: "white" });

// const capsule2D = new THREE.LineLoop(shape, material);

// // Add to the scene
// scene.add(capsule2D);

//#endregion

//#region cockSpur Lines Geometry

// function bottomConnector(height,widthBottom, isRotation){
//   const width = widthBottom;
//   const newOrigin = new THREE.Vector2(origin.x + widthBottom + (widthBottom - widthBottom/7) , origin.y - heightBottom);
//   const newRotationOrigin = new THREE.Vector2(origin.x + widthBottom + (widthBottom/2 - widthBottom/14), origin.y - heightBottom);

//   let bottomArc;

//   if(isRotation){
//     bottomArc = new THREE.ArcCurve(newRotationOrigin.x + width/2, newRotationOrigin.y + width/2, width/2, Math.PI, 0, false).getPoints(10);

//   }
//   else{
//     bottomArc = new THREE.ArcCurve(newOrigin.x + width/2, newOrigin.y + width/2, width/2, Math.PI, 0, false).getPoints(10);

//   }

//   const bottomShapePoints = [
//     new THREE.Vector2(newOrigin.x , newOrigin.y + height),
//     ...bottomArc,
//     new THREE.Vector2(newOrigin.x + width, newOrigin.y + height),

//   ];

//   const bottomRotationShapePoints = [
//     new THREE.Vector2(newRotationOrigin.x , newRotationOrigin.y + height),
//     ...bottomArc,
//     new THREE.Vector2(newRotationOrigin.x + width, newRotationOrigin.y + height),
//   ];

//   let shape;
//   if(isRotation){
//   shape = new THREE.BufferGeometry().setFromPoints(bottomRotationShapePoints);
//   }
//   else{
//   shape = new THREE.BufferGeometry().setFromPoints(bottomShapePoints);

//   }
//   const material = new THREE.LineBasicMaterial({color: "white"});
//   const bottomHandle = new THREE.LineLoop(shape, material);

//   return bottomHandle;
// }

// function topConnector(isRotation,widthBottom){
//   const height = 40;
//   const width = 40;
//   const smoothnessFactor = 10;
//   const newTopOrigin = new THREE.Vector2(origin.x + width/2, origin.y);
//   const rightCurve = new THREE.CubicBezierCurve(
//     new THREE.Vector2(origin.x + width, origin.y),
//     new THREE.Vector2(origin.x + width, origin.y + height/2),
//     new THREE.Vector2(origin.x + width - width/4, origin.y + height - height/8),
//     new THREE.Vector2(origin.x + width - width/3, origin.y + height - height/10),
//   ).getPoints(smoothnessFactor);

//   const topCurve = new THREE.CubicBezierCurve(
//     new THREE.Vector2(origin.x + width - width/3, origin.y + height - height/10),
//     new THREE.Vector2(origin.x + width - width/2, origin.y + height - height/8 ),
//     new THREE.Vector2(origin.x + width/2, origin.y + height - height/8 ),
//     new THREE.Vector2(origin.x + width/2 - width/12, origin.y + height - height/7 ),
//   ).getPoints(smoothnessFactor);

//   const topLeftCurve = new THREE.CubicBezierCurve(
//     new THREE.Vector2(origin.x + width/2 - width/12, origin.y + height - height/7),
//     new THREE.Vector2(origin.x + width/2 - width/8, origin.y + height - height/6),
//     new THREE.Vector2(origin.x , origin.y + height - height/5),
//     new THREE.Vector2(origin.x + -width/8, origin.y + height - height/3),
//   ).getPoints(smoothnessFactor);

//   const leftCurve = new THREE.CubicBezierCurve(
//     new THREE.Vector2(origin.x + -width/8, origin.y + height - height/3),
//     new THREE.Vector2(origin.x , origin.y + height/2 - height/10),
//     new THREE.Vector2(origin.x + width/4, origin.y + height/2 - height/8),
//     new THREE.Vector2(origin.x + width/3, origin.y + height/3),
//   ).getPoints(smoothnessFactor);

//   const bottomCurve = new THREE.CubicBezierCurve(
//     new THREE.Vector2(origin.x + width/3, origin.y + height/3),
//     new THREE.Vector2(origin.x + (width - 14), origin.y + height/3),
//     new THREE.Vector2(origin.x + (width - 14), origin.y + height/4),
//     new THREE.Vector2(origin.x + (width - 14), origin.y),
//   ).getPoints(smoothnessFactor);

//   // curves of the rotation enabled top connector
//   const curve1 = new THREE.QuadraticBezierCurve(
//     new THREE.Vector2(newTopOrigin.x,newTopOrigin.y),
//     new THREE.Vector2(newTopOrigin.x + width/10, newTopOrigin.y + (height - height/4)),
//     new THREE.Vector2(newTopOrigin.x + width/4, newTopOrigin.y + (height - height/8)),
//   ).getPoints(smoothnessFactor);

//   const curve2 = new THREE.QuadraticBezierCurve(
//     new THREE.Vector2(newTopOrigin.x + width/4, newTopOrigin.y + (height - height/8)),
//     new THREE.Vector2(newTopOrigin.x + width/2, newTopOrigin.y + height),
//     new THREE.Vector2(newTopOrigin.x + (width - width/3), newTopOrigin.y + (height - height/8)),
//   ).getPoints(smoothnessFactor);

//   const curve3 = new THREE.QuadraticBezierCurve(
//     new THREE.Vector2(newTopOrigin.x + (width - width/3), newTopOrigin.y + (height - height/8)),
//     new THREE.Vector2(newTopOrigin.x + (width + width/4), newTopOrigin.y + (height - height/2)),
//     new THREE.Vector2(newTopOrigin.x + (width - width/8), newTopOrigin.y + height/2 - height/30),
//   ).getPoints(smoothnessFactor);

//   const curve4 = new THREE.QuadraticBezierCurve(
//     new THREE.Vector2(newTopOrigin.x + (width - width/8), newTopOrigin.y + height/2 - height/30),
//     new THREE.Vector2(newTopOrigin.x + (width - width/4), newTopOrigin.y + (height/2 - height/10)),
//     new THREE.Vector2(newTopOrigin.x + width/2, newTopOrigin.y + (height/2 - height/6)),
//   ).getPoints(smoothnessFactor);

//   const curve5 = new THREE.QuadraticBezierCurve(
//     new THREE.Vector2(newTopOrigin.x + width/2, newTopOrigin.y + (height/2 - height/6)),
//     new THREE.Vector2(newTopOrigin.x + widthBottom, newTopOrigin.y + (height/2 - height/6)),
//     new THREE.Vector2(newTopOrigin.x + widthBottom, newTopOrigin.y + 0),
//   ).getPoints(smoothnessFactor);
//   //Rotation enabled top connector points

//   const topRotationShapePoints = [
//     ...curve1,
//     ...curve2,
//     ...curve3,
//     ...curve4,
//     ...curve5,
//   ];

//     const topShapePoints = [
//       ...rightCurve,
//       ...topCurve,
//       ...topLeftCurve,
//       ...leftCurve,
//       ...bottomCurve

//     ];

//   const newHoleOrigin = new THREE.Vector2(origin.x, origin.y + height/10)
//   let holePoints;

//   if(isRotation){
//     holePoints = new THREE.ArcCurve(newHoleOrigin.x + width, newHoleOrigin.y + height/2 + height/20, height/6, 0, Math.PI * 2, false).getPoints(smoothnessFactor);

//   }
//   else{
//     holePoints = new THREE.ArcCurve(newHoleOrigin.x + width/2, newHoleOrigin.y + height/2, height/6, 0, Math.PI * 2, false).getPoints(smoothnessFactor);
//   }

//   const holeShape = new THREE.BufferGeometry().setFromPoints(holePoints);

//   let shape;
//   if(isRotation){
//      shape = new THREE.BufferGeometry().setFromPoints(topRotationShapePoints);

//   }
//   else{
//      shape = new THREE.BufferGeometry().setFromPoints(topShapePoints);
//   }
//   const material = new THREE.LineBasicMaterial({color: "white"});
//   const topHandle = new THREE.LineLoop(shape, material);
//   const hole = new THREE.Line(holeShape, material);
//   topHandle.add(hole);
//   return topHandle;
// }

// function backPlate(isRotation){
//   const width = 30;
//   const height = 50;
//   const backPlateOrigin = new THREE.Vector2(origin.x + width/4, origin.y);
//   const backPlateRotationOrigin = new THREE.Vector2(origin.x + width - width/4, origin.y);

//   let platePoints;

//   if(isRotation){
//     platePoints = [
//       new THREE.Vector2(backPlateRotationOrigin.x + width/2, backPlateRotationOrigin.y + 0),
//       new THREE.Vector2(backPlateRotationOrigin.x + width, backPlateRotationOrigin.y + 0),
//       new THREE.Vector2(backPlateRotationOrigin.x + width, backPlateRotationOrigin.y + height),
//       new THREE.Vector2(backPlateRotationOrigin.x + width/2, backPlateRotationOrigin.y + height),
//       new THREE.Vector2(backPlateRotationOrigin.x + width/2, backPlateRotationOrigin.y + (height - height/4)),
//       new THREE.Vector2(backPlateRotationOrigin.x + 0, backPlateRotationOrigin.y + (height - height/3)),
//       new THREE.Vector2(backPlateRotationOrigin.x + 0, backPlateRotationOrigin.y + height/3),
//       new THREE.Vector2(backPlateRotationOrigin.x + width/2, backPlateRotationOrigin.y + height/4),
//       new THREE.Vector2(backPlateRotationOrigin.x + width/2, backPlateRotationOrigin.y + 0),
//     ];
//   }
//   else{
//     platePoints = [
//       new THREE.Vector2(backPlateOrigin.x ,backPlateOrigin.y),
//       new THREE.Vector2(backPlateOrigin.x + width/2,backPlateOrigin.y),
//       new THREE.Vector2(backPlateOrigin.x + width/2, backPlateOrigin.y + height/4),
//       new THREE.Vector2(backPlateOrigin.x + width, backPlateOrigin.y + height/3),
//       new THREE.Vector2(backPlateOrigin.x + width, backPlateOrigin.y + (height - height/3)),
//       new THREE.Vector2(backPlateOrigin.x + width/2, backPlateOrigin.y + (height - height/4)),
//       new THREE.Vector2(backPlateOrigin.x + width/2, backPlateOrigin.y + height),
//       new THREE.Vector2(backPlateOrigin.x , backPlateOrigin.y + height),
//       new THREE.Vector2(backPlateOrigin.x ,backPlateOrigin.y),
//     ];
//   }

//   let hole1Points, hole2Points;

//   if(isRotation){
//     hole1Points = new THREE.ArcCurve(backPlateRotationOrigin.x + (width - width/4), backPlateRotationOrigin.y + width/4, width/10, 0, Math.PI * 2, false).getPoints(10);
//   hole2Points = new THREE.ArcCurve(backPlateRotationOrigin.x + (width - width/4), backPlateRotationOrigin.y + (height - width/4), width/10, 0, Math.PI * 2, false).getPoints(10);
//   }
//   else{
//     hole1Points = new THREE.ArcCurve(backPlateOrigin.x + width/4, backPlateOrigin.y + width/4, width/10, 0, Math.PI * 2, false).getPoints(10);
//   hole2Points = new THREE.ArcCurve(backPlateOrigin.x + width/4, backPlateOrigin.y + (height - width/4), width/10, 0, Math.PI * 2, false).getPoints(10);
//   }

//   const shape = new THREE.BufferGeometry().setFromPoints(platePoints);
//   const material = new THREE.LineBasicMaterial({color: "white"});
//   const backPlateConnector = new THREE.Line(shape, material);
//   const holeShape1 = new THREE.BufferGeometry().setFromPoints(hole1Points);
//   const holeShape2 = new THREE.BufferGeometry().setFromPoints(hole2Points);
//   const hole1 = new THREE.Line(holeShape1, material);
//   const hole2 = new THREE.Line(holeShape2, material);

//   backPlateConnector.add(hole1);
//   backPlateConnector.add(hole2);
//   return backPlateConnector;
// }

// function createCockSpurLines(heightBottom, widthBottom, isRotation){
//   const topHandleConnector = topConnector(isRotation,widthBottom);
//   const bottomHandleConnector = bottomConnector(heightBottom,widthBottom, isRotation);
//   const backPlateConnector = backPlate(isRotation);

//   topHandleConnector.add(backPlateConnector);
//   topHandleConnector.add(bottomHandleConnector);

//   scene.add(topHandleConnector);
// }

// const origin = new THREE.Vector2(-20,100);
// const heightBottom = 100;
// const widthBottom = 14;
// const isRotation = true;

// createCockSpurLines(heightBottom, widthBottom, isRotation);
//#endregion

//#region Sweet Handle Line Geometry"
// function handleBar(widthHandle, heightHandle,isRotation){
//   const smoothnessFactor = 10;
//   const bottomCurve = new THREE.CubicBezierCurve(
//     new THREE.Vector2(origin.x, origin.y ),
//     new THREE.Vector2(origin.x + widthHandle/3, origin.y - heightHandle/4),
//     new THREE.Vector2(origin.x + (widthHandle - widthHandle/3), origin.y - heightHandle/4 ),
//     new THREE.Vector2(origin.x + widthHandle, origin.y),
//   ).getPoints(smoothnessFactor);

//   const leftArc = new THREE.ArcCurve(origin.x, origin.y + heightHandle/2, heightHandle/2, Math.PI/2, Math.PI + Math.PI/2, false).getPoints(smoothnessFactor);

//   const topCurve = new THREE.CubicBezierCurve(
//     new THREE.Vector2(origin.x + widthHandle, origin.y + heightHandle ),
//     new THREE.Vector2(origin.x + widthHandle/2 + widthHandle/3, origin.y + heightHandle + heightHandle/4),
//     new THREE.Vector2(origin.x + widthHandle/3, origin.y + heightHandle + heightHandle/4),
//     new THREE.Vector2(origin.x , origin.y + heightHandle),
//   ).getPoints(smoothnessFactor);

//   const points = [
//     ...leftArc,
//     ...bottomCurve,
//     new THREE.Vector2(origin.x + widthHandle, origin.y + heightHandle),
//     ...topCurve,
//   ];

//   const shape = new THREE.BufferGeometry().setFromPoints(points);
//   const material = new THREE.LineBasicMaterial({color: "white"});
//   const handle = new THREE.LineLoop(shape, material);
//   if(isRotation){
//      handle.rotation.y += Math.PI;
//   }
//   return handle;
// }

// function backPlate(widthBackPlate, heightBackPlate){
//   const smoothnessFactor = 10;
//   const bottomArc = new THREE.ArcCurve(origin.x + widthBackPlate/2, origin.y + widthBackPlate/2, widthBackPlate/2, Math.PI, 0, false).getPoints(smoothnessFactor);
//   const topArc = new THREE.ArcCurve(origin.x + widthBackPlate/2, origin.y + (heightBackPlate - widthBackPlate/2), widthBackPlate/2, 0, Math.PI, false).getPoints(smoothnessFactor);
//   const points = [
//     ...bottomArc,
//     new THREE.Vector2(origin.x + widthBackPlate, origin.y + (heightBackPlate - widthBackPlate/2)),
//     ...topArc,
//     new THREE.Vector2(origin.x , origin.y + widthBackPlate/2),
//   ];

//   const shape = new THREE.BufferGeometry().setFromPoints(points);
//   const material = new THREE.LineBasicMaterial({color: "white"});
//   const backPlate = new THREE.LineLoop(shape, material);

//   // KeyHole
//   const keyHeight = 40;
//   const keyHoleBottomCurve = new THREE.ArcCurve(origin.x + widthBackPlate/2, origin.y + widthBackPlate/2, widthBackPlate/6, Math.PI, 0, false).getPoints(smoothnessFactor);
//   const keyHoleTopCurve = new THREE.ArcCurve(origin.x + widthBackPlate/2, origin.y + (keyHeight + widthBackPlate/2), widthBackPlate/3,  - Math.PI/3, Math.PI + Math.PI/3, false).getPoints(smoothnessFactor);
//   const keyHolePoints = [
//     ...keyHoleBottomCurve,
//     ...keyHoleTopCurve
//   ];

//   const keyHoleShape = new THREE.BufferGeometry().setFromPoints(keyHolePoints);
//   const keyHole = new THREE.LineLoop(keyHoleShape, material);
//   keyHole.position.set(0, widthBackPlate, 0)
//   backPlate.add(keyHole);

//   //BoltHole
//   const BoltHole1 = new THREE.ArcCurve(origin.x , origin.y, widthBackPlate/6, 0, Math.PI * 2, false).getPoints(smoothnessFactor);
//   const BoltHole2 = new THREE.ArcCurve(origin.x , origin.y, widthBackPlate/6, 0, Math.PI * 2, false).getPoints(smoothnessFactor);
//   const BoltHole1Shape = new THREE.BufferGeometry().setFromPoints(BoltHole1);
//   const BoltHole1Line = new THREE.Line(BoltHole1Shape, material);
//   const BoltHole2Shape = new THREE.BufferGeometry().setFromPoints(BoltHole2);
//   const BoltHole2Line = new THREE.Line(BoltHole2Shape, material);
//   BoltHole1Line.position.set(widthBackPlate/2, widthBackPlate/2,0);
//   BoltHole2Line.position.set(widthBackPlate/2, heightBackPlate - widthBackPlate/2,0);
//   backPlate.add(BoltHole1Line, BoltHole2Line);

//   return backPlate;
// }

// function createSweetHandle(widthHandle, heightHandle, widthBackPlate, heightBackPlate,isRotation){
//   const handle = handleBar(widthHandle, heightHandle, isRotation);
//   const handleBackPlate = backPlate(widthBackPlate, heightBackPlate);
//   handleBackPlate.position.set(-widthBackPlate/2, -(heightBackPlate - heightBackPlate/3),0)
//   handle.add(handleBackPlate);
//   scene.add(handle);
// }
// const origin = new THREE.Vector2(0,0);
// // Handle Bar Dimenstions
// const widthHandle = 200;
// const heightHandle = 30;

// // Handle Back plate dimenstions
// const widthBackPlate = 50;
// const heightBackPlate = 500;
// const isRotation = true;
// createSweetHandle(widthHandle, heightHandle,widthBackPlate, heightBackPlate,isRotation);
//#endregion

//#region Vivo Shot Lines Geometry

// function bottomHandle(widthBottom, heightBottom){
//   const smoothnessFactor = 12;
//   const bottomCurve = new THREE.QuadraticBezierCurve(
//     new THREE.Vector2(origin.x + widthBottom/12, origin.y),
//     new THREE.Vector2(origin.x + widthBottom/2,  origin.y - widthBottom/12),
//     new THREE.Vector2(origin.x + (widthBottom - widthBottom/12), origin.y)
//   ).getPoints(smoothnessFactor);

//   const topCurve = new THREE.QuadraticBezierCurve(
//     new THREE.Vector2(origin.x + widthBottom, origin.y + heightBottom),
//     new THREE.Vector2(origin.x + widthBottom/2, origin.y + heightBottom + widthBottom/12),
//     new THREE.Vector2(origin.x , origin.y + heightBottom),
//   ).getPoints(smoothnessFactor);
//   const points = [
//     ...bottomCurve,
//     new THREE.Vector2(origin.x + widthBottom, origin.y + heightBottom),
//     ...topCurve,
//     new THREE.Vector2(origin.x + widthBottom/12, origin.y),
//   ];

//   const shape = new THREE.BufferGeometry().setFromPoints(points);
//   const material = new THREE.LineBasicMaterial({color: "white"});
//   const bottomHandle = new THREE.Line(shape, material);

//   return bottomHandle;

// }

// function backPlate(width, height, isKeyAvailable){
//   const smoothnessFactor = 12;
//   const originNew = new THREE.Vector2(origin.x, origin.y + height * 1.3);
//   const topCurve = new THREE.QuadraticBezierCurve(
//     new THREE.Vector2(originNew.x + width, originNew.y + height),
//     new THREE.Vector2(originNew.x + width/2, originNew.y + height + width/6),
//     new THREE.Vector2(originNew.x, originNew.y + height),
//   ).getPoints(smoothnessFactor);

//   const keyTopCurve = new THREE.QuadraticBezierCurve(
//     new THREE.Vector2(originNew.x + width, originNew.y + (height * 1.5)),
//     new THREE.Vector2(originNew.x + width/2, originNew.y + (height * 1.5) + width/6),
//     new THREE.Vector2(originNew.x, originNew.y + height * 1.5),
//   ).getPoints(smoothnessFactor);

//   const points = [
//     new THREE.Vector2(originNew.x + width, originNew.y),
//     new THREE.Vector2(originNew.x + width, originNew.y + height),
//     ...topCurve,
//     new THREE.Vector2(originNew.x, originNew.y)
//   ];

//   const withKeyPoints = [
//     new THREE.Vector2(originNew.x + width, originNew.y),
//     new THREE.Vector2(originNew.x + width, originNew.y + height),
//     ...keyTopCurve,
//     new THREE.Vector2(originNew.x, originNew.y)
//   ];

//   let shape;
//   if(isKeyAvailable){
//   shape = new THREE.BufferGeometry().setFromPoints(withKeyPoints);
//   }
//   else{
//    shape = new THREE.BufferGeometry().setFromPoints(points);
//   }
//   const material = new THREE.LineBasicMaterial({color: "white"});
//   const backPlate = new THREE.LineLoop(shape, material);

//   //Key hole
//   if(isKeyAvailable){
//     const keyHeight = 15;
//   const keyBottomArc = new THREE.ArcCurve(originNew.x + width/2, originNew.y + width/2, width/8, Math.PI , 0, false).getPoints(smoothnessFactor);
//   const keyTopArc = new THREE.ArcCurve(originNew.x + width/2, originNew.y + width/2 + keyHeight,width/4, -Math.PI/3, Math.PI + Math.PI/3, false).getPoints(smoothnessFactor);
//   const keyHolePoints = [
//     ...keyBottomArc,
//     ...keyTopArc
//   ];

//   const KeyHoleShape = new THREE.BufferGeometry().setFromPoints(keyHolePoints);
//   const keyHole = new THREE.LineLoop(KeyHoleShape, material);
//   keyHole.position.set(0, height,0)
//   backPlate.add(keyHole);
//   }

//   // Back plate hole
//   const holeArc = new THREE.ArcCurve(originNew.x + width/2, originNew.y + width/2, width/6, 0, Math.PI * 2, false).getPoints(smoothnessFactor);
//   const holeShape = new THREE.BufferGeometry().setFromPoints(holeArc);
//   const holeLine = new THREE.Line(holeShape, material);
//   holeLine.position.set(0, height - width,0);
//   backPlate.add(holeLine);

//   return backPlate;

// }

// function createVivoShotHandle(widthBottom, heightBottom, isKeyAvailable){
//   const bottomHandleConnector = bottomHandle(widthBottom, heightBottom);
//   const handleBackPlate = backPlate(widthBackPlate, heightBackPlate, isKeyAvailable);
//   bottomHandleConnector.add(handleBackPlate);

//   scene.add(bottomHandleConnector);
// }

// const origin = new THREE.Vector2(0,0);
// // Bottom handle connector dimentions
// const widthBottom = 25;
// const heightBottom = 160;

// // BackPlate dimentions
// const widthBackPlate = widthBottom;
// const heightBackPlate = 80;
// const isKeyAvailable = true;

// createVivoShotHandle(widthBottom, heightBottom, isKeyAvailable);
//#endregion

//#endregion

//#region Nut Bolt

// function boltBase(diameter) {
//   const radius = diameter / 2;

//   const extrudeBoltSettings = {
//     steps: 1,
//     depth: 5,
//     bevelEnabled: false,
//   };

//   const boltFrontPlateShape = new THREE.Shape();
//   boltFrontPlateShape.moveTo(0, 0);
//   boltFrontPlateShape.absarc(radius, radius, radius, 0, Math.PI * 2, true);

//   const boltHoles = new THREE.Path();
//   boltHoles.moveTo(diameter / 12, radius - diameter / 8);
//   boltHoles.lineTo(diameter / 12, radius + diameter / 8);
//   boltHoles.lineTo(radius - diameter / 8, radius + diameter / 8);
//   boltHoles.lineTo(radius - diameter / 8, diameter - diameter / 12);
//   boltHoles.lineTo(radius + diameter / 8, diameter - diameter / 12);
//   boltHoles.lineTo(radius + diameter / 8, radius + diameter / 8);
//   boltHoles.lineTo(diameter - diameter / 12, radius + diameter / 8);
//   boltHoles.lineTo(diameter - diameter / 12, radius - diameter / 8);
//   boltHoles.lineTo(radius + diameter / 8, radius - diameter / 8);
//   boltHoles.lineTo(radius + diameter / 8, diameter / 12);
//   boltHoles.lineTo(radius - diameter / 8, diameter / 12);
//   boltHoles.lineTo(radius - diameter / 8, radius - diameter / 8);

//   boltFrontPlateShape.holes.push(boltHoles);

//   const extrudeBoltFrontPlate = new THREE.ExtrudeGeometry(
//     boltFrontPlateShape,
//     extrudeBoltSettings
//   );
//   const BoltMaterial = new THREE.MeshBasicMaterial({
//     color: "red",
//     side: THREE.DoubleSide,
//   });
//   const BoltFrontPlateMesh = new THREE.Mesh(
//     extrudeBoltFrontPlate,
//     BoltMaterial
//   );

//   return BoltFrontPlateMesh;
// }

// function createBolt(diameter) {
//   const boltBaseConnector = boltBase(diameter);

//   scene.add(boltBaseConnector);
// }

// const diameter = 50;

// createBolt(diameter);
//#endregion

//#region Extrusion Shapes

// const shape = new THREE.Shape();
// shape.absarc(0, 0, 10, 0, Math.PI * 2, false);

// const path = new THREE.QuadraticBezierCurve(
//   new THREE.Vector2(0, 0),
//   new THREE.Vector2(100, 0),
//   new THREE.Vector2(100, 100)
// );

// const extrudeSettings = {
//   steps: 1,
// };

// const extrudeShape = new THREE.ExtrudeGeometry(shape, extrudeSettings);

// const material = new THREE.MeshBasicMaterial({ color: "red"});
// const mesh = new THREE.Mesh(extrudeShape, material);

// scene.add(mesh);
// const shape = new THREE.Shape();
// const height = 300;
// const width = 200;
// shape.absarc(0, 0, width/10, 0, Math.PI * 2, false);

// const path = new THREE.CurvePath();

// const bottomLine = new THREE.LineCurve3(
//   new THREE.Vector3(0,0,0 ),
//   new THREE.Vector3(0,0,width - width/10),
// );

// path.add(bottomLine);
// const bottomCurve = new THREE.QuadraticBezierCurve3(
// 	new THREE.Vector3( 0, 0, width - width/10 ),
// 	new THREE.Vector3( 0, 0, width ),
// 	new THREE.Vector3( 0, height/8, width ),
// );
// path.add(bottomCurve);
// const middleLine = new THREE.LineCurve3(
//   new THREE.Vector3(0,height/8, width),
//   new THREE.Vector3(0, height - height/8, width),
// );

// path.add(middleLine);
// const topCurve = new THREE.QuadraticBezierCurve3(
//   new THREE.Vector3(0, height - height/8, width),
//   new THREE.Vector3(0, height, width),
//   new THREE.Vector3(0, height, width - width/10)
// );
// path.add(topCurve);
// const topLine = new THREE.LineCurve3(
//   new THREE.Vector3(0, height, width - width/10),
//   new THREE.Vector3(0, height, 0),
// );
// path.add(topLine);
// const extrudeSettings = {
//   steps: 200,
//   extrudePath: path,
// };

// const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

// const material = new THREE.MeshBasicMaterial({ color: "red" });
// const mesh = new THREE.Mesh(geometry, material);

// mesh.rotation.y += Math.PI/2;

// scene.add(mesh);

//#endregion
//#region handle extrusion

// function createShape(origin, radius) {
//   const shape = new THREE.Shape();
//   shape.absarc(origin.x, origin.y, radius, 0, Math.PI * 2, false);
//   return shape;
// }

// function createPath(origin, height, width) {
//   const bottomLine = new THREE.LineCurve3(
//     new THREE.Vector3(origin.x, origin.y, origin.z),
//     new THREE.Vector3(origin.x, origin.y, origin.z + (width - width / 10))
//   );

//   const bottomCurve = new THREE.QuadraticBezierCurve3(
//     new THREE.Vector3(origin.x, origin.y, origin.z + (width - width / 10)),
//     new THREE.Vector3(origin.x, origin.y, origin.z + width),
//     new THREE.Vector3(origin.x, origin.y + (height / 4 - width / 10), origin.z + width)
//   );

//   const middleLine = new THREE.LineCurve3(
//     new THREE.Vector3(origin.x, origin.y + (height / 4 - width / 10), origin.z + width),
//     new THREE.Vector3(origin.x, origin.y + (height - width / 10), origin.z + width)
//   );

//   const topCurve = new THREE.QuadraticBezierCurve3(
//     new THREE.Vector3(origin.x, origin.y + (height - width / 10), origin.z + width),
//     new THREE.Vector3(origin.x, origin.y + height, origin.z + width),
//     new THREE.Vector3(origin.x, origin.y + height, origin.z + (width - width / 10))
//   );

//   const topLine = new THREE.LineCurve3(
//     new THREE.Vector3(origin.x, origin.y + height, origin.z + (width - width / 10)),
//     new THREE.Vector3(origin.x, origin.y + height, origin.z)
//   );

//   const path = new THREE.CurvePath();
//   path.add(bottomLine);
//   path.add(bottomCurve);
//   path.add(middleLine);
//   path.add(topCurve);
//   path.add(topLine);

//   return path;
// }

// function handleCurve(origin, height, width, radius) {
//   const shape = createShape(origin, radius);
//   const path = createPath(origin, height, width);

//   const extrudeSettings = {
//     steps: 300,
//     extrudePath: path,
//   };

//   const extrudeShape = new THREE.ExtrudeGeometry(shape, extrudeSettings);
//   const material = new THREE.MeshBasicMaterial({ color: "red" });
//   const mesh = new THREE.Mesh(extrudeShape, material);
//   mesh.rotation.y += Math.PI / 2;
//   return mesh;
// }

// function createHandleExtrusion(scene, origin, height, width, radius) {
//   const handleCurveConnector = handleCurve(origin, height, width, radius);
//   scene.add(handleCurveConnector);
// }

//
// const origin = new THREE.Vector3(0, 0, 0);
// const height = 125;
// const width = 55;
// const radius = 15;

// createHandleExtrusion(scene, origin, height, width, radius);

//#endregion

//#region Extrusion cut shapes

// function shape(origin, width, height, cutHeight, cutWidth) {
//   const shape = new THREE.Shape();
//   shape.moveTo(origin.x, origin.y);
//   shape.lineTo(origin.x + width, origin.y);
//   for(let i = origin.y;i < cutHeight;i++){
//     shape.lineTo(origin.x + width, origin.y + i);
//   }
//   shape.lineTo(origin.x + width, origin.y + cutHeight);
//   for(let i = origin.y + cutHeight;i< height;i++){
//     shape.lineTo(origin.x + width, origin.y + i);
//   }
//   shape.lineTo(origin.x + width, origin.y + height);
//   shape.lineTo(origin.x, origin.y + height);
//   for(let i = height ;i > cutHeight;i--){
//     shape.lineTo(origin.x, origin.y + i);
//   }
//   shape.lineTo(origin.x, origin.y + cutHeight);
//   for(let i = cutHeight ;i>origin.x;i--){
//     shape.lineTo(origin.x, origin.y + i);
//   }
//   shape.lineTo(origin.x, origin.y);
//   // shape.moveTo(origin.x + cutWidth, origin.y + cutHeight);
//   // shape.lineTo(origin.x, origin.y + cutHeight);

//   return shape;
// }

// function extrusionShape(origin, width, height, extrudeWidth, cutWidth, cutHeight) {
//   const fig = shape(origin, width, height, cutHeight);

//   const path = new THREE.CurvePath();
//   const line = new THREE.LineCurve3(
//     new THREE.Vector3(origin.x, origin.y, origin.z ),
//     new THREE.Vector3(origin.x + extrudeWidth, origin.y, origin.z)
//   );
//   path.add(line);

//   const extrudeSettings = {
//     steps: 1,
//     extrudePath: path,
//     bevelEnabled: false,
//   };

//   const extrudeShape = new THREE.ExtrudeGeometry(fig, extrudeSettings);

//   const pos = extrudeShape.getAttribute("position");

//   // Points of the extrudeShape
//   for (let i = 0; i < pos.count; i++) {
//     const x = pos.getX(i);
//     const y = pos.getY(i);
//     const z = pos.getZ(i);

//     console.log(`i: ${i}, x: ${x}, y: ${y}, z: ${z}`);

//     // if (x === origin.x && y === (origin.y + height)) {

//     //   pos.setX(i, cutWidth); // point on the left side (0, height) based on the cut

//     //   // pos.setZ(i, 25);
//     // console.log(`(0, height) => i: ${i}, x: ${x}, y: ${y}, z: ${z}
//     //   new x: ${pos.getX(i)}
//     //   new y: ${pos.getY(i)}}
//     //   new z: ${pos.getZ(i)}}
//     //   `);

//     // }

//     // if (x === origin.x && y === origin.y) {

//     //   pos.setX(i, cutWidth); // point on the left side (0, 0)

//     //   // pos.setZ(i, 25);
//     //   console.log(` (0, 0) => i: ${i}, x: ${x}, y: ${y}, z: ${z}
//     //   new x: ${pos.getX(i)}
//     //   new y: ${pos.getY(i)}}
//     //   new z: ${pos.getZ(i)}}
//     //   `);

//     // }

//     // if (x === (origin.x + extrudeWidth) && y === origin.y) {

//     //   pos.setX(i, extrudeWidth - cutWidth); // point on the right side (extrudeWidth, 0)
//     //   // pos.setZ(i, 25);
//     //   console.log(` (extrudeWidth, 0) => i: ${i}, x: ${x}, y: ${y}, z: ${z}
//     //   new x: ${pos.getX(i)}
//     //   new y: ${pos.getY(i)}}
//     //   new z: ${pos.getZ(i)}}
//     //   `);
//     // }

//     // if (x === (origin.x + extrudeWidth) && y === (origin.y + height)) {

//     //   pos.setX(i, extrudeWidth - cutWidth); // point on the right side (extrudeWidth, height)
//     //   // pos.setZ(i, 25);
//     //   console.log(` (extrudeWidth, height) => i: ${i}, x: ${x}, y: ${y}, z: ${z}
//     //   new x: ${pos.getX(i)}
//     //   new y: ${pos.getY(i)}}
//     //   new z: ${pos.getZ(i)}}
//     //   `);
//     // }

//     if(x === origin.x && y > origin.y + cutHeight){
//       const theta = Math.atan(cutWidth/(height - cutHeight));
//       pos.setX(i, x - theta * (cutHeight - y ));
//       console.log(` Upper cut => i: ${i}, x: ${x}, y: ${y}, z: ${z}
//        new x: ${pos.getX(i)}
//       new y: ${pos.getY(i)}}
//       new z: ${pos.getZ(i)}}
//        `);
//     }
//     if(x === origin.x && y <= origin.y + cutHeight){
//     const theta = Math.atan(cutWidth/(cutHeight));
//       pos.setX(i, x + theta * cutHeight - y );
//       console.log(` Lower cut => i: ${i}, x: ${x}, y: ${y}, z: ${z}
//        new x: ${pos.getX(i)}
//        new y: ${pos.getY(i)}}
//        new z: ${pos.getZ(i)}}
//        `);

//     }
// //#region side slant cut logic+
//     // if(x === origin.x && y === origin.y){
//     //   pos.setX(i,cutWidth);
//     // }
//     // if(x === origin.x + extrudeWidth && y === origin.y){
//     //   pos.setX(i,extrudeWidth - cutWidth);
//     // }
//     //#endregion
//   }

//   pos.needsUpdate = true;

//   const material = new THREE.MeshStandardMaterial({ 
//     color: "red",
//     side: THREE.DoubleSide,
//   });
//   const mesh = new THREE.Mesh(extrudeShape, material);

//   const edgeShape = new THREE.EdgesGeometry(extrudeShape);
//   const edgesMaterial = new THREE.LineBasicMaterial({
//     color: "white",
//   });
//   const lines = new THREE.LineSegments(edgeShape, edgesMaterial);
//   mesh.add(lines);

//   return mesh;
// }

// function createExtrusionShape(origin, width, height, extrudeWidth, cutWidth, cutHeight) {
//   const figure = extrusionShape(origin, width, height, extrudeWidth, cutWidth, cutHeight);
//   scene.add(figure);
// }

// const origin = new THREE.Vector3(0, 0, 0);
// const width = 50;
// const height = 50;
// const extrudeWidth = 500;
// const cutWidth = 50;
// const cutHeight = 25;

// createExtrusionShape(origin, width, height, extrudeWidth, cutWidth, cutHeight);

// ------------------ window upper pane shape -------------------------

// const shape = new THREE.Shape();
// shape.moveTo(origin.x + width, origin.y);
// shape.lineTo(origin.x + extrudeWidth - width, origin.y);
// shape.lineTo(origin.x + extrudeWidth, origin.y + height);
// shape.lineTo(origin.x , origin.y + height);
// shape.lineTo(origin.x + width, origin.y);

// const extrudeSettings = {
//   steps: 1,
//   depth: 50,
//   bevelEnabled: false,
// };

// const extrudeShape = new THREE.ExtrudeGeometry(shape, extrudeSettings);
// const material = new THREE.MeshBasicMaterial({color: "red"});
// const mesh = new THREE.Mesh(extrudeShape, material);

// scene.add(mesh);

//#endregion

//#region Extrusion shapes Cut by line

// shape dimentions
const origin = new THREE.Vector3(0, 0, 0);
const width = 50;
const height = 50;
const extrudeWidth = 500;
// const lineObj = [
//   startPoint, endPoint
// ];
const cutWidth = 50;
const cutHeight = 25;
// Enable the plane
const isXYPlane = true;
const isXZPlane = false;

const startPoint = new THREE.Vector3(origin.x, origin.y, origin.z);
const endPoint = new THREE.Vector3(origin.x + cutWidth , origin.y , origin.z + cutWidth);

const shape = new THREE.Shape();
shape.moveTo(origin.x, origin.y);
for(let i = 0;i<=width;i++){
shape.lineTo(origin.x + i, origin.y);
}
  for(let i = 0;i<= height;i++){
    shape.lineTo(origin.x + width, origin.y + i);
  }
  for(let i = width;i>=0;i--){
    shape.lineTo(origin.x + i, origin.y + height);
  }
  for(let i = height;i>=0;i--){
    shape.lineTo(origin.x , origin.y + i);
  }



const path = new THREE.CurvePath();
const linePath = new THREE.LineCurve3(
  new THREE.Vector3(origin.x, origin.y, origin.z),
  new THREE.Vector3(origin.x + extrudeWidth, origin.y, origin.z)
);


path.add(linePath);
const extrudeSettings = {
  steps: 1,
  extrudePath: path,
};
const extrudeShape = new THREE.ExtrudeGeometry(shape, extrudeSettings);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(extrudeShape, material);


// // Line (cutter)
// const startPoint = new THREE.Vector3(lineOrgin.x, lineOrgin.y, origin.z);
// const endPoint = new THREE.Vector3(lineOrgin.x + lineWidth, lineOrgin.y + lineHeight, origin.z);
// const geometry = new THREE.BufferGeometry().setFromPoints([startPoint, endPoint]);
// const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
// const line = new THREE.Line(geometry, lineMaterial);

// scene.add(line);

const pos = extrudeShape.getAttribute("position");
for (let i = 0; i < pos.count; i++) {
  const x = pos.getX(i);
  const y = pos.getY(i);
  const z = pos.getZ(i);

  console.log(`i: ${i}, x: ${x}, y: ${y}, z: ${z}`);

  if(isXYPlane){

  }
  // // for cut on xz axis
  // if(endPoint.x >= origin.x){
  //   if(x === origin.x && y === origin.y + height && z === origin.z){
  //     pos.setX(i, x + endPoint.z);
  //   }
  //   if(x === origin.x && y === origin.y && z === origin.z){
  //     pos.setX(i, x + endPoint.z);
  //   }
  // }
  
  // if(endPoint.z < origin.x){
  //   if(x === origin.x && y === origin.y + height && z === origin.z){
  //     pos.setX(i, -(x + endPoint.z));
  //   }
  //   if(x === origin.x && y === origin.y && z === origin.z){
  //     pos.setX(i, -(x + endPoint.z));
  //   }
  // }

  // for cut on xy plane
  // if(endPoint.x >= origin.x){
  //   if(x === origin.x && y === origin.y + height){
  //     pos.setX(i,x + endPoint.x);
  //   }
  // }



  // if(x === (origin.x + extrudeWidth) && y === origin.y + height && z === origin.z){
  //   pos.setX(i, x - (endPoint.x));

  // }
  // if(x === origin.x + extrudeWidth && y === origin.y && z === origin.z){
  //   pos.setX(i, x - endPoint.x);
  // }
}
pos.needsUpdate = true;
const edgeShape = new THREE.EdgesGeometry(extrudeShape);
const edgesMaterial = new THREE.LineBasicMaterial({
  color: "white",
});
const lines = new THREE.LineSegments(edgeShape, edgesMaterial);
mesh.add(lines);
scene.add(mesh);

//#endregion
  
//#region  Renderer setup
const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.localClippingEnabled = true;
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
