const v1 = [-3, 4];
const v2 = [4, 3];

const v3 = [3, 2];
const v4 = [5, 4];

Findorthogonal(v1, v2);
Findorthogonal(v3, v4);

function Findorthogonal(Firstpoint, Secondpoint) {
  let j = 0;
  
  let v1_v2 = 0;
  
  for (let i = 0; i < Firstpoint.length; i++) {
    
    for (j; j < Secondpoint.length; j) {
      
      // to get the v1.v2 dot product
      
      let sum = Firstpoint[i] * Secondpoint[j];
      
      v1_v2 += sum;
      
      j++;
      
      break;
    }
  }
  console.log(v1_v2);
}
