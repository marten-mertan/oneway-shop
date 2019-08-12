function initForm(){

    $('.js-add').on('submit', e => {
        e.preventDefault();

        const $form = $(e.target);

        const params = {
            formData: $form.serializeArray(),
        };
        
        const callbackSuccess = () => {
            console.log('Товар успешно добавлен!');
        };

        const callbackError = errors => {
            console.log('Что-то пошло не так!');
        };

        window.API.onAdd(params, callbackSuccess, callbackError);
    })

    $('.js-buy').on('submit', e => {
        e.preventDefault();

        const $form = $(e.target);

        const params = {
            formData: $form.serializeArray(),
        };
        
        const callbackSuccess = (link) => {
            console.log('Заказ успешно оформлен!');
            document.location.href = link;
        };

        const callbackError = errors => {
            console.log('Что-то пошло не так!');
        };

        window.API.onBuy(params, callbackSuccess, callbackError);
    })
}

export default initForm;