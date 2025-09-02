input.onButtonPressed(Button.A, function () {
    robotbit.Servo(robotbit.Servos.S1, 180)
    robotbit.Servo(robotbit.Servos.S3, 180)
})
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(robotbit.Servos.S2, 180)
    robotbit.Servo(robotbit.Servos.S4, 180)
})
robotbit.Servo(robotbit.Servos.S1, 90)
robotbit.Servo(robotbit.Servos.S2, 90)
robotbit.Servo(robotbit.Servos.S3, 90)
robotbit.Servo(robotbit.Servos.S4, 90)
