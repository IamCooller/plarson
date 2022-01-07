$('#chat_form').submit(function(e) {
    e.preventDefault();
    let searchString = $(this).find('textarea').val(); //  get the address
    const TextChat = `<div class="main__chat__content__sms tome">
    <p>${searchString}</p>
    <div class="main__chat__content-img">
        <img src="img/558f84281d3514c8ffc3af6976523e24.jpg">
    </div>
</div>`
    $('.main__chat__content').append(TextChat);
});