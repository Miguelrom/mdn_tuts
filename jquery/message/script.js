const message = $('.message');
const text = $('#text');
const sendBtn = $('#send');
const clearBtn = $('#clear');

sendBtn.click(deliverMessage);

clearBtn.click(clearField);

function deliverMessage(){
  let textValue = text.val();
  message.html(textValue);
}

function clearField(){
  message.html('');
  text.val('');
}
