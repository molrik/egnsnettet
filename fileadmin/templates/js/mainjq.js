// JavaScript Document

// jQuery initiering
jQuery(document).ready(function() {
	jQuery('#egn_pwc_showscore').hide();
	jQuery('#egn_pwc_hidescore').click(function (event) {
	  event.preventDefault();
	  jQuery('#tablePwdStatus').slideUp();
	  jQuery(this).hide();
	  jQuery('#egn_pwc_showscore').show();
	});
	jQuery('#egn_pwc_showscore').click(function (event) {
	  event.preventDefault();
	  jQuery('#tablePwdStatus').slideDown();
	  jQuery(this).hide();
	  jQuery('#egn_pwc_hidescore').show();
	});
	
	jQuery('#egn_styrke_show').toggle(function (event) {
	  	event.preventDefault();
	  	jQuery('#tablePwdStatus').slideDown('slow');
	  	jQuery(this).attr('title', 'Klik igen for at skjule detaljerne');		

	}, function(event) {
	  	event.preventDefault();
	  	jQuery('#tablePwdStatus').slideUp();
	  	jQuery(this).attr('title', 'Klik her for at vise detaljer');
	});

	jQuery('#egn_pwcdetail_collapse').click(function (event) {
		event.preventDefault();
	  	jQuery('#tablePwdStatus').slideUp();		
	});

}); 