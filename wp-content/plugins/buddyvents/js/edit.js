var map;var mark;var markersArray=[];function def_map_initialize(){var c=new google.maps.LatLng(editLat,editLng);var d={zoom:2,center:c,mapTypeId:google.maps.MapTypeId.HYBRID};map=new google.maps.Map(document.getElementById("loc-map"),d);mark=new google.maps.Marker({position:c,map:map});google.maps.event.addListener(map,"click",function(b){var a=b.latLng;mark.setMap(null);placeMarker(a);a=String(a);a=a.split(", ");jQuery("#map_location_lat").val(a[0].substr(1,a[0].length));jQuery("#map_location_lng").val(a[1].substr(0,a[1].length-1))})}function placeMarker(c){deleteOverlays();var d=new google.maps.Marker({position:c,map:map});markersArray.push(d);map.setCenter(c)}function deleteOverlays(){if(markersArray){for(i in markersArray){markersArray[i].setMap(null)}markersArray.length=0}}jQuery(document).ready(function(){if(jQuery("#no_coords").is(":checked")){jQuery(".colorbox").hide()}else{jQuery(".colorbox").show()}jQuery("#no_coords").click(function(){if(jQuery(this).is(":checked")){jQuery(".colorbox").hide()}else{jQuery(".colorbox").show()}});jQuery("#manual_coords").click(function(){if(jQuery(this).is(":checked")){jQuery("#map_location_lng").val(editLng);jQuery("#map_location_lat").val(editLat)}else{jQuery("#map_location_lat,#map_location_lng").val("")}});var c=jQuery("#start_date").val();c=c.split("-");var d=jQuery("#end_date").val();d=d.split("-");var x=jQuery("#start_date,#end_date").datepicker({firstDay:weekStart,minDate:"+1d",changeMonth:false,changeYear:false,dateFormat:"yy-mm-dd",onSelect:function(g){var b=this.id=="start_date"?"minDate":"maxDate",h=jQuery(this).data("datepicker");date=jQuery.datepicker.parseDate(h.settings.dateFormat||jQuery.datepicker._defaults.dateFormat,g,h.settings);x.not(this).datepicker("option",b,date)}});jQuery("#start_time,#end_time").timepicker({ampm:clockType});jQuery("#change-coords").hide();jQuery("#coords-change").click(function(){jQuery("#change-coords").toggle("slow",function(){google.maps.event.trigger(map,"resize");var a=new google.maps.LatLng(editLat,editLng);map.setCenter(a)});return false});def_map_initialize()});