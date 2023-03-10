const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        })

        close.addEventListener('click', () => {
            closeModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal); 
            }
        });
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 6000);
};

export default modals;