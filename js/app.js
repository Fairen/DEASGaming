        
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

      init();

      function init() {

        container = $("#container")[0];

        // Bg gradient

        var canvas = document.createElement( 'canvas' );
        canvas.width = 32;
        canvas.height = window.innerHeight;

        var context = canvas.getContext( '2d' );

        var gradient = context.createLinearGradient( 0, 0, 0, canvas.height );

        gradient.addColorStop(0, "#82addb"); 
        gradient.addColorStop(1, "#ebb2b1"); 

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