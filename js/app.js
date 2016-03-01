        
       // Load the IFrame Player API code asynchronously.
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;


        function onPlayerReady(event){
            $("#currentTrack").text(player.getVideoData().title);
            // $('#currentTrack').circleType({radius: window.innerWidth});
            event.target.playVideo();
        }

        function onPlayerStateChange(event){
          if(event.data === 1) {
            $("#currentTrack").text(player.getVideoData().title);
            // $('#currentTrack').circleType({radius: window.innerWidth});
          }
        }
        
        function onYouTubePlayerAPIReady() {
          var zone = new Date();
          var listId = "PLRBp0Fe2GpgmsW46rJyudVFlY6IYjFBIK";
          if(zone.getHours() > 22 || zone.getHours() < 6){
            listId = "PLRBp0Fe2Gpgm57nFVNM7qYZ9u64U9Q-Bf";
          }
          player = new YT.Player('playlist', {
            height: '0',
            width: '0',
            playerVars : {
              listType : 'playlist',
              list : listId,
              shuffle : 1,
              loop : 1
            },
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
        }



      if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

      var container;
      var camera, scene, renderer;
      var mesh, geometry, material;

      var mouseX = 0, mouseY = 0;
      var start_time = Date.now();

      var windowHalfX = window.innerWidth / 2;
      var windowHalfY = window.innerHeight / 2;

      function applyGradient(gradient){
        var zone = new Date();
        switch (zone.getHours()){
          case 0 :
            gradient.addColorStop(1,"#00000c");
            break;
          case 1 :
            gradient.addColorStop(0.55,"#191621");
            gradient.addColorStop(0,"#020111");
            break;
          case 2 :
            gradient.addColorStop(0,"#020111");
            gradient.addColorStop(0.4,"#20202c");
            break;
          case 3 :
            gradient.addColorStop(0.10,"#020111");
            gradient.addColorStop(1,"#3a3a52");
            break;
          case 4 :
            gradient.addColorStop(0.0,"#20202c");
            gradient.addColorStop(1,"#515175");
            break;
          case 5 :
            gradient.addColorStop(0.0,"#40405c");
            gradient.addColorStop( 0.80,"#6f71aa");
            gradient.addColorStop(1,"#8a76ab");
            break;
          case 6 :
            gradient.addColorStop(0,"#4a4969");
            gradient.addColorStop(0.5,"#7072ab");
            gradient.addColorStop(1,"#cd82a0");
            break;
          case 7 :
            gradient.addColorStop(0.0,"#757abf");
            gradient.addColorStop( 0.60,"#8583be");
            gradient.addColorStop(1,"#eab0d1");
            break;
          case 8 :
            gradient.addColorStop(0.0,"#82addb");
            gradient.addColorStop(1,"#ebb2b1");
            break;
          case 9 :
            gradient.addColorStop(0.1,"#94c5f8");
            gradient.addColorStop( 0.70,"#a6e6ff");
            gradient.addColorStop(1,"#b1b5ea");
            break;
          case 10 :
            gradient.addColorStop(0.0,"#b7eaff");
            gradient.addColorStop(1,"#94dfff");
            break;
          case 11 :
            gradient.addColorStop(0.0,"#9be2fe");
            gradient.addColorStop(1,"#67d1fb");
            break;
          case 12 :
            gradient.addColorStop(1,"#90dffe");
            gradient.addColorStop(0,"#38a3d1");
            break;
          case 13 :
            gradient.addColorStop(0.0,"#57c1eb");
            gradient.addColorStop(1,"#246fa8");
            break;
          case 14 :
            gradient.addColorStop(0.0,"#2d91c2");
            gradient.addColorStop(1,"#1e528e");
            break;
          case 15 :
            gradient.addColorStop(1,"#5b7983");
            gradient.addColorStop(0.8,"#1e528e");
            gradient.addColorStop(0,"#2473ab");
            break;
          case 16 :
            gradient.addColorStop(0.0,"#1e528e");
            gradient.addColorStop( 0.50,"#265889");
            gradient.addColorStop(1,"#9da671");
            break;
          case 17 :
            gradient.addColorStop(0.0,"#1e528e");
            gradient.addColorStop( 0.50,"#728a7c");
            gradient.addColorStop(1,"#e9ce5d");
            break;
          case 18 :
            gradient.addColorStop(0,"#154277");
            gradient.addColorStop(0.30,"#576e71");
            gradient.addColorStop(0.70,"#e1c45e");
            gradient.addColorStop(1,"#b26339");
            break;
          case 19 :
            gradient.addColorStop(0,"#163C52");
            gradient.addColorStop(0.3,"#4F4F47");
            gradient.addColorStop(0.6,"#C5752D");
            gradient.addColorStop(0.8,"#B7490F");
            gradient.addColorStop(1,"#2F1107");
            break;
          case 20 :
            gradient.addColorStop(0,"#071B26");
            gradient.addColorStop(0.30,"#071B26");
            gradient.addColorStop(0.80,"#8A3B12");
            gradient.addColorStop(100,"#240E03");
            break;
          case 21 :
            gradient.addColorStop(0.30,"#010A10");
            gradient.addColorStop( 0.80,"#59230B");
            gradient.addColorStop(0.100,"#2F1107");
            break;
          case 22 :
            gradient.addColorStop(0.50,"#090401");
            gradient.addColorStop(0.100,"#4B1D06");
            break;
          case 23 :
            gradient.addColorStop(0.80,"#00000c");
            gradient.addColorStop(0.100,"#150800");
            break;
          case 24 :
            gradient.addColorStop(0.1,"#00000c");
            break;
        }
      }

      function toggleFullScreen() {
        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          }
        }
      }

      init();

      function init() {

        $("#container").dblclick(function(){
          toggleFullScreen();
        });

        container = $("#container")[0];

        // Bg gradient

        var canvas = document.createElement( 'canvas' );
        canvas.width = 32;
        canvas.height = window.innerHeight;

        var context = canvas.getContext( '2d' );

        var gradient = context.createLinearGradient( 0, 0, 0, canvas.height );

        applyGradient(gradient);        

        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

        container.style.background = 'url(' + canvas.toDataURL('image/png') + ')';
        container.style.backgroundSize = '32px 100%';

        //

        camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 3000 );
        camera.position.z = 6000;

        scene = new THREE.Scene();

        geometry = new THREE.Geometry();

        var texture = THREE.ImageUtils.loadTexture( 'cloud10.png', null, animate );
        texture.magFilter = THREE.LinearMipMapLinearFilter;
        texture.minFilter = THREE.LinearMipMapLinearFilter;

        var fog = new THREE.Fog( 0xebb2b1, - 100, 3000 );

        material = new THREE.ShaderMaterial( {

          uniforms: {

            "map": { type: "t", value: texture },
            "fogColor" : { type: "c", value: fog.color },
            "fogNear" : { type: "f", value: fog.near },
            "fogFar" : { type: "f", value: fog.far },

          },
          vertexShader: document.getElementById( 'vs' ).textContent,
          fragmentShader: document.getElementById( 'fs' ).textContent,
          depthWrite: false,
          depthTest: false,
          transparent: true

        } );

        var plane = new THREE.Mesh( new THREE.PlaneGeometry( 64, 64 ) );

        for ( var i = 0; i < 8000; i++ ) {

          plane.position.x = Math.random() * 1000 - 500;
          plane.position.y = - Math.random() * Math.random() * 200 - 15;
          plane.position.z = i;
          plane.rotation.z = Math.random() * Math.PI;
          plane.scale.x = plane.scale.y = Math.random() * Math.random() * 1.5 + 0.5;

          THREE.GeometryUtils.merge( geometry, plane );

        }

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        mesh = new THREE.Mesh( geometry, material );
        mesh.position.z = - 8000;
        scene.add( mesh );

        renderer = new THREE.WebGLRenderer( { antialias: false } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        window.addEventListener( 'resize', onWindowResize, false );

      }

      function onDocumentMouseMove( event ) {

        mouseX = ( event.clientX - windowHalfX ) * 0.25;
        mouseY = ( event.clientY - windowHalfY ) * 0.15;

      }

      function onWindowResize( event ) {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

      }

      function animate() {

        requestAnimationFrame( animate );

        position = ( ( Date.now() - start_time ) * 0.03 ) % 8000;

        camera.position.x += (camera.position.x ) * 0.01;
        camera.position.y += ( - camera.position.y ) * 0.01;
        camera.position.z = - position + 8000;

        renderer.render( scene, camera );

      }

      function getRssNews(){

          
          $(".defile").html("");


          //feed to parse
          var feed = "https://euw.leagueoflegends.com/en/rss.xml";
          
          $.ajax(feed, {
              accepts:{
                  xml:"application/rss+xml"
              },
              dataType:"xml",
              success:function(data) {
                  var datafeedlist = "";
                  $(data).find("item").each(function () { 
                      var el = $(this);
                      $(".defile").append($("<a href='"+el.find("link").text()+"' target='_blank' >"+ el.find("title").text() + "</a>"));
                      datafeedlist += el.find("title").text() + " - " ;
                  });
                  $(".defile").attr("data-text",datafeedlist);
                  setTimeout(getRssNews,1800000);
              }  
          });
      }

      $(function(){
        $('#player').slideUp();
          window.addEventListener("scroll",function() { 
           if(window.scrollY > 500) {
              $('#player').slideDown();
           }
           else {
              $('#player').slideUp();
           }
        },false);

        $(".logo").on("click",function(){
          if(player.isMuted()){
            player.unMute();
          }else{
            player.mute();
          }
        });

        $(".fa-angle-left").on("click",function(){
          player.previousVideo();
        });

        $(".fa-angle-right").on("click",function(){
          player.nextVideo();
        });

        getRssNews();

      })