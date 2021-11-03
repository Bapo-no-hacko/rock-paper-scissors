let Score_A = 0
let Score_B = 0
let Hand = 0
input.onButtonPressed(Button.A, function () {
    Score_A += 1
    if (Score_A == 3) {
        basic.showString("Player A won")
        Score_A = 0
    }
})
input.onButtonPressed(Button.B, function () {
    Score_B += 1
    if (Score_B == 3) {
        basic.showString("Player B won")
        Score_B = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    Hand = randint(0, 3)
    if (Hand == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Hand == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
