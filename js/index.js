/*modal configurações*/

	// Get the modal
	var modal = document.getElementById('opira-modal');
	var lakto_modal = document.getElementById('lakto-modal');
	var pb_modal = document.getElementById('pb-modal');
	var cg_modal = document.getElementById('cg-modal');
	// Get the button that opens the modal
	var btn = document.getElementById("btn-opira-modal");
	var btn_lakto = document.getElementById("btn-lakto-modal");
	var btn_pb = document.getElementById("btn-pb-modal");
	var btn_cg = document.getElementById("btn-cg-modal");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	var span_lakto = document.getElementsByClassName("close-lakto")[0];
	var span_pb = document.getElementsByClassName("close-pb")[0];
	var span_cg = document.getElementsByClassName("close-cg")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	  modal.style.display = "block";
	}

	btn_lakto.onclick = function() {
	  lakto_modal.style.display = "block";
	}

	btn_pb.onclick = function() {
	  pb_modal.style.display = "block";
	}

	btn_cg.onclick = function() {
	  cg_modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}

	span_lakto.onclick = function() {
	  lakto_modal.style.display = "none";
	}

	span_pb.onclick = function() {
	  pb_modal.style.display = "none";
	}

	span_cg.onclick = function() {
	  cg_modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }

	  if (event.target == lakto_modal) {
	    lakto_modal.style.display = "none";
	  }

	  if (event.target == pb_modal) {
	    pb_modal.style.display = "none";
	  }

	  if (event.target == cg_modal) {
	    cg_modal.style.display = "none";
	  }
	}

/************************palavras header*******************************/
var words = ["desenvolvedora", "estudante de SMD", "viciada em Netflix"];
var i = -1;

function aleatorio() {

  setInterval(function () {
    i++

    $("#palavras").fadeOut('slow', function () {
      $(this).html(words[i]).fadeIn("slow");
    });

    if (i === 3) {
      i = -1;
    }
  }, 2000);
}

aleatorio();