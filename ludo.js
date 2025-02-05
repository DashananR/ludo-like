

const body = document.body;
const token = document.querySelector('.token');
const dice = document.querySelector('.dice');
const s1 = document.querySelector('#s1');
const s2 = document.querySelector('#s2');
const s3 = document.querySelector('#s3');
const s4 = document.querySelector('#s4');
const s5 = document.querySelector('#s5');
const s6 = document.querySelector('#s6');
const s7 = document.querySelector('#s7');
const s8 = document.querySelector('#s8');
const s9 = document.querySelector('#s9');
const s10 = document.querySelector('#s10');
const s11 = document.querySelector('#s11');
const s12 = document.querySelector('#s12');
const s13 = document.querySelector('#s13');
const s14 = document.querySelector('#s14');
const s15 = document.querySelector('#s15');
const s16 = document.querySelector('#s16');
const s17 = document.querySelector('#s17');
const s18 = document.querySelector('#s18');
const s19 = document.querySelector('#s19');
const s20 = document.querySelector('#s20');
const s21 = document.querySelector('#s21');
const s22 = document.querySelector('#s22');
const s23 = document.querySelector('#s23');
const s24 = document.querySelector('#s24');
const s25 = document.querySelector('#s25');
const s26 = document.querySelector('#s26');
const s27 = document.querySelector('#s27');
const s28 = document.querySelector('#s28');
const s29 = document.querySelector('#s29');
const s30 = document.querySelector('#s30');
const s31 = document.querySelector('#s31');
const s32 = document.querySelector('#s32');
const s33 = document.querySelector('#s33');
const s34 = document.querySelector('#s34');
const s35 = document.querySelector('#s35');
const s36 = document.querySelector('#s36');
const s37 = document.querySelector('#s37');
const s38 = document.querySelector('#s38');
const s39 = document.querySelector('#s39');
const s40 = document.querySelector('#s40');
const s41 = document.querySelector('#s41');
const s42 = document.querySelector('#s42');
const s43 = document.querySelector('#s43');
const s44 = document.querySelector('#s44');
const s45 = document.querySelector('#s45');
const s46 = document.querySelector('#s46');
const s47 = document.querySelector('#s47');
const s48 = document.querySelector('#s48');
const s49 = document.querySelector('#s49');
const s50 = document.querySelector('#s50');
const s51 = document.querySelector('#s51');
const s52 = document.querySelector('#s52');
const s57 = document.querySelector('#s57');
const s56 = document.querySelector('#s56');
const s55 = document.querySelector('#s55');
const s54 = document.querySelector('#s54');
const s53 = document.querySelector('#s53');
const s63 = document.querySelector('#s63');
const s62 = document.querySelector('#s62');
const s61 = document.querySelector('#s61');
const s60 = document.querySelector('#s60');
const s59 = document.querySelector('#s59');
const s65 = document.querySelector('#s65');
const s66 = document.querySelector('#s66');
const s67 = document.querySelector('#s67');
const s68 = document.querySelector('#s68');
const s69 = document.querySelector('#s69');
const s70 = document.querySelector('#s70');
const s71 = document.querySelector('#s71');
const s72 = document.querySelector('#s72');
const s73 = document.querySelector('#s73');
const s74 = document.querySelector('#s74');
const s75 = document.querySelector('#s75');
const s76 = document.querySelector('#s76');

const arr = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,
    s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,
    s21,s22,s23,s24,s25,s26,s27,s28,s29,s30,
    s31,s32,s33,s34,s35,s36,s37,s38,s39,s40,
    s41,s42,s43,s44,s45,s46,s47,s48,s49,s50,
    s51,s52,s53,s54,s55,s56,s57,
    t58,
    s59,s60,
    s61,s62,s63,
    t64,
    s65,s66,s67,s68,s69,s70,
    s71,s72,
    s73,s74,s75, s76
];

const t1 = document.querySelector('#t1');
const t2 = document.querySelector('#t2');
const t3 = document.querySelector('#t3');
const t4 = document.querySelector('#t4');   
const t5 = document.querySelector('#t5');
const t6 = document.querySelector('#t6');
const t7 = document.querySelector('#t7');
const t8 = document.querySelector('#t8');
const t9 = document.querySelector('#t9');
const t10 = document.querySelector('#t10');
const t11 = document.querySelector('#t11');
const t12 = document.querySelector('#t12');
const t13 = document.querySelector('#t13');
const t14 = document.querySelector('#t14');
const t15 = document.querySelector('#t15');
const t16 = document.querySelector('#t16');
const t17 = document.querySelector('#t17');
const t18 = document.querySelector('#t18');
const t19 = document.querySelector('#t19');
const t20 = document.querySelector('#t20');
const t21 = document.querySelector('#t21');
const t22 = document.querySelector('#t22');
const t23 = document.querySelector('#t23');
const t24 = document.querySelector('#t24');
const t25 = document.querySelector('#t25');
const t26 = document.querySelector('#t26');
const t27 = document.querySelector('#t27');
const t28 = document.querySelector('#t28');
const t29 = document.querySelector('#t29');
const t30 = document.querySelector('#t30');
const t31 = document.querySelector('#t31');
const t32 = document.querySelector('#t32');
const t33 = document.querySelector('#t33');
const t34 = document.querySelector('#t34');
const t35 = document.querySelector('#t35');
const t36 = document.querySelector('#t36');
const t37 = document.querySelector('#t37');
const t38 = document.querySelector('#t38');
const t39 = document.querySelector('#t39');
const t40 = document.querySelector('#t40');
const t41 = document.querySelector('#t41');
const t42 = document.querySelector('#t42');
const t43 = document.querySelector('#t43');
const t44 = document.querySelector('#t44');
const t45 = document.querySelector('#t45');
const t46 = document.querySelector('#t46');
const t47 = document.querySelector('#t47');
const t48 = document.querySelector('#t48');
const t49 = document.querySelector('#t49');
const t50 = document.querySelector('#t50');
const t51 = document.querySelector('#t51');
const t52 = document.querySelector('#t52');
const t57 = document.querySelector('#t57');
const t56 = document.querySelector('#t56');
const t55 = document.querySelector('#t55');
const t54 = document.querySelector('#t54');
const t53 = document.querySelector('#t53');
const t63 = document.querySelector('#t63');
const t62 = document.querySelector('#t62');
const t61 = document.querySelector('#t61');
const t60 = document.querySelector('#t60');
const t59 = document.querySelector('#t59');
const t65 = document.querySelector('#t65');
const t66 = document.querySelector('#t66');
const t67 = document.querySelector('#t67');
const t68 = document.querySelector('#t68');
const t69 = document.querySelector('#t69');
const t71 = document.querySelector('#t71');
const t70 = document.querySelector('#t70');
const t72 = document.querySelector('#t72');
const t73 = document.querySelector('#t73');
const t74 = document.querySelector('#t74');
const t75 = document.querySelector('#t75');
const t76 = document.querySelector('#t76');

const arr1 = [t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,
    t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,
    t21,t22,t23,t24,t25,t26,t27,t28,t29,t30,
    t31,t32,t33,t34,t35,t36,t37,t38,t39,t40,
    t41,t42,t43,t44,t45,t46,t47,t48,t49,t50,
    t51,t52,t53,t54,t55,t56,t57,
    t58,
    t59,t60,
    t61,t62,t63,
    t64,
    t65,t66,t67,t68,t69,t70,
    t71,t72,
    t73,
    t74, t75, t76
];

let place = 1;
let paari = 0;
let pogOfBlue = 13;
let npogOfBlue = 13;
let pogOfGreen = 39;
let npogOfGreen = 39;
let pogOfRed = 26;
let npogOfRed = 26;
let pogOfYellow = 0;
let npogOfYellow = 0;
let rCount = 0;
let yCount = 0;
let bCount = 0;
let gCount = 0;
let forY = 0;
let forB = 0;
let forR = 0;
let forG = 0;

arr1[npogOfYellow].style.display = 'block';
arr1[npogOfYellow].style.color = 'yellow';
arr1[npogOfBlue].style.display = 'block';
arr1[npogOfBlue].style.color = 'rgb(22, 85, 151)'
arr1[npogOfRed].style.display = 'block';
arr1[npogOfRed].style.color = 'rgb(192, 84, 17)'
arr1[npogOfGreen].style.display = 'block';
arr1[npogOfGreen].style.color = 'green'

dice.addEventListener('click', () => {

    dice.classList.toggle('visible');
    let res = Math.floor(Math.random() * 6) + 1;
    // console.log(res);

    
    pogOfYellow = npogOfYellow;
    pogOfRed = npogOfRed;
    pogOfBlue = npogOfBlue;
    pogOfGreen = npogOfGreen;


    switch(res) {
        case 1:
            dice.style.backgroundImage = 'url(no.1.jpg)';
            if(paari == 1){
                npogOfYellow = pogOfYellow+res;
            }else if(paari == 2){
                npogOfBlue = pogOfBlue+res;
            }else if(paari == 3){
                npogOfRed = pogOfRed+res;
            } else{
                npogOfGreen = pogOfGreen+res;
            }
            break;
        case 2:
            dice.style.backgroundImage = 'url(no.2.jpg)';
            if(paari == 1){
                npogOfYellow = pogOfYellow+res;
            }else if(paari == 2){
                npogOfBlue = pogOfBlue+res;
            }else if(paari == 3){
                npogOfRed = pogOfRed+res;
            } else{
                npogOfGreen = pogOfGreen+res;
            }
            break;
        case 3:
            dice.style.backgroundImage = 'url(no.3.jpg)';
            if(paari == 1){
                npogOfYellow = pogOfYellow+res;
            }else if(paari == 2){
                npogOfBlue = pogOfBlue+res;
            }else if(paari == 3){
                npogOfRed = pogOfRed+res;
            } else{
                npogOfGreen = pogOfGreen+res;
            }

            break;
        case 4:
            dice.style.backgroundImage = 'url(no.4.jpg)';
            if(paari == 1){
                npogOfYellow = pogOfYellow+res;
            }else if(paari == 2){
                npogOfBlue = pogOfBlue+res;
            }else if(paari == 3){
                npogOfRed = pogOfRed+res;
            } else{
                npogOfGreen = pogOfGreen+res;
            }

            break;
        case 5:
            dice.style.backgroundImage = 'url(no.5.jpg)';
            if(paari == 1){
                npogOfYellow = pogOfYellow+res;
            }else if(paari == 2){
                npogOfBlue = pogOfBlue+res;
            }else if(paari == 3){
                npogOfRed = pogOfRed+res;
            } else{
                npogOfGreen = pogOfGreen+res;
            }

            break;
        case 6:
            dice.style.backgroundImage = 'url(no.6.jpg)';
            if(paari == 1){
                npogOfYellow = pogOfYellow+res;
            }else if(paari == 2){
                npogOfBlue = pogOfBlue+res;
            }else if(paari == 3){
                npogOfRed = pogOfRed+res;
            } else{
                npogOfGreen = pogOfGreen+res;
            }
            break;
        };
            
        if(paari == 1){
            if(forY == 0){
            if(npogOfYellow >= 57){
                console.log(`Yellow dice is ${place} place`);
                place = place+1; 
                forY = 1;  
                arr1[57].style.display = 'block';
                arr1[57].style.color = 'yellow';
            } else {
            if(npogOfYellow == 51){
                npogOfYellow = 52;
            }else if(npogOfYellow == 52){
                npogOfYellow = 53;
            }else if(npogOfYellow == 53){
                npogOfYellow = 54;
            }else if(npogOfYellow == 54){
                npogOfYellow = 55;
            }else if(npogOfYellow == 55){
                npogOfYellow = 56;
            }else if(npogOfYellow >= 56){
                npogOfYellow = 57;
            };
        // arr[pogOfYellow].addEventListener('click', () => {
            yCount = yCount+res;
            // console.log('yyy');
            // console.log(pogOfYellow);
            // console.log(yCount);
            // console.log(npogOfYellow);
            
            arr1[pogOfYellow].style.display = 'none';
            arr1[npogOfYellow].style.display = 'block';
            arr1[npogOfYellow].style.color = 'yellow';
            if(npogOfYellow == npogOfRed){
                npogOfRed = 26;
                arr1[npogOfRed].style.display = 'block';
                arr1[npogOfRed].style.color = 'rgb(192, 84, 17)'
                rCount = 0;
                paari = 0;
            }else if(npogOfYellow == npogOfBlue){
                npogOfBlue = 13;
                arr1[npogOfBlue].style.display = 'block';
                arr1[npogOfBlue].style.color = 'rgb(22, 85, 151)';
                bCount = 0;
                paari = 0;
            }else if(npogOfYellow == npogOfGreen){
                npogOfGreen = 39;
                arr1[npogOfGreen].style.display = 'block';
                arr1[npogOfGreen].style.color = 'green'
                gCount = 0;
                paari = 0;
            }}}}
        // });
            else if(paari == 2){
                if(forB == 0){
                if(npogOfBlue >= 69){
                    console.log(`Blue dice is ${place} place`);
                    place = place+1;
                    forB = 1;
                    arr1[69].style.display = 'block';
                     arr1[69].style.color = 'rgb(22, 85, 151)';
                } else {
            if(npogOfBlue == 51){
                npogOfBlue = 0;
            }else if(npogOfBlue == 53){
                npogOfBlue = 1;
            }else if(npogOfBlue == 54){
                npogOfBlue = 2;
            }else if(npogOfBlue == 55){
                npogOfBlue = 3;
            }else if(npogOfBlue == 56){
                npogOfBlue = 4;
            }else if(npogOfBlue == 57){
                npogOfBlue = 5;
            };
            if(bCount >= 51){
                if(npogOfBlue == 12){
                npogOfBlue = 64;
                }else if(npogOfBlue == 13){
                    npogOfBlue = 65;
                }else if(npogOfBlue == 14){
                    npogOfBlue = 66;
                }else if(npogOfBlue == 15){
                    npogOfBlue = 67;
                }else if(npogOfBlue == 16){
                    npogOfBlue = 68;
                }else if(npogOfBlue >= 17){
                    npogOfBlue = 69;
                };
            };
            bCount = bCount+res;
            // console.log('bbb');
            // console.log(pogOfBlue);
            // console.log(bCount);
            // console.log(npogOfBlue);
            arr1[pogOfBlue].style.display = 'none';
            arr1[npogOfBlue].style.display = 'block';
            arr1[npogOfBlue].style.color = 'rgb(22, 85, 151)';
            if(npogOfBlue == npogOfRed){
                npogOfRed = 26;
                arr1[npogOfRed].style.display = 'block';
                arr1[npogOfRed].style.color = 'rgb(192, 84, 17)'
                rCount = 0;
                paari = 1;
            }else if(npogOfBlue == npogOfYellow){
                npogOfYellow = 0;
                arr1[npogOfYellow].style.display = 'block';
                arr1[npogOfYellow].style.color = 'yellow';
                yCount = 0;
                paari = 1;
            }else if(npogOfBlue == npogOfGreen){
                npogOfGreen = 39;
                arr1[npogOfGreen].style.display = 'block';
                arr1[npogOfGreen].style.color = 'green'
                gCount = 0;
                paari = 1;
            }}}

           

        }else if(paari == 3){
            if(forR == 0){
                if(npogOfRed >= 75){
                    console.log(`Red dice is ${place} place`);
                    place = place+1;   
                    forR = 1;
                    arr1[75].style.display = 'block';
                    arr1[75].style.color = 'rgb(192, 84, 17)'
                }else{    
            if(npogOfRed == 52){
                npogOfRed = 0;
            }else if(npogOfRed == 53){
                npogOfRed = 1;
            }else if(npogOfRed == 54){
                npogOfRed = 2;
            }else if(npogOfRed == 55){
                npogOfRed = 3;
            }else if(npogOfRed == 56){
                npogOfRed = 4;
            }else if(npogOfRed == 57){
                npogOfRed = 5;
            };
            if(rCount >= 51){    
                if(npogOfRed == 25){
                    npogOfRed = 71;
                }else if(npogOfRed == 26){
                    npogOfRed = 72;
                }else if(npogOfRed == 27){
                    npogOfRed = 73;
                }else if(npogOfRed == 28){
                    npogOfRed = 74;
                }else if(npogOfRed == 29){
                    npogOfRed = 74;
                }else if(npogOfRed >= 30){
                    npogOfRed = 75;
                };
            };
            rCount = rCount+res;
            // console.log('rrr');
            // console.log(pogOfRed);
            // console.log(rCount);
            // console.log(npogOfRed);
            
            arr1[pogOfRed].style.display = 'none';
            arr1[npogOfRed].style.display = 'block';
            arr1[npogOfRed].style.color = 'rgb(192, 84, 17)'
            if(npogOfRed == npogOfYellow){
                npogOfYellow = 0;
                arr1[npogOfYellow].style.display = 'block';
                arr1[npogOfYellow].style.color = 'yellow';
                yCount = 0;
                paari = 2;
            }else if(npogOfRed == npogOfBlue){
                npogOfBlue = 13;
                arr1[npogOfBlue].style.display = 'block';
                arr1[npogOfBlue].style.color = 'rgb(22, 85, 151)';
                bCount = 0;
                paari = 2;
            }else if(npogOfRed == npogOfGreen){
                npogOfGreen = 39;
                arr1[npogOfGreen].style.display = 'block';
                arr1[npogOfGreen].style.color = 'green'
                gCount = 0;
                paari = 2;
            }}}

        }else if(paari == 4){
            if(forG == 0){
                if(npogOfGreen >= 63){
                    console.log(`Green dice is ${place} place`);
                    place = place+1; 
                    forG = 1;  
                    arr1[63].style.display = 'block';
                    arr1[63].style.color = 'green';
                }else{
            if(npogOfGreen == 52){
                npogOfGreen = 0;
            }else if(npogOfGreen == 53){
                npogOfGreen = 1;
            }else if(npogOfGreen == 54){
                npogOfGreen = 2;
            }else if(npogOfGreen == 55){
                npogOfGreen = 3;
            }else if(npogOfGreen == 56){
                npogOfGreen = 4;
            }else if(npogOfGreen == 57){
                npogOfGreen = 5;
            };
            if(gCount >= 51){
                if(npogOfGreen == 38){
                npogOfGreen = 58;
                }else if(npogOfGreen == 39){
                    npogOfGreen = 59;
                }else if(npogOfGreen == 40){
                    npogOfGreen = 60;
                }else if(npogOfGreen == 41){
                    npogOfGreen = 61;
                }else if(npogOfGreen == 42){
                    npogOfGreen = 62;
                }else if(npogOfGreen >= 43){
                    npogOfGreen = 63;
                };
            };
            gCount = gCount+res;    
            // console.log('ggg');
            // console.log(pogOfGreen);
            // console.log(gCount);
            // console.log(npogOfGreen);
            arr1[pogOfGreen].style.display = 'none';
            console.log(pogOfGreen);
            arr1[npogOfGreen].style.display = 'block';
            console.log(npogOfGreen);
            
            arr1[npogOfGreen].style.color = 'green'
            paari = 0;
            if(npogOfGreen == npogOfYellow){
                npogOfYellow = 0;
                arr1[npogOfYellow].style.display = 'block';
                arr1[npogOfYellow].style.color = 'yellow';
                yCount = 0
                paari = 3;
            }else if(npogOfGreen == npogOfRed){
                npogOfRed = 26;
                arr1[npogOfRed].style.display = 'block';
                arr1[npogOfRed].style.color = 'rgb(192, 84, 17)'
                rCount = 0;
                paari = 3;
            }else if(npogOfGreen == npogOfBlue){
                npogOfBlue = 13;
                arr1[npogOfBlue].style.display = 'block';
                arr1[npogOfBlue].style.color = 'rgb(22, 85, 151)';
                bCount = 0;
                paari = 3;
            }
            
        }}};

        
        paari++;
});    


