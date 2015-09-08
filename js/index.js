// JavaScript Document

function dotter(letter,classname,fieldclass,speed){
	var f="."+fieldclass+"_";
	var f1=fieldclass+"_";
	$.each(letter,function(index,val){
		setTimeout(function(){
			var flag=flag1=0;
			if(letter[index]=='_'){
				var y="&nbsp;";
				var append_div="<p class='"+fieldclass+"'>"+y+"</p>";
				}
			else if(letter[index]=='#'){
				var append_div="<br/>";
				}
			
			else if(letter[index]=='%'){
				var append_div="<p class='"+f1+"'>_</p>";
					$(append_div).appendTo($(fieldclass));
				for(var i=0;i<20;i++){
					$(f).show();
					setTimeout(function(){
						$(f).fadeOut();
						},i*20);
					}
			}
			else{
				var append_div="<p class='"+fieldclass+"'>"+letter[index]+"</p>";
				}
			
				$(classname).append(append_div);
			 	
		},index*speed);
		});;
	
	}

var t,i,timeout_i,timeout_a,time,agent_name,intro_sound,home_sound,click_sound,gas_sound,e_l_sound,t_sound,
	agent_tail=Math.floor((Math.random() * 100) + 1);
function intro(){
		
		if(intro_sound != undefined){
			intro_sound= null;
			}
		intro_sound= new Audio("data/intro.mp3");
		intro_sound.play();
	timeout=setTimeout(function(){
		$(".very_intro").fadeIn();
		
		$(document).find(".field p").remove().find(".field").find("br").remove();
		var cont=$(".very_intro .m_2010").html();
		t=cont.trim().split("");
		   dotter(t,".very_intro .field","l",50);
	});
	timeout=window.setTimeout(function(){
		$(document).find(".field p").remove().find(".field").find("br").remove();
		
		var cont=$(".very_intro .m_2011").html();
		t=cont.trim().split("");
		   dotter(t,".very_intro .field","l",50);
	},6000);
	
	timeout=setTimeout(function(){
		$(document).find(".field p").remove().find(".field").find("br").remove();
		var cont=$(".very_intro .m_2014").html();
		t=cont.trim().split("");
		   dotter(t,".very_intro .field","l",50);
		   document.onkeydown = function(evt) {
   			 evt = evt || window.event;
		    if (evt.keyCode == 13) {
				 enter_user();
			}}
		$(document).find(".very_intro .field").click(function(){
			enter_user();
			});	
		 $(document).bind("keyup",function(e){
			 var value=String.fromCharCode(e.keyCode);
			 if(value=="o" || value=="O"){
				 $(".field").append("<p>o</p>");
				 }
			 if(value=="k" || value=="K"){
				 $(".field").append("<p>k</p>");
				 setTimeout(function(){
					 enter_user();
					 },200);
				 }
			 });
	},15000);
	
	}

function dotter_initiater(classname,fieldname,fieldclass,speed){
	
	$(classname).hide();
	var cont=$(classname).html();
	
		t=cont.trim().split("");
		 dotter(t,fieldname,fieldclass,speed);
	}

function enter_user(){
		intro_sound.pause();
	$(document).find("section").hide();
	window.clearTimeout(timeout);
	$(".enter_user").show();
	$(".enter_user .user_box").focus();
	dotter_initiater(".access_user_text p",".access_user_text div","a",40);
	
	
	$(document).find(".user_box").keypress(function(){
		if($(document).find(".a_").html()){
			dotter_initiater(".access_user_text span",".access_user_text div","a",1);
		}
		});
		var flag=false;
	document.onkeydown = function(evt) {
    evt = evt || window.event; 
   if (evt.keyCode == 13) {
		if(home_sound != undefined){
			home_sound= null;
			}
		home_sound= new Audio("data/home.mp3");
		if(flag==false){
		home_sound.play();
		}
		flag=true;
		
		
		
		agent_name=$(".user_box").val();
		if(agent_name=='veeramani1'){
			home_sound.pause();
			$(".access_user_text").find("br").remove();
			var text="ttthe_name_you_entered_has_crashed_the_mission ! :(";
			$(".access_user_text p").html(text);
			dotter_initiater(".access_user_text p",".access_user_text div","a",100);
		}
		else if(agent_name=='tfz'){
			home_sound.pause();
			var text="ssaaaakkkkkkkk saakkkkkkkkkkkk TFZ!!!!";
			$(".access_user_text p").html(text);
			dotter_initiater(".access_user_text p",".access_user_text div","a",100);
		}
		else if(agent_name=='potti'){
			home_sound.pause();
			$(".access_user_text").find("br").remove();
			var text="mmmaaamaaaaaa.......";
			$(".access_user_text p").html(text);
			dotter_initiater(".access_user_text p",".access_user_text div","a",100);
		}
		else if(agent_name=='ak_bomm'){
			home_sound.pause();
			$(".access_user_text").find("br").remove();
			var text="hhhey doodhies...!!";
			$(".access_user_text p").html(text);
			dotter_initiater(".access_user_text p",".access_user_text div","a",100);
		}
		else if(agent_name=='shw idiots'){
			home_sound.pause();
			$(".access_user_text").find("br").remove();
			var text="tthe_agents_who_took_the_mission..#thanks_to_all_for_making_it_a_big_success..!!";
						$(".access_user_text p").html(text);
						dotter_initiater(".access_user_text p",".access_user_text div","a",100);
			$.ajax({
				url:'mem.php',
				dataType:'text',
				method:'post',
				data:{ flag:'agent_list'},
				success:function(data){
						var info=JSON.parse(data);
					
					for(i=0;i<info.length;i++){
						b=info.length-i;
						$(".enter_user .agent_list").append("&nbsp;&nbsp;&nbsp;<p>"+info[b-1]['agents']+"</p>");
						$(".access_user_text").find("br").remove();
						}
					
					}
				
				});
			}
		else{
		if(agent_name){
			home_sound.play();
			var u=$(".access_user_text").html();
			$(".access_user_text").html(u.replace("matching your sign..",""));
			$(".access_user_text").find("br").remove();
			$(".access_user_text").prepend("matching your sign..");
			$(".access_user_text div").html("");
			var text="#8y3h28yyiash7wihuaiy8923o8ishasho...####%#ACCESSING...%#activating_voice_control..%#CHECKED..%#processing_thumb_print..%#CHECKED";
			$(".access_user_text p").html(text);
			dotter_initiater(".access_user_text p",".access_user_text div","a",30);
			
					
						setTimeout(function(){
							home_show(0);
						},8000);
						
					
		}
		}
   	 }
	};
	
	}
function health(){
	$(".health_outer span").css({'background-color':'#323131'});
	$(".health_text").remove();
	$("body").css({'background-color':'#031C1E',"-webkit-animation":'',"-moz-animation":'',"-ms-animation":'',"-o-animation":'',"animation":''});
	$(".global_container").css({'opacity':1});
	var j=1,h=0;
	for(var i=0;i<5;i++){
		setTimeout(function(){
			var t=8-j;
			$(".health_outer").find("span:nth-child("+t+")").css({'background-color':'transparent'});
			j++;
			if(t==3){
				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
					$("body").css({'background-color':'rgb(43, 7, 7)'}).prepend("<h1 class='health_text'>you are losing your health<br/>keep hitting the screen to gain your health.</h1>").css({'-webkit-animation':'anim_holo_sw 1s infinite'});;
					$(".global_container").css({'opacity':0.1});
					var o=0;
					$("body").click(function(){
						if(o=3){health();}
						o++
						});
					}
				else{
				$("body").css({'background-color':'rgb(43, 7, 7)'}).prepend("<h1 class='health_text'>you are losing your health<br/>keep hitting  [shift]  key to gain your health.</h1>").css({'-webkit-animation':'anim_holo_sw 1s infinite'});;
				$(".global_container").css({'opacity':0.1});
				}
				}
			},20000*i);
		
		}
	document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 16) {
		h++;
		if(h==3){
			health();
			}
   	 }
	};
	}
function home_show(flag,flag1){
	$(document).find("section").hide();	
	$(document).find(".b").remove();
	$(".mid_panel_main").show();
	$(".ws_outer").hide();
	squad_hide();
	
			e_l_sound.play();
	if(flag==0){
		$(".home,.bottom_panel_outer,.top_panel_outer").show().css({'-webkit-animation':'anim_holo_sw 0.01s infinite'});
		setTimeout(function(){
				$(".home,.bottom_panel_outer,.top_panel_outer").show().css({"-webkit-animation":''});
	
			},900);
		health();
	}
	else if(flag==2){
		$(".home,.bottom_panel_outer,.top_panel_outer").show();
		$(".mid_panel_main").hide();
		$(".ws_outer").show();
	}
	else{
		$(".home,.bottom_panel_outer,.top_panel_outer").show();
		
		}

	
	$(".agent_name_outer span").html(agent_name+"0"+agent_tail );
	$(".typer_outer span,.typer_outer1 span").html("");
	dotter_initiater(".typer_outer1  p",".typer_outer1 span","b",35);
	dotter_initiater(".typer_inner  p",".typer_inner span","b",35);
	dotter_initiater(".typer_inner  p",".typer_inner span","b",65);
	icon_animator(".events_i_b",120);
	icon_animator(".ws_i_b",70);	
	icon_animator(".sponser_i_b",20);
	icon_animator(".contact_i_b",50);
	
	$(document).find(".ws_i_b p").on("click",function(){
		$(".mid_panel_main").hide();
		$(".ws_outer").show();
		});
	$(document).find(".icon_buttons div p").on("mouseenter",function(){
		$(this).parent().find(".icon_l").css({'transform':'rotate(360deg)'});
		$(this).parent().find(".icon_r").css({'transform':'rotate(-360deg)'});
	
	});	

	$(document).find(".ws_inner span").on("mouseenter",function(){
		var classname=$(".ws_inner span").attr("class");
			click_sound.play();	

		if(classname=="ws_1_o"){
			$(".ws_inner span").attr("class","ws_2_o");
			$(this).attr("class",classname);
			}
		else{
			$(this).attr("class","ws_1_o");
			$(classname).attr("class","ws_2_o");
			}
	
		});
	
	
	}
function events_show(){
	squad_hide();
	$("section").hide();
	$(".events").fadeIn();
	$(document).find(".events_list_outer li").on("click",function(){
			var classname=$(this).html();
			$(".events_desc_outer h1").html(classname);
			$(".events_desc_inner").find("div").hide();
			if(classname=="super over &amp; 5's football"){ classname="super";}
			var img_name='data/'+classname.replace(" ","_").replace(" ","_").replace(" ","_")+'.png';
			if(classname=="super over &amp; 5's football"){ classname="super";img_name="data/super.png"}

			classname="."+classname.replace(" ","_").replace(" ","_").replace(" ","_");
			$(".events_po img").attr("src",img_name);
			$(".events_desc_outer").find(classname).fadeIn(400);
		
	if(t_sound != undefined){
				t_sound= null;
				}
			t_sound= new Audio("data/typing.mp3");
			t_sound.play();
		$(".holo_b").fadeIn();
		setTimeout(function(){
			$(".holo_u,.events_po").fadeIn(200).css({'animation':'anim_holo_sw 0.01s infinite'});
			
		},400);
		setTimeout(function(){
			$(".holo_u,.events_po").fadeIn(200).css({'-webkit-animation':'anim_holo1 0.9s infinite','animation':'anim_holo1 0.9s infinite'});
			},1000);
	});
	}
function sponser_show(){
	var t;
	$("section").hide();
	$(".sponsers_list").fadeIn();
	squad_hide();
	var arr=[];
	
	$(".sp_list_inner").children().each(function(index,element){
		arr[$(element).attr("class")]=$(element).hide().css("margin");
		$(element).css({'margin':'0 0 0 0'}).fadeIn();
		$(element).css({"margin":arr[$(element).attr("class")]});
		});
	
	$(".sp_list_inner div").on("mouseenter",function(){
		click_sound.play();

		$(".sp_list_inner").children().each(function(index,element){
			$(element).css({"margin":arr[$(element).attr("class")],'transform':'rotateY(32deg)'});
		});
		$(this).css({'margin-top':-20,'border-color':'#2F8BA0'});
	});
	$(".sp_list_inner div").on("mouseleave",function(){
		$(".sp_list_inner").children().each(function(index,element){
			$(element).css({"margin":arr[$(element).attr("class")],'transform':'rotateY(32deg)'});
		});
		});
	$(".sp_list_inner div").on("click",function(){
		$(this).css({'transform':'rotateY(360deg)','margin-left':700});
		});

		
	}
function squad_show(){
	$("section").hide();
	$(".squad_show").fadeIn();
	$(".contact_i_b div").css({'transform':'rotateX(-70deg)','margin':'30px'}).find('.icon_l,.icon_r').css({'-webkit-animation':'anim_con 0.1s infinite linear'});
	$(".h_i,.contact_i_b span").fadeIn(1000);
	$(".splash").fadeIn();
	$(".hk_text_inner span").html('');
	dotter_initiater(".hk_text_inner div",".hk_text_inner span","c",200);
	setTimeout(function(){
		if(e_l_sound != undefined){
				e_l_sound= null;
				}
			e_l_sound= new Audio("data/events_list.mp3");
			e_l_sound.play();
		},2200);

	}
function squad_hide(){
	$(".contact_i_b div").css({'transform':'rotateX(0deg)','margin':'0px'}).find('.icon_l,.icon_r').css({'-webkit-animation':''});
	$(".splash").hide();
	$(".h_i,.contact_i_b span").hide(300);

	}
function icon_animator(classname,rot){
	var r=$(classname).find(".icon_r");
	var l=$(classname).find(".icon_l");		
	r.css({'transform':'rotate(-'+rot+'deg)'});
	setTimeout(function(){
		r.css({'transform':'rotate(0deg)'});
		},1000);
	l.css({'transform':'rotate('+rot+'deg)'});
	setTimeout(function(){
		l.css({'transform':'rotate(0deg)'});
		},1000);
	setTimeout(function(){
		icon_animator(classname,rot);
	},2000);
	}

	


$(function(){
	$(window).load(function(){
	$(".logo_b").fadeOut();	
	$("body").css({'background-image':'url(data/notify_back.png)'});
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	if(window.innerHeight > window.innerWidth){
		$(".logo_b").html("turn your phone to landscape to survive");
	}
	else{
	$(".m_2014").html("[year_2014]..#the_mission_raised_its_feet..#now..#[year_2k15]..#are_you_ready_this_time?..%________hit_here_to_assign%");
	 intro();
	}
	}
	else{
		intro();
		}
		
		});
	if(window.innerHeight > window.innerWidth){
		$("body").css({'background-color':'rgb(43, 7, 7)'}).prepend("<h1 class='health_text'>turn your phone to survive.</h1>").css({'-webkit-animation':'anim_holo_sw 1s infinite'});
		
		$(".global_container").css({'opacity':0.1});	
		}
	else{
		$("body").css({'background-color':'#031C1E',"-webkit-animation":'',"-moz-animation":'',"-ms-animation":'',"-o-animation":'',"animation":''});
		$(".global_container").css({'opacity':1});
		}
	$('img').bind('contextmenu', function(e){
    	return false;
		});
	$('img').bind('dragstart', function(e){
    	return false;
		});
	$(document).find(".user_button").on("click",function(){
		var and=$("input[name=user_radio]").val(),
			col=$("#col").val(),
			name=$("#name").val(),
			mob=$("#mob").val(),
			email=$("#email").val();
		if(and && col && name && mob && email){
			$.ajax({
				url:'mail.php',
				method:'POST',
				dataType:"text",
				data:{
					name:name,
					college:col,
					email:email,
					mobile:mob
					},
				success:function(data){
						if(data=="submited"){
						$(this).html("join now");
			$(".ws_2_o").css({'display':'inline-block'});
			$(".ws_form_outer,.splash").fadeOut();
			$(".ws_1_o").css({'transform':'  translate3d(0px,0px,0px) rotateX(0deg)'});
						}
					},
				error:function(jXHR,textStatus,errorThrown){
					alert(errorThrown);
					}
				});
			}
		});
	$(document).find(".join_now h3").on("click",function(){
		if($(this).html()=="join now"){
			$(this).html("back now");
			$(".splash,.ws_form_outer").fadeIn(2000);
			$(".ws_1_o").css({'transform':'rotateX(80deg)'});
			$(".ws_2_o").hide();
		}
		else{
			$(this).html("join now");
			$(".ws_2_o").css({'display':'inline-block'});
			$(".ws_form_outer,.splash").fadeOut();
			$(".ws_1_o").css({'transform':'  translate3d(0px,0px,0px) rotateX(0deg)'});
			}
		
		});
	
	document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
		enter_user();
   	 }
	};
	
	
	
	//-------------sound effects
	
	if(e_l_sound != undefined){
		e_l_sound= null;
			}
		e_l_sound= new Audio("data/events_list.mp3");
	$(document).find(".icon_buttons div p,.logo_outer").on("click",function(){
			e_l_sound.play();
	});
	if(click_sound != undefined){
		click_sound= null;
			}
		click_sound= new Audio("data/click.mp3");
	$(document).find(".events_left li,.events_right li").on("mouseenter",function(){
		click_sound.play();
		});
	});