//Вытягивание необходимых элементов

const placeBtn = document.querySelector("[data-place-btn]")
const placeInput = document.querySelector("[data-place-input]")
const main = document.querySelector("[data-main]")
const placeReport = document.querySelector("[data-place-report]")

//Создание инпута

const inputNumber = document.createElement("input")
inputNumber.setAttribute("type", 'number')

//Создание кнопки отправки

const SendBtn = document.createElement("button")
SendBtn.textContent = "Отправить"
SendBtn.classList.add("send_btn","base__btn")

//Создание кнопки перезагрузки

const TryBtn = document.createElement("button")
TryBtn.classList.add("base__btn")

//Создание reportText
const reportText = document.createElement("p")

//Создание кнопки Start
const StartBtn = document.createElement("button")


//Отрисовка кнопки Start и генерация числа

function StartRender(){
    const Hidden= Math.floor(Math.random() * 10) + 1
    StartBtn.textContent = "НАЧАТЬ"
    StartBtn.classList.add("base__btn", "start__btn")
    placeBtn.append(StartBtn)
    main.style.backgroundColor =  '#DFDDEF';

    return Hidden
}

//Поведение страницы при выйгрыше

function FinishWin(){
    reportText.textContent = 'ВЫ - победили!'
    TryBtn.textContent = "Сыграть еще раз"
    TryBtn.classList.add("win__btn")
    placeBtn.append(TryBtn)
    main.style.background = "#DDEFE2"
    placeReport.append(reportText)

}

//Поведение страницы при проигрыше

function FinishLose(){
    reportText.textContent = 'УВЫ, вы - проиграли!'
    TryBtn.textContent = "Попробовать еще раз"
    TryBtn.classList.add("lose__btn")
    placeBtn.append(TryBtn)
    main.style.background = "#EFDDDD"
    placeReport.append(reportText)

}

function MainGame(StartBtn, SendBtn, TryBtn){
    //Вызываем начальный render
    StartRender()
    const Hidden = StartRender();

    //Переход на стадию угадывания числа
    StartBtn.addEventListener("click", function(){
        StartBtn.remove()
        placeInput.append(inputNumber)
        placeBtn.append(SendBtn)
    })

    //Определение выйгрыша, либо проигрыша
   SendBtn.addEventListener("click", () => {
        SendBtn.remove()
        inputNumber.remove()
        if (Number(inputNumber.value) === Hidden) {
            FinishWin()
        }
        else{
            FinishLose()
        }
       })

    //Перезапуск игры
    TryBtn.addEventListener("click", function(){
        window.location.reload()
    })

}
MainGame(StartBtn, SendBtn, TryBtn)
