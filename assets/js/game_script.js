function _0xb6ed(_0x27fd96,_0x125fcc){var _0x4dc0a8=_0x4dc0();return _0xb6ed=function(_0xb6edee,_0x787e1b){_0xb6edee=_0xb6edee-0x102;var _0x392027=_0x4dc0a8[_0xb6edee];return _0x392027;},_0xb6ed(_0x27fd96,_0x125fcc);}var _0x543edb=_0xb6ed;function _0x4dc0(){var _0x2f64bc=['pop','6FeLMHQ','./assets/audio/pop.mp3','206234agJCfo','280HRjDPI','removeChild','style','innerText','3004892sClsfB','px;','width:','click','display','none','You_lost','createElement','undo','7844274ZFXztj','2382440HRzUen','2450127FvnioL','push','Play\x20Again?','./assets/audio/game_over.mp3','633414bRlkVa','3671795rjonxn','getElementById','play','Try_again','block','You_won','./assets/audio/yay.mp3','appendChild'];_0x4dc0=function(){return _0x2f64bc;};return _0x4dc0();}(function(_0x40d377,_0xe6e4d3){var _0x7e4e6b=_0xb6ed,_0x3e4339=_0x40d377();while(!![]){try{var _0x30e7bc=parseInt(_0x7e4e6b(0x10b))/0x1+-parseInt(_0x7e4e6b(0x106))/0x2+parseInt(_0x7e4e6b(0x107))/0x3+-parseInt(_0x7e4e6b(0x11c))/0x4+-parseInt(_0x7e4e6b(0x10c))/0x5*(parseInt(_0x7e4e6b(0x115))/0x6)+parseInt(_0x7e4e6b(0x117))/0x7*(parseInt(_0x7e4e6b(0x118))/0x8)+parseInt(_0x7e4e6b(0x105))/0x9;if(_0x30e7bc===_0xe6e4d3)break;else _0x3e4339['push'](_0x3e4339['shift']());}catch(_0x3bb32b){_0x3e4339['push'](_0x3e4339['shift']());}}}(_0x4dc0,0xa50ed));var controls_frame=document[_0x543edb(0x10d)]('controls_frame'),lives_count=document[_0x543edb(0x10d)]('lives_count'),build=document['getElementById']('build'),undo=document[_0x543edb(0x10d)](_0x543edb(0x104)),game_frame=document['getElementById']('game_frame'),try_again=document['getElementById'](_0x543edb(0x10f)),you_lost=document[_0x543edb(0x10d)](_0x543edb(0x102)),you_won=document[_0x543edb(0x10d)](_0x543edb(0x111)),old_number=[],block_number=0x0,p,undo_attempts=0x5,lost=![],won=![],max=0x78,min=0x14;lives_count[_0x543edb(0x11b)]=undo_attempts+'\x20♥',build['addEventListener'](_0x543edb(0x11f),function(){var _0x53fb5a=_0x543edb;if(lost==!![]||won==!![])return;var _0x4293a6=new Audio(_0x53fb5a(0x116));_0x4293a6[_0x53fb5a(0x10e)](),p=document[_0x53fb5a(0x103)]('p');var _0x591424=Math['floor'](Math['random']()*(max-min+0x1)+min);p[_0x53fb5a(0x11b)]=_0x591424,p['setAttribute']('style',_0x53fb5a(0x11e)+_0x591424+_0x53fb5a(0x11d)),p['setAttribute']('id','p'+block_number),game_frame[_0x53fb5a(0x113)](p),old_number[_0x53fb5a(0x108)](_0x591424),check_status();});function check_status(){var _0x5e9f61=_0x543edb;if(old_number[block_number-0x1]>=old_number[block_number++]){if(undo_attempts==0x0){you_lost[_0x5e9f61(0x11a)]['display']=_0x5e9f61(0x110),lost=!![];var _0x1f6e18=new Audio(_0x5e9f61(0x10a));_0x1f6e18[_0x5e9f61(0x10e)]();}else try_again[_0x5e9f61(0x11a)][_0x5e9f61(0x120)]=_0x5e9f61(0x110),lost=!![];return;}if(block_number==0x4&&lost==![]){you_won[_0x5e9f61(0x11a)][_0x5e9f61(0x120)]=_0x5e9f61(0x110),won=!![];var _0x5a5c95=new Audio(_0x5e9f61(0x112));_0x5a5c95[_0x5e9f61(0x10e)]();return;}}undo['addEventListener']('click',function(){var _0x458b1d=_0x543edb;if(undo_attempts==0x0){alert('You\x20have\x20no\x20more\x20undos');confirm(_0x458b1d(0x109))==!![]&&play_again();return;}block_number-0x1>=0x0&&(you_lost[_0x458b1d(0x11a)][_0x458b1d(0x120)]=_0x458b1d(0x121),you_won['style'][_0x458b1d(0x120)]=_0x458b1d(0x121),try_again['style'][_0x458b1d(0x120)]=_0x458b1d(0x121),old_number[_0x458b1d(0x114)](),game_frame[_0x458b1d(0x119)](document[_0x458b1d(0x10d)]('p'+--block_number)),undo_attempts--,lives_count[_0x458b1d(0x11b)]=undo_attempts+'\x20♥',lost=![],won=![]);});function play_again(){var _0x5c9232=_0x543edb;undo_attempts=0x5,game_frame['innerHTML']='',lost=![],won=![],old_number=[],block_number=0x0,you_lost[_0x5c9232(0x11a)][_0x5c9232(0x120)]=_0x5c9232(0x121),you_won[_0x5c9232(0x11a)][_0x5c9232(0x120)]=_0x5c9232(0x121),try_again['style'][_0x5c9232(0x120)]='none',lives_count[_0x5c9232(0x11b)]=undo_attempts+'\x20♥';return;}