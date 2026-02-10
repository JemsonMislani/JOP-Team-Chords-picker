export const churchSongs = [
{
    id: 1,
    title: 'To my knees',
    keyOf: 'C',
    songAndChords:
    `
    Key: C
    
    
    [Intro]
    
    C | F | Am G C/E | F |
    
    
    [Verse 1]
    
        C
    In the Saviour's love
        F
    I find joy beyond compare
            Am           G   C/E  F
    Endless peace covers all of   me
            C
    When You breathe within
            F
    You turn winter into spring
            Am            G   C/E  F
    Grace dissolves every fear in   me
 
    `
},
{
    id: 2,
    title: 'Oceans',
    keyOf: 'D',
    songAndChords:
    `
    Oceans - Hillsong United
    Capo 7
    
    [Intro]
    Em     D/F# G      D      C
    
    [Verse 1]
    Em                  D/F#    G
    You call me out upon the waters
            D                  C
    The great unknown where feet may fail
    Em                      D/F#   G
    And there I find you in the mystery
        D                   C
    In oceans deep, my faith will stand
`
}
];

localStorage.setItem('lists', JSON.stringify(churchSongs));
console.log(churchSongs);