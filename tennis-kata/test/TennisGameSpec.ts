/// <reference path='../typings/jasmine/jasmine.d.ts' />
/// <reference path='../references.ts' />

describe('For a TennisGame', function () {

    var g:TennisGame;

    beforeEach(function () {
        g = new TennisGameImpl();
    });

    it('when it has just started, the score should be "love-all"', function () {
        expect(g.getScore()).toBe('love-all');
    });

    it('when A player wins a game and B player none, the score should be "15-love"', function() {
        g.wonPoint(Player.A);
        expect(g.getScore()).toBe('15-love');
    });

    it('when A player wins 2 games and B player none, the score should be "30-love"', function() {
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        expect(g.getScore()).toBe('30-love');
    });

    it('when A player wins 3 games and B player none, the score should be "40-love"', function() {
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        expect(g.getScore()).toBe('40-love');
    });

    it('when A player wins 1 game and B player wins 1 game, the score should be "15-all"', function() {
        g.wonPoint(Player.A);
        g.wonPoint(Player.B);
        expect(g.getScore()).toBe('15-all');
    });

    it('when A player wins 2 games and B player wins 2 games, the score should be "30-all"', function() {
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        expect(g.getScore()).toBe('30-all');
    });

    it('when A player wins 3 games and B player wins 3 games, the score should be "deuce"', function() {
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        expect(g.getScore()).toBe('deuce');
    });

    it('when A player wins 4 games and B player wins 3 games, the score should be "Advantage A"', function() {
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        expect(g.getScore()).toBe('Advantage A');
    });

    it('when A player wins 4 games and B player wins 2 games, the score should be "Game A"', function() {
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        expect(g.getScore()).toBe('Game A');
    });

    it('when A player wins 5 games and B player wins 3 games, the score should be "Game A"', function() {
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        expect(g.getScore()).toBe('Game A');
    });
    
    it('when B player wins a game and A player none, the score should be "love-15"', function() {
        g.wonPoint(Player.B);
        expect(g.getScore()).toBe('love-15');
    });

    it('when B player wins 2 game and A player none, the score should be "love-30"', function() {
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        expect(g.getScore()).toBe('love-30');
    });

    it('when B player wins 3 game and A player none, the score should be "love-40"', function() {
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        expect(g.getScore()).toBe('love-40');
    });

    it('when B player wins 4 games and A player wins 3 games, the score should be "Advantage B"', function() {
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        expect(g.getScore()).toBe('Advantage B');
    });

    it('when B player wins 4 games and A player wins 2 games, the score should be "Game B"', function() {
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        expect(g.getScore()).toBe('Game B');
    });

    it('when B player wins 5 games and A player wins 3 games, the score should be "Game B"', function() {
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.A);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        g.wonPoint(Player.B);
        expect(g.getScore()).toBe('Game B');
    });
});

