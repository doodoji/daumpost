daumpost
========

Daum 우편번호 서비스 jQuery Plug-in

자세한 설명은 [공식 가이드 문서](http://postcode.map.daum.net/guide)에서 확인하세요.
Thx. Daum. X)

## open형
### 기본
```
$.daumpost().show();
``` 

### 모든 옵션
```
$.daumpost()
  .width(400)
  .height(800)
  .oncomplete(function( data ) { console.log( 'complete', data ); })
  .show();
```  
  또는
``` 
$.daumpost({
  width: 400,
  height: 800,
  oncomplete: function ( data ) { console.log( 'complete', data ) }
}).show();
```
  
## embed형
### 기본
```
$('#embed').daumpost().show();
``` 

### 모든 옵션
```
$('#embed').daumpost()
  .width(400)
  .height(800)
  .onresize(function ( size ) { console.log( 'resize', size ); })
  .oncomplete(function( data ) { console.log( 'complete', data ); })
  .show();
```    
  또는
```
$('#embed').daumpost({
  width: 400,
  height: 800,
  onresize: function ( size ) { console.log( 'resize', size ); },
  oncomplete: function ( data ) { console.log( 'complete', data ) }
}).show();
```  
