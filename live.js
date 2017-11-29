window.onload = function () {
  $(function () {
    $('html').css('overflow', 'hidden')
    $('span.v-top:contains(登录)').click()
    $('.t:contains(注册)').remove()
  })
}