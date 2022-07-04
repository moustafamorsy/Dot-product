// return 0/90 means its orthogonal

const v1 = [-3, 4];

const v2 = [4, 3];

// return angle

const v3 = [3, 2];

const v4 = [5, 4];

Findorthogonal(v1, v2);
Findorthogonal(v3, v4);

function Findorthogonal(Firstpoint, Secondpoint) {
  const pi = Math.PI;
  let j = 0;

  // to get the dot product
  let v1_v2 = 0;

  // to get the angle
  let pv1 = 0;
  let pv2 = 0;

  for (let i = 0; i < Firstpoint.length; i++) {
    // lenght of v1 vector
    let pw = Math.sqrt(Math.pow(Firstpoint[i], 2));
    pv1 += pw;

    for (j; j < Secondpoint.length; j) {
      // length of v2 vector
      let pww = Math.sqrt(Math.pow(Secondpoint[j], 2));
      pv2 += pww;
      // to get the v1.v2 dot product
      let sum = Firstpoint[i] * Secondpoint[j];
      v1_v2 += sum;

      j++;
      break;
    }
  }
  // the angle of the vector
  const cosin_angle = Math.acos(v1_v2 / (pv1 * pv2)) * (180 / pi);
  if (cosin_angle == 90) {
    console.log("this angle is orthogonal : " + cosin_angle);
  } else {
    console.log("this angle is not orthogonal :" + Math.round(cosin_angle));
  }
}
