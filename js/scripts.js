//effectively links super-evos with their base forms
var base = [
  {base: 261, evo: 1413},
  {base: 367, evo: 1619},
  {base: 416, evo: 1445},
  {base: 459, evo: 1847},
  {base: 530, evo: 1707},
  {base: 562, evo: 1816},
  {base: 649, evo: 2868},
  {base: 669, evo: 1492},
  {base: 718, evo: 1881},
  {base: 720, evo: 1927},
  {base: 748, evo: 1663},
  {base: 870, evo: 2444},
  {base: 935, evo: 2066},
  {base: 1001, evo: 2195},
  {base: 1035, evo: 1928},
  {base: 1045, evo: 2001},
  {base: 1085, evo: 2954},
  {base: 1123, evo: 2357},
  {base: 1192, evo: 1764},
  {base: 1240, evo: 2034},
  {base: 1268, evo: 3154},
  {base: 1314, evo: 2578},
  {base: 1362, evo: 1921},
  {base: 1391, evo: 2035},
  {base: 1404, evo: 1593},
  {base: 1434, evo: 1880},
  {base: 1473, evo: 2631},
  {base: 1532, evo: 1543},
  {base: 1571, evo: 2372},
  {base: 1588, evo: 2245},
  {base: 1610, evo: 2232},
  {base: 1652, evo: 2373},
  {base: 1698, evo: 2159},
  {base: 1747, evo: 2434},
  {base: 1751, evo: 1922},
  {base: 1763, evo: 2784},
  {base: 1794, evo: 2814},
  {base: 1832, evo: 2138},
  {base: 1869, evo: 2505},
  {base: 1883, evo: 3018},
  {base: 1910, evo: 3550},
  {base: 1935, evo: 2300},
  {base: 1951, evo: 2830},
  {base: 2023, evo: 3625},
  {base: 2025, evo: 3592},
  {base: 2074, evo: 2363},
  {base: 2076, evo: 2588},
  {base: 2113, evo: 2739},
  {base: 2201, evo: 3693},
  {base: 2234, evo: 2500},
  {base: 2251, evo: 2991},
  {base: 2265, evo: 3048},
  {base: 2302, evo: 3079},
  {base: 2433, evo: 3448},
  {base: 2477, evo: 3202},
  {base: 2651, evo: 2681},
  {base: 2686, evo: 2909},
  {base: 2148, evo: 3211},
  {base: 2236, evo: 3510},
  {base: 2338, evo: 3417},
  {base: 2365, evo: 3666},
  {base: 2441, evo: 3393},
  {base: 2465, evo: 3298},
  {base: 2475, evo: 3240},
  {base: 2577, evo: 3828},
  {base: 2741, evo: 3742},
  {base: 2774, evo: 3275},
  {base: 2776, evo: 3350},
  {base: 2797, evo: 3784},
  {base: 2837, evo: 3469},
  {base: 2862, evo: 3845},
  {base: 2960, evo: 3718},
  {base: 2964, evo: 3739},
  {base: 2980, evo: 3762},
  {base: 3009, evo: 3805},
  {base: 3071, evo: 3369},
  {base: 3175, evo: 3519},
  {base: 3177, evo: 3786},
  {base: 3334, evo: 3814},
  {base: 3429, evo: 3430},
  {base: 3680, evo: 3721},
  {base: 3680, evo: 3816},
];

function updateStorage(key, value, save) {
  if (save) {
    localStorage.setItem(key, value);
  }
  else {
    localStorage.removeItem(key);
  }
}

function readStorageValue(key) {
  return localStorage.getItem(key);
}

function readAllStorage() {
  const nbItem = localStorage.length;
  const store = [];
  let i;
  let storeKey;
  for (i = 0; i < nbItem; i += 1) {
    storeKey = localStorage.key(i);
    store.push({
      "key" : storeKey,
      "value" : readStorageValue(storeKey)
    });
  }
  return store;
}

function updatePage() {
  //check local storage
  const store = readAllStorage();
  //restore the selected class
  $.each(store, function(index, elem) {
    if(elem['value'] == 'rainbow')
      $("#" + elem.key).addClass("rainbow selected");
    else if(elem['value'] == 'srainbow')
      $("#" + elem.key).addClass("srainbow selected");
    else if(elem['value'] == 'hidden')
      $("#" + elem.key).addClass("disabled");
    else if (elem['value'] == 'true'){
      $('.base').toggleClass('hidden');
      $('#hide-base').css('display', 'none');
      $('#show-base').css('display', 'inline-block');
    }
    else
      $("#" + elem.key).addClass("selected");
  });
}

function selectPage() {
  var isChecked = document.getElementById('switch').checked;
  var isChecked2 = document.getElementById('switch2').checked;

  if (isChecked) {
    $("#special .flair:not(.disabled)").addClass("rainbow");
    $("#special .flair:not(.disabled)").removeClass("srainbow");
  }
  else if (isChecked2) {
    $("#special .flair:not(.disabled)").addClass("srainbow");
    $("#special .flair:not(.disabled)").removeClass("rainbow");
  }
  else {
    //adds selected class to every icon
    $("#special .flair:not(.disabled)").addClass("selected");
    $("#special .flair:not(.disabled)").removeClass("rainbow");
    $("#special .flair:not(.disabled)").removeClass("srainbow");
  }


  var className = document.getElementsByClassName('selected');
  var idStore = new Array();


  //loops every ID and stores key into array
  for(var i = 0; i < className.length; i++) {
    idStore.push({"key" : className[i].id, "value" : className[i].className});
  }

  //add IDs from array to local storage
  for(var j=0; j<idStore.length; j++) {
    if(idStore[j]['value'].includes('srainbow')) {
      updateStorage(idStore[j]['key'], "srainbow", true);
    }
    else if(idStore[j]['value'].includes('rainbow')) {
      updateStorage(idStore[j]['key'], "rainbow", true);
    }
    else {
      updateStorage(idStore[j]['key'], null, true);
    }
  }
}

function resetPage() {
  //check local storage
  const store = readAllStorage();
  //delete the selected class
  $.each(store, function(index, elem) {
    $("#" + elem.key).removeClass("selected");
    $("#" + elem.key).removeClass("rainbow");
    $("#" + elem.key).removeClass("srainbow");
    $("#" + elem.key).removeClass("disabled");
  });
  //clears local storage
  localStorage.clear();
  $('#show-hidden').html('Unhide All Removed Legends (' + $('.disabled').length + ')');
}

//unique legend tracker
function countLegends() {
  var disabled = $('.disabled');
  var unique = $('#special .flair:not(.base)');

  var selected = $('.selected');
  var pairs = [];
  var baseArray = [];
  var disabledArray = [];

  //maps evos with base
  var baseMap = base.reduce(function(map, obj) {
      map[obj.evo] = obj.base;
      return map;
  }, {});

  //pushes IDs to new array
  for(var i = 0; i < selected.length; i++) {
    pairs.push(selected[i].id);
  }

  for(var k = 0; k < base.length; k++) {
    baseArray.push(base[k]['base']);
    baseArray.push(base[k]['evo']);
  }

  //push IDs to disabled array to pass as argument later
  for(var j = 0; j < disabled.length; j++) {
    if(baseArray.includes(parseInt(disabled[j].id)))
      disabledArray.push(disabled[j].id);
  }

  //creates new set and returns size
  function countUnique(arg) {
    return new Set(arg.map (x => baseMap.hasOwnProperty(x)? baseMap[x].toString() : x)).size;
  }
  //subtracting 1 from total to account for log luffy stuff?
  $('#counter').html("<span class='cl'>Unique Legends - </span>" + countUnique(pairs) + "/" + (countUnique(unique) - (disabled.length - countUnique(disabledArray)) - 1));
  countLegends2();
}

//total legend tracker
function countLegends2() {
  var amount = $(".selected").length;
  var total = $("#special .flair").length;
  var disabled = $('.disabled').length;

  $('#counter2').html("<span class='cl'>Total Legends - </span>" + amount + "/" + (total-disabled));
  countRainbows();
  countSrainbows();
}

//rainbow tracker
function countRainbows() {
  var amount = $(".rainbow").length;
  var amount2 = $(".srainbow").length;
  var total = $("#special .flair").length;
  var disabled = $('.disabled').length;

  $('#rainbow').html("<span class='cl'>Rainbowed - </span>" + (amount + amount2) + "/" + (total-disabled));
}

//super rainbow tracker
function countSrainbows() {
  var amount = $(".srainbow").length;
  var total = $("#special .flair").length;
  var disabled = $('.disabled').length;

  $('#srainbow').html("<span class='cl'>Super Rainbowed - </span>" + amount + "/" + (total-disabled));
}

//un-hides all hidden legends
function showHidden() {
  var disabled = $(".disabled");

  for(var i = 0; i < disabled.length; i++) {
    localStorage.removeItem(disabled[i].id);
  }
  $(".disabled").toggleClass("disabled");
  $('#show-hidden').html('Unhide All Removed Legends (' + $('.disabled').length + ')');
}

//unhides specific Legends
function listHidden() {
  toggleModal2();
  $(".modal-content2").empty();
  $("#switch").prop("checked", false);
  $("#switch2").prop("checked", false);
  $("#hide-legends").prop("checked", false);

  var disabled = $(".disabled");
  var box = $('.modal-content2');

  //creates new images for hidden legends
  for(var i = 0; i < disabled.length; i++) {
    var flair = document.createElement('img');
    flair.setAttribute('class', 'flair');
    flair.setAttribute('name', disabled[i].id);
    flair.setAttribute('src', 'images/icons/'+disabled[i].id+'.png');

    box.append(flair);
  }

  //unhide legends in checklist when clicked
  $(".modal-content2 img").mousedown(function(e) {
    const $obj = $(this);
    var id = $obj[0].name;

    $("#"+id).removeClass('disabled');
    //removes from modal display
    $obj.hide();
    //removes from local storage
    localStorage.removeItem(id);
    //updates counters
    $('#show-hidden').html('Unhide All Removed Legends (' + $('.disabled').length + ')');
    countLegends();
  });
}

//toggles popup window
function toggleModal() {

  let modal = document.querySelector(".modal")
  let closeBtn = document.querySelector(".close-btn")

  modal.style.display = "block"

  closeBtn.onclick = function(){
    modal.style.display = "none"
  }
  window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none"
    }
  }
}

//toggles 2nd popup window
function toggleModal2() {

  let modal = document.querySelector(".modal2")
  let closeBtn = document.querySelector(".close-btn2")

  modal.style.display = "block"

  closeBtn.onclick = function(){
    modal.style.display = "none"
  }
  window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none"
    }
  }
}

//toggles 3rd popup window
function toggleModal3() {

  let modal = document.querySelector(".modal3")
  let closeBtn = document.querySelector(".close-btn3")

  modal.style.display = "block"

  closeBtn.onclick = function(){
    modal.style.display = "none"
  }
  window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none"
    }
  }
}

function windowOnClick(event) {
  var modal = document.querySelector(".modal");
   if (event.target === modal) {
       toggleModal();
   }
}

//export image function
function generateImage() {
  toggleModal();

  $(".modal-content").empty();

  domtoimage.toSvg($('.icon-container')[0]).then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          $(".modal-content").append(img);
  });
}


//download feature
function download() {
  domtoimage.toBlob($('.icon-container')[0]).then(function (blob) {
        window.saveAs(blob, 'checklist.jpg');
    });
}

//export localStorage
function exportSelection() {
  $('#import-text').attr("style", "opacity: 0; z-index: -1;");
  $('#apply-import').attr("style", "opacity: 0; z-index: -1;");
  $('#copy-export').attr("style", "opacity: 1; z-index: 1;");
  var raw = JSON.stringify(localStorage);
  container = document.getElementById("export-text");
  container.setAttribute("style", "transform: translateY(0); opacity: 1; z-index: 1;");
  container.value = LZString.compressToEncodedURIComponent(raw);
}

//copy exported data
function copySelection() {
  container = document.getElementById("export-text");
  container.select();
  document.execCommand("copy");
  $('#display-copied').fadeIn().delay(1000).fadeOut();
}

//import button
function toggleImport() {
  $('#export-text').attr("style", "opacity: 0; z-index: -1;");
  $('#copy-export').attr("style", "opacity: 0; z-index: -1;");
  $('#apply-import').attr("style", "opacity: 1; z-index: 1;");
  $("#import-text").attr("style", "transform: translateY(0); opacity: 1; z-index: 1;");
}

//apply imported data
function importSelection() {
  var text = document.getElementById("import-text").value;

  plaintext = LZString.decompressFromEncodedURIComponent(text);

  //clears local storage
  localStorage.clear();

  try {
    // Convert to a JSON object
    data = JSON.parse(plaintext);

    console.log(data);

    // Iterate over the JSON object and save to localstorage
    Object.keys(data).map(function(key, index) {
        var value = data[key];
        localStorage.setItem(key, value);
    });

    $('#imported').fadeIn().delay(1000).fadeOut();
  }
  //if error
  catch {
    $('#undefined').fadeIn().delay(1000).fadeOut();
  }

  //restore previous state
  updatePage();

  //legend counter
  countLegends();
}

jQuery(document).ready(function($) {
  //adds base class to pre-defined elements
  for(var v in base) {
    var item = document.getElementById(base[v]['base']);

    $(item).addClass('base');
  }

  //restore previous state
  updatePage();

  //legend counter
  countLegends();

  //restores hidden legend counter upon page load - must be placed under updatePage()
  $('#show-hidden').html('Unhide All Removed Legends (' + $('.disabled').length + ')');

  //makes sure only one toggle can be flipped at a time
  $("#switch").on("change", function(){
    $("#hide-legends").prop("checked", false);
    $("#switch2").prop("checked", false);
  });

  $("#switch2").on("change", function(){
    $("#hide-legends").prop("checked", false);
    $("#switch").prop("checked", false);
  });

  $("#hide-legends").on("change", function(){
    $("#switch").prop("checked", false);
    $("#switch2").prop("checked", false);
  });

  //main function for selecting icons
  $("#special img").mousedown(function(e) {
    var isChecked = document.getElementById('switch').checked;
    var isChecked2 = document.getElementById('hide-legends').checked;
    var isChecked3 = document.getElementById('switch2').checked;

    const $obj = $(this);

    //rainbow toggle must be checked
    if(isChecked) {
      if($obj.hasClass("selected")) {
        $obj.toggleClass('rainbow');
        $obj.removeClass('srainbow');
      }
      else {
        $obj.toggleClass('rainbow selected');
      }

      //creates object if selected class is present
      const save = $obj.hasClass("selected");
      var rainbow = $obj.hasClass("rainbow");

      //updates the storage value accordingly
      if(rainbow) {
        updateStorage($obj.attr("id"), "rainbow", save);
      }
      else {
        updateStorage($obj.attr("id"), null, save);
      }
      countLegends();
    }
    //hide legends toggle
    else if(isChecked2){
      $obj.toggleClass("disabled");
      $obj.removeClass("rainbow");
      $obj.removeClass("srainbow");
      $obj.removeClass("selected");

      const save = $obj.hasClass("disabled");

      updateStorage($obj.attr("id"), "hidden", save);
      countLegends();

      //shows counter of hidden legends
      $('#show-hidden').html('Unhide All Removed Legends (' + $('.disabled').length + ')');
    }
    //super rainbow toggle
    else if(isChecked3){
      if($obj.hasClass("selected")) {
        $obj.toggleClass('srainbow');
        $obj.removeClass('rainbow');
      }
      else {
        $obj.toggleClass('srainbow selected');
      }

      //creates object if selected class is present
      const save = $obj.hasClass("selected");
      var srainbow = $obj.hasClass("srainbow");

      //updates the storage value accordingly
      if(srainbow) {
        updateStorage($obj.attr("id"), "srainbow", save);
      }
      else {
        updateStorage($obj.attr("id"), null, save);
      }
      countLegends();
    }
    //if not checked
    else {
      //toggles selected classes
      $obj.toggleClass("selected");
      $obj.removeClass("rainbow");
      $obj.removeClass("srainbow");

      //creates object if selected class is present
      const save = $obj.hasClass("selected");

      //update the key
      updateStorage($obj.attr("id"), null, save);

      countLegends();
    }
  });

  //select all button
  $("#select-all").on("click", function() {
    selectPage();
    countLegends();
  });

  //clear button
  $("#select-none").on("click", function() {
    resetPage();
    countLegends();
  });

  //unhide all legends
  $("#show-hidden").on("click", function() {
    showHidden();
    countLegends();
  });

  //unhide specific legends
  $("#list-hidden").on("click", function() {
    listHidden();
    countLegends();
  });

  //hides base forms of legends with super-evos
  $("#show-base").on("click", function() {
    $('.base').toggleClass('hidden');
    $('#show-base').css('display', 'none');
    $('#hide-base').css('display', 'inline-block');
    updateStorage("evohidden", null, false);
  });

  //shows base forms of legends with super-evos
  $("#hide-base").on("click", function() {
    $('.base').toggleClass('hidden');
    $('#hide-base').css('display', 'none');
    $('#show-base').css('display', 'inline-block');
    updateStorage("evohidden", 'true', true);
  });
});
