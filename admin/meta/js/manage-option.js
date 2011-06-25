/**********************************************************************/
/**************************** Functions *******************************/
/**********************************************************************/
// Display all settings
function listopt() {
	$.ajax({
		type: "POST",
		url: "api/",
		data : {'ajax' : 'option', 'action' : 'list'},
		cache: false,
		success: function(msg){
			$("#options-list").html(msg);
		}
	});
	return false;
}

// Update settings (submit form)
function updateopt() {
	$('#options-loading').show();
	$('#flash-log').show();
	var data = $('#manage_options').serialize();
	$.ajax({
		type: "POST",
		url: "api/",
		data: "ajax=option&action=update&"+data,
		cache: false,
		success: function(msg){
			$('#options-loading').hide();
			$(msg).flashmsg();
			listopt();
		}
	});
	return false;
}

// Preview modal with content subscription page	
function call_preview(id) {
	var data = '#'+id;
	$(data).preview({
		opacity: '0.5'
	})
}

// Show / hide textarea subscription_content
function subscription_state(id) {
	var data = '#'+id;
	$(data).ready(function() {
			if ($('#subscription').is(':checked')) {
					$('#subscription_content').show();
					$('#preview_button').css('display', 'inline');
			}
			else {
					$('#subscription_content').hide();
					$('#preview_button').css('display', 'none');
			}
	});
}

// Show / hide system votes
function votes_state(id) {
	var data = '#'+id;
	$(data).ready(function() {
		if($('#show_votes').is(':checked')) {
			$('#votes_system').show();
		}
		else {
			$('#votes_system').hide();
		}
	});
}

// Edit setting
function edit_setting(id) {
	var data='#form_'+id+' form';
	var content = $(data).clone();
	Boxy.askform(content, function(val) {
		
		
	});
}

/**********************************************************************/
/************************** Main Program ******************************/
/**********************************************************************/
$(document).ready(function($) {
	$("#option-list").ready(function() {
		listopt();
	});

});
