function toggleMenu(){
    const link = document.querySelector('.links');
    const icon = document.querySelector(".icon .fa-bars");
    const closeicon = document.querySelector('.icon .fa-circle-xmark');

    link.classList.toggle('active');

    if(link.classList.contains('active')){
        icon.style.display =' none ';
        closeicon.style.display =' block ';
    }else{
        
        closeicon.style.display ='none';
        icon.style.display =' block ';
    }

}


function thememenu(){
    const body = document.body;
    const theme = document.querySelector(".theme .fa-sun");
    const lighttheme = document.querySelector('.theme .fa-moon')


body.classList.toggle('light-theme');

if(body.classList.contains('light-theme')){
    theme.style.display = 'none'
    lighttheme.style.display = 'block';
}
else{
    theme.style.display = 'block'
    lighttheme.style.display = 'none';
}

}

var cursor = document.querySelector('.cursor')
cursorScale = document.querySelectorAll('.cursor-scale'),
mouseX = 0,
mouseY = 0

gsap.to({} , 0.016 , {
    repeat : -1,

    onRepeat: function(){
        gsap.set(cursor, {
            css : {
                left :mouseX,
                top: mouseY
            }
        })
    }
});
window.addEventListener("mousemove" , function(e){
    mouseX = e.clientX;
    mouseY = e.clientY
});


cursorScale.forEach(link => {
    link.addEventListener('mouseleave' , () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove' , () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }

    });
});



$(document).ready(function(){
let offset = { offset : ' 50%'}

    $(".anime1").waypoint(function(){
      $('.anime1').addClass('animate__animated animate__fadeInTopLeft ')
    } , 
offset
)
})


$(document).ready(function(){
    let offset = { offset : ' 50%'}

    $(".anime2").waypoint(function(){
      $('.anime2').addClass('animate__animated animate__fadeInTopRight ')
    } ,  offset )
})

$(document).ready(function(){
    let offset = { offset : ' 60%'}
    $(".anime3").waypoint(function(){
      $('.anime3').addClass('animate__animated animate__fadeInBottomLeft ')
    } , offset )
})

$(document).ready(function(){
    let offset = { offset : ' 60%'}
    $(".anime4").waypoint(function(){
      $('.anime4').addClass('animate__animated animate__fadeInBottomRight ')
    } ,  offset )
})

$(document).ready(function(){
    let offset = { offset : ' 60%'}
    $(".yimg").waypoint(function(){
      $('.yimg').addClass('animate__animated animate__fadeInUp')
    } ,  offset )
})

$(document).ready(function(){
    let offset = { offset : ' 60%'}
    $(".yrimg").waypoint(function(){
      $('.yrimg').addClass('animate__animated animate__fadeInUp')
    } ,  offset )
})


// 

$(document).ready(function(){
    let offset = { offset : ' 90%'}
    $(".mimg").waypoint(function(){
      $('.mimg').addClass('animate__animated animate__fadeInUp')
    } ,  offset )
})

$(document).ready(function(){
    let offset = { offset : ' 90%'}
    $(".mrimg").waypoint(function(){
      $('.mrimg').addClass('animate__animated animate__fadeInUp')
    } ,  offset )
})

// 

$(document).ready(function(){
    let offset = { offset : ' 100%'}
    $(".limg").waypoint(function(){
      $('.limg').addClass('animate__animated animate__fadeInUp')
    } ,  offset )
})

$(document).ready(function(){
    let offset = { offset : ' 100%'}
    $(".lrimg").waypoint(function(){
      $('.lrimg').addClass('animate__animated animate__fadeInUp  ')
    } ,  offset )
})



$(document).ready(function(){
    let offset = { offset : ' 100%'}
    $(".button").waypoint(function(){
      $('.button').addClass('animate__animated animate__fadeInUp')
    } ,  offset )
})


$(document).ready(function(){
    let offset = { offset : ' 100%'}
    $(".button1").waypoint(function(){
      $('.button1').addClass('animate__animated animate__fadeInUp')
    } ,  offset )
})




$(document).ready(function(){
    let offset = { offset : ' 100%'}
    $(".lcontent1").waypoint(function(){
      $('.lcontent1').addClass('animate__animated animate__fadeInBottomRight')
    } ,  offset )
})



$(document).ready(function(){
    let offset = { offset : ' 100%'}
    $(".rcontent1").waypoint(function(){
      $('.rcontent1').addClass('animate__animated animate__fadeInBottomLeft')
    } ,  offset )
})




$(document).ready(function(){
    let offset = { offset : ' 100%'}
    $(".lcontent").waypoint(function(){
      $('.lcontent').addClass('animate__animated animate__fadeInBottomRight')
    } ,  offset )
})



$(document).ready(function(){
    let offset = { offset : ' 100%'}
    $(".rcontent").waypoint(function(){
      $('.rcontent').addClass('animate__animated animate__fadeInBottomLeft')
    } ,  offset )
})



$(document).ready(function(){
    let offset = { offset : ' 100%'}
    $(".lcontent2").waypoint(function(){
      $('.lcontent2').addClass('animate__animated animate__fadeInBottomRight')
    } ,  offset )
})



$(document).ready(function(){
    let offset = { offset : ' 100%'}
    $(".rcontent2").waypoint(function(){
      $('.rcontent2').addClass('animate__animated animate__fadeInBottomLeft')
    } ,  offset )
})






