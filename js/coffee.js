const buyBtn = document.querySelector('.js-buy-btn')
        const modal = document.querySelector('.js-modal')
        const modalContainer = document.querySelector('.js-modal-container')
        const modalClose = document.querySelector('.js-modal-close')
        function showBuyTea () {
            modal.classList.add('open')
        }

        function hideBuyTea () {
            modal.classList.remove('open')
        }

        buyBtn.addEventListener('click', showBuyTea)

        modalClose.addEventListener('click', hideBuyTea)

        modal.addEventListener('click', hideBuyTea)

        modalContainer.addEventListener('click', function (event) {
            event.stopPropagation()
        })

