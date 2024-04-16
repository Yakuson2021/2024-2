$(function () {
  // ボタンアニメーション
  $('.button-more').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });
});

$(function () {
  // ボタンアニメーション
  $('.button-more').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0,
    }, 100);
  });


   // カルーセル
   $('.carousel').slick({
     autoplay: true,
     dots: true,
     infinite: true,
     autoplaySpeed: 5000,
     arrows: true,
   });

   // 送信ボタンクリック時の処理
   $('#submit').on('click',function(event) {
     // formタグによる送信を拒否
     event.preventDefault();
     // 入力チェックをした結果をresultに格納
     let result = inputCheck();
   });
   
      // フォーカスが外れたとき（blur）にフォームの入力チェックをする
   $('#name').blur(function () {
     inputCheck();
   });
   $('#furigana').blur(function () {
     inputCheck();
   });
   $('#email').blur(function () {
     inputCheck();
   });
   $('#tel').blur(function () {
     inputCheck();
   });
   $('#message').blur(function () {
     inputCheck();
   });
   $('#agree').click(function () {
     inputCheck();
     
   });
   // お問い合わせフォームの入力チェック
   function inputCheck() {
    //   console.log('inputCheck関数の呼び出し');
    // エラーのチェック結果
    let result;
    
    // エラーメッセージのテキスト
    let message = '';
    
    // エラーがなければfalse、エラーがあればtrue
    let error = false;
    
    // お名前のチェックする「$('#name').val()」で「お名前」に入力されている文字列を取得
    if ($('#name').val() == '') {
        // エラーありの処理
        $('#name').css('background-color', '#f79999');
        // 変数errorにtrueを代入します
        error = true;
        message += 'お名前を入力してください。\n';
        
    } else {
        // エラーなしの処理
        $('#name').css('background-color', '#fafafa');
    }
    
    // フリガナのチェックする「$('#furigana').val()」で「フリガナ」に入力されている文字列を取得
    if ($('#furigana').val() == '') {
        // エラーありの処理
        $('#furigana').css('background-color', '#f79999');
        // 変数errorにtrueを代入します
        error = true;
        message += 'お名前を入力してください。\n';
        
    } else {
        // エラーなしの処理
        $('#furigana').css('background-color', '#fafafa');
    }
    
    // お問い合わせ内容のチェックする「$('#message').val()」で「お問い合わせ」に入力されている文字列を取得
    if ($('#message').val() == '') {
        // エラーありの処理
        $('#message').css('background-color', '#f79999');
        // 変数errorにtrueを代入します
        error = true;
        message += 'お名前を入力してください。\n';
        
    } else {
        // エラーなしの処理
        $('#message').css('background-color', '#fafafa');
    }
    
    // メールアドレスのチェックする「$('#email').val()」で「メールアドレス」に入力されている文字列を取得
    // 取得内容は「@が含まれていない==-1)」「.が含まれていない==-1)」「未入力」のいずれかの条件に当てはまる「||」となる
    if ($('#email').val() == '' || $('#email').val().indexOf('@')==-1 || $('#email').val().indexOf('.') ==-1){
        // エラーありの処理
        $('#email').css('background-color', '#f79999');
        // 変数errorにtrueを代入します
        error = true;
        message += 'お名前を入力してください。\n';
        
    } else {
        // エラーなしの処理
        $('#email').css('background-color', '#fafafa');
    }
    
    // 電話番号のチェック（未入力はOK、未入力でない場合は-が必要という分岐をつくる）
    if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1 ){
        // エラーありの処理
        $('#tel').css('background-color', '#f79999');
        // 変数errorにtrueを代入します
        error = true;
        message += '電話番号に「-」が含まれていません。\n';
        
    } else {
        // エラーなしの処理
        $('#tel').css('background-color', '#fafafa');
    }
    
    // 個人情報のチェックボックスのチェックの手順
    // 1.チェックボックスがチェックされているかどうかをprop('checked')メソッドで取得する（($('#agree').prop('checked')）
    // 2.prop('checked')メソッドの取得結果はtrue（チェック済み）またはfalse（未チェック）で返されるので、それをif分の条件式に利用する
    // 3.未チェックであれば変数errorにtrueを代入し、変数messageにはエラーメッセージを代入する
     if($('#agree').prop('checked') ===false){
         error = true;
         message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
     }
     
    // エラーの有無で送信ボタンを切り替え
     if (error == true) {
         $('#submit').attr('src', 'images/button-submit.png');
     } else {
         $('#submit').attr('src', 'images/button-submit-blue.png');
         
     }
     // オブジェクトでエラー判定とメッセージを返す
     result = {
       error: error,
       message: message
     }
 
     // 戻り値としてエラーがあるかどうかを返す
     return result;
   }
});
