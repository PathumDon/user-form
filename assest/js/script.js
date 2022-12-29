$(document).ready(function(){
    
    // $('#btn').click(function(){
    //     $('.para').text("Helo World")

    //     // $('.squar').fadeIn(1000).fadeOut(1000);
    //     // $('.squar').slideDown(1000).slideUp(1000);
    //      // $('.squar').slideTogle(1000);
    //     //  $('.squar').show();
    //     $('.squar').animate({
    //         opacity: '0.5',
    //         height: '250px',
    //         width: '250px'
    //       },1000);
    //       $('.squar').animate({
    //         opacity: '1',
    //         height: '100px',
    //         width: '100px'
    //       },1000);
    // })
    let validationPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    $('#btnSignUp').click(function(){
      $('.form-title').text("Sign Up");
      $('.form-log-in').slideUp(1000);
      $('.form-sign-up-page1').fadeIn(1000);
      
    })

    $('#btnNext0').click(function(){

      if($('#name').val() ==   '' || $('#email1').val() == '' || $('#password1').val() == '' || $('#password2').val() == '' ){
        showFormAlert('all details are mandatory')
      }
      else if($('#password1').val() != $('#password2').val()){
        showFormAlert('password not match')

      }
      else if(validationPattern.test($('#email1').val())!= true){

        showFormAlert('invalid email')

      }
      else{
        $('.form-sign-up-page1').slideUp(1000);
        $('.form-sign-up-page2').fadeIn(1000);  
      }
  
    })

    $('#btnNext1').click(function(){
      $('.form-sign-up-page2').slideUp(1000);
      $('.form-sign-up-page3').fadeIn(1000);
    })

    $('.show-pass').click(function(){
      $('.show-pass').hide();
      $('.hide-pass').show();
      $('#password').attr('type','text');
    })

    $('.hide-pass').click(function(){
      $('.show-pass').show();
      $('.hide-pass').hide();
      $('#password').attr('type','password');
    })

    function showFormAlert(message, type){
      $('#formAlert').text(message).show(400)
      setTimeout(function(){
        $('#formAlert').hide(400)
      },3000)

      if(type != undefined){
        $('#formAlert').removeClass('alert-danger')
        $('#formAlert').addClass('alert-success')
      }
      
    };
    $('#email').change(function(event){
      // let validationPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if(validationPattern.test($(this).val())){
        
      }
      else{
        showFormAlert('invalid email')
      }
    })
    // $('#email1').change(function(event){
    //   // let validationPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    //   if(validationPattern.test($(this).val())){
        
    //   }
    //   else{
    //     showFormAlert('invalid email')
    //   }
    // })

    $('#btnSignIn').click(function(){


      if(($('#email').val().length <1)||($('#password').val().length <1)){
        showFormAlert('Please enter valid email and password')
      }else if($('#password').val()!= "Dubai"){
           
        showFormAlert('invalid user name or password');
      }
      else{

      }
    })

    const city = {
      LK : ['Colombo', 'Nigambo', 'Gampaha'],
      IN : ['Mumbai', 'Kolkata', 'Kerala'],
      UAE : ['Dubai', 'Abu Dhabi', 'Sharjah']
    }

    const area = {
      Colombo : ['Piliyandala', 'Pannipitiya', 'Maharagama'],
      Nigambo : ['Nigambo','Halawatha','Wattala'],
      Gampaha : ['Rathdoluwa','Seeduwa','Jaela'],
      Mumbai : ['ABC','DEF','GHE'],
      Kolkata : ['IJK','LMN','OPQ'],
      Dubai : ['DSO','IC','Deira']

    }

    $('#country').change(function () {
      $('#city').find('option').remove().end().append('<option selected>Select state</option>')
      let country = $('#country').val()

      for (let i = 0; i < city[country].length; i++){
        console.log(city[country][i])
        $('#city').append('<option value="' + city[country][i] +'">' + city[country][i]+'</option>')
      }
    })

    $('#city').change(function () {
      $('#area').find('option').remove().end().append('<option selected>Select area</option>')
      let city = $('#city').val()

      for(let i = 0; i < area[city].length; i++){
        $('#area').append('<option value="">' + area[city][i] + '</option>')
      }
    })


});