

let but1 = window.document.getElementById('but1') // Variavel para acessar e ter controle sobre Primeiro Campo
let but2 = window.document.getElementById('but2') //Variavel para acessar e ter controle sobre Segundo campo
let but3 = window.document.getElementById('but3') //Variavel para acessar e ter controle sobre terceiro campo
let but4 = window.document.getElementById('but4') //Variavel para acessar e ter controle sobre quarto Campo
let but5 = window.document.getElementById('but5') //Variavel para acessar e ter controle sobre Quinto Campo
let but6 = window.document.getElementById('but6') //Variavel para acessar e ter controle sobre Sexto Campo
let but7 = window.document.getElementById('but7') //Variavel para acessar e ter controle sobre Setimo Campo
let but8 = window.document.getElementById('but8') //Variavel para acessar e ter controle sobre Oitavo Campo
let but9 = window.document.getElementById('but9') //Variavel para acessar e ter controle sobre Nono Campo
let jogador = window.document.getElementById('jogador') //Variavel para acessar e ter controle Décimo  Campo
let jogador1 = window.document.getElementById('jogador1') //Variavel para acessar e ter controle sobre Décimo Primeiro Campo 
let a = 0
let b = 0
let c = 0
let d = 0
let e = 0                      
let f = 0                         
let g = 0                          
let h = 0
let i = 0
let a1= 0
let a2= 0
let a3= 0           
let a4= 0                       
var a5= 0                           
var a6= 0                                
var a7= 0                                
var a8= 0                                 
var a9= 0                                  
var cont = 0                                  
var cont1 = 0
let click1 = 0
     
function reload(){
  window.location.reload(true)
}
function resultX(){

    var res = window.document.getElementById('res')
    var nome1=jogador.value
      cont1 = 1          
      alert('Vencedor!!!')
      res.innerHTML+=`Vencedor: ${nome1}`
}

function resultO(){
    
    var nome2=jogador1.value
              alert('Vencedor!!!')
              res.innerHTML+=`Vencedor: ${nome2}`
              cont1 = 1
}

 function vamoscomecar(){
  var x = jogador.value
  var y = jogador1.value
  if(x == 0 || y == 0){
      alert(' Vamos adicionar os jogadores !!!')
  }else{
    var vc = window.document.getElementById('vmos')
    click1 = 1
    vc.innerHTML= `Vamos Começar: ${x} X ${y}`
  }
  
  
 }
  
function Empati(){
    
    var res = window.document.getElementById('res')
    var nome1=jogador.value
    var nome2 = jogador1.value

  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1 && g==1 && h==1 && i==1){
    alert('Deu Impate')
    res.innerHTML+=(`Deu Impate entre ${nome1} X ${nome2}`)
  }
}
function gerar1(){
  var x = jogador
  var y = jogador1
  var z = click1
 
       if(x.length == 0 || y.length == 0 || z == 0){ 
              alert('[ERRO] Add Os jogadores !!!')
        }else{
             
               if(a == 0){
                        a++
                   if(cont%2 == 0){
                           but1.value = " X "
                           cont ++
                                 a1 = 1
                     }else{
                         but1.value = " O "
                          cont++
                          a1 = 2
                                 }

                          if(a1==1 && a2==1 && a3==1){
                            but4.value=but5.value=but6.value=but7.value=but8.value=but9.value='  '
                            resultX()
                               
                         }else if (a1==1 && a5==1 && a9==1){
                             but4.value=but2.value=but6.value=but7.value=but8.value=but3.value='  '
                             resultX()
                        }else if( a1==1 && a4==1 && a7==1 ){
                                     but2.value=but3.value=but5.value=but6.value=but8.value=but9='  '
                                    resultX()
                        }else if(a1==2 && a2==2 && a3==2){
                                    but4.value=but5.value=but6.value=but7.value=but8.value=but9.value='  '
                                    resultO()
                        }else if (a1==2 && a5==2 && a9==2){
                                        but4.value=but2.value=but6.value=but7.value=but8.value=but3.value='  '
                                        resultO()
                        }else if(a1==2 && a4==2 && a7==2){
                                            but2.value=but3.value=but5.value=but6.value=but8.value=but9='  '
                                           resultO()
                        } else{
                          Empati()
                        }
                
               }else{
            alert('Esse Campo ja Está Sendo Usando tente Outro!!!')
              }

    }
     
}

function gerar2(){
  var x = jogador.value
  var y = jogador1.value
  var z = click1
 
       if(x.length == 0 || y.length == 0 || z == 0){  
              alert('[ERRO] Add Os jogadores !!!')
        }else{     
                 if(b == 0){
                        b++
                  if(cont%2 == 0){
                           but2.value = " X "
                           cont ++
                                 a2= 1
        
                     }else{
                         but2.value = " O "
                          cont++
                          a2 = 2
                     }

                     if(a2==1 && a1==1 && a3==1){
                        but4.value=but5.value=but6.value=but7.value=but8.value=but9.value='  '    
                         resultX()
                         } else if(a2==1 && a5==1 && a8==1){
                              but1.value=but3.value=but4.value=but6.value=but7.value=but9='  '
                                resultX()
                            } else if(a2==2 && a1==2 && a3==2){
                               but4.value=but5.value=but6.value=but7.value=but8.value=but9.value='  '
                                    resultO()
                                 }else if(a2==2 && a5==2 && a8==2){
                                  but1.value=but3.value=but4.value=but6.value=but7.value=but9='  '
                                         resultO()
                     }else{
                      Empati()
                     }
                
               }else{
            alert('Esse Campo ja Está Sendo Usando tente Outro!!!')
              }
        }
}

function gerar3(){
  var x = jogador.value
  var y = jogador1.value
  var z = click1
 
       if(x.length == 0 || y.length == 0 || z == 0){ 
              alert('[ERRO] Add Os jogadores !!!')
        }else{
                    
            
         if(c == 0){
                c++
          if(cont%2 == 0){
                   but3.value = " X "
                   cont ++
                         a3 = 1

             }else{
                 but3.value = " O "
                  cont++
                  a3 = 2       
        }
          if(a3==1 && a2==1 && a1==1){
            but4.value=but5.value=but6.value=but7.value=but8.value=but9.value='  '
              resultX()
                }else if(a3==1 && a6==1 && a9==1){
                  but1.value=but2.value=but4.value=but5.value=but7.value=but8.value='  '
                  resultX()
                    }else if(a3==1 && a5==1 && a7==1){
                      but1.value=but2.value=but4.value=but6.value=but8.value=but9.value='  '
                       resultX()
                     } else if(a3==2 && a2==2 && a1==2){
                         but4.value=but5.value=but6.value=but7.value=but8.value=but9.value='  '
                           resultO()
                        }else if(a3==2 && a6==2 && a9==2){
                            but1.value=but2.value=but4.value=but5.value=but7.value=but8.value='  '
                              resultO()
                          }else if(a3==2 && a5==2 && a7==2){
                                but1.value=but2.value=but4.value=but6.value=but8.value=but9.value='  '
                                  resultO()
                                        }else{
                                          Empati()
                                        }
                                }else{
                              alert('Esse Campo ja Está Sendo Usando tente Outro!!!')
                               }
               }
}

function gerar4(){
  var x = jogador.value
  var y = jogador1.value
  var z = click1
 
       if(x.length == 0 || y.length == 0 || z == 0){ 
              alert('[ERRO] Add Os jogadores !!!')
        }else{
            
         if(d == 0){
                d++
          if(cont%2 == 0){
                   but4.value = " X "
                   cont ++
                         a4 = 1

             }else{
                 but4.value = " O "
                  cont++
                  a4 = 2 
                    }
          if(a4==1 && a1==1 && a7==1){
           but2.value=but3.value=but5.value=but6.value=but8.value=but9.value='  '
              resultX()
             }else if(a4==1 && a5==1 && a6==1){
                 but1.value=but2.value=but3.value=but7.value=but8.value=but9.value='  '
                   resultX()
                   }else if(a4==2 && a1==2 && a7==2){
                      but2.value=but3.value=but5.value=but6.value=but8.value=but9.value='  '
                     resultO()
                       }else if(a4==2 && a5==2 && a6==2){
                          but1.value=but2.value=but3.value=but7.value=but8.value=but9.value='  '
                        resultO()
                                    } else{
                                      Empati()
                                    } 
                            }else{
                           alert('Esse Campo ja Está Sendo Usando tente Outro!!!')
                                   }
                                  }
}

function gerar5(){
  var x = jogador.value
  var y = jogador1.value
  var z = click1
 
       if(x.length == 0 || y.length == 0 || z == 0){ 
              alert('[ERRO] Add Os jogadores !!!')
        }else{
                    
         if(e == 0){
                e++
          if(cont%2 == 0){
                   but5.value = " X "
                   cont ++
                         a5 = 1

             }else{
                 but5.value = " O "
                  cont++
                  a5 = 2
             }
            if(a2==1 && a5==1 && a8==1){
               but1.value=but9.value=but7.value=but4.value=but6.value=but3.value='    '
                 resultX()

            }else if(a5==1 && a6==1 && a4==1){
                    but1.value=but2.value=but3.value=but7.value=but8.value=but9.value='    '
                      resultX()
            }else if(a1==1 && a5==1 && a9==1){
                            but1.value=but2.value=but7.value=but4.value=but5.value=but8.value='    '
                             resultX()
             }else if(a3==1 && a5==1 && a7==1){
                                but1.value=but2.value=but9.value=but4.value=but6.value=but8.value='    '
                                 resultX()
             } else if(a2==2 && a5==2 && a8==2){
                                     but1.value=but9.value=but7.value=but4.value=but6.value=but3.value='   '
                                       resultO()
             }else if(a5==2 && a6==2 && a4==2){
                                           but1.value=but2.value=but3.value=but7.value=but8.value=but9.value='   '
                                            resultO()
             }else if(a1==2 && a5==2 && a9==2){
                                                but1.value=but2.value=but7.value=but4.value=but5.value=but8.value='   '
                                                 resultO()
             }else if(a3==2 && a5==2 && a7==2){
                                                    but1.value=but2.value=but9.value=but4.value=but6.value=but8.value='   '
                                                     resultO()
                                                     }else{
                                                      Empati()
                                                     }

                                                 }else{
                                          alert('Esse Campo ja Está Sendo Usando tente Outro!!!')
                                                      }
                                                    }
}

function gerar6(){
  var x = jogador.value
  var y = jogador1.value
  var z = click1
 
       if(x.length == 0 || y.length == 0 || z == 0){ 
              alert('[ERRO] Add Os jogadores !!!')
        }else{
                    
            
         if(f == 0){
                f++
          if(cont%2 == 0){
                   but6.value = " X "
                   cont ++
                         a6 = 1

             }else{
                 but6.value = " O "
                  cont++
                  a6 = 2
                 
                       }
                       if(a3==1 && a6==1 && a9==1){
                        but1.value=but2.value=but4.value=but5.value=but7.value=but8.value='  '
                         resultX()
                           }else if(a4==1 && a5==1 && a6==1){
                            but1.value=but2.value=but3.value=but7.value=but8.value=but9.value='  '
                            resultX()
                             }else if(a3==2 && a6==2 && a9==2){
                              but1.value=but2.value=but4.value=but5.value=but7.value=but8.value='  '
                                resultO()
                                }else if(a4==2 && a5==2 && a6==2){
                                  but1.value=but2.value=but3.value=but7.value=but8.value=but9.value='  '
                                    resultO()
                                }else{
                                  Empati()
                                }
       }else{
    alert('Esse Campo ja Está Sendo Usando tente Outro!!!')
      }
    }
}

function gerar7(){
  var x = jogador.value
  var y = jogador1.value
  var z = click1
 
       if(x.length == 0 || y.length == 0 || z == 0){ 
              alert('[ERRO] Add Os jogadores !!!')
        }else{
                    
               
                    
            
         if(g == 0){
                g++
          if(cont%2 == 0){
                   but7.value = " X "
                   cont ++
                         a7 = 1

             }else{
                 but7.value = " O "
                  cont++
                  a7 = 2
                 
                       }

         if(a7==1 && a8==1 && a9==1){
          but1.value=but2.value=but3.value=but4.value=but5.value=but6.value='  '
             resultX()
              }else if(a7==1 && a4==1 && a1==1){
                but2.value=but3.value=but5.value=but6.value=but8.value=but9.value='  '
                resultX()
                 }else if(a7==1 && a5==1 && a3==1){
                  but1.value=but2.value=but6.value=but4.value=but8.value=but9.value='  '
                    resultX()
                    }else if(a7==2 && a8==2 && a9==2){
                      but1.value=but2.value=but3.value=but4.value=but5.value=but6.value='  '
                        resultO()
                        }else if(a7==2 && a4==2 && a1==2){
                          but2.value=but3.value=but5.value=but6.value=but8.value=but9.value='  '
                           resultO()
                             }else if(a7==2 && a5==2 && a3==2){
                              but1.value=but2.value=but6.value=but4.value=but8.value=but9.value='  '
                               resultO()
                          }   else{
                            Empati()
                          }
        
       }else{
    alert('Esse Campo ja Está Sendo Usando tente Outro!!!')
      }
    }
}

function gerar8(){
  var x = jogador.value
  var y = jogador1.value
  var z = click1
 
       if(x.length == 0 || y.length == 0 || z == 0){ 
              alert('[ERRO] Add Os jogadores !!!')
        }else{
                    
             
                    
            
         if(h == 0){
                h++
          if(cont%2 == 0){
                   but8.value = " X "
                   cont ++
                         a8 = 1

             }else{
                 but8.value = " O "
                  cont++
                  a8 = 2
                     }

        if(a8==1 && a7==1 && a9==1){
           but1.value=but2.value=but3.value=but4.value=but5.value=but6.value='  '
            resultX()
            }else if(a8==1 && a5==1 && a2==1){
              but1.value=but6.value=but3.value=but4.value=but7.value=but9.value='  '
                resultX()
                }else if(a8==2 && a7==2 && a9==2){
                 but1.value=but2.value=but3.value=but4.value=but5.value=but6.value='  '
                   resultO()
                   } else if(a8==2 && a5==2 && a2==2){
                     but1.value=but6.value=but3.value=but4.value=but7.value=but9.value='  '
                      resultO()
                }else{
                  Empati()
                }
       }else{
    alert('Esse Campo ja Está Sendo Usando tente Outro!!!')
      }
    }
}

function gerar9(){
  var x = jogador.value
  var y = jogador1.value
  var z = click1
 
       if(x.length == 0 || y.length == 0 || z == 0){ 
              alert('[ERRO] Add Os jogadores !!!')
}else{
            
            
         if(i == 0){
                i++
          if(cont%2 == 0){
                   but9.value = " X "
                   cont ++
                         a9 = 1

             }else{
                 but9.value = " O "
                  cont++
                  a9 = 2
                 }
                  if(a9==1 && a8==1 && a7==1 ){
                     but1.value=but2.value=but3.value=but4.value=but5.value=but6.value='   '
                       resultX()
                         }else if(a9==1 && a5==1 && a1==1){
                           but8.value=but2.value=but3.value=but4.value=but7.value=but6.value='   '
                             resultX()
                              }else if(a9==1 && a3==1 && a6==1 ){
                                but1.value=but2.value=but7.value=but4.value=but5.value=but8.value='   '
                                 resultX()
                                   }else if(a9==2 && a8==2 && a7==2 ){
                                     but1.value=but2.value=but3.value=but4.value=but5.value=but6.value='   '
                                       resultO()
                                         }else if(a9==2 && a5==2 && a1==2){ 
                                           but8.value=but2.value=but3.value=but4.value=but7.value=but6.value='   '
                                             resultO()
                                              }else if(a9==2 && a3==2 && a6==2 ){
                                                 but1.value=but2.value=but7.value=but4.value=but5.value=but8.value='   '
                                                   resultO()
                              }else{
                                Empati()
                              }


       }else{
    alert('Esse Campo ja Está Sendo Usando tente Outro!!!')
      
    }
}
}