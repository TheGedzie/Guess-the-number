const placeBtn = document.querySelector("[data-place-btn]")
const placeInput = document.querySelector("[data-place-input]")
const main = document.querySelector("[data-main]")
const placeReport = document.querySelector("[data-place-report]")





const inputNumber = document.createElement("input")
inputNumber.setAttribute("type", 'number')

const SendBtn = document.createElement("button")
SendBtn.textContent = "Отправить"
SendBtn.classList.add("send_btn","base__btn")

const TryBtn = document.createElement("button")
TryBtn.classList.add("base__btn")


const winText = document.createElement("p")
const loseText = document.createElement("p")


const StartBtn = document.createElement("button")

function StartRender(){

    winText.textContent = 'ВЫ - победили!'
    loseText.textContent = 'УВЫ, вы - проиграли!'
    //Отрисовка кнопки Start и генерация числа

    const Hidden = Math.floor(Math.random() * 10) + 1;
    StartBtn.textContent = "НАЧАТЬ"
    StartBtn.classList.add("base__btn", "start__btn")
    placeBtn.append(StartBtn)
    main.style.backgroundColor =  '#DFDDEF';

    return Hidden
}

function FinishWin(){
    TryBtn.textContent = "Сыграть еще раз"
    TryBtn.classList.add("send_btn", "win__btn")
    placeBtn.append(TryBtn)
    main.style.background = "#DDEFE2"
    placeReport.append(winText)

    return winText

}

function FinishLose(){
    TryBtn.textContent = "Попробовать еще раз"
    TryBtn.classList.add("send_btn", "lose__btn")
    placeBtn.append(TryBtn)
    main.style.background = "#EFDDDD"
    placeReport.append(loseText)

    return loseText

}

function MainGame(StartBtn, SendBtn, TryBtn){
    StartRender()

    const Hidden = StartRender();
    console.log(Hidden)
    StartBtn.addEventListener("click", function(){
        StartBtn.remove()
        placeInput.append(inputNumber)
        placeBtn.append(SendBtn)
    })

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

    TryBtn.addEventListener("click", function(){

        placeReport.remove()
        TryBtn.remove()
        StartRender()

    })

}
MainGame(StartBtn, SendBtn, TryBtn)

