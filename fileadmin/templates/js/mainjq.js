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
	
	jQuery('#egn_styrke_show').click(function (event) {
	  event.preventDefault();
	  jQuery('#tablePwdStatus').toggle();
	});

}); 