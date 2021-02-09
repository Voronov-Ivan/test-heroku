var socket = io.connect('/');

socket.on('players_in_room',function (players,pass) {
  $('#players').text(players);
  $('#pass').text(pass)
});

socket.on('send_kik_door',function (kik) {
  $('#fight img').remove();
  kik.forEach((item, i) => {
    var k = "<img src='"+"public/brown/"+item+"'>"
    $('#fight').append(k)
  });


});

socket.on('set_kub',function (num) {
    $('#kub').text(num);
})
////////////////////////////////////////////////////////////////////////////////////////////////
socket.on('set_info', function (pl) {
  var index = 0;
  pl.forEach((item, i) => {
    if(item.start){$('.start').remove()};
    if (item.id == socket.id) {
      $('#player_name').text(item.name);
      $('#lvl').text("LVL : "+item.level);
      $('#damage').text("Damage : "+item.damage);
      if (item.cardInHandDoor.length > 0) {
        $('#PLAYER_BOX img').remove();
        item.cardInHandDoor.forEach((item, i) => {
          var divID = '#PLAYER_BOX ';
          var img = "<img onclick=CardInFront($(this).attr('src')) src='public/brown/"+item+"'>"
          $(divID).append(img);
        });
      }
/////////////Gold and Door card in hand
      if (item.cardInHandGold.length > 0) {
        $('#PLAYER_BOX2 img').remove();
        item.cardInHandGold.forEach((item, i) => {
          var divID = '#PLAYER_BOX2';
          var img = "<img onclick=CardInFront($(this).attr('src')) src='public/gold/"+item+"'>"
          $(divID).append(img);
        });
      }
      if (item.cardInFront.length > 0) {
          $('#CardInFront img').remove();
          item.cardInFront.forEach((item, i) => {
            var divID = '#CardInFront';
            var img = "<img onclick=CardInFront($(this).attr('src')) src='"+item+"'>"
            $(divID).append(img);
        });
      }
    }
    else {
      var name = '#name'+(index);
      $(name).text(item.name);
      var lvl = '#lvl'+(index);
      $(lvl).text("LVL : "+item.level);
      var damage = '#damage'+(index);
      $(damage).text("Damage : "+item.damage);
      if (item.cardInFront.length > 0) {
        var card = "#card"+index+" img";
        $(card).remove();
        item.cardInFront.forEach((item, a) => {
          var divID = "#card"+index+" #"+a;
          var img = "<img onclick=CardInFront($(this).attr('src')) src='"+item+"'>"
          $(divID).append(img);
        });
      }
      index++;
    }
  });
});
/////////////////////////////////////////////////////////////////
function Send_nick(nick) {
  socket.emit('Send_info',nick);
  console.log(nick);
}

function StartGame() {
  socket.emit('start_game')
}

function GetDoor() {
  socket.emit('get_door')
}

function GetGold() {
  socket.emit('get_gold')
}

function UpLVL() {
  socket.emit('up_lvl')
}

function UpDamage() {
  socket.emit('up_damage')
}

function DownLVL() {
socket.emit('down_lvl')
}

function DownDamage() {
socket.emit('down_damage')
}

function CardInFront(src_) {
  socket.emit('card_in_front',src_);
  }

function Kub() {
  socket.emit('kub');
}

function KikDoor() {
  socket.emit('kik_door')
}
