programa {
  inclua biblioteca Util --> U
  inteiro tempo = 55
  inteiro ajuda = 2
  inteiro i = 0
  inteiro dinheiro = 0
  cadeia resposta
  cadeia perguntas[11][11] = {{" Qual é a capital do Brasil? \n", "B", " A) São Paulo\n B) Brasília\n C) Rio de Janeiro\n D) Belo Horizonte\n", "\n B) Brasília\n C) Rio de Janeiro \n", "b"}, 
                              {" Quem pintou a Mona Lisa?\n", "C", " A) Vincent van Gogh \n B) Pablo Picasso \n C) Leonardo da Vinci \n D) Michelangelo", "\n B) Pablo Picasso \n C) Leonardo da Vinci \n", "c"},
                              {" Qual é o maior planeta do Sistema Solar?\n", "B", " A) Terra \n B) Júpiter\n C) Saturno\n D) Marte", "\n A) Terra \n B) Júpiter\n", "b"},
                              {" Em que país se localiza a Torre Eiffel?\n","D", " A) Itália \n B) Inglaterra \n C) Alemanha \n D) França", "\n C) Alemanha \n D) França\n", "d"},
                              {" Quem foi o primeiro homem a pisar na Lua?\n","A", " A) Neil Armstrong \n B) Yuri Gagarin \n C) Buzz Aldrin \n D) Alan Shepard", "\n A) Neil Armstrong \n B) Yuri Gagarin\n", "a"},
                              {" Qual é o elemento químico representado pelo símbolo 'O'?\n","B", " A) Ouro \n B) Oxigênio \n C) Ozônio \n D) Ósmio", "\n A) Ouro \n B) Oxigênio \n", "b"},
                              {" Qual é o rio mais extenso do mundo?\n","A", " A) Amazonas \n B) Nilo \n C) Mississipi \n D) Yangtzé ", "\n A) Amazonas \n B) Nilo \n", "a"},
                              {" Quantos lados tem um hexágono?\n", "C", " A) 4 \n B) 5 \n C) 6 \n D) 8", "B) 5 \n C) 6 \n", "c"}, 
                              {" Qual é o idioma mais falado no mundo?\n","D", " A) Espanhol \n B) Inglês \n C) Árabe \n D) Mandarim ", "\n C) Árabe \n D) Mandarim \n ", "d"}, 
                              {" Quem escreveu 'Dom Quixote'?\n","B", " A) William Shakespeare \n B) Miguel de Cervantes \n C) Luís de Camões \n D) José de Alencar", "\n B) Miguel de Cervantes \n C) Luís de Camões \n", "b"},
                              {" Qual é o menor número natural positivo que possui exatamente 12 divisores distintos?\n","C", " A) 36 \n B) 48 \n C) 60 \n D) 72 \n E) 84 \n F) 90 \n G) 96 \n H) 100 \n I) 108 \n J) 120", "\n E) 84 \n F) 90 \n", "c"}}
  inteiro valores[10] = {50, 100, 150, 200, 250, 300, 350, 400, 450, 500}

  funcao inicio() {
    comecar()
    questoes()
  }

  funcao comecar(){
    
  escreva("                                                                                -^!**uueetzCsJEXU6XXPV;-\n")U.aguarde(tempo)                      
  escreva("                                                                        _TxH%gg@@@@@@@@@@@@@@@@@@@&@&ggg&QgU!\n")U.aguarde(tempo)                      
  escreva("                                                                    -*G@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&@@@@@&8i-\n")U.aguarde(tempo)                      
  escreva("                                                                  cU@@@@@&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@QKeJ-\n")U.aguarde(tempo)                   
  escreva("                                                              _tb@@@@@Qg&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&Sr\n")U.aguarde(tempo)                  
  escreva("                                                           _LA@@@@@@@gQ@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@gxc_\n")U.aguarde(tempo)                  
  escreva("                                                         *%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@gX;\n")U.aguarde(tempo)                
  escreva("                                                       v@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Qu\n")U.aguarde(tempo)               
  escreva("                                                     -%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&8'\n")U.aguarde(tempo)               
  escreva("                                                    ;M@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@QggN8888%ggQ@@@@@@@@@@@@@@@P*^\n")U.aguarde(tempo)                
  escreva("                                                   U@@@@@@@@@@@@@@@@@@@@@0ggg$g$BggggggggggggQgMMggQQ0%888GbPPSPUHdG8$g&@@@@@@@@@@@g$gG \n")U.aguarde(tempo)              
  escreva("                                                  r@@@@@@@@@@@@@@@@@g%8%N8DGbXHGAXXXUUXbX6GAAAH6bbGXUUUPSEy3FJiTvJx3jSbD%g@@@@@@@@@@@@P_\n")U.aguarde(tempo)               
  escreva("                                                  @@@@@@@@@@@@@@@QW8#bUSE3ufu1uf33CCuxxxuuff1uxtuu1txFsxtJJJTr**rrrcLcveXO0Q@@@@@@@@@@@@A\n")U.aguarde(tempo)              
  escreva("                                                 r@@@@@@@@@@@@@&NGUS3fFJJviiivJF1JiviiTccTTTTTiivJsvJlvTcLrrr*;;;!*!;;*LJSG%@@@@@@@@@@@@@!\n")U.aguarde(tempo)              
  escreva("                                                T@@@@@@@@@@@@@8XPECvvJicTTTTTTTcccLLLLrrrrrrrrLcTcccLrrrrr****!;;;;;;;;*riuGW&@@@@@@@@@@@&\n")U.aguarde(tempo)             
  escreva("                                                @@@@@@@@@@@@g8PyjtJiccLLccLrLrrr*****rrrrrr+*rrrrrr***************!!;;!!*rv28gg&@@@@@@@@@g^\n")U.aguarde(tempo)             
  escreva("                                               _@@@@@@@@@@@@8U23tFJTccccLrrrrrr++***rrrrrrr++****!!*;;;;!************!!!*rrJU%ggQ@&@@@@@@@@\n")U.aguarde(tempo)           
  escreva("                                               -@@@@@@@@@@&%Gye3ntsiTTTcrrrrrrrrr**rrrrrrr****!!;;;;;;;;!************!!;**ri3D%gQ@&&@@@@@@@\n")U.aguarde(tempo)          
  escreva("                                               t@@@@@@@@@@g#P2j3ftsiTTTcLrrrrrr****+rrrrrr**!!!;!!;;;;;;!************!!!**rTxSG%0Q@@@@@@@@@_\n")U.aguarde(tempo)            
  escreva("                                               G@@@@@@@@@@%GP253fxJlviiTcLrrrrr***+rLrLrrrr*!!!;!!;;;;!!!************!!!**rLtjUD8$&@@@@@@@@g\n")U.aguarde(tempo)          
  escreva("                                               8@@@@@@@@@gD4Eej3CItFzviiTTcrrrrr**rrrrLrrr**!!!!!!!*******************!!***riCUDNWg&@@@@@@@@-\n")U.aguarde(tempo)          
  escreva("                                               @@@@@@@@@g8GX2ee5333xtJiiiTcLLrrrrrrrrrrrrr****!!!***************************TJ3hR$&@@@@@@@@@'\n")U.aguarde(tempo)          
  escreva("                                               @@@@@@@@@g8GPS25333utFzJvvTcLrrrrrr+****rrr+*********************************rTF3X8g@@@@@@@@8\n")U.aguarde(tempo)          
  escreva("                                               @@@@@@@@&%D6y23uxu3utFFJiTcLrrrrrr++****rrrr*+*******************************+rTth8g@@@@@@@@8\n")U.aguarde(tempo)           
  escreva("                                               @@@@@@@@g8bP23ftFtufxFvTLccccccrrrr******rrr++*****!;;;;;!!**rrrrrTivTr*******+rTzy%@@@@@@@@@\n")U.aguarde(tempo)         
  escreva("                                               @@@@@@@@%DbPEj31ttxIt3SjuviiJviTTrr********+****+**!!!***rcvz3yUAGD#G#P5vir****+rcFGg@@@@@@@@_\n")U.aguarde(tempo)         
  escreva("                                               @@@@@@@&8GbUSEjCfSPX8888%8888RmbkCtTr*rrr+rr*****++rrrTtPb88N%%g%%8GXPVPPP3zcr***rc3%@@@@@@@@ \n")U.aguarde(tempo)         
  escreva("                                               8@@@@@@Q8XUPyySEyK8888GHD88Q@@@&@g8UEtsiTTFiLrr*rrrTitSPUGD888AEjtFiTTTJJFsiLr+***+cEg@@@@@N_ \n")U.aguarde(tempo)         
  escreva("                                                @@@@@@g#PPVyV4U#HXPe3usJvtuy4XG88%N8GP3t3JTLrrcTiTJFx2jnttvJJiiTTTztTLrrLLLcc***!**iHg@@@@8^-\n")U.aguarde(tempo)        
  escreva("                                                F@@@@@8dyEEVkPXHPy23u3ESye3uttFtJvfSXHPyjxtTccLTTJtFsiTctES3FsJFsivJFuxTrr***r*****riS%&@@gEJ*\n")U.aguarde(tempo)      
  escreva("                                               _e@@@@gRXyE2ayyXUS2xeGRP2Ejee33FFjS21t2XXhjFTTTTTTTTiiczSUX#DNgQgQMObAPESjJc*********+cjR0MUSRv\n")U.aguarde(tempo)      
  escreva("                                              'g&@@@g8qPS25ESSSXS32H8D88g@@Q&@Q%08GbGAU2PEvcrrrrLTTrTkSyPPeEX8888GSfFiLr***!!!!*!*****rz3CEPX,\n")U.aguarde(tempo)      
  escreva("                                               8gg&%8GUVyhSSESEjtJiTvxESESdKV3JTiiTTiv3EPuTrrr**rrTTcvvcrrrrTTTrrc****rLrrrr****!!!****rcJiSc\n")U.aguarde(tempo)     
  escreva("                                               ,g088GUUPkPVyyEEEefFvviiTiTL*!*!rTTistueE3FTrr***rrrTcLTTTvJJvTcrLLccrr*!!*!!!!***!******rzTT-\n")U.aguarde(tempo)      
  escreva("                                                x8D8AXUPPUX4S233xtJiTcTJJvJvviJttFFtffnCtvTrrrr*rrrrLrrr+++****!!!;;;;;;;;;;;!!*!*!*****LcLr\n")U.aguarde(tempo)    
  escreva("                                                -R88GUP4PP4ySEjntsiTcrrrr**rrrrLTcTzuff3zTTLrrr*rLrrrrrr*****!;;;;;;;;;;;;;;;;;!!!!******icr\n")U.aguarde(tempo)  
  escreva("                                                 T#GDbPPPyPS25C1tJzicrrr+*******rcvFSkSjJcrr****+rrccrr******!!;;;;~^^;;;;;;;;;;!!********Tr-\n")U.aguarde(tempo)  
  escreva("                                                 !#8MAUPPPPSe3uxFJvTLrrr******rri1hKUyS2FTr+******rLcrrrrrrr***!;;;;~;;;;;;;;;;;;!!!*****!Lr_\n")U.aguarde(tempo)  
  escreva("                                                 :888bUPVPhE33utzJiTrrrr****rcTsEUbS3fjetcr********rLr***rTJvTLr*!!;;;;;;!!!*!!!;!!!!*****zr-\n")U.aguarde(tempo)
  escreva("                                                  888b4PP4PSe53ftFiTcrrrrrrrTxEefkS2eCjE3JTLr+*********+rrrLv3S3JTr**!!!!!!*****!!!!!!*!*T*;-\n")U.aguarde(tempo)
  escreva("                                                  38%dXXXbUPyyEe3xJiTLrrccv1e3FF5XX4G888XbEftvLrrLTEXSzcvicLcTJSPjzcr********rrr*!!!!!!****^\n")U.aguarde(tempo)
  escreva("                                                  :X8DbXbbXUUXPk23xFJviivtuFiiJtjUA888%gQgDPPPyeCebXSPExvTccrrrri3eticr*****rccLr*!!!!***r*\n")U.aguarde(tempo)
  escreva("                                                   ;UR6XbXXPUXbUSejItFtxxxsJJvsxueEPXGGGRO88RODHV3FvTiTcccrrrrrrLix33FvTTLrrLcTcr*!;;!**!*!\n")U.aguarde(tempo)
  escreva("                                                    IRGKXX4PSVG6UyE3f1IufttFFsFt133j52SVyySSEEjtvTcLrrrrrrrrrrrrrrcTFe3FzJvTTiTr*!!!!****;!-\n")U.aguarde(tempo)
  escreva("                                                    3GGHXUhEfCXAXye33331txtstFttuf3fufCCfuf3CjCzvccrrrLcrcrrrr*+***+rrzjtzvcTTr+!**!!***ST;\n")U.aguarde(tempo)
  escreva("                                                    ebGGHXS2tz3A6Pej33ejC3CC3e33j5ee2efntsivTiTccLrTTTivviiTcr+rcTTiivFuxFTLLL********+^^,\n")U.aguarde(tempo)
  escreva("                                                     3D8GXPExizkPhttu3jPUXXHGD88DDGXXPEeE22jCf1xFsxtxxtu3uxxC3yXXPfvTvitscrrrr*******r*\n")U.aguarde(tempo)
  escreva("                                                      ^,;GUyCvJ32VfTTJfEEyHQ@@@Gjxttrt1rc3*;;ruT*~;T+;!Fr;L;rrj@@0TciTTic*+*r********r_\n")U.aguarde(tempo)
  escreva("                                                         +AUEtzt3jjJccTzCjjS8&@8Jv**,^;__^_'-';_'--:_-_^__^_^!u8ErrrrcvTr**********+r!\n")U.aguarde(tempo)
  escreva("                                                          ;GX2Ctu33tvccizEe2eEXb%@@guPGJvI;^,^i;^^;fTcxgSyB#8y1FrrrrrTTrrrr*******rrL_\n")U.aguarde(tempo)
  escreva("                                                           ^HXS33j33FicTJx2jyUU6UPXG#D8R8g@@@@@@@@@@@g@ggBDzlvJLrrrrrcTccrrrrrrrrrccr,\n")U.aguarde(tempo)
  escreva("                                                            -XGPSE2223FviFxe2EXGGKPPySyPV2j33TcTJviFx3ESCtJJvTcr*rrrrcTTTTccccccTTTL+i@#\n")U.aguarde(tempo)
  escreva("                                                             -PGXPkSSSyetJt12SSXRGHbUS2Eee33xxFFJilTLcTvJFFJicrrrrrrrcTiTTTTTTivziT*!-@@&3\n")U.aguarde(tempo)
  escreva("                                                               f#AXPPPyPSxFt32SSX#GXPSEe3uCuttxxFsJlJJFttxFvcrrrr+rrrrcTTTiivJzFJirr,_e@@gE\n")U.aguarde(tempo)
  escreva("                                                                *8DbUP4XXSftf3eSyPXG#GUVe333j333uuu11uCfxvLrrrrrr+++rLccTTvvFFzzirc^__^@&gg4\n")U.aguarde(tempo)
  escreva("                                                                 r8DHUPPXXSfun332eSSPUUUPPSEEe5ee333xFvicrrrrrr**+*rLcTTTTJssFsTir___:*@ggggP\n")U.aguarde(tempo)  
  escreva("                                                                -P888GbXU6bP3jC3ffC3e23uxtsJiTcrrrrrrLrrr++++******ciTcTTivFtFJL,___:;8gggQQg6\n")U.aguarde(tempo)
  escreva("                                                               _Q@@888DRGAAGy53utFtttuutFlTLccr+r***************++riTTiivFxnur^____,~G&gQQ&&QgR-\n")U.aguarde(tempo)     
  escreva("                                                              ^@@@@888888RGGGyejxvJsJFxFFJiTcLrr***rrr***!!!;****LviTTvsuuJr^____,^*G@gg&&&&&Qgg;\n")U.aguarde(tempo)
  escreva("                                                             r@@@@@Eu88888D##mPS5fsFzJx1tJvviTTccrrrrr*****rrrrrTFviztu3z;,:__:,^;T8@&gg&&@&&QgggS\n")U.aguarde(tempo)
  escreva("                                                            r@@@@@@3JuD88888D##XVe3utttttJlvviTiTTcrrrLcccTTccTztvJtu3t*,:___:^;*FN@&ggQ&&&&Qggggg8;\n")U.aguarde(tempo)
  escreva("                                                         ,r8@@@@@@@SsiFD888888D##b4PyaEEefuxtFJFFJiivzJtxCtFxC3ut1C3s*^,____,^!cj0@@&Q&&&&&&ggggM%%ND*\n")U.aguarde(tempo)
  escreva("                                                   -^!rE8g@@@@@@@@@8tTcvb%888888888#GHbHbXPVSEee3j3eEaEySEE2ejff33z*^,:_____^;*i%@@&&QQ&&&QQggggMB%888#C*^_\n")U.aguarde(tempo)   
  escreva("                                              _*tX8%MMgg&@@@@@@@@@@8jicrce8088888888888DDO##GGbXbUyyhPVVkyE2ej3ui*;^,::::::,^;*G@@@&QggggQggggg000%%%%88%%%8#Pxv*^_\n")U.aguarde(tempo)   
  escreva("                                         -!F8g0%%ggggQ&@@@@@@@@@@@gG1TLrrcvP8gB%8%888888888DOORGAbXUUySS2e53uvr!;^^,,^^^^^^;;*P@@@&&QgggggggggM000Mgg$%%%%%%%%%%%W$%85T,\n")U.aguarde(tempo) 
  escreva("                                     -*tDgggg%8gQ&&&@@@@@@@@@@@@@gGEcLrrrLcT3y8ggggg%%888888DD#GHX4hySSyS3FT*;;^^,^^^^^^^^;!rt@@@@@Qgggggggggggggggggg0M$00%%%%%%%%%%%%%%XT^\n")U.aguarde(tempo)
  escreva("                               _^rFPNggggg0%8M&&&@@@@@@@@@@@@@@@@X5trr***rTcT3PGG80gQQQgg%%8N%N88#6kE3FTr*!;^^,,,,,,:::^^^;!c0@@@@&&Qggggggggggggggggggggggg%%%%%%%%%B%%WW%%%N4ur^'\n")U.aguarde(tempo)
  escreva("                         -^cCX88N%B$gggg0%%%g&@@@@@@@@@@@@@@@@@@b3tT**;!!*1f32G8UgU48XG8888888%GzL*c**;;;^^,:::,:_____,^^^;*N@@@@@&&&QgggggggggggQggg&gggggggMMB$%B%%00B0$%WB%%%%NN8bfv*^'\n")U.aguarde(tempo)
  escreva("                    -^Te8%%%%%%$$ggMgM$%%%gg&@@@@@@@@@@@@@@@@@@AuJi*;!;Lb@2*;frT8SxrkrLvFsuyaUUKGu;;^;^^,:____________,^^;!U@@@@@@&&&QQgggggggggggggQ&&&QQggggggggggMgMggggggMMB%%%%%%%8888Guv!_\n")U.aguarde(tempo)
  escreva("                :r28%W000MB%$00gggggg0g0Mgg&&@@@@@@@@@@@@@@@@@guvT*;*y&@@@8Pufv50JuKXGbXA#XutJicr&Tz^:_______________:,^~;P@@@@@@&@@&&QQggggggggggQQQ&&&&&&QgQggggggggggggggM0000BB%%%%%%%%%8N88\n")U.aguarde(tempo)
  escreva("            _*eD%%$ggggMM00$00MgMggggggggQ&&@@@@@@@@@@@@@@@@@@OFJ**Ugg$8888Mkx48G8$%%8888O#GGKh5%Pf3Vr__:____________,^^;b@&&QQQQQQ&&@&&QQQggggQQQgQQ&&&&&&&g&gggggggggggggMg00$MM00M$0$B%0B%%%%\n")U.aguarde(tempo)
  escreva("Ar      ^rh88%0ggggggggggg00ggM0$00MQgQ&&&&@@@@@@@@@@@@@@@@@@&2rFDgPES3xt18@%8888mR#GbXPPyhEnJngHiilS88r____________,^^!8@@&Q&gggggQgQ&@&&&&&&Q&&&QQ&&&&&&&&Q&&QggggggggggMM000ggggggggggggggggg\n")U.aguarde(tempo)
  escreva("&&gi,;t#8%%BMggggggggggggggggM$B$M0g@@@@@@@@@@@@@@@@@@@@@@@@@8eDg%#c*TrrLiC8gQ%88OGbXXUPyj3tIHO11%4PU8@@G;________:^^~*%@@&&&ggggggggQgQ@@&&&&&QQ&&&&&@@&&&&Q&&&gggggggggggggggggggQQggQgggggggg\n")U.aguarde(tempo)
  escreva("@@@@Q$%B$gggggggggggggggggggggM0$%Mg&@@@@@@@@@@@@@@@@@@@@@@@@%UEy3tz**r+rcsP@gB%%%88RGXPkyG886HGbAg#%gMggge^___,_:^^;*g@&&QggggggggggggQQ&@@&&QQ&QQ&&@&@&&QQQQ@&gggggQgggggggggggQQ&Q&&&&Q&&&&&Q\n")U.aguarde(tempo)
  escreva("@@@@@@QggggQggggggggggQQQQQggggMgggQ&@@@@@@@@@@@@@@@@@@@@@@@&scrrrcsr!*rrrTk@@@QQQg%8@@@@@8G8%%gMgGE13SXH6AO5^_:,^^;*g@@@&&ggggggggggQgQ&&&@@@&Q&ggg&&@@&&&&QQ&&ggggggggggggQg&Q&&&&&@@@@@&@&&@&\n")U.aguarde(tempo)
  escreva("@@@@@@@&&&&QQggggggQQQQ&&&QQggggggg&&&@@@@@@@@@@@@@@@@@@@@@@#crrr+rTT*!*Tcib@@@@@@@&g@@@@@@@Mg0HVi!;!rLrrveU6Xi^^~!*$@@@&&QgggggggggggQQ&&@@@@@&&Qg&&&@@@@@@@@@@QgggggggggQQ&Q&Q&&&@@@@@@@@@@@@@\n")U.aguarde(tempo)
  escreva("@@@@@@@@@@&&QQQggQ&Q&&&&@&&&&&QgQ&&&&&&&@@@@@@@@@@@@@@@@@@@@3r++***rrr*!rtx6@@@@@@@@@@@@@@@@@$3L;;;;;^^^^;*r;~;iF;rg@@&&QgggggggggggggggQ&&@@@@@@@@@@@@@@@@@@@@@&ggggggggQQ&&&&&&&&&&@@@@@@@@@@@\n")U.aguarde(tempo)
  escreva("@@@@@@@@@@@&&&QQQQQ&&&&@@@@&&&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@&c****!!****!*TS%@@@8gg@@@@@@@@@0%@X;;*;~^,,,^;;^^^^;*Eg@@@&&QggggggggggggQQQ&&&@@@@@@@@@@@@@@@@@@@@@&QgggggQ&&&&&&&&&&&&&@@@@@@@@@@@\n")U.aguarde(tempo)
  escreva("@@@@@@@@@@@@&&&&&&&&&@@@@@@@@&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8r***!!!!!!!!*rd@MbPbG%@@@@@@@@@@gg@%r;^^^^^;;^^^^;;*Tg@@&&QQggQggQggg\n")U.aguarde(tempo)

  U.aguarde(1000)
  limpa()

 }

  funcao ultimaPergunta() {
    cadeia resposta2
    escreva("\n Deseja responder a última pergunta valendo tudo ou nada? \n A) Sim \n B) Não \n Resposta: ")
    leia(resposta2)

    se(resposta2 == "A" ou resposta2 == "a") {
      limpa()
      escreva("\n Aqui vai a última pergunta valendo o dobro ou nada: \n")
      escreva(perguntas[10][0], perguntas[10][2])
      escreva("\n Você não pode usar ajuda nesta pergunta. Boa Sorte !")
      escreva("\n Resposta: ")
      leia(resposta)

      se(resposta == perguntas[10][1] ou resposta == perguntas [10][4]){
        limpa()
          escreva("\n Certa a Resposta ! Você dobrou O Seu Valor!!!\n")
          dinheiro = dinheiro *2
      }senao{
            limpa()
            escreva("\n Resposta errada.\n")
            escreva(" Você perdeu tudo!!")
            dinheiro = 0
          }
    }senao{
      limpa()
      escreva("\n  Obrigado por jogar!\n ")
    }


  }

  funcao questoes() {
    logico passar = verdadeiro
    enquanto(i<10 e passar == verdadeiro){
      faca{
        
        escreva(" Seu dinheiro: ", dinheiro)
        escreva("\n Aqui vai a ",i+1, " Pergunta Valendo: ", (valores[i])," Reais!! \n")
        escreva(perguntas[i][0], perguntas[i][2])

        escolha (ajuda) {
          caso 0 : escreva("\n Você não possui mais Ajuda. \n Resposta: ")
          pare
          caso 1 : escreva("\n Precisa De Ajuda? Digite: H. Ajudas Restantes: ", ajuda, "\n Resposta: ")
          pare
          caso 2 : escreva("\n Precisa De Ajuda? Digite: H. Ajudas Restantes: ", ajuda, "\n Resposta: ")
          pare
        }
        leia(resposta)

        se(resposta == perguntas[i][1] ou resposta == perguntas [i][4]){
          limpa()
          escreva("\n Certa a Resposta\n")
          dinheiro = dinheiro + valores[i]
          
          passar = verdadeiro
        }senao se ((resposta == "H" ou resposta == "h") e (ajuda > 0)) {
          ajuda --
          limpa()
          escreva(" Você eliminou duas respostas: \n",perguntas[i][3], " Ajudas Restantes: " , ajuda,"\n Você não pode mais pedir ajuda nesta pergunta. Se tentar usar sua resposta sera marcada como errada.", "\n Resposta: ")
          leia(resposta)
          se (resposta == perguntas[i][1] ou resposta == perguntas [i][4]){
            limpa()
            escreva("\n Certa a Resposta\n")
            dinheiro = dinheiro + valores[i]
            passar = verdadeiro
          }senao se(resposta != perguntas[i][1]) {
            limpa()
            escreva("\n Resposta errada.\n")
            passar = falso
            pare
          }

        }senao se(resposta != perguntas[i][1]) {
            limpa()
            escreva("\n Resposta errada.\n")
            passar = falso
            pare
          }
      i++
      }enquanto (passar == falso)
    }

    se(passar == verdadeiro){
      ultimaPergunta()
    }

   escreva("\n Você Levou: ", dinheiro, " Reais!")
  }
}

