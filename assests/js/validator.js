//   FORM VALIDATOR

function Validator(options){

    function getParentElemen(element,selector){

        // lặp nếu element có thẻ cha thì lặp nếu thẻ cha đó = selector thì return và dừng vòng lặp
        // nếu không thì gán element bằng cha của element cấp 1 
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    var selectorRules = {};
    // hàm kiểm tra validation
    function validate(inputElement,rule){
        var errorElement = getParentElemen(inputElement,options.formGroupSelector).querySelector(options.errorSelector);
        // kiểm tra có valid hay không 
        // value: input element.value
        //test function rule.test hàm cần chuyền vào value
        // var errorMessage = rule.test(inputElement.value);
        // nếu mỗi cái có 1 rule

        // nếu mỗi cái trải qua nhiều rules
        var errorMessage;
        // lấy ra rule của chính cái input ta click vào rồi blur ra ngoài
        var rules = selectorRules[rule.selector];

        // lặp qua từng rule và check 
        // nếu có lỗi thì dừng việc kiểm tra
        for(let i=0; i<rules.length; i++) {
            // xử lí checkbox và radio vì 2 cái đó đều có value 
            switch(inputElement.type){
                case 'radio': 
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            
            if(errorMessage){
                break;
            }
        }
        if(errorMessage)
        {
            errorElement.innerText = errorMessage;
            getParentElemen(inputElement,options.formGroupSelector).classList.add("invalid");
        }else{
            errorElement.innerText = "";
            getParentElemen(inputElement,options.formGroupSelector).classList.remove("invalid");
        }

        return !errorMessage;
    }


    var formElement = document.querySelector(options.form);
    var selectorRules = {};
    if(formElement){

        formElement.onsubmit = function (e) {
            e.preventDefault();

            // thực hiện lặp qua từng rule và validate luôn
            var isFormValid = true;
            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement,rule);
                if(!isValid){
                    isFormValid=false;
                }
            });

            if(isFormValid){

                //Trường hợp submit với JS
                if(typeof options.onSubmit === 'function'){
                    
                    var enableInputs = formElement.querySelectorAll('[name]:not([disable])');
                    
                    var formValues = Array.from(enableInputs).reduce(function(value,input){
                        
                        switch(input.type){
                            case 'radio':
                                if(!input.matches(':checked')){
                                    value[input.name] = '';
                                    return value;
                                }
                                value[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;  
                            case 'checkbox':
                                if(!input.matches(':checked')) {
                                    value[input.name] = '';
                                    return value;
                                }

                                if(!Array.isArray(value[input.name])){
                                    value[input.name] = [];
                                }
                                value[input.name].push(input.name);
                                break;
                            case 'file':
                                value[input.name] = input.files;
                                break;
                            default:
                                value[input.name]  = input.value;
                        }

                        return value;
                    },{});
                    options.onSubmit(options.form,formValues);
                }
                // Trường hợp submit với hành vi mặc địnhk
                else{
                    // 
                    formElement.submit();
                }
            }
        }
        // lặp qua mỗi rule rồi xử lí
        options.rules.forEach(function(rule){

            //lưu lại các rules cho mỗi input
            //ban đầu là undefined 
            if(Array.isArray(selectorRules[rule.selector])){
                //nếu là array thì push phần tử rule.test vào array
                // chắc chắn có 2 test
                selectorRules[rule.selector].push(rule.test);
            }else{
                // nếu không phải mảng thì gán cho nó là mảng
                selectorRules[rule.selector]=[rule.test];
            }
            

            var inputElements = formElement.querySelectorAll(rule.selector);
            
            Array.from(inputElements).forEach(function(inputElement) {
                // blur ra khỏi input
                inputElement.onblur = function (){
                    
                    validate(inputElement,rule);
                }
    
                // xử lí trường hợp mỗi khi người dùng nhập vào input thì không có error
                inputElement.oninput = function (){
                    var errorElement = getParentElemen(inputElement,options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = "";
                    getParentElemen(inputElement,options.formGroupSelector).classList.remove("invalid");
                }
            });
        });
    }
}

// ĐỊnh nghĩa rules
// Nguyên tắc các rule
// 1. khi có lỗi => trả lại message lỗi 
//2. không có lỗi=> không trả lại gì hết 

Validator.isRequired = function (selector,message) {
    return {
        selector: selector,
        test: function (value) { 
            return value ? undefined: message || 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function (selector,message) {
    return{
        selector: selector,
        test: function (value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)? undefined : message|| "Trường này phải là email";
        }
    };
}

Validator.minLength = function (selector, min, message){
    return {
        selector: selector,
        test: function (value){
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}  

Validator.isConfirmed = function (selector,getConfirmValue,message){
    return {
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập lại không hợp lệ';
        }
    }
}