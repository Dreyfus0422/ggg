controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 2; index++) {
        music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
    }
})
game.splash("Have Fun", "Use Joystick To Move")
let mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e 3 f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level2`)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
if (Math.percentChance(3)) {
    mySprite.setVelocity(50, 50)
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
    }
}
